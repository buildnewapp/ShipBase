import { BlogsList } from "@/components/admin";
import { getDictionary } from "@/i18n";

export default async function AdminBlogsPage() {
  const dictionary = getDictionary("en"); // 默认使用英文
  
  return <BlogsList dictionary={dictionary} />;
}

export async function generateMetadata() {
  return {
    title: "博客管理 - ShipBase",
    description: "管理博客文章",
  };
}

