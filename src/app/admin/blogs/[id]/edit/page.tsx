import { BlogEditor } from "@/components/admin";
import { getDictionary } from "@/i18n";
import { auth } from "@/lib/auth/server";
import { isAdmin } from "@/lib/auth/admin";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

interface EditBlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
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

  const resolvedParams = await params;
  const dictionary = getDictionary("en"); // 默认使用英文
  
  return <BlogEditor dictionary={dictionary} blogId={resolvedParams.id} />;
}

export async function generateMetadata({ params }: EditBlogPageProps) {
  const resolvedParams = await params;
  return {
    title: `编辑博客 ${resolvedParams.id} - ShipBase`,
    description: "编辑博客文章",
  };
}

