import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, locales } from "@/i18n";

interface LocalePricingPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocalePricingPage({ params }: LocalePricingPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);
  return <PageTemplate dictionary={dictionary.pages.pricing} locale={normalizedLocale} />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePricingPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Pricing - ShipBase",
      description: "Simple, transparent pricing",
    };;
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `${dictionary.pages.pricing.title} - ShipBase`,
    description: dictionary.pages.pricing.subtitle,
  };;
}
