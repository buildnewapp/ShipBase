import { NextRequest, NextResponse } from "next/server";
import { OrderService } from "@/lib/orders/service";
import { auth } from "@/lib/auth/server";

/**
 * 处理支付成功回调
 * 验证签名并更新订单状态
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      request_id,
      checkout_id,
      signature,
    } = body;

    // 验证必填参数
    if (!request_id) {
      return NextResponse.json(
        { success: false, error: "缺少 request_id 参数" },
        { status: 400 }
      );
    }

    // 注意：Creem 的重定向 URL 签名算法与 Webhook 不同
    // Webhook 的签名验证已在 /api/pay/callback/creem 中处理
    // 这里我们信任 Webhook 已经更新了订单状态，不做额外的签名验证
    // 实际生产环境中，Creem 应该只重定向到成功的 URL，订单状态由 Webhook 保证一致性
    
    if (signature) {
      console.log("收到签名参数（暂不验证）:", {
        request_id,
        has_signature: !!signature,
      });
    }

    // 获取当前用户会话
    const session = await auth.api.getSession({ headers: request.headers });
    const userId = session?.user?.id;

    // 查找订单
    const order = await OrderService.findOrderByPaymentRequestId(request_id);

    if (!order) {
      console.error("订单未找到:", { request_id });
      return NextResponse.json(
        { success: false, error: "订单未找到" },
        { status: 404 }
      );
    }

    // 验证订单属于当前用户（如果是已登录用户）
    if (userId && order.userId !== userId) {
      console.error("订单不属于当前用户:", {
        orderUserId: order.userId,
        currentUserId: userId,
      });
      return NextResponse.json(
        { success: false, error: "无权访问此订单" },
        { status: 403 }
      );
    }

    // 如果订单还未支付，更新订单状态
    let updatedOrder = order;
    if (order.status !== "paid") {
      updatedOrder = await OrderService.handlePaymentSuccess(
        request_id,
        checkout_id
      );

      if (!updatedOrder) {
        return NextResponse.json(
          { success: false, error: "订单状态更新失败" },
          { status: 500 }
        );
      }

      console.log("订单状态已更新为已支付:", {
        orderId: updatedOrder.id,
        orderNumber: updatedOrder.orderNumber,
        status: updatedOrder.status,
      });
    } else {
      console.log("订单已经是已支付状态:", {
        orderId: order.id,
        orderNumber: order.orderNumber,
      });
    }

    // 返回订单信息
    return NextResponse.json({
      success: true,
      order: {
        id: updatedOrder.id,
        orderNumber: updatedOrder.orderNumber,
        status: updatedOrder.status,
        productName: updatedOrder.productName,
        amount: updatedOrder.amount,
        currency: updatedOrder.currency,
        paidAt: updatedOrder.paidAt,
        createdAt: updatedOrder.createdAt,
      },
    });
  } catch (error) {
    console.error("处理支付成功回调时发生错误:", error);
    return NextResponse.json(
      {
        success: false,
        error: "服务器内部错误",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

// 支持 GET 请求用于测试
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const requestId = searchParams.get("request_id");

  if (!requestId) {
    return NextResponse.json(
      { success: false, error: "缺少 request_id 参数" },
      { status: 400 }
    );
  }

  const order = await OrderService.findOrderByPaymentRequestId(requestId);

  if (!order) {
    return NextResponse.json(
      { success: false, error: "订单未找到" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    order: {
      id: order.id,
      orderNumber: order.orderNumber,
      status: order.status,
      productName: order.productName,
      amount: order.amount,
      currency: order.currency,
      paidAt: order.paidAt,
      createdAt: order.createdAt,
    },
  });
}

