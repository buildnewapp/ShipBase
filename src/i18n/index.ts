import { enDictionary } from "@/i18n/locales/en";
import { zhDictionary } from "@/i18n/locales/zh";
import { jaDictionary } from "@/i18n/locales/ja";
import {
  defaultLocale,
  locales,
  type AppDictionary,
  type Locale,
} from "@/i18n/types";

const dictionaries: Record<Locale, AppDictionary> = {
  en: enDictionary,
  zh: zhDictionary,
  ja: jaDictionary,
};

export function getDictionary(locale: Locale = defaultLocale): AppDictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export { defaultLocale, locales };
export type { Locale, AppDictionary } from "@/i18n/types";
export type {
  AuthPanelDictionary,
  HomeDictionary,
  RichText,
  RichTextSegment,
} from "@/i18n/types";
