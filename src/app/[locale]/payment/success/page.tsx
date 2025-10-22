import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { PaymentSuccessHandler } from "@/components/payment/payment-success-handler";
import { getPaymentSuccessDictionary } from "@/i18n/pages/payment";
import type { Locale } from "@/i18n/types";

interface PaymentSuccessPageProps {
  params: Promise<{
    locale: string;
  }>;
  searchParams: Promise<{
    request_id?: string;
    checkout_id?: string;
    order_id?: string;
    customer_id?: string;
    product_id?: string;
    signature?: string;
  }>;
}

export default async function PaymentSuccessPage({ params, searchParams }: PaymentSuccessPageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }
  
  const paymentSuccessDictionary = getPaymentSuccessDictionary(normalizedLocale as Locale);

  return (
    <PaymentSuccessHandler
      dictionary={paymentSuccessDictionary}
      searchParams={resolvedSearchParams}
      locale={normalizedLocale as Locale}
    />
  );
}


export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PaymentSuccessPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Payment Successful - ShipBase",
      description: "Your payment has been successfully processed",
    };
  }

  const paymentSuccessDictionary = getPaymentSuccessDictionary(normalizedLocale as Locale);
  const { title, description } = paymentSuccessDictionary;
  
  return {
    title: `${title} - ShipBase`,
    description,
  };
}
