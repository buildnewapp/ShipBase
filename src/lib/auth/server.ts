import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { magicLink } from "better-auth/plugins/magic-link";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db/client";

const appBaseURL =
  process.env.BETTER_AUTH_URL ??
  process.env.NEXT_PUBLIC_APP_URL ??
  "http://localhost:3000";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const githubClientId = process.env.GITHUB_CLIENT_ID;
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

const socialProviders = {
  ...(googleClientId && googleClientSecret
    ? {
        google: {
          clientId: googleClientId,
          clientSecret: googleClientSecret,
        },
      }
    : {}),
  ...(githubClientId && githubClientSecret
    ? {
        github: {
          clientId: githubClientId,
          clientSecret: githubClientSecret,
          scope: ["read:user", "user:email"],
        },
      }
    : {}),
} satisfies NonNullable<
  NonNullable<Parameters<typeof betterAuth>[0]>["socialProviders"]
>;

if (Object.keys(socialProviders).length === 0) {
  console.warn(
    "[Better Auth] No social providers configured. Set GOOGLE_CLIENT_ID/SECRET or GITHUB_CLIENT_ID/SECRET to enable OAuth sign-in.",
  );
}

export const auth = betterAuth({
  appName: "Shipbase",
  baseURL: appBaseURL,
  basePath: "/api/auth",
  secret: process.env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  socialProviders,
  plugins: [
    nextCookies(),
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        if (process.env.MAGIC_LINK_WEBHOOK_URL) {
          try {
            await fetch(process.env.MAGIC_LINK_WEBHOOK_URL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, url }),
            });
          } catch (error) {
            console.error(
              "[Better Auth] Failed to send magic link webhook:",
              error,
            );
          }
          return;
        }

        console.info(`[Better Auth] Magic link for ${email}: ${url}`);
      },
    }),
  ],
});
