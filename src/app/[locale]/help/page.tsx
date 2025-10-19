import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, locales, defaultLocale } from "@/i18n";

interface LocaleHelpPageProps {
  params: {
    locale?: string[];
  };
}

export default async function LocaleHelpPage({ params }: LocaleHelpPageProps) {
  const resolvedParams = await params;
  const localeParam = resolvedParams.locale?.[0];
  const locale = localeParam || defaultLocale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);
  return <PageTemplate dictionary={dictionary.pages.help} />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale: [locale] }));
}

export async function generateMetadata({ params }: LocaleHelpPageProps) {
  const resolvedParams = await params;
  const localeParam = resolvedParams.locale?.[0];
  const locale = localeParam || defaultLocale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Help Center - ShipBase",
      description: "Get the support you need",
    };
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `${dictionary.pages.help.title} - ShipBase`,
    description: dictionary.pages.help.subtitle,
  };
}
