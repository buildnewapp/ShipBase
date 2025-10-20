# 订单流程实现文档

## 概述

本文档描述了支付流程中订单系统的完整实现，包括订单创建、状态更新、回调处理等功能。

## 数据库结构

### 订单表 (orders)

```sql
CREATE TABLE "orders" (
  "id" text PRIMARY KEY NOT NULL,
  "user_id" text NOT NULL,
  "order_number" text NOT NULL UNIQUE,
  "status" text DEFAULT 'pending' NOT NULL,
  "product_id" text NOT NULL,
  "product_name" text NOT NULL,
  "product_type" text NOT NULL,
  "amount" numeric(10, 2) NOT NULL,
  "currency" text DEFAULT 'USD' NOT NULL,
  "payment_provider" text NOT NULL,
  "payment_request_id" text,
  "payment_session_id" text,
  "customer_email" text NOT NULL,
  "metadata" json,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL,
  "paid_at" timestamp with time zone,
  "cancelled_at" timestamp with time zone
);
```

### 订单项表 (order_items)

```sql
CREATE TABLE "order_items" (
  "id" text PRIMARY KEY NOT NULL,
  "order_id" text NOT NULL,
  "product_id" text NOT NULL,
  "product_name" text NOT NULL,
  "product_description" text,
  "unit_price" numeric(10, 2) NOT NULL,
  "quantity" integer DEFAULT 1 NOT NULL,
  "total_price" numeric(10, 2) NOT NULL,
  "metadata" json,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
```

## 订单状态

- `pending`: 待支付
- `paid`: 已支付
- `failed`: 支付失败
- `cancelled`: 已取消
- `refunded`: 已退款

## 核心服务

### OrderService

位置: `src/lib/orders/service.ts`

主要方法：

- `createOrder()`: 创建新订单
- `updateOrderStatus()`: 更新订单状态
- `findOrderByPaymentRequestId()`: 根据支付请求ID查找订单
- `getUserOrders()`: 获取用户订单列表
- `getOrderWithItems()`: 获取订单详情（包含订单项）
- `handlePaymentSuccess()`: 处理支付成功
- `handlePaymentFailed()`: 处理支付失败
- `handlePaymentCancelled()`: 处理支付取消

## API 端点

### 支付创建订单

**POST** `/api/payments`

创建支付会话并同时创建订单。

请求体：
```json
{
  "product_id": "pro-plan"
}
```

响应：
```json
{
  "ok": true,
  "data": {
    "request_id": "uuid",
    "session_id": "creem-session-id",
    "checkout_url": "https://...",
    "order_id": "order-uuid"
  }
}
```

### 支付回调

**POST** `/api/pay/callback/creem`

处理 Creem 支付回调，自动更新订单状态。

支持的事件类型：
- `checkout.completed`: 支付完成
- `checkout.failed`: 支付失败
- `subscription.active`: 订阅激活
- `subscription.cancelled`: 订阅取消
- `subscription.expired`: 订阅过期

### 订单查询

**GET** `/api/orders`

获取当前用户的订单列表。

查询参数：
- `limit`: 每页数量（默认10）
- `offset`: 偏移量（默认0）

**POST** `/api/orders`

获取特定订单的详细信息。

请求体：
```json
{
  "orderId": "order-uuid"
}
```

## 支付流程

### 1. 下单流程

1. 用户选择产品并点击支付
2. 前端调用 `/api/payments` 创建支付会话
3. 系统创建订单（状态：pending）
4. 创建 Creem 支付会话
5. 更新订单的支付请求ID和会话ID
6. 返回支付URL给前端

### 2. 支付回调流程

1. 用户完成支付
2. Creem 发送回调到 `/api/pay/callback/creem`
3. 系统验证回调签名
4. 根据事件类型更新订单状态：
   - `checkout.completed` → 状态更新为 `paid`
   - `checkout.failed` → 状态更新为 `failed`
5. 记录支付时间和其他相关信息

### 3. 订单查询流程

1. 用户访问订单页面
2. 前端调用 `/api/orders` 获取订单列表
3. 系统返回用户的订单数据
4. 前端展示订单状态和详情

## 测试

### 运行测试脚本

```bash
# 在项目根目录运行
npx tsx src/lib/orders/test-flow.ts
```

测试脚本会模拟完整的订单流程：
1. 创建订单
2. 模拟支付成功
3. 查询订单详情
4. 查询用户订单列表

## 环境变量

确保设置以下环境变量：

```env
# Creem 支付配置
CREEM_API_KEY=your_api_key
CREEM_ENV=test  # 或 production
CREEM_PRODUCTS={"pro-plan":"creem-product-id"}
CREEM_WEBHOOK_SECRET=your_webhook_secret

# 数据库配置
DATABASE_URL=postgresql://...

# 其他配置
NEXT_PUBLIC_WEB_URL=http://localhost:3000
NEXT_PUBLIC_PROJECT_NAME=shipbase
```

## 注意事项

1. **订单号生成**: 使用时间戳和随机字符串生成唯一订单号
2. **状态管理**: 订单状态只能向前流转，不能回退
3. **数据一致性**: 使用数据库事务确保数据一致性
4. **错误处理**: 所有操作都有完整的错误处理和日志记录
5. **安全性**: 验证用户权限，确保只能访问自己的订单

## 扩展功能

未来可以考虑添加：

1. **订单项管理**: 支持一个订单包含多个商品
2. **退款处理**: 实现退款流程和状态管理
3. **订单搜索**: 支持按订单号、状态等条件搜索
4. **订单统计**: 提供订单数量和金额统计
5. **邮件通知**: 支付成功/失败时发送邮件通知
6. **订单导出**: 支持导出订单数据为CSV/Excel格式
