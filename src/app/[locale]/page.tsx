import { notFound } from "next/navigation";
import { HomePage } from "@/components/home/home-page";
import { getDictionary, locales, defaultLocale } from "@/i18n";

interface LocalePageProps {
  params: {
    locale?: string[];
  };
}

export default async function LocaleHome({ params }: LocalePageProps) {
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

  return <HomePage dictionary={getDictionary(normalizedLocale)} />;
}

export function generateStaticParams() {
  // 只为支持的语言生成静态参数，不包含空数组
  return locales.map((locale) => ({ locale: [locale] }));
}

// 生成元数据
export async function generateMetadata({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const localeParam = resolvedParams.locale?.[0];
  const locale = localeParam || defaultLocale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "ShipBase - 现代化SaaS平台",
      description: "现代化的SaaS平台，帮助您快速构建和部署应用程序。",
    };
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `ShipBase - ${dictionary.home.heroTitle}`,
    description: dictionary.home.heroDescription,
  };
}
