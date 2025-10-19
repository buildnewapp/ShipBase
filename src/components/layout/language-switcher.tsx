"use client";

import { useRouter, usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n";
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
      case 'ja':
        return '日本語';
      default:
        return locale;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-2">
          <Languages className="h-4 w-4" />
          <span className="ml-1">{getLanguageLabel(currentLocale)}</span>
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
