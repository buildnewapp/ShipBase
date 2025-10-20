# Shipbase

Shipbase 是一个基于 Next.js 15 的 SaaS 起步模版，预置 Better Auth 登录认证（Google、GitHub、Magic Link）以及 Tailwind 4 的 UI 方案，方便快速搭建多种身份验证场景。

## 准备工作

1. 安装依赖：
   ```bash
   pnpm install
   ```
2. 新建 `.env.local` 并填入以下变量：
   ```ini
   BETTER_AUTH_SECRET=openssl rand -base64 32 的结果
   DATABASE_URL=postgresql://user:password@host:5432/dbname
   DATABASE_SSL=可选，生产环境默认启用（值为 true 时强制使用 SSL）
   GOOGLE_CLIENT_ID=可选，启用 Google OAuth
   GOOGLE_CLIENT_SECRET=可选
   GITHUB_CLIENT_ID=可选，启用 GitHub OAuth
   GITHUB_CLIENT_SECRET=可选
   NEXT_PUBLIC_AUTH_BASE_URL=可选，前端请求的认证基地址
   MAGIC_LINK_WEBHOOK_URL=可选，用于推送魔法链接的自定义 POST 接口
   ```
   未配置的 OAuth Provider 会自动跳过；Magic Link 会在没有 webhook 时打印链接到服务端日志。

## 常用命令

- `pnpm dev`：启动开发服务器（Turbopack）。
- `pnpm lint`：运行 ESLint。
- `pnpm build` / `pnpm start`：构建并以生产模式本地运行。
- `pnpm db:generate`：基于当前 Schema 生成 Drizzle 迁移文件。
- `pnpm db:push`：将最新 Schema 推送到数据库（适合开发环境）。

## 目录速览

- `src/app/page.tsx`：首页，包含登录面板示例。
- `src/components/auth/auth-panel.tsx`：Better Auth 客户端示例组件。
- `src/components/home/home-page.tsx`：首页共享视图，接收多语言文案字典。
- `src/lib/auth/server.ts`：Better Auth 服务端配置（OAuth + Magic Link）。
- `src/lib/auth/client.ts`：Better Auth React Client 封装。
- `src/lib/db/`：Drizzle ORM 配置与 Schema 定义。
- `src/lib/i18n/dictionaries.ts`：多语言文案字典定义。
- `src/components/i18n/rich-text.tsx`：渲染带代码片段的多语言文案工具组件。
- `src/app/zh/page.tsx`：中文首页入口。
- `src/app/api/auth/[...betterAuth]/route.ts`：对接 Better Auth Router 的 API Route。

## 认证流程摘要

- Google / GitHub：调用 `authClient.signIn.social({ provider })` 跳转 OAuth，并在回调后写入会话 Cookie。
- Magic Link：提交邮箱后触发 `/sign-in/magic-link`。若配置了 `MAGIC_LINK_WEBHOOK_URL` 会向该地址发送 `POST`，否则在终端打印链接供测试。
- 会话读取：在任意客户端组件中使用 `authClient.useSession()` 获取当前用户与会话信息，退出使用 `authClient.signOut()`。

### 配置谷歌登录
- 登录 [Google Cloud Console](https://console.cloud.google.com/apis/credentials) 
- 创建一个新项目，进入新项目的 Credentials 管理页面，创建 Oauth Client ID
- 根据你项目的运行端口，线上域名，配置必要的回调信息
```
已获授权的 JavaScript 来源
http://localhost:3000
https://{your-domain}
已获授权的重定向 URI
http://localhost:3000/api/auth/callback/google
https://{your-domain}/api/auth/callback/google
```
- 创建 Oauth Client ID 后，得到 Client ID 和 Client Secret
- 修改配置文件中的 GOOGLE_CLIENT_ID 和 GOOGLE_CLIENT_SECRET
### 配置Github登录

- 进入 [Github Developer Settings](https://github.com/settings/applications/new)
- 创建一个新的 OAuth app
- 填写 OAuth app 配置信息 
```
ShipBase_local
http://localhost:3000
http://localhost:3000/api/auth/callback/github

ShipBase
https://{your-domain}
https://{your-domain}/api/auth/callback/github
```
- 开发环境和生产环境，需要创建两个不同的 OAuth app，分别配置不同的回调地址。
- 进入 OAuth app，复制 Client ID 和 Client Secret
- 修改配置文件中的 GITHUB_CLIENT_ID 和 GITHUB_CLIENT_SECRET

更多能力（如数据库适配器、组织/多因子插件）请参考 [Better Auth 文档](https://better-auth.com/docs)。

## 数据库

- 借助 `drizzle-orm` + `pg` 封装的 `db` 实例位于 `src/lib/db/client.ts`，只需在服务器环境导入即可使用。
- Schema 统一维护在 `src/lib/db/schema/`，修改后使用 `pnpm db:generate` 创建迁移，再 `pnpm db:push` 或手动执行 SQL。
- `drizzle.config.ts` 会自动读取 `.env.local` 中的 `DATABASE_URL`，请在执行 CLI 前准备好连接字符串。

## 国际化

- Next.js `next.config.ts` 已启用 `i18n` 配置，默认语言为 `en`，另内置 `zh`。
- 首页文案集中维护在 `src/lib/i18n/dictionaries.ts`，通过 `HomePage` 组件注入到 `/`（英文）与 `/zh`（中文）路由。
- 增加新语言时，只需扩展字典并创建对应的页面入口文件，例如 `src/app/es/page.tsx`。
