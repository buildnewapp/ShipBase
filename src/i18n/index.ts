import enDictionary from "@/i18n/locales/en.json";
import zhDictionary from "@/i18n/locales/zh.json";
import jaDictionary from "@/i18n/locales/ja.json";
import esDictionary from "@/i18n/locales/es.json";
import arDictionary from "@/i18n/locales/ar.json";
import idDictionary from "@/i18n/locales/id.json";
import ptDictionary from "@/i18n/locales/pt.json";
import frDictionary from "@/i18n/locales/fr.json";
import ruDictionary from "@/i18n/locales/ru.json";
import deDictionary from "@/i18n/locales/de.json";
import {
  defaultLocale,
  locales,
  type AppDictionary,
  type Locale,
  type PartialAppDictionary,
} from "@/i18n/types";

const fallbackDictionary = enDictionary as AppDictionary;

const dictionaries: Partial<Record<Locale, PartialAppDictionary>> = {
  en: enDictionary as AppDictionary,
  zh: zhDictionary as AppDictionary,
  ja: jaDictionary as AppDictionary,
  es: esDictionary as AppDictionary,
  ar: arDictionary as AppDictionary,
  id: idDictionary as AppDictionary,
  pt: ptDictionary as AppDictionary,
  fr: frDictionary as AppDictionary,
  ru: ruDictionary as AppDictionary,
  de: deDictionary as AppDictionary,
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

const maybeStructuredClone = (globalThis as {
  structuredClone?: <T>(value: T) => T;
}).structuredClone;

function cloneDeep<T>(value: T): T {
  if (typeof maybeStructuredClone === "function") {
    return maybeStructuredClone(value);
  }

  return JSON.parse(JSON.stringify(value)) as T;
}

function mergeDeep<T>(target: T, source?: PartialAppDictionary): T {
  if (!source) {
    return target;
  }

  const stack: Array<{ target: Record<string, unknown>; source: Record<string, unknown> }> = [];

  if (isPlainObject(target) && isPlainObject(source)) {
    stack.push({ target: target as Record<string, unknown>, source: source as Record<string, unknown> });
  }

  while (stack.length > 0) {
    const { target: currentTarget, source: currentSource } = stack.pop()!;

    for (const [key, value] of Object.entries(currentSource)) {
      if (value === undefined) {
        continue;
      }

      const existing = currentTarget[key];

      if (isPlainObject(existing) && isPlainObject(value)) {
        stack.push({
          target: existing as Record<string, unknown>,
          source: value,
        });
      } else {
        currentTarget[key] = value as unknown;
      }
    }
  }

  return target;
}

export function getDictionary(locale: Locale = defaultLocale): AppDictionary {
  const base = cloneDeep(fallbackDictionary);
  const dictionary = dictionaries[locale];

  if (!dictionary) {
    return base;
  }

  return mergeDeep(base, dictionary);
}

export { defaultLocale, locales };
export type { Locale, AppDictionary } from "@/i18n/types";
export type {
  AuthPanelDictionary,
  HomeDictionary,
  RichText,
  RichTextSegment,
} from "@/i18n/types";
