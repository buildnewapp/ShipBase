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

## 目录速览

- `src/app/page.tsx`：首页，包含登录面板示例。
- `src/components/auth/auth-panel.tsx`：Better Auth 客户端示例组件。
- `src/lib/auth/server.ts`：Better Auth 服务端配置（OAuth + Magic Link）。
- `src/lib/auth/client.ts`：Better Auth React Client 封装。
- `src/app/api/auth/[...betterAuth]/route.ts`：对接 Better Auth Router 的 API Route。

## 认证流程摘要

- Google / GitHub：调用 `authClient.signIn.social({ provider })` 跳转 OAuth，并在回调后写入会话 Cookie。
- Magic Link：提交邮箱后触发 `/sign-in/magic-link`。若配置了 `MAGIC_LINK_WEBHOOK_URL` 会向该地址发送 `POST`，否则在终端打印链接供测试。
- 会话读取：在任意客户端组件中使用 `authClient.useSession()` 获取当前用户与会话信息，退出使用 `authClient.signOut()`。

更多能力（如数据库适配器、组织/多因子插件）请参考 [Better Auth 文档](https://better-auth.com/docs)。
