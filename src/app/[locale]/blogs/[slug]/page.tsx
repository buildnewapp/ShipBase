import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { BlogDetail } from "@/components/blogs/blog-detail";
import { db } from "@/lib/db/client";
import { blogs } from "@/lib/db/schema/blogs";
import { eq, and } from "drizzle-orm";

interface BlogDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const slug = resolvedParams.slug;
  
  // 验证locale是否有效
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  // 获取博客数据
  const blogData = await db
    .select()
    .from(blogs)
    .where(and(
      eq(blogs.slug, slug),
      eq(blogs.status, "published"),
      eq(blogs.visibility, "public")
    ))
    .limit(1);

  if (blogData.length === 0) {
    notFound();
  }

  return <BlogDetail blog={blogData[0]} />;
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // 获取博客数据
  const blogData = await db
    .select()
    .from(blogs)
    .where(and(
      eq(blogs.slug, slug),
      eq(blogs.status, "published"),
      eq(blogs.visibility, "public")
    ))
    .limit(1);

  if (blogData.length === 0) {
    return {
      title: "博客未找到 - ShipBase",
    };
  }

  return {
    title: `${blogData[0].title} - ShipBase`,
    description: blogData[0].description || "",
  };
}

