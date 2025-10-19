import { HomePage } from "@/components/home/home-page";
import { getDictionary, defaultLocale } from "@/i18n";
import type { Metadata } from "next";

export default function RootPage() {
  // 直接使用默认语言显示首页内容
  return <HomePage dictionary={getDictionary(defaultLocale)} />;
}

// 生成元数据
export const metadata: Metadata = {
  title: "ShipBase - Enable secure sign-in methods for Shipbase",
  description: "Integrate Google and GitHub OAuth plus Magic Link email sign-in through Better Auth. Sessions stay on the server and automatically sync via HTTP-only cookies.",
};
