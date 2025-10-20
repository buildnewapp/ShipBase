import { Metadata } from "next";
import { getDictionary } from "@/i18n";
import { OrdersPage } from "@/components/orders/orders-page";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  
  return {
    title: dict.pages.orders.title,
    description: dict.pages.orders.subtitle,
  };
}

export default async function OrdersPageRoute({
  params,
}: {
  params: { locale: string };
}) {
  const dict = await getDictionary(params.locale);
  
  return <OrdersPage dict={dict.pages.orders} />;
}
