import type { Locale } from "@/i18n/types";

export interface PricingCopy {
  header: {
    title: string;
    subtitle: string;
    yearlyDiscount: string;
  };
  card: {
    popular: string;
    getStarted: string;
    buyNow: string;
    contactSales: string;
    included: string;
    limitations: string;
    save: string;
    processing: string;
  };
  billingToggle: {
    discount: string;
  };
}

const pricingCopy: Record<Locale, PricingCopy> = {
  en: {
    header: {
      title: "Pricing Plans",
      subtitle:
        "Simple and transparent pricing with no hidden fees. Choose the plan that best fits your needs, upgrade anytime.",
      yearlyDiscount: "Save 20% with yearly billing compared to monthly billing",
    },
    card: {
      popular: "Popular",
      getStarted: "Get Started",
      buyNow: "Buy Now",
      contactSales: "Contact Sales",
      included: "Included Features",
      limitations: "Limitations",
      save: "Save",
      processing: "Processing...",
    },
    billingToggle: {
      discount: "20% OFF",
    },
  },
  zh: {
    header: {
      title: "价格方案",
      subtitle: "简单透明的定价，没有隐藏费用。选择最适合您需求的方案，随时可以升级。",
      yearlyDiscount: "年付享受 20% 优惠，相比月付节省更多费用",
    },
    card: {
      popular: "推荐",
      getStarted: "开始使用",
      buyNow: "立即购买",
      contactSales: "联系销售",
      included: "包含功能",
      limitations: "限制说明",
      save: "节省",
      processing: "处理中...",
    },
    billingToggle: {
      discount: "20% 折扣",
    },
  },
  ja: {
    header: {
      title: "料金プラン",
      subtitle:
        "シンプルで透明な料金設定、隠れた費用はありません。ニーズに最適なプランを選択し、いつでもアップグレードできます。",
      yearlyDiscount: "年払いで月払いと比較して20%お得",
    },
    card: {
      popular: "人気",
      getStarted: "始める",
      buyNow: "今すぐ購入",
      contactSales: "営業に連絡",
      included: "含まれる機能",
      limitations: "制限事項",
      save: "節約",
      processing: "処理中...",
    },
    billingToggle: {
      discount: "20% 割引",
    },
  },
};

export function getPricingCopy(locale: Locale): PricingCopy {
  return pricingCopy[locale] ?? pricingCopy.en;
}
