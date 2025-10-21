import { pgTable, text, timestamp, integer, decimal, json } from "drizzle-orm/pg-core";
import { users } from "./users";

export const orders = pgTable("orders", {
  id: text("id").primaryKey().notNull(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  
  // 订单基本信息
  orderNumber: text("order_number").notNull().unique(),
  status: text("status").notNull().default("pending"), // pending, paid, failed, cancelled, refunded
  
  // 产品信息
  productId: text("product_id").notNull(),
  productName: text("product_name").notNull(),
  productType: text("product_type").notNull(), // one_time, subscription
  
  // 价格信息
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  currency: text("currency").notNull().default("USD"),
  
  // 支付信息
  paymentProvider: text("payment_provider").notNull(), // creem, stripe, etc.
  paymentRequestId: text("payment_request_id"), // 第三方支付请求ID
  paymentSessionId: text("payment_session_id"), // 第三方支付会话ID
  
  // 客户信息
  customerEmail: text("customer_email").notNull(),
  
  // 元数据
  metadata: json("metadata"), // 存储额外的订单信息
  
  // 时间戳
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  paidAt: timestamp("paid_at", { withTimezone: true }),
  cancelledAt: timestamp("cancelled_at", { withTimezone: true }),
});

export const orderItems = pgTable("order_items", {
  id: text("id").primaryKey().notNull(),
  orderId: text("order_id").notNull().references(() => orders.id, { onDelete: "cascade" }),
  
  // 商品信息
  productId: text("product_id").notNull(),
  productName: text("product_name").notNull(),
  productDescription: text("product_description"),
  
  // 价格信息
  unitPrice: decimal("unit_price", { precision: 10, scale: 2 }).notNull(),
  quantity: integer("quantity").notNull().default(1),
  totalPrice: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
  
  // 元数据
  metadata: json("metadata"),
  
  // 时间戳
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// 订单状态枚举
export type OrderStatus = "pending" | "paid" | "failed" | "cancelled" | "refunded";

// 产品类型枚举
export type ProductType = "one_time" | "subscription";

// 订单类型定义
export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;

// 订单项类型定义
export type OrderItem = typeof orderItems.$inferSelect;
export type NewOrderItem = typeof orderItems.$inferInsert;
