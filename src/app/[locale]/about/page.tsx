import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, locales, defaultLocale } from "@/i18n";

interface LocaleAboutPageProps {
  params: {
    locale?: string[];
  };
}

export default async function LocaleAboutPage({ params }: LocaleAboutPageProps) {
  const resolvedParams = await params;
  const localeParam = resolvedParams.locale?.[0];
  const locale = localeParam || defaultLocale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);
  return <PageTemplate dictionary={dictionary.pages.about} />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale: [locale] }));
}

export async function generateMetadata({ params }: LocaleAboutPageProps) {
  const resolvedParams = await params;
  const localeParam = resolvedParams.locale?.[0];
  const locale = localeParam || defaultLocale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "About Us - ShipBase",
      description: "Building the future of SaaS development",
    };
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `${dictionary.pages.about.title} - ShipBase`,
    description: dictionary.pages.about.subtitle,
  };
}
