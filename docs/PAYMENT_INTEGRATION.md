# 支付集成说明

## 概述

已成功将 `/pricing` 页面与支付接口 `/api/payments` 对接，支持 Creem 支付处理。

## 实现的功能

### 1. 支付 Hook (`usePayment`)
- 位置：`src/hooks/use-payment.ts`
- 功能：
  - 调用 `/api/payments` 接口创建支付会话
  - 自动跳转到 Creem 支付页面
  - 处理加载状态和错误信息
  - 支持国际化

### 2. 更新的定价卡片组件
- 位置：`src/components/pricing/pricing-card.tsx`
- 功能：
  - 集成支付功能
  - 显示加载状态（旋转图标）
  - 显示错误信息
  - 区分免费、付费和企业版计划

### 3. 支付流程
1. 用户点击定价卡片上的"立即购买"按钮
2. 调用 `usePayment` hook 的 `createCheckout` 方法
3. 发送 POST 请求到 `/api/payments`
4. 获取 Creem 支付链接
5. 自动跳转到 Creem 支付页面

## 环境变量配置

确保以下环境变量已正确配置：

```bash
# Creem 支付配置
CREEM_API_KEY=your_creem_api_key
CREEM_ENV=test  # 或 production
CREEM_PRODUCTS={"professional":"prod_xxx","enterprise":"prod_yyy"}

# 应用配置
NEXT_PUBLIC_WEB_URL=http://localhost:3000
NEXT_PUBLIC_PAY_CANCEL_URL=/pricing
NEXT_PUBLIC_PROJECT_NAME=ShipBase
PAY_PROVIDER=creem
```

## 测试步骤

1. 启动开发服务器：`pnpm dev`
2. 访问定价页面：`http://localhost:3000/pricing`
3. 点击"专业版"或"企业版"的"立即购买"按钮
4. 验证是否跳转到 Creem 支付页面

## 计划类型处理

- **免费版**：调用原有的 `onSelect` 回调（可能用于注册流程）
- **专业版**：调用支付接口，跳转到 Creem 支付
- **企业版**：调用原有的 `onSelect` 回调（可能用于联系销售）

## 错误处理

- 网络错误：显示"支付请求失败"
- 认证错误：显示"no auth, please sign-in"
- 产品ID错误：显示"invalid product_id"
- 其他错误：显示具体错误信息

## 国际化支持

- 加载状态文本：中文"处理中..."、日文"処理中..."、英文"Processing..."
- 错误信息：根据 API 返回的消息显示
- 按钮文本：根据计划类型和语言显示相应文本

## 下一步

1. 创建支付回调处理页面 `/api/pay/callback/creem`
2. 添加支付成功/失败页面
3. 集成用户订阅状态管理
4. 添加支付历史记录功能
