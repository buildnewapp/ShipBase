"use client";

import { useRouter, usePathname } from "next/navigation";
import { locales, defaultLocale, type Locale } from "@/i18n";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: Locale) => {
    // 构建新的路径
    let newPath = pathname;
    
    // 如果当前路径包含语言参数，替换它
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0 && locales.includes(pathSegments[0] as Locale)) {
      // 替换第一个段（语言代码）
      if (locale === defaultLocale) {
        // 默认语言不需要前缀，移除语言代码
        pathSegments.shift();
        newPath = '/' + pathSegments.join('/');
        if (newPath === '/') {
          newPath = '/';
        }
      } else {
        // 非默认语言需要前缀
        pathSegments[0] = locale;
        newPath = '/' + pathSegments.join('/');
      }
    } else {
      // 如果没有语言参数（当前是默认语言）
      if (locale === defaultLocale) {
        // 保持当前路径不变
        newPath = pathname;
      } else {
        // 添加语言前缀
        newPath = `/${locale}${pathname === '/' ? '' : pathname}`;
      }
    }
    
    router.push(newPath);
  };

  const getLanguageLabel = (locale: Locale) => {
    switch (locale) {
      case 'en':
        return 'English';
      case 'zh':
        return '中文';
      case 'es':
        return 'Español';
      case 'ar':
        return 'العربية';
      case 'id':
        return 'Bahasa Indonesia';
      case 'pt':
        return 'Português';
      case 'fr':
        return 'Français';
      case 'ja':
        return '日本語';
      case 'ru':
        return 'Русский';
      case 'de':
        return 'Deutsch';
      default:
        return locale;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-2 md:w-8 md:p-0">
          <Languages className="h-4 w-4" />
          <span className="ml-1 md:hidden">{getLanguageLabel(currentLocale)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className={locale === currentLocale ? "bg-accent" : ""}
          >
            {getLanguageLabel(locale)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
