import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import Link from "next/link";
import { getPaymentFailedDictionary, type PaymentFailedDictionary } from "@/i18n/pages/payment";
import type { Locale } from "@/i18n/types";

interface PaymentFailedPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function PaymentFailedPage({ params }: PaymentFailedPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }
  
  const paymentFailedDictionary = getPaymentFailedDictionary(normalizedLocale as Locale);

  return <PaymentFailedContent dictionary={paymentFailedDictionary} />;
}

function PaymentFailedContent({ dictionary }: { dictionary: PaymentFailedDictionary }) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
              <svg className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Troubleshooting */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              {dictionary.troubleshooting.title}
            </h2>
            <ul className="space-y-4">
              {dictionary.troubleshooting.items.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c-1.171-1.025-3.071-1.025-4.242 0s-1.171 2.687 0 3.712c1.171 1.025 3.071 1.025 4.242 0s1.171-2.687 0-3.712zM12 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                  <span className="text-neutral-600 dark:text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              {dictionary.nextStepsTitle}
            </h2>
            <div className="space-y-4">
              <Link
                href="/pricing"
                className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {dictionary.actions.tryAgain}
              </Link>
              <Link
                href="/contact"
                className="block w-full rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-4 py-3 text-center text-sm font-semibold text-neutral-900 dark:text-neutral-100 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {dictionary.actions.contactSupport}
              </Link>
              <Link
                href="/pricing"
                className="block w-full rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-4 py-3 text-center text-sm font-semibold text-neutral-900 dark:text-neutral-100 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {dictionary.actions.goBack}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PaymentFailedPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Payment Failed - ShipBase",
      description: "There was an issue processing your payment",
    };
  }

  const paymentFailedDictionary = getPaymentFailedDictionary(normalizedLocale as Locale);
  const { title, description } = paymentFailedDictionary;
  
  return {
    title: `${title} - ShipBase`,
    description,
  };
}
