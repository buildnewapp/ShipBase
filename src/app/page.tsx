import { AuthPanel } from "@/components/auth/auth-panel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-white to-neutral-200 px-6 py-16 font-sans dark:from-neutral-900 dark:via-neutral-950 dark:to-black sm:px-10 lg:px-16">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <section className="max-w-xl space-y-6">
          <span className="inline-flex items-center rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white dark:bg-white dark:text-neutral-900">
            Better Auth 集成
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
            为 Shipbase 启用多种安全登录方式
          </h1>
          <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            通过 Better Auth 统一接入 Google、GitHub OAuth 以及 Magic Link 邮件登录。
            所有会话均由服务器维护，并自动同步 HTTP-only Cookies。
          </p>
          <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900 dark:bg-neutral-200" />
              <span>支持多个 OAuth Provider，使用环境变量完成动态配置。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900 dark:bg-neutral-200" />
              <span>Magic Link 默认打印到服务器日志，也可通过 Webhook 发送邮件。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900 dark:bg-neutral-200" />
              <span>
                在客户端组件中使用{" "}
                <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
                  authClient.useSession()
                </code>{" "}
                实时读取登录状态。
              </span>
            </li>
          </ul>
        </section>
        <AuthPanel />
      </main>
    </div>
  );
}
