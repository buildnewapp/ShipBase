"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { locales, type Locale } from "@/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: Locale) => {
    setIsOpen(false);
    
    // 构建新的路径
    let newPath = pathname;
    
    // 如果当前路径包含语言参数，替换它
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0 && locales.includes(pathSegments[0] as Locale)) {
      // 替换第一个段（语言代码）
      pathSegments[0] = locale;
      newPath = '/' + pathSegments.join('/');
    } else {
      // 如果没有语言参数，添加语言前缀
      newPath = `/${locale}${pathname === '/' ? '' : pathname}`;
    }
    
    router.push(newPath);
  };

  const getLanguageLabel = (locale: Locale) => {
    switch (locale) {
      case 'en':
        return 'English';
      case 'zh':
        return '中文';
      default:
        return locale;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
        aria-label="切换语言"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span>{getLanguageLabel(currentLocale)}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* 下拉菜单 */}
          <div className="absolute right-0 top-full mt-1 w-32 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg z-20">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={`w-full px-3 py-2 text-sm text-left hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  locale === currentLocale
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-neutral-700 dark:text-neutral-300'
                }`}
              >
                {getLanguageLabel(locale)}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
