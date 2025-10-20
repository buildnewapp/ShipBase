import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { auth } from "@/lib/auth/server";
import { getPricingConfig } from "@/lib/pricing/i18n-config";
import { type PricingPeriod } from "@/lib/pricing/types";
import { newCreemClient } from "@/lib/payments/creem";

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
    const pricing = getPricingConfig(locale);
    const plan = pricing.plans.find((p) => p.id === product_id);
    if (!plan) {
      return respErr("invalid product_id");
    }

    // 从会话中获取用户（better-auth）
    const session = await auth.api.getSession({ headers: req.headers });
    const userEmail = session?.user?.email;
    if (!userEmail) {
      return respErr("no auth, please sign-in", 401);
    }

    // 生成请求 ID（替代原订单号）
    const requestId = randomUUID();

    // 仅在 creem 时创建会话（当前仅支持 creem）
    const provider = process.env.PAY_PROVIDER || "creem";
    if (provider !== "creem") {
      return respErr("unsupported provider");
    }

    const param : any = {
      productKey: product_id,
      locale,
      cancel_url,
      requestId,
      customerEmail: userEmail,
      metadata: {
        project: process.env.NEXT_PUBLIC_PROJECT_NAME || "",
        product_name: plan.name,
        user_email: userEmail,
      },
    }
    console.log('creemCheckout', param)
    const result = await creemCheckout(param);

    return respData(result);
  } catch (e:any) {
    console.log("checkout failed: ", e);
    return respErr("checkout failed: " + (e?.message || String(e)));
  }
}


async function creemCheckout({
  productKey,
  locale,
  cancel_url,
  requestId,
  customerEmail,
  metadata,
}: {
  productKey: string;
  locale: string;
  cancel_url: string;
  requestId: string;
  customerEmail: string;
  metadata?: Record<string, unknown>;
}) {
  const client = newCreemClient();

  let products = (process.env.CREEM_PRODUCTS as any) || {};
  if (typeof products === "string") {
    products = JSON.parse(products);
  }
  console.log("creem products: ", products);

  const providerProductId = products[productKey || ""] || "";
  if (!providerProductId) {
    throw new Error("invalid product_id mapping");
  }

  const success_url = `${process.env.NEXT_PUBLIC_WEB_URL}/api/pay/callback/creem?locale=${locale}`;
  const createCheckoutRequest = {
    productId: providerProductId,
    requestId,
    customer: {
      email: customerEmail,
    },
    successUrl: success_url,
    metadata: {
      ...(metadata || {}),
    },
  }
  console.log('createCheckoutRequest', createCheckoutRequest)
  const result = await client.creem().createCheckout({
    xApiKey: client.apiKey(),
    createCheckoutRequest: createCheckoutRequest
  });

  return {
    request_id: requestId,
    session_id: result.id,
    checkout_url: result.checkoutUrl,
  };
}
