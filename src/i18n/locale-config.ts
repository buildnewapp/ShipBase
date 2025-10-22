import type { Locale } from "@/i18n/types";

const intlLocaleMap: Record<Locale, string> = {
  en: "en-US",
  zh: "zh-CN",
  es: "es-ES",
  ar: "ar-SA",
  id: "id-ID",
  pt: "pt-BR",
  fr: "fr-FR",
  ja: "ja-JP",
  ru: "ru-RU",
  de: "de-DE",
};

export function resolveIntlLocale(locale: string | Locale | undefined): string {
  if (locale && Object.prototype.hasOwnProperty.call(intlLocaleMap, locale)) {
    return intlLocaleMap[locale as Locale];
  }
  return intlLocaleMap.en;
}
