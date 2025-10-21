import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { PaymentSuccessHandler } from "@/components/payment/payment-success-handler";

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
  
  // 创建支付成功页面的字典
  const paymentSuccessDictionary = {
    title: locale === "zh" ? "支付成功" : locale === "ja" ? "支払い成功" : "Payment Successful",
    subtitle: locale === "zh" ? "感谢您的购买！" : locale === "ja" ? "ご購入ありがとうございます！" : "Thank you for your purchase!",
    description: locale === "zh" 
      ? "您的支付已成功处理，您现在可以开始使用我们的服务了。" 
      : locale === "ja" 
      ? "お支払いが正常に処理されました。今すぐサービスをご利用いただけます。"
      : "Your payment has been successfully processed. You can now start using our services.",
    paymentDetails: {
      title: locale === "zh" ? "支付详情" : locale === "ja" ? "支払い詳細" : "Payment Details",
      requestId: locale === "zh" ? "请求ID" : locale === "ja" ? "リクエストID" : "Request ID",
      checkoutId: locale === "zh" ? "支付ID" : locale === "ja" ? "支払いID" : "Checkout ID",
      orderId: locale === "zh" ? "订单ID" : locale === "ja" ? "注文ID" : "Order ID",
      customerId: locale === "zh" ? "客户ID" : locale === "ja" ? "顧客ID" : "Customer ID",
      productId: locale === "zh" ? "产品ID" : locale === "ja" ? "商品ID" : "Product ID",
    },
    actions: {
      goToDashboard: locale === "zh" ? "前往控制台" : locale === "ja" ? "ダッシュボードへ" : "Go to Dashboard",
      viewOrders: locale === "zh" ? "查看订单" : locale === "ja" ? "注文を確認" : "View Orders",
      contactSupport: locale === "zh" ? "联系支持" : locale === "ja" ? "サポートに連絡" : "Contact Support"
    },
    features: {
      title: locale === "zh" ? "接下来您可以：" : locale === "ja" ? "次にできること：" : "What you can do next:",
      items: locale === "zh" ? [
        "访问所有高级功能",
        "享受优先技术支持",
        "获得商业使用许可",
        "访问完整文档和教程"
      ] : locale === "ja" ? [
        "すべての高度な機能にアクセス",
        "優先技術サポートを受ける",
        "商用利用ライセンスを取得",
        "完全なドキュメントとチュートリアルにアクセス"
      ] : [
        "Access all premium features",
        "Enjoy priority technical support",
        "Get commercial use license",
        "Access complete documentation and tutorials"
      ]
    }
  };

  return <PaymentSuccessHandler dictionary={paymentSuccessDictionary} searchParams={resolvedSearchParams} />;
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

  const title = locale === "zh" ? "支付成功" : locale === "ja" ? "支払い成功" : "Payment Successful";
  const description = locale === "zh" 
    ? "您的支付已成功处理，您现在可以开始使用我们的服务了。" 
    : locale === "ja" 
    ? "お支払いが正常に処理されました。今すぐサービスをご利用いただけます。"
    : "Your payment has been successfully processed. You can now start using our services.";
  
  return {
    title: `${title} - ShipBase`,
    description,
  };
}
