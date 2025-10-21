import { Metadata } from "next";
import { getDictionary, locales } from "@/i18n";
import { OrdersPage } from "@/components/orders/orders-page";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Orders - ShipBase",
      description: "View your orders",
    };
  }
  
  const dict = await getDictionary(normalizedLocale);
  
  return {
    title: dict.pages.orders.title,
    description: dict.pages.orders.subtitle,
  };
}

export default async function OrdersPageRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }
  
  const dict = await getDictionary(normalizedLocale);
  
  return <OrdersPage dict={dict.pages.orders} />;
}
