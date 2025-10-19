"use client";

import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/hooks";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, dictionary } = useLocale();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href={locale === 'en' ? '/' : `/${locale}/`} className="flex items-center space-x-2">
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
            href={locale === 'en' ? '/features' : `/${locale}/features`}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
          >
            {dictionary.header.features}
          </Link>
          <Link
            href={locale === 'en' ? '/pricing' : `/${locale}/pricing`}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
          >
            {dictionary.header.pricing}
          </Link>
          <Link
            href={locale === 'en' ? '/docs' : `/${locale}/docs`}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
          >
            {dictionary.header.docs}
          </Link>
          <Link
            href={locale === 'en' ? '/about' : `/${locale}/about`}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
          >
            {dictionary.header.about}
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-2">
          <LanguageSwitcher currentLocale={locale} />
          <ThemeSwitcher dictionary={dictionary.header} />
          <Button variant="ghost" asChild>
            <Link href="/login">
              {dictionary.header.login}
            </Link>
          </Button>
          <Button asChild>
            <Link href="/signup">
              {dictionary.header.signup}
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
              href={locale === 'en' ? '/features' : `/${locale}/features`}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.header.features}
            </Link>
            <Link
              href={locale === 'en' ? '/pricing' : `/${locale}/pricing`}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.header.pricing}
            </Link>
            <Link
              href={locale === 'en' ? '/docs' : `/${locale}/docs`}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.header.docs}
            </Link>
            <Link
              href={locale === 'en' ? '/about' : `/${locale}/about`}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.header.about}
            </Link>
            
            {/* 移动端切换按钮 */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center justify-between space-x-4">
                <LanguageSwitcher currentLocale={locale} />
                <ThemeSwitcher dictionary={dictionary.header} />
              </div>
            </div>
            
            <div className="pt-4 space-y-3">
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {dictionary.header.login}
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {dictionary.header.signup}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
