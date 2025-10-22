import type { Locale } from "@/i18n/types";

export interface PaymentSuccessDictionary {
  title: string;
  subtitle: string;
  description: string;
  loading: {
    processing: string;
  };
  errors: {
    generic: string;
    network: string;
  };
  order: {
    title: string;
    number: string;
    product: string;
    amount: string;
    paidAt: string;
    status: string;
    paidLabel: string;
  };
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
  quickActionsTitle: string;
}

export interface PaymentFailedDictionary {
  title: string;
  subtitle: string;
  description: string;
  actions: {
    tryAgain: string;
    contactSupport: string;
    goBack: string;
  };
  troubleshooting: {
    title: string;
    items: string[];
  };
  nextStepsTitle: string;
}

const paymentSuccessCopy: Record<Locale, PaymentSuccessDictionary> = {
  en: {
    title: "Payment Successful",
    subtitle: "Thank you for your purchase!",
    description:
      "Your payment has been successfully processed. You can now start using our services.",
    loading: {
      processing: "Processing payment information...",
    },
    errors: {
      generic: "We ran into an issue while processing your payment information.",
      network: "Network error, please try again later.",
    },
    order: {
      title: "Order Details",
      number: "Order Number",
      product: "Product",
      amount: "Amount",
      paidAt: "Paid At",
      status: "Status",
      paidLabel: "Paid",
    },
    paymentDetails: {
      title: "Payment Details",
      requestId: "Request ID",
      checkoutId: "Checkout ID",
      orderId: "Order ID",
      customerId: "Customer ID",
      productId: "Product ID",
    },
    actions: {
      goToDashboard: "Go to Dashboard",
      viewOrders: "View Orders",
      contactSupport: "Contact Support",
    },
    features: {
      title: "What you can do next:",
      items: [
        "Access all premium features",
        "Enjoy priority technical support",
        "Get commercial use license",
        "Access complete documentation and tutorials",
      ],
    },
    quickActionsTitle: "Quick Actions",
  },
  zh: {
    title: "支付成功",
    subtitle: "感谢您的购买！",
    description: "您的支付已成功处理，您现在可以开始使用我们的服务了。",
    loading: {
      processing: "正在处理支付信息...",
    },
    errors: {
      generic: "处理支付信息时发生错误。",
      network: "网络错误，请稍后重试。",
    },
    order: {
      title: "订单详情",
      number: "订单号",
      product: "产品",
      amount: "金额",
      paidAt: "支付时间",
      status: "状态",
      paidLabel: "已支付",
    },
    paymentDetails: {
      title: "支付详情",
      requestId: "请求ID",
      checkoutId: "支付ID",
      orderId: "订单ID",
      customerId: "客户ID",
      productId: "产品ID",
    },
    actions: {
      goToDashboard: "前往控制台",
      viewOrders: "查看订单",
      contactSupport: "联系支持",
    },
    features: {
      title: "接下来您可以：",
      items: [
        "访问所有高级功能",
        "享受优先技术支持",
        "获得商业使用许可",
        "访问完整文档和教程",
      ],
    },
    quickActionsTitle: "快速操作",
  },
  ja: {
    title: "支払い成功",
    subtitle: "ご購入ありがとうございます！",
    description:
      "お支払いが正常に処理されました。今すぐサービスをご利用いただけます。",
    loading: {
      processing: "支払い情報を処理中...",
    },
    errors: {
      generic: "支払い情報の処理中にエラーが発生しました。",
      network: "ネットワークエラーが発生しました。後でもう一度お試しください。",
    },
    order: {
      title: "注文詳細",
      number: "注文番号",
      product: "商品",
      amount: "金額",
      paidAt: "支払日時",
      status: "状態",
      paidLabel: "支払済み",
    },
    paymentDetails: {
      title: "支払い詳細",
      requestId: "リクエストID",
      checkoutId: "支払いID",
      orderId: "注文ID",
      customerId: "顧客ID",
      productId: "商品ID",
    },
    actions: {
      goToDashboard: "ダッシュボードへ",
      viewOrders: "注文を確認",
      contactSupport: "サポートに連絡",
    },
    features: {
      title: "次にできること：",
      items: [
        "すべての高度な機能にアクセス",
        "優先技術サポートを受ける",
        "商用利用ライセンスを取得",
        "完全なドキュメントとチュートリアルにアクセス",
      ],
    },
    quickActionsTitle: "クイックアクション",
  },
};

const paymentFailedCopy: Record<Locale, PaymentFailedDictionary> = {
  en: {
    title: "Payment Failed",
    subtitle: "Sorry, there was an issue processing your payment",
    description:
      "Your payment could not be completed successfully. Please check your payment information or try a different payment method.",
    actions: {
      tryAgain: "Try Again",
      contactSupport: "Contact Support",
      goBack: "Back to Pricing",
    },
    troubleshooting: {
      title: "Common troubleshooting:",
      items: [
        "Check if your card has sufficient balance",
        "Verify your payment information is correct",
        "Try using a different payment method",
        "Contact your bank to confirm transaction limits",
      ],
    },
    nextStepsTitle: "Next Steps",
  },
  zh: {
    title: "支付失败",
    subtitle: "很抱歉，支付处理出现问题",
    description:
      "您的支付未能成功完成。请检查您的支付信息或尝试其他支付方式。",
    actions: {
      tryAgain: "重试支付",
      contactSupport: "联系支持",
      goBack: "返回定价",
    },
    troubleshooting: {
      title: "常见问题解决：",
      items: [
        "检查银行卡余额是否充足",
        "确认支付信息输入正确",
        "尝试使用不同的支付方式",
        "联系银行确认交易限制",
      ],
    },
    nextStepsTitle: "下一步操作",
  },
  ja: {
    title: "支払い失敗",
    subtitle: "申し訳ございませんが、支払い処理に問題が発生しました",
    description:
      "お支払いが正常に完了しませんでした。支払い情報をご確認いただくか、他の支払い方法をお試しください。",
    actions: {
      tryAgain: "支払いを再試行",
      contactSupport: "サポートに連絡",
      goBack: "料金に戻る",
    },
    troubleshooting: {
      title: "よくある問題の解決：",
      items: [
        "カードの残高が十分かご確認ください",
        "支払い情報の入力が正しいかご確認ください",
        "別の支払い方法をお試しください",
        "銀行に連絡して取引制限を確認してください",
      ],
    },
    nextStepsTitle: "次のステップ",
  },
};

export function getPaymentSuccessDictionary(locale: Locale): PaymentSuccessDictionary {
  return paymentSuccessCopy[locale] ?? paymentSuccessCopy.en;
}

export function getPaymentFailedDictionary(locale: Locale): PaymentFailedDictionary {
  return paymentFailedCopy[locale] ?? paymentFailedCopy.en;
}
