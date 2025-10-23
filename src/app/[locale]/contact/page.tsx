import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, locales } from "@/i18n";

interface LocaleContactPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleContactPage({ params }: LocaleContactPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);
  return <PageTemplate dictionary={dictionary.pages.contact} locale={normalizedLocale} />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleContactPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Contact Us - ShipBase",
      description: "We're here to help",
    };;
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `${dictionary.pages.contact.title} - ShipBase`,
    description: dictionary.pages.contact.subtitle,
  };;
}