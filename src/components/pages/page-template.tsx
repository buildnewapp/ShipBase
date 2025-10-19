import type { PageDictionary } from "@/i18n/types";

interface PageTemplateProps {
  dictionary: PageDictionary;
}

export function PageTemplate({ dictionary }: PageTemplateProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl">
              {dictionary.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              {dictionary.subtitle}
            </p>
            <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
              {dictionary.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Coming Soon
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              This page is currently under development. We&apos;re working hard to bring you amazing content and features.
            </p>
            <div className="mt-6">
              <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>In active development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
