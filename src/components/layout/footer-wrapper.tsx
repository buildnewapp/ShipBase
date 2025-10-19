"use client";

import { Footer } from "./footer";
import { useLocale } from "@/hooks";

export function FooterWrapper() {
  const { locale, dictionary } = useLocale();

  return <Footer dictionary={dictionary.footer} currentLocale={locale} />;
}
