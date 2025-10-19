import { notFound } from "next/navigation";
import { AuthPanel } from "@/components/auth/auth-panel";
import { getDictionary, locales } from "@/i18n";

interface LocaleLoginPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLoginPage({ params }: LocaleLoginPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // 验证locale是否有效
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {dictionary.pages.login.title}
            </h1>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {dictionary.pages.login.subtitle}
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              {dictionary.pages.login.description}
            </p>
          </div>
          
          <AuthPanel dictionary={dictionary.authPanel} />
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLoginPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Sign In - ShipBase",
      description: "Sign in to your account to continue your journey with ShipBase.",
    };;
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `${dictionary.pages.login.title} - ShipBase`,
    description: dictionary.pages.login.description,
  };;
}
