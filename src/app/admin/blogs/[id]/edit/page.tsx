import { BlogEditor } from "@/components/admin";
import { getDictionary } from "@/i18n";

interface EditBlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
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

