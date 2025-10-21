import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { auth } from "@/lib/auth/server";
import { getPricingConfig } from "@/lib/pricing/i18n-config";
import { type PricingPeriod } from "@/lib/pricing/types";
import { newCreemClient } from "@/lib/payments/creem";
import { OrderService } from "@/lib/orders/service";

type Locale = Parameters<typeof getPricingConfig>[0];

function respErr(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

function respData<T>(data: T, status = 200) {
  return NextResponse.json({ ok: true, data }, { status });
}

export async function POST(req: NextRequest) {
  try {
    const { product_id }: { product_id?: string } = await req.json();

    const locale = ("en") as Locale;

    let cancel_url = `${process.env.NEXT_PUBLIC_PAY_CANCEL_URL || process.env.NEXT_PUBLIC_WEB_URL}`;
    if (cancel_url && cancel_url.startsWith("/")) {
      cancel_url = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}${cancel_url}`;
    }

    if (!product_id) {
      return respErr("invalid params: product_id");
    }

    // 使用当前系统的定价配置校验 plan 是否存在
    const pricingConfig = getPricingConfig(locale);
    const plan = pricingConfig.plans.find((p) => p.id === product_id);
    if (!plan) {
      return respErr("invalid product_id");
    }

    // 从会话中获取用户（better-auth）
    const session = await auth.api.getSession({ headers: req.headers });
    const userEmail = session?.user?.email;
    const userId = session?.user?.id;
    if (!userEmail || !userId) {
      return respErr("no auth, please sign-in", 401);
    }

    // 生成请求 ID（替代原订单号）
    const requestId = randomUUID();

    // 仅在 creem 时创建会话（当前仅支持 creem）
    const provider = process.env.PAY_PROVIDER || "creem";
    if (provider !== "creem") {
      return respErr("unsupported provider");
    }

    // 获取价格信息（这里需要根据period获取，暂时使用one-time）
    const period: PricingPeriod = "one-time";
    const pricing = plan.pricing[period];
    
    // 创建订单
    const order = await OrderService.createOrder({
      userId,
      productId: product_id,
      productName: plan.name,
      productType: period === "one-time" ? "one_time" : "subscription",
      amount: pricing.price.toString(),
      currency: pricing.currency,
      paymentProvider: provider,
      customerEmail: userEmail,
      metadata: {
        locale,
        project: process.env.NEXT_PUBLIC_PROJECT_NAME || "",
        plan_id: plan.id,
        plan_period: period,
      },
    });

    console.log('订单创建成功:', {
      orderId: order.id,
      orderNumber: order.orderNumber,
      productId: product_id,
      amount: pricing.price,
    });

    const param: {
      productKey: string;
      locale: string;
      requestId: string;
      customerEmail: string;
      metadata: Record<string, string>;
    } = {
      productKey: product_id,
      locale,
      requestId,
      customerEmail: userEmail,
      metadata: {
        project: process.env.NEXT_PUBLIC_PROJECT_NAME || "",
        product_name: plan.name,
        user_email: userEmail,
        order_id: order.id,
        order_number: order.orderNumber,
      },
    }
    console.log('creemCheckout', param)
    const result = await creemCheckout(param);

    return respData(result);
  } catch (e: unknown) {
    console.log("checkout failed: ", e);
    const errorMessage = e instanceof Error ? e.message : String(e);
    return respErr("checkout failed: " + errorMessage);
  }
}


async function creemCheckout({
  productKey,
  locale,
  requestId,
  customerEmail,
  metadata,
}: {
  productKey: string;
  locale: string;
  requestId: string;
  customerEmail: string;
  metadata?: Record<string, unknown>;
}) {
  const client = newCreemClient();

  let products: Record<string, string> = {};
  const envProducts = process.env.CREEM_PRODUCTS;
  if (envProducts) {
    if (typeof envProducts === "string") {
      products = JSON.parse(envProducts) as Record<string, string>;
    } else {
      products = envProducts;
    }
  }
  console.log("creem products: ", products);

  const providerProductId = products[productKey || ""] || "";
  if (!providerProductId) {
    throw new Error("invalid product_id mapping");
  }

    const success_url = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}/payment/success`;
    const cancel_url = `${process.env.NEXT_PUBLIC_WEB_URL}/${locale}/payment/failed`;
  const createCheckoutRequest = {
    productId: providerProductId,
    requestId,
    customer: {
      email: customerEmail,
    },
    successUrl: success_url,
    cancelUrl: cancel_url,
    metadata: {
      locale,
      ...(metadata || {}),
    },
  }
  console.log('createCheckoutRequest', createCheckoutRequest)
  const result = await client.creem().createCheckout({
    xApiKey: client.apiKey(),
    createCheckoutRequest: createCheckoutRequest
  });

  // 更新订单的支付请求ID
  const orderId = metadata?.order_id as string;
  if (orderId) {
    await OrderService.updateOrderStatus(orderId, "pending", {
      paymentRequestId: requestId,
      paymentSessionId: result.id,
    });
    console.log('订单支付信息更新:', {
      orderId,
      paymentRequestId: requestId,
      paymentSessionId: result.id,
    });
  }

  return {
    request_id: requestId,
    session_id: result.id,
    checkout_url: result.checkoutUrl,
    order_id: orderId,
  };
}
