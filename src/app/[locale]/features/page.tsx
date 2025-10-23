import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, locales } from "@/i18n";

interface LocaleFeaturesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleFeaturesPage({ params }: LocaleFeaturesPageProps) {
  // 处理路由参数
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // 验证locale是否有效
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return <PageTemplate dictionary={dictionary.pages.features} locale={normalizedLocale} />;
}

export function generateStaticParams() {
  // 为支持的语言生成静态参数
  return locales.map((locale) => ({ locale }));
}

// 生成元数据
export async function generateMetadata({ params }: LocaleFeaturesPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Features - ShipBase",
      description: "Powerful features to accelerate your development",
    };;
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `${dictionary.pages.features.title} - ShipBase`,
    description: dictionary.pages.features.subtitle,
  };;
}
