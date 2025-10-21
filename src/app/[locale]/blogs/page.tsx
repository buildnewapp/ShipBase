import { notFound } from "next/navigation";
import { BlogsPage } from "@/components/blogs";
import { getDictionary, locales } from "@/i18n";

interface LocaleBlogsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleBlogsPage({ params }: LocaleBlogsPageProps) {
  // 处理路由参数
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // 验证locale是否有效
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return <BlogsPage dictionary={dictionary} />;
}

export function generateStaticParams() {
  // 为支持的语言生成静态参数
  return locales.map((locale) => ({ locale }));
}

// 生成元数据
export async function generateMetadata({ params }: LocaleBlogsPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Blog - ShipBase",
      description: "Explore our latest articles",
    };
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `${dictionary.pages.blogs.title} - ShipBase`,
    description: dictionary.pages.blogs.subtitle,
  };
}

