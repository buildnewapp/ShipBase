import { enDictionary } from "@/i18n/locales/en";
import { zhDictionary } from "@/i18n/locales/zh";
import { jaDictionary } from "@/i18n/locales/ja";
import { esDictionary } from "@/i18n/locales/es";
import { arDictionary } from "@/i18n/locales/ar";
import { idDictionary } from "@/i18n/locales/id";
import { ptDictionary } from "@/i18n/locales/pt";
import { frDictionary } from "@/i18n/locales/fr";
import { ruDictionary } from "@/i18n/locales/ru";
import { deDictionary } from "@/i18n/locales/de";
import {
  defaultLocale,
  locales,
  type AppDictionary,
  type Locale,
  type PartialAppDictionary,
} from "@/i18n/types";

const fallbackDictionary = enDictionary;

const dictionaries: Partial<Record<Locale, PartialAppDictionary>> = {
  en: enDictionary,
  zh: zhDictionary,
  ja: jaDictionary,
  es: esDictionary,
  ar: arDictionary,
  id: idDictionary,
  pt: ptDictionary,
  fr: frDictionary,
  ru: ruDictionary,
  de: deDictionary,
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
