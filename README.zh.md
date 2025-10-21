# ShipBase

> 一个基于 Next.js 15 构建的现代化、功能完整的 SaaS 起步模板，集成 Better Auth 认证、支付功能以及完整的国际化支持。

**📖 [English Version / 英文版](./README.md)**

---

## 🌟 核心功能

### ✅ 认证系统
- **Better Auth** 集成，支持多种认证方式
- 支持 **Google OAuth**、**GitHub OAuth** 和 **Magic Link** 登录
- 安全 Cookie 会话管理
- 基于角色的访问控制

### 💳 支付与计费
- **Creem** 支付网关集成
- 支持一次性、按月、按年付费
- 年付享受 20% 折扣
- 完整的订单管理系统
- 支付回调处理

### 🌍 国际化
- 多语言支持（英文、中文、日文）
- 多货币支持（美元、人民币、日元）
- 本地化价格和内容
- 语言切换组件

### 🎨 现代化界面
- **Tailwind CSS 4** 样式系统
- 响应式设计
- 暗色模式支持
- 无障碍组件

### 🗄️ 数据库
- **Drizzle ORM** 类型安全的数据库操作
- PostgreSQL 支持（兼容 Supabase、Neon、自部署）
- Drizzle Kit 迁移管理
- TypeScript 模式定义

---

## 🚀 快速开始

### 前置要求

- Node.js 18 及以上
- pnpm 9 及以上
- PostgreSQL 数据库

### 安装

1. **克隆仓库**
   ```bash
   git clone <repository-url>
   cd shipbase
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **配置环境变量**

   在项目根目录创建 `.env.local` 文件：

   ```env
   # 数据库
   DATABASE_URL=postgresql://user:password@host:5432/dbname
   DATABASE_SSL=true  # 可选，生产环境建议启用

   # Better Auth 认证配置
   BETTER_AUTH_SECRET=your-secret-key  # 使用 openssl rand -base64 32 生成
   BETTER_AUTH_URL=http://localhost:3000  # 可选
   NEXT_PUBLIC_APP_URL=http://localhost:3000  # 可选

   # Google OAuth (可选)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   # GitHub OAuth (可选)
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret

   # Magic Link (可选)
   MAGIC_LINK_WEBHOOK_URL=https://your-webhook-url  # 可选，用于发送魔法链接

   # Creem 支付
   CREEM_API_KEY=your-creem-api-key
   CREEM_ENV=test  # 或 production
   CREEM_PRODUCTS={"professional":"prod_xxx","enterprise":"prod_yyy"}
   CREEM_WEBHOOK_SECRET=your-webhook-secret

   # 应用配置
   NEXT_PUBLIC_WEB_URL=http://localhost:3000
   NEXT_PUBLIC_PROJECT_NAME=ShipBase
   PAY_PROVIDER=creem
   ```

4. **设置数据库**
   ```bash
   # 生成迁移文件
   pnpm db:generate

   # 推送模式到数据库
   pnpm db:push
   ```

5. **启动开发服务器**
   ```bash
   pnpm dev
   ```

   访问 [http://localhost:3000](http://localhost:3000) 查看应用。

---

## 📖 常用命令

| 命令 | 描述 |
|------|------|
| `pnpm dev` | 使用 Turbopack 启动开发服务器 |
| `pnpm build` | 构建生产包 |
| `pnpm start` | 启动生产服务器 |
| `pnpm lint` | 运行 ESLint |
| `pnpm db:generate` | 生成 Drizzle 迁移文件 |
| `pnpm db:push` | 推送模式到数据库 |

---

## 🗂️ 项目结构

```
shipbase/
├── src/
│   ├── app/                    # Next.js 应用路由
│   │   ├── [locale]/          # 国际化路由
│   │   │   ├── page.tsx       # 首页
│   │   │   ├── pricing/       # 定价页面
│   │   │   ├── login/         # 登录页面
│   │   │   ├── signup/        # 注册页面
│   │   │   ├── dashboard/     # 仪表板
│   │   │   ├── orders/        # 订单页面
│   │   │   └── profile/       # 个人资料页面
│   │   └── api/               # API 路由
│   │       ├── auth/          # 认证 API
│   │       ├── payments/      # 支付 API
│   │       └── orders/        # 订单 API
│   ├── components/            # React 组件
│   │   ├── auth/              # 认证组件
│   │   ├── layout/            # 布局组件
│   │   ├── pricing/           # 定价组件
│   │   └── ui/                # UI 组件
│   ├── lib/                   # 工具和服务
│   │   ├── auth/              # 认证配置
│   │   ├── db/                # 数据库客户端和模式
│   │   ├── orders/            # 订单服务
│   │   ├── payments/          # 支付集成
│   │   └── pricing/           # 定价配置
│   ├── i18n/                  # 国际化
│   │   ├── locales/           # 翻译文件
│   │   │   ├── en.ts          # 英文
│   │   │   ├── zh.ts          # 中文
│   │   │   └── ja.ts          # 日文
│   │   └── types.ts           # i18n 类型
│   └── hooks/                 # 自定义 React Hooks
├── public/                    # 静态资源
├── drizzle/                   # 数据库迁移
├── docs/                      # 文档
├── next.config.ts            # Next.js 配置
├── drizzle.config.ts         # Drizzle 配置
└── package.json              # 依赖
```

---

## 🔐 认证设置

### Google OAuth 设置

1. 访问 [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. 创建新项目并创建 OAuth 客户端 ID
3. 配置授权域名和重定向 URI：

   ```
   已获授权的 JavaScript 来源:
   http://localhost:3000
   https://your-domain.com

   已获授权的重定向 URI:
   http://localhost:3000/api/auth/callback/google
   https://your-domain.com/api/auth/callback/google
   ```

4. 复制客户端 ID 和客户端密钥到 `.env.local`

### GitHub OAuth 设置

1. 前往 [GitHub Developer Settings](https://github.com/settings/applications/new)
2. 创建新的 OAuth 应用
3. 配置设置：

   ```
   主页 URL:
   http://localhost:3000 (开发环境)
   https://your-domain.com (生产环境)

   授权回调 URL:
   http://localhost:3000/api/auth/callback/github
   https://your-domain.com/api/auth/callback/github
   ```

4. 复制客户端 ID 和客户端密钥到 `.env.local`

### Magic Link

魔法链接通过 webhook（如果已配置）发送，或在开发环境下打印到控制台。

---

## 💰 支付集成

### Creem 支付设置

1. 在 [Creem](https://creem.io) 注册并获取 API 密钥
2. 在 Creem 仪表板中创建产品
3. 配置 webhook URL: `https://your-domain.com/api/pay/callback/creem`
4. 在 `.env.local` 中添加配置：

   ```env
   CREEM_API_KEY=your_api_key
   CREEM_ENV=test  # 或 production
   CREEM_PRODUCTS={"professional":"prod_xxx","enterprise":"prod_yyy"}
   CREEM_WEBHOOK_SECRET=your_webhook_secret
   ```

### 支付流程

1. 用户选择方案并点击"立即购买"
2. 系统创建支付会话和订单
3. 用户在 Creem 完成支付
4. Webhook 更新订单状态
5. 用户重定向到成功页面

---

## 🌐 国际化

### 支持的语言

- 🇺🇸 英文 (en)
- 🇨🇳 中文 (zh)
- 🇯🇵 日文 (ja)

### 添加新语言

1. 在 `src/i18n/locales/` 创建翻译文件：

   ```typescript
   // src/i18n/locales/es.ts
   export const esDictionary = {
     home: { /* ... */ },
     auth: { /* ... */ },
     // ...
   };
   ```

2. 更新 `src/i18n/index.ts` 以包含新语言

3. 创建路由目录: `src/app/[locale]/es/`

---

## 📊 数据库模式

### 用户表
- id, email, name, image, role 等
- 由 Better Auth 自动管理

### 订单表
- id, user_id, order_number, status, amount, currency
- 支持支付跟踪和状态管理

### 订单项表
- id, order_id, product_id, quantity, price
- 支持一个订单包含多个商品

---

## 🧪 测试

### 测试订单流程

```bash
# 运行订单流程测试脚本
npx tsx src/lib/orders/test-flow.ts
```

---

## 📚 文档

- [实现总结](./docs/IMPLEMENTATION_SUMMARY.md)
- [订单流程](./docs/ORDER_FLOW.md)
- [支付集成](./docs/PAYMENT_INTEGRATION.md)
- [定价系统](./docs/PRICING.md)
- [国际化指南](./docs/I18N_COMPLETION_SUMMARY.md)

---

## 🛠️ 技术栈

- **框架**: Next.js 15 with App Router
- **语言**: TypeScript
- **UI**: React 19, Tailwind CSS 4
- **认证**: Better Auth
- **数据库**: PostgreSQL with Drizzle ORM
- **支付**: Creem
- **部署**: Vercel, Railway, 或自部署

---

## 🤝 贡献

欢迎贡献！请遵循 [AGENTS.md](./AGENTS.md) 中的指南。

---

## 📄 许可证

本项目采用 MIT 许可证。

---

## 🙏 致谢

- [Next.js](https://nextjs.org/)
- [Better Auth](https://better-auth.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Creem](https://creem.io/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📞 支持

如有问题、疑问或建议，请在 GitHub 上提交 issue。

---

**使用 Next.js 和 ❤️ 构建**

