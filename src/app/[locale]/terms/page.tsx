import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, locales } from "@/i18n";

interface LocaleTermsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleTermsPage({ params }: LocaleTermsPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);
  return <PageTemplate dictionary={dictionary.pages.terms} locale={normalizedLocale} />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleTermsPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Terms of Service - ShipBase",
      description: "Our terms and conditions",
    };;
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `${dictionary.pages.terms.title} - ShipBase`,
    description: dictionary.pages.terms.subtitle,
  };;
}