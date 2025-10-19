"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n";
import { getDictionary } from "@/i18n";

export function useLocale() {
  const pathname = usePathname();
  
  // 检测当前语言
  const getCurrentLocale = (): Locale => {
    try {
      const pathSegments = pathname.split('/').filter(Boolean);
      if (pathSegments.length > 0 && locales.includes(pathSegments[0] as Locale)) {
        return pathSegments[0] as Locale;
      }
      return 'zh'; // 默认中文
    } catch (error) {
      console.error('Error detecting locale:', error);
      return 'zh';
    }
  };
  
  const currentLocale = getCurrentLocale();
  const dictionary = getDictionary(currentLocale);

  return {
    locale: currentLocale,
    dictionary,
  };
}
