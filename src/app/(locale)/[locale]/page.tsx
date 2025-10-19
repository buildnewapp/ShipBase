import { notFound } from "next/navigation";

import { HomePage } from "@/components/home/home-page";
import { getDictionary, locales } from "@/i18n";

interface LocalePageProps {
  params: {
    locale: string;
  };
}

export default function LocaleHome({ params }: LocalePageProps) {
  const normalizedLocale = locales.find((locale) => locale === params.locale);

  if (!normalizedLocale) {
    notFound();
  }

  return <HomePage dictionary={getDictionary(normalizedLocale)} />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
