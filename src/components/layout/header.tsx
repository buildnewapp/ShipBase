"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              ShipBase
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href={`/${currentLocale}/features`}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
          >
            {currentLocale === 'en' ? 'Features' : '功能特性'}
          </Link>
          <Link
            href={`/${currentLocale}/pricing`}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
          >
            {currentLocale === 'en' ? 'Pricing' : '价格方案'}
          </Link>
          <Link
            href={`/${currentLocale}/docs`}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
          >
            {currentLocale === 'en' ? 'Docs' : '文档'}
          </Link>
          <Link
            href={`/${currentLocale}/about`}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
          >
            {currentLocale === 'en' ? 'About' : '关于我们'}
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-2">
          <LanguageSwitcher currentLocale={currentLocale} />
          <ThemeSwitcher />
          <Button variant="ghost" asChild>
            <Link href="/login">
              {currentLocale === 'en' ? 'Login' : '登录'}
            </Link>
          </Button>
          <Button asChild>
            <Link href="/signup">
              {currentLocale === 'en' ? 'Free Trial' : '免费试用'}
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
          <div className="px-4 py-6 space-y-4">
            <Link
              href={`/${currentLocale}/features`}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {currentLocale === 'en' ? 'Features' : '功能特性'}
            </Link>
            <Link
              href={`/${currentLocale}/pricing`}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {currentLocale === 'en' ? 'Pricing' : '价格方案'}
            </Link>
            <Link
              href={`/${currentLocale}/docs`}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {currentLocale === 'en' ? 'Docs' : '文档'}
            </Link>
            <Link
              href={`/${currentLocale}/about`}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {currentLocale === 'en' ? 'About' : '关于我们'}
            </Link>
            
            {/* 移动端切换按钮 */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center justify-between space-x-4">
                <LanguageSwitcher currentLocale={currentLocale} />
                <ThemeSwitcher />
              </div>
            </div>
            
            <div className="pt-4 space-y-3">
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {currentLocale === 'en' ? 'Login' : '登录'}
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {currentLocale === 'en' ? 'Free Trial' : '免费试用'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
