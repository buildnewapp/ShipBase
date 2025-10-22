import { enDictionary } from "@/i18n/locales/en";
import { zhDictionary } from "@/i18n/locales/zh";
import { jaDictionary } from "@/i18n/locales/ja";
import {
  defaultLocale,
  locales,
  type AppDictionary,
  type Locale,
} from "@/i18n/types";

const fallbackDictionary = enDictionary;

const dictionaries: Partial<Record<Locale, AppDictionary>> = {
  en: enDictionary,
  zh: zhDictionary,
  ja: jaDictionary,
  es: enDictionary,
  ar: enDictionary,
  id: enDictionary,
  pt: enDictionary,
  fr: enDictionary,
  ru: enDictionary,
  de: enDictionary,
};

export function getDictionary(locale: Locale = defaultLocale): AppDictionary {
  return dictionaries[locale] ?? fallbackDictionary;
}

export { defaultLocale, locales };
export type { Locale, AppDictionary } from "@/i18n/types";
export type {
  AuthPanelDictionary,
  HomeDictionary,
  RichText,
  RichTextSegment,
} from "@/i18n/types";
