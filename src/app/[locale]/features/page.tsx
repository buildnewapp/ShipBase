import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, locales, defaultLocale } from "@/i18n";

interface LocaleFeaturesPageProps {
  params: {
    locale?: string[];
  };
}

export default async function LocaleFeaturesPage({ params }: LocaleFeaturesPageProps) {
  // 处理catch-all路由参数
  const resolvedParams = await params;
  const localeParam = resolvedParams.locale?.[0];
  
  // 如果没有locale参数，使用默认语言
  const locale = localeParam || defaultLocale;
  
  // 验证locale是否有效
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return <PageTemplate dictionary={dictionary.pages.features} />;
}

export function generateStaticParams() {
  // 只为支持的语言生成静态参数，不包含空数组
  return locales.map((locale) => ({ locale: [locale] }));
}

// 生成元数据
export async function generateMetadata({ params }: LocaleFeaturesPageProps) {
  const resolvedParams = await params;
  const localeParam = resolvedParams.locale?.[0];
  const locale = localeParam || defaultLocale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Features - ShipBase",
      description: "Powerful features to accelerate your development",
    };
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `${dictionary.pages.features.title} - ShipBase`,
    description: dictionary.pages.features.subtitle,
  };
}
