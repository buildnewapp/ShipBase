import { notFound } from "next/navigation";
import { HomePage } from "@/components/home/home-page";
import { getDictionary, locales } from "@/i18n";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleHome({ params }: LocalePageProps) {
  // 处理路由参数
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // 验证locale是否有效
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  return <HomePage dictionary={getDictionary(normalizedLocale)} />;
}

export function generateStaticParams() {
  // 为支持的语言生成静态参数
  return locales.map((locale) => ({ locale }));
}

// 生成元数据
export async function generateMetadata({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "ShipBase - 现代化SaaS平台",
      description: "现代化的SaaS平台，帮助您快速构建和部署应用程序。",
    };;
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `ShipBase - ${dictionary.home.heroTitle}`,
    description: dictionary.home.heroDescription,
  };;
}
