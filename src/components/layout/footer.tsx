import Link from "next/link";
import {FooterDictionary, type Locale, locales} from "@/i18n/types";
import {Languages} from "lucide-react";
import {Button} from "@/components/ui/button";
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";

interface FooterProps {
  dictionary: FooterDictionary;
  currentLocale: string;
}

export function Footer({ dictionary, currentLocale }: FooterProps) {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                ShipBase
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs">
              {dictionary.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {dictionary.product}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={currentLocale === 'en' ? '/features' : `/${currentLocale}/features`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
                >
                  {dictionary.features}
                </Link>
              </li>
              <li>
                <Link
                  href={currentLocale === 'en' ? '/pricing' : `/${currentLocale}/pricing`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
                >
                  {dictionary.pricing}
                </Link>
              </li>
              <li>
                <Link
                  href={currentLocale === 'en' ? '/integrations' : `/${currentLocale}/integrations`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
                >
                  {dictionary.integrations}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {dictionary.support}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={currentLocale === 'en' ? '/docs' : `/${currentLocale}/docs`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
                >
                  {dictionary.docs}
                </Link>
              </li>
              <li>
                <Link
                  href={currentLocale === 'en' ? '/help' : `/${currentLocale}/help`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
                >
                  {dictionary.helpCenter}
                </Link>
              </li>
              <li>
                <Link
                  href={currentLocale === 'en' ? '/contact' : `/${currentLocale}/contact`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
                >
                  {dictionary.contactUs}
                </Link>
              </li>
              <li>
                <Link
                  href={currentLocale === 'en' ? '/status' : `/${currentLocale}/status`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
                >
                  {dictionary.serviceStatus}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {dictionary.legal}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={currentLocale === 'en' ? '/privacy' : `/${currentLocale}/privacy`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
                >
                  {dictionary.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href={currentLocale === 'en' ? '/terms' : `/${currentLocale}/terms`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
                >
                  {dictionary.termsOfService}
                </Link>
              </li>
              <li>
                <Link
                  href={currentLocale === 'en' ? '/cookies' : `/${currentLocale}/cookies`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
                >
                  {dictionary.cookiePolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              {dictionary.copyright.replace('2024', currentYear.toString())}
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-neutral-600 dark:text-neutral-300">
                {dictionary.madeWithLove}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <div className="flex flex-col items-center justify-center gap-2 space-y-4 md:flex-row md:space-y-0">
            {locales.map((locale) => (
              <Link
                  key={locale}
                  href={locale === 'en' ? '/' : `/${locale}/`}
                  className="cursor-pointer"
              >
                <Button variant="outline" className="cursor-pointer">
                  {getLanguageLabel(locale)}
                </Button>
              </Link>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}
