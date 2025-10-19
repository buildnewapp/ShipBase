import { createAuthClient } from "better-auth/react";
import { magicLinkClient } from "better-auth/client/plugins";

const baseURL = process.env.NEXT_PUBLIC_AUTH_BASE_URL;

export const authClient = createAuthClient({
  plugins: [magicLinkClient()],
  ...(baseURL ? { baseURL } : {}),
});
