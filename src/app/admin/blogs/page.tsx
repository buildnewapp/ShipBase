import { BlogsList } from "@/components/admin";
import { getDictionary } from "@/i18n";
import { auth } from "@/lib/auth/server";
import { isAdmin } from "@/lib/auth/admin";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function AdminBlogsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // 检查是否登录
  if (!session?.user) {
    redirect("/login");
  }

  // 检查是否为管理员
  if (!isAdmin(session.user.email)) {
    redirect("/");
  }

  const dictionary = getDictionary("en"); // 默认使用英文
  
  return <BlogsList dictionary={dictionary} />;
}

export async function generateMetadata() {
  return {
    title: "博客管理 - ShipBase",
    description: "管理博客文章",
  };
}

