/**
 * 订单流程测试脚本
 * 
 * 这个脚本演示了完整的订单流程：
 * 1. 创建订单
 * 2. 支付处理
 * 3. 回调更新订单状态
 * 4. 查询订单状态
 */

import { OrderService } from "@/lib/orders/service";

// 模拟测试数据
const testOrderData = {
  userId: "test-user-123",
  productId: "pro-plan",
  productName: "专业版计划",
  productType: "one_time" as const,
  amount: "99.00",
  currency: "USD",
  paymentProvider: "creem",
  customerEmail: "test@example.com",
  metadata: {
    locale: "zh",
    project: "shipbase",
    plan_id: "pro-plan",
    plan_period: "one-time",
  },
};

async function testOrderFlow() {
  console.log("🚀 开始测试订单流程...\n");

  try {
    // 1. 创建订单
    console.log("1️⃣ 创建订单...");
    const order = await OrderService.createOrder(testOrderData);
    console.log("✅ 订单创建成功:", {
      orderId: order.id,
      orderNumber: order.orderNumber,
      status: order.status,
    });

    // 2. 模拟支付成功
    console.log("\n2️⃣ 模拟支付成功...");
    const paymentRequestId = "test-payment-request-123";
    
    // 先更新订单的支付请求ID
    await OrderService.updateOrderStatus(order.id, "pending", {
      paymentRequestId,
    });
    
    // 然后处理支付成功
    const paidOrder = await OrderService.handlePaymentSuccess(paymentRequestId);
    console.log("✅ 支付成功处理完成:", {
      orderId: paidOrder?.id,
      status: paidOrder?.status,
      paidAt: paidOrder?.paidAt,
    });

    // 3. 查询订单详情
    console.log("\n3️⃣ 查询订单详情...");
    const orderDetails = await OrderService.getOrderWithItems(order.id);
    console.log("✅ 订单详情:", {
      order: orderDetails.order,
      itemsCount: orderDetails.items.length,
    });

    // 4. 查询用户订单列表
    console.log("\n4️⃣ 查询用户订单列表...");
    const userOrders = await OrderService.getUserOrders(testOrderData.userId);
    console.log("✅ 用户订单列表:", {
      totalOrders: userOrders.length,
      orders: userOrders.map(o => ({
        orderNumber: o.orderNumber,
        status: o.status,
        amount: o.amount,
      })),
    });

    console.log("\n🎉 订单流程测试完成！");

  } catch (error) {
    console.error("❌ 测试失败:", error);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  testOrderFlow();
}

export { testOrderFlow };
