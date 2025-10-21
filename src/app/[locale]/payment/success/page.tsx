import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import Link from "next/link";

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

  return <PaymentSuccessContent dictionary={paymentSuccessDictionary} searchParams={resolvedSearchParams} />;
}

interface PaymentSuccessDictionary {
  title: string;
  subtitle: string;
  description: string;
  paymentDetails: {
    title: string;
    requestId: string;
    checkoutId: string;
    orderId: string;
    customerId: string;
    productId: string;
  };
  actions: {
    goToDashboard: string;
    viewOrders: string;
    contactSupport: string;
  };
  features: {
    title: string;
    items: string[];
  };
}

interface PaymentSuccessSearchParams {
  request_id?: string;
  checkout_id?: string;
  order_id?: string;
  customer_id?: string;
  product_id?: string;
  signature?: string;
}

function PaymentSuccessContent({ dictionary, searchParams }: { dictionary: PaymentSuccessDictionary; searchParams: PaymentSuccessSearchParams }) {
  // 从字典中推断语言
  const locale = dictionary.title === "支付成功" ? "zh" : dictionary.title === "支払い成功" ? "ja" : "en";
  
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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
          {/* Payment Details */}
          {(searchParams.request_id || searchParams.checkout_id || searchParams.order_id) && (
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                {dictionary.paymentDetails.title}
              </h2>
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 space-y-4">
                {searchParams.request_id && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">{dictionary.paymentDetails.requestId}:</span>
                    <span className="font-mono text-sm text-neutral-900 dark:text-neutral-100">{searchParams.request_id}</span>
                  </div>
                )}
                {searchParams.checkout_id && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">{dictionary.paymentDetails.checkoutId}:</span>
                    <span className="font-mono text-sm text-neutral-900 dark:text-neutral-100">{searchParams.checkout_id}</span>
                  </div>
                )}
                {searchParams.order_id && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">{dictionary.paymentDetails.orderId}:</span>
                    <span className="font-mono text-sm text-neutral-900 dark:text-neutral-100">{searchParams.order_id}</span>
                  </div>
                )}
                {searchParams.customer_id && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">{dictionary.paymentDetails.customerId}:</span>
                    <span className="font-mono text-sm text-neutral-900 dark:text-neutral-100">{searchParams.customer_id}</span>
                  </div>
                )}
                {searchParams.product_id && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">{dictionary.paymentDetails.productId}:</span>
                    <span className="font-mono text-sm text-neutral-900 dark:text-neutral-100">{searchParams.product_id}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              {dictionary.features.title}
            </h2>
            <ul className="space-y-4">
              {dictionary.features.items.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-neutral-600 dark:text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center">
            {locale === "zh" ? "快速操作" : locale === "ja" ? "クイックアクション" : "Quick Actions"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Link
              href="/dashboard"
              className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {dictionary.actions.goToDashboard}
            </Link>
            <Link
              href="/orders"
              className="block w-full rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-4 py-3 text-center text-sm font-semibold text-neutral-900 dark:text-neutral-100 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {dictionary.actions.viewOrders}
            </Link>
            <Link
              href="/contact"
              className="block w-full rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-4 py-3 text-center text-sm font-semibold text-neutral-900 dark:text-neutral-100 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {dictionary.actions.contactSupport}
            </Link>
          </div>
        </div>
      </div>
    </div>
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
