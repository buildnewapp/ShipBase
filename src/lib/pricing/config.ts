/**
 * 价格配置文件
 * 支持一次性付费、按月付费、按年付费
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

// 价格配置
export const pricingConfig: PricingConfig = {
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
};

// 获取指定周期的价格
export function getPricingForPeriod(planId: string, period: PricingPeriod) {
  const plan = pricingConfig.plans.find(p => p.id === planId);
  return plan?.pricing[period];
}

// 获取所有周期的价格
export function getAllPricingForPlan(planId: string) {
  const plan = pricingConfig.plans.find(p => p.id === planId);
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
export function formatPrice(price: number, currency: string = 'CNY'): string {
  const symbols: Record<string, string> = {
    'CNY': '¥',
    'USD': '$',
    'EUR': '€',
    'GBP': '£'
  };
  
  const symbol = symbols[currency] || currency;
  return `${symbol}${price}`;
}

// 获取价格周期标签
export function getPeriodLabel(period: PricingPeriod): string {
  return pricingConfig.billingCycles[period].label;
}

// 获取价格周期描述
export function getPeriodDescription(period: PricingPeriod): string {
  return pricingConfig.billingCycles[period].description;
}
