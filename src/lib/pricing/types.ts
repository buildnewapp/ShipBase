/**
 * 价格相关的TypeScript类型定义
 */

export type PricingPeriod = 'one-time' | 'monthly' | 'yearly';

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  limitations?: string[];
  popular?: boolean;
  pricing: {
    [K in PricingPeriod]: {
      price: number;
      currency: string;
      period: string;
      originalPrice?: number; // 用于显示折扣
      discount?: number; // 折扣百分比
    };
  };
}

export interface PricingConfig {
  currency: string;
  plans: PricingPlan[];
  billingCycles: {
    [K in PricingPeriod]: {
      label: string;
      description: string;
      discount?: string; // 年付折扣说明
    };
  };
}

export interface PricingComponentProps {
  locale?: string;
  showBillingToggle?: boolean;
  defaultPeriod?: PricingPeriod;
  onPlanSelect?: (planId: string, period: PricingPeriod) => void;
  className?: string;
}

export interface PricingCardProps {
  plan: PricingPlan;
  period: PricingPeriod;
  locale?: string;
  onSelect?: (planId: string, period: PricingPeriod) => void;
  className?: string;
}

export interface BillingToggleProps {
  period: PricingPeriod;
  onPeriodChange: (period: PricingPeriod) => void;
  locale?: string;
  className?: string;
}

// 国际化相关的价格类型
export interface PricingTranslations {
  title: string;
  subtitle: string;
  description: string;
  plansTitle: string;
  plansSubtitle: string;
  billingCycles: {
    [K in PricingPeriod]: {
      label: string;
      description: string;
    };
  };
  cta: {
    getStarted: string;
    buyNow: string;
    contactSales: string;
    currentPlan: string;
  };
  features: {
    included: string;
    limitations: string;
  };
  pricing: {
    free: string;
    popular: string;
    discount: string;
    save: string;
    perMonth: string;
    perYear: string;
    oneTime: string;
    forever: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
}
