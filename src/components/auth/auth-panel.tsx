"use client";

import { FormEvent, useState } from "react";

import { authClient } from "@/lib/auth/client";

type OAuthProvider = "google" | "github";

export function AuthPanel() {
  const session = authClient.useSession();
  const [pendingProvider, setPendingProvider] = useState<OAuthProvider | null>(
    null,
  );
  const [magicEmail, setMagicEmail] = useState("");
  const [magicStatus, setMagicStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [magicMessage, setMagicMessage] = useState<string | null>(null);

  const isAuthenticated = Boolean(session.data?.user);

  const handleOAuth = (provider: OAuthProvider) => {
    setPendingProvider(provider);
    void authClient
      .signIn.social({
        provider,
        callbackURL:
          typeof window !== "undefined" ? window.location.origin : undefined,
      })
      .catch((error) => {
        console.error(`[Better Auth] ${provider} sign-in failed`, error);
      })
      .finally(() => {
        setPendingProvider(null);
      });
  };

  const handleMagicLink = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!magicEmail) {
      setMagicMessage("请输入邮箱地址。");
      setMagicStatus("error");
      return;
    }

    setMagicStatus("sending");
    setMagicMessage(null);

    try {
      const response = await authClient.signIn.magicLink({
        email: magicEmail,
        callbackURL:
          typeof window !== "undefined" ? window.location.origin : undefined,
      });

      if (response?.error) {
        setMagicMessage(response.error.message ?? "发送邮件失败，请重试。");
        setMagicStatus("error");
      } else {
        setMagicStatus("sent");
        setMagicMessage(
          "魔法链接已发送。如果未集成邮件服务，请查看服务器日志获取登录链接。",
        );
        setMagicEmail("");
      }
    } catch (error) {
      console.error("[Better Auth] Magic link request failed", error);
      setMagicStatus("error");
      setMagicMessage("发送过程中出现问题，请稍后再试。");
    }
  };

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
    } catch (error) {
      console.error("[Better Auth] Sign out failed", error);
    }
  };

  return (
    <section className="w-full max-w-md rounded-xl border border-black/10 bg-white p-6 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-black dark:shadow-none">
      <header className="mb-6 space-y-1">
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          登录 Shipbase
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          使用 Better Auth 提供的 Google、GitHub 或 Magic Link 完成身份认证。
        </p>
      </header>

      <div className="space-y-6">
        {isAuthenticated ? (
          <div className="space-y-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-500/40 dark:bg-emerald-950/30 dark:text-emerald-100">
            <p className="font-medium">
              已登录为 {session.data?.user?.name ?? session.data?.user?.email}
            </p>
            <p className="text-xs text-emerald-800 dark:text-emerald-200/80">
              会话 ID: {session.data?.session?.id}
            </p>
            <button
              type="button"
              onClick={handleSignOut}
              className="mt-2 inline-flex items-center justify-center rounded-md border border-emerald-600 px-3 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-600 hover:text-white dark:border-emerald-400 dark:text-emerald-200 dark:hover:bg-emerald-400 dark:hover:text-emerald-950"
            >
              退出登录
            </button>
          </div>
        ) : (
          <>
            <div className="grid gap-3">
              <button
                type="button"
                onClick={() => handleOAuth("google")}
                disabled={pendingProvider !== null}
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm transition hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 disabled:cursor-not-allowed disabled:opacity-60 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
              >
                {pendingProvider === "google" ? "跳转 Google…" : "使用 Google 登录"}
              </button>
              <button
                type="button"
                onClick={() => handleOAuth("github")}
                disabled={pendingProvider !== null}
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-neutral-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 disabled:cursor-not-allowed disabled:opacity-60 dark:border-neutral-700 dark:bg-neutral-950 dark:hover:bg-neutral-900"
              >
                {pendingProvider === "github" ? "跳转 GitHub…" : "使用 GitHub 登录"}
              </button>
            </div>

            <div className="space-y-3 border-t border-neutral-200 pt-4 dark:border-neutral-800">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                或发送 Magic Link
              </p>
              <form className="space-y-3" onSubmit={handleMagicLink}>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  邮箱地址
                  <input
                    type="email"
                    value={magicEmail}
                    onChange={(event) => setMagicEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:focus:border-neutral-400 dark:focus:ring-neutral-100/10"
                    required
                  />
                </label>
                <button
                  type="submit"
                  disabled={magicStatus === "sending"}
                  className="inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  {magicStatus === "sending" ? "发送中…" : "发送登录链接"}
                </button>
              </form>
              {magicMessage ? (
                <p
                  className={`text-sm ${magicStatus === "error" ? "text-red-600 dark:text-red-400" : "text-neutral-600 dark:text-neutral-300"}`}
                >
                  {magicMessage}
                </p>
              ) : null}
            </div>
          </>
        )}
      </div>

      <footer className="mt-6 border-t border-neutral-200 pt-4 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        <p>
          登录后 Better Auth 会在服务器端生成会话并写入 HTTP-only Cookies。
          结合 `authClient.useSession()` 可在任意客户端组件中读取当前用户。
        </p>
      </footer>
    </section>
  );
}
