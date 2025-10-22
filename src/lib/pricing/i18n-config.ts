/**
 * 国际化价格配置文件
 * 支持一次性付费、按月付费、按年付费
 */

import { type Locale } from "@/i18n/types";

const FALLBACK_LOCALE: Locale = "en";

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

// 国际化价格配置
export const pricingConfigs: Partial<Record<Locale, PricingConfig>> = {
  zh: {
    currency: 'CNY',
    billingCycles: {
      'one-time': {
        label: '一次性付费',
        description: '永久使用，无需续费'
      },
      'monthly': {
        label: '按月付费',
        description: '灵活付费，随时取消'
      },
      'yearly': {
        label: '按年付费',
        description: '年付优惠 20%'
      }
    },
    plans: [
      {
        id: 'free',
        name: '免费版',
        description: '适合个人开发者和小型项目',
        features: [
          '基础 Next.js 模板',
          'GitHub 集成',
          '社区支持',
          '基础文档',
          '个人使用许可'
        ],
        limitations: [
          '不支持商业使用',
          '无技术支持',
          '功能有限'
        ],
        popular: false,
        pricing: {
          'one-time': {
            price: 0,
            currency: 'CNY',
            period: '永久免费'
          },
          'monthly': {
            price: 0,
            currency: 'CNY',
            period: '永久免费'
          },
          'yearly': {
            price: 0,
            currency: 'CNY',
            period: '永久免费'
          }
        }
      },
      {
        id: 'professional',
        name: '专业版',
        description: '适合初创公司和中小企业',
        features: [
          '完整功能模板',
          '身份验证系统',
          '支付集成',
          '数据库设置',
          'AI 集成',
          '一键部署',
          '邮件支持',
          '商业使用许可',
          '源码访问'
        ],
        limitations: [],
        popular: true,
        pricing: {
          'one-time': {
            price: 299,
            currency: 'CNY',
            period: '一次性付费'
          },
          'monthly': {
            price: 39,
            currency: 'CNY',
            period: '每月'
          },
          'yearly': {
            price: 374,
            currency: 'CNY',
            period: '每年',
            originalPrice: 468,
            discount: 20
          }
        }
      },
      {
        id: 'enterprise',
        name: '企业版',
        description: '适合大型企业和团队',
        features: [
          '专业版所有功能',
          '高级 AI 功能',
          '多租户支持',
          '高级分析',
          '优先技术支持',
          '定制开发服务',
          '团队协作功能',
          'SLA 保障',
          '培训服务'
        ],
        limitations: [],
        popular: false,
        pricing: {
          'one-time': {
            price: 999,
            currency: 'CNY',
            period: '一次性付费'
          },
          'monthly': {
            price: 129,
            currency: 'CNY',
            period: '每月'
          },
          'yearly': {
            price: 1238,
            currency: 'CNY',
            period: '每年',
            originalPrice: 1548,
            discount: 20
          }
        }
      }
    ]
  },
  en: {
    currency: 'USD',
    billingCycles: {
      'one-time': {
        label: 'One-time Payment',
        description: 'Pay once, use forever'
      },
      'monthly': {
        label: 'Monthly',
        description: 'Flexible billing, cancel anytime'
      },
      'yearly': {
        label: 'Yearly',
        description: 'Save 20% with annual billing'
      }
    },
    plans: [
      {
        id: 'free',
        name: 'Free',
        description: 'Perfect for individual developers and small projects',
        features: [
          'Basic Next.js template',
          'GitHub integration',
          'Community support',
          'Basic documentation',
          'Personal use license'
        ],
        limitations: [
          'No commercial use',
          'No technical support',
          'Limited features'
        ],
        popular: false,
        pricing: {
          'one-time': {
            price: 0,
            currency: 'USD',
            period: 'Free forever'
          },
          'monthly': {
            price: 0,
            currency: 'USD',
            period: 'Free forever'
          },
          'yearly': {
            price: 0,
            currency: 'USD',
            period: 'Free forever'
          }
        }
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'Perfect for startups and small businesses',
        features: [
          'Complete feature templates',
          'Authentication system',
          'Payment integration',
          'Database setup',
          'AI integration',
          'One-click deployment',
          'Email support',
          'Commercial use license',
          'Source code access'
        ],
        limitations: [],
        popular: true,
        pricing: {
          'one-time': {
            price: 49,
            currency: 'USD',
            period: 'One-time payment'
          },
          'monthly': {
            price: 6,
            currency: 'USD',
            period: 'per month'
          },
          'yearly': {
            price: 58,
            currency: 'USD',
            period: 'per year',
            originalPrice: 72,
            discount: 20
          }
        }
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'Perfect for large enterprises and teams',
        features: [
          'All Professional features',
          'Advanced AI features',
          'Multi-tenant support',
          'Advanced analytics',
          'Priority technical support',
          'Custom development services',
          'Team collaboration features',
          'SLA guarantee',
          'Training services'
        ],
        limitations: [],
        popular: false,
        pricing: {
          'one-time': {
            price: 199,
            currency: 'USD',
            period: 'One-time payment'
          },
          'monthly': {
            price: 19,
            currency: 'USD',
            period: 'per month'
          },
          'yearly': {
            price: 182,
            currency: 'USD',
            period: 'per year',
            originalPrice: 228,
            discount: 20
          }
        }
      }
    ]
  },
  ja: {
    currency: 'JPY',
    billingCycles: {
      'one-time': {
        label: '一回払い',
        description: '一度支払えば永久に利用可能'
      },
      'monthly': {
        label: '月払い',
        description: '柔軟な支払い、いつでもキャンセル可能'
      },
      'yearly': {
        label: '年払い',
        description: '年払いで20%割引'
      }
    },
    plans: [
      {
        id: 'free',
        name: '無料版',
        description: '個人開発者や小規模プロジェクトに最適',
        features: [
          '基本的なNext.jsテンプレート',
          'GitHub統合',
          'コミュニティサポート',
          '基本ドキュメント',
          '個人利用ライセンス'
        ],
        limitations: [
          '商用利用不可',
          '技術サポートなし',
          '機能制限あり'
        ],
        popular: false,
        pricing: {
          'one-time': {
            price: 0,
            currency: 'JPY',
            period: '永久無料'
          },
          'monthly': {
            price: 0,
            currency: 'JPY',
            period: '永久無料'
          },
          'yearly': {
            price: 0,
            currency: 'JPY',
            period: '永久無料'
          }
        }
      },
      {
        id: 'professional',
        name: 'プロフェッショナル版',
        description: 'スタートアップや中小企業に最適',
        features: [
          '完全な機能テンプレート',
          '認証システム',
          '決済統合',
          'データベース設定',
          'AI統合',
          'ワンクリックデプロイ',
          'メールサポート',
          '商用利用ライセンス',
          'ソースコードアクセス'
        ],
        limitations: [],
        popular: true,
        pricing: {
          'one-time': {
            price: 7200,
            currency: 'JPY',
            period: '一回払い'
          },
          'monthly': {
            price: 900,
            currency: 'JPY',
            period: '月額'
          },
          'yearly': {
            price: 8640,
            currency: 'JPY',
            period: '年額',
            originalPrice: 10800,
            discount: 20
          }
        }
      },
      {
        id: 'enterprise',
        name: 'エンタープライズ版',
        description: '大企業やチームに最適',
        features: [
          'プロフェッショナル版の全機能',
          '高度なAI機能',
          'マルチテナントサポート',
          '高度な分析',
          '優先技術サポート',
          'カスタム開発サービス',
          'チームコラボレーション機能',
          'SLA保証',
          'トレーニングサービス'
        ],
        limitations: [],
        popular: false,
        pricing: {
          'one-time': {
            price: 24000,
            currency: 'JPY',
            period: '一回払い'
          },
          'monthly': {
            price: 2400,
            currency: 'JPY',
            period: '月額'
          },
          'yearly': {
            price: 23040,
            currency: 'JPY',
            period: '年額',
            originalPrice: 28800,
            discount: 20
          }
        }
      }
    ]
  }
};

const fallbackPricingConfig = pricingConfigs[FALLBACK_LOCALE]!;

// 获取指定语言的价格配置
export function getPricingConfig(locale: Locale): PricingConfig {
  return pricingConfigs[locale] ?? fallbackPricingConfig;
}

// 获取指定周期的价格
export function getPricingForPeriod(planId: string, period: PricingPeriod, locale: Locale = 'en') {
  const config = getPricingConfig(locale);
  const plan = config.plans.find(p => p.id === planId);
  return plan?.pricing[period];
}

// 获取所有周期的价格
export function getAllPricingForPlan(planId: string, locale: Locale = 'en') {
  const config = getPricingConfig(locale);
  const plan = config.plans.find(p => p.id === planId);
  return plan?.pricing;
}

// 获取推荐的价格周期（年付优先）
export function getRecommendedPeriod(): PricingPeriod {
  return 'yearly';
}

// 计算年付节省金额
export function calculateYearlySavings(monthlyPrice: number): number {
  const yearlyPrice = monthlyPrice * 12;
  const discountedYearlyPrice = yearlyPrice * 0.8; // 20% 折扣
  return yearlyPrice - discountedYearlyPrice;
}

// 格式化价格显示
export function formatPrice(price: number, currency: string): string {
  const symbols: Record<string, string> = {
    'CNY': '¥',
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'JPY': '¥'
  };
  
  const symbol = symbols[currency] || currency;
  return `${symbol}${price}`;
}

// 获取价格周期标签
export function getPeriodLabel(period: PricingPeriod, locale: Locale = 'en'): string {
  const config = getPricingConfig(locale);
  return config.billingCycles[period].label;
}

// 获取价格周期描述
export function getPeriodDescription(period: PricingPeriod, locale: Locale = 'en'): string {
  const config = getPricingConfig(locale);
  return config.billingCycles[period].description;
}
