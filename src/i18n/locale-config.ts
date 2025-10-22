import type { Locale } from "@/i18n/types";

const intlLocaleMap: Record<Locale, string> = {
  en: "en-US",
  zh: "zh-CN",
  ja: "ja-JP",
};

export function resolveIntlLocale(locale: string | Locale | undefined): string {
  if (locale && Object.prototype.hasOwnProperty.call(intlLocaleMap, locale)) {
    return intlLocaleMap[locale as Locale];
  }
  return intlLocaleMap.en;
}
