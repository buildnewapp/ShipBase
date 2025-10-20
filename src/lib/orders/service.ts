import { db } from "@/lib/db/client";
import { orders, orderItems, type Order, type NewOrder, type OrderItem, type NewOrderItem, type OrderStatus } from "@/lib/db/schema/orders";
import { eq, desc } from "drizzle-orm";
import { randomUUID } from "crypto";

export class OrderService {
  /**
   * 创建新订单
   */
  static async createOrder({
    userId,
    productId,
    productName,
    productType,
    amount,
    currency = "USD",
    paymentProvider,
    customerEmail,
    metadata = {},
  }: {
    userId: string;
    productId: string;
    productName: string;
    productType: "one_time" | "subscription";
    amount: string;
    currency?: string;
    paymentProvider: string;
    customerEmail: string;
    metadata?: Record<string, unknown>;
  }): Promise<Order> {
    const orderId = randomUUID();
    const orderNumber = this.generateOrderNumber();
    
    const newOrder: NewOrder = {
      id: orderId,
      userId,
      orderNumber,
      status: "pending",
      productId,
      productName,
      productType,
      amount,
      currency,
      paymentProvider,
      customerEmail,
      metadata,
    };

    const [order] = await db.insert(orders).values(newOrder).returning();
    return order;
  }

  /**
   * 更新订单状态
   */
  static async updateOrderStatus(
    orderId: string,
    status: OrderStatus,
    additionalData?: {
      paymentRequestId?: string;
      paymentSessionId?: string;
      paidAt?: Date;
      cancelledAt?: Date;
    }
  ): Promise<Order | null> {
    const updateData: Partial<NewOrder> = {
      status,
      updatedAt: new Date(),
    };

    if (additionalData) {
      if (additionalData.paymentRequestId) {
        updateData.paymentRequestId = additionalData.paymentRequestId;
      }
      if (additionalData.paymentSessionId) {
        updateData.paymentSessionId = additionalData.paymentSessionId;
      }
      if (additionalData.paidAt) {
        updateData.paidAt = additionalData.paidAt;
      }
      if (additionalData.cancelledAt) {
        updateData.cancelledAt = additionalData.cancelledAt;
      }
    }

    const [order] = await db
      .update(orders)
      .set(updateData)
      .where(eq(orders.id, orderId))
      .returning();

    return order || null;
  }

  /**
   * 根据支付请求ID查找订单
   */
  static async findOrderByPaymentRequestId(paymentRequestId: string): Promise<Order | null> {
    const [order] = await db
      .select()
      .from(orders)
      .where(eq(orders.paymentRequestId, paymentRequestId))
      .limit(1);

    return order || null;
  }

  /**
   * 根据订单号查找订单
   */
  static async findOrderByOrderNumber(orderNumber: string): Promise<Order | null> {
    const [order] = await db
      .select()
      .from(orders)
      .where(eq(orders.orderNumber, orderNumber))
      .limit(1);

    return order || null;
  }

  /**
   * 获取用户的订单列表
   */
  static async getUserOrders(userId: string, limit = 10, offset = 0): Promise<Order[]> {
    return await db
      .select()
      .from(orders)
      .where(eq(orders.userId, userId))
      .orderBy(desc(orders.createdAt))
      .limit(limit)
      .offset(offset);
  }

  /**
   * 获取订单详情（包含订单项）
   */
  static async getOrderWithItems(orderId: string): Promise<{
    order: Order | null;
    items: OrderItem[];
  }> {
    const order = await db
      .select()
      .from(orders)
      .where(eq(orders.id, orderId))
      .limit(1);

    const items = await db
      .select()
      .from(orderItems)
      .where(eq(orderItems.orderId, orderId));

    return {
      order: order[0] || null,
      items,
    };
  }

  /**
   * 添加订单项
   */
  static async addOrderItem({
    orderId,
    productId,
    productName,
    productDescription,
    unitPrice,
    quantity = 1,
    metadata = {},
  }: {
    orderId: string;
    productId: string;
    productName: string;
    productDescription?: string;
    unitPrice: string;
    quantity?: number;
    metadata?: Record<string, unknown>;
  }): Promise<OrderItem> {
    const totalPrice = (parseFloat(unitPrice) * quantity).toFixed(2);
    
    const newItem: NewOrderItem = {
      id: randomUUID(),
      orderId,
      productId,
      productName,
      productDescription,
      unitPrice,
      quantity,
      totalPrice,
      metadata,
    };

    const [item] = await db.insert(orderItems).values(newItem).returning();
    return item;
  }

  /**
   * 生成订单号
   */
  private static generateOrderNumber(): string {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `ORD-${timestamp}-${random}`;
  }

  /**
   * 处理支付成功
   */
  static async handlePaymentSuccess(
    paymentRequestId: string,
    paymentSessionId?: string
  ): Promise<Order | null> {
    const order = await this.findOrderByPaymentRequestId(paymentRequestId);
    
    if (!order) {
      console.error(`订单未找到: paymentRequestId=${paymentRequestId}`);
      return null;
    }

    if (order.status === "paid") {
      console.log(`订单已支付: orderId=${order.id}`);
      return order;
    }

    return await this.updateOrderStatus(order.id, "paid", {
      paymentSessionId,
      paidAt: new Date(),
    });
  }

  /**
   * 处理支付失败
   */
  static async handlePaymentFailed(paymentRequestId: string): Promise<Order | null> {
    const order = await this.findOrderByPaymentRequestId(paymentRequestId);
    
    if (!order) {
      console.error(`订单未找到: paymentRequestId=${paymentRequestId}`);
      return null;
    }

    return await this.updateOrderStatus(order.id, "failed");
  }

  /**
   * 处理支付取消
   */
  static async handlePaymentCancelled(paymentRequestId: string): Promise<Order | null> {
    const order = await this.findOrderByPaymentRequestId(paymentRequestId);
    
    if (!order) {
      console.error(`订单未找到: paymentRequestId=${paymentRequestId}`);
      return null;
    }

    return await this.updateOrderStatus(order.id, "cancelled", {
      cancelledAt: new Date(),
    });
  }
}
