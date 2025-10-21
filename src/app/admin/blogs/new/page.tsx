import { BlogEditor } from "@/components/admin";
import { getDictionary } from "@/i18n";

export default async function NewBlogPage() {
  const dictionary = getDictionary("en"); // 默认使用英文
  
  return <BlogEditor dictionary={dictionary} />;
}

export async function generateMetadata() {
  return {
    title: "创建博客 - ShipBase",
    description: "创建新的博客文章",
  };
}

