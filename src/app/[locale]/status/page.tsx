import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, locales } from "@/i18n";

interface LocaleStatusPageProps {
  params: {
    locale: string;
  };
}

export default async function LocaleStatusPage({ params }: LocaleStatusPageProps) {
  const resolvedParams = await params;
  const localeParam = resolvedParams.locale?.[0];
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);
  return <PageTemplate dictionary={dictionary.pages.status} />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleStatusPageProps) {
  const resolvedParams = await params;
  const localeParam = resolvedParams.locale?.[0];
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Service Status - ShipBase",
      description: "Real-time system status",
    };
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `${dictionary.pages.status.title} - ShipBase`,
    description: dictionary.pages.status.subtitle,
  };
}
