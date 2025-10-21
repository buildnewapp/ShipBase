import { BlogEditor } from "@/components/admin";
import { getDictionary } from "@/i18n";
import { auth } from "@/lib/auth/server";
import { isAdmin } from "@/lib/auth/admin";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function NewBlogPage() {
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
  
  return <BlogEditor dictionary={dictionary} />;
}

export async function generateMetadata() {
  return {
    title: "创建博客 - ShipBase",
    description: "创建新的博客文章",
  };
}

