"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { getPricingConfig, getRecommendedPeriod, type PricingPeriod } from "@/lib/pricing/i18n-config";
import { BillingToggle } from "./billing-toggle";
import { PricingCard } from "./pricing-card";
import { type Locale } from "@/i18n/types";

interface PricingComponentProps {
  locale?: Locale;
  showBillingToggle?: boolean;
  defaultPeriod?: PricingPeriod;
  onPlanSelect?: (planId: string, period: PricingPeriod) => void;
  className?: string;
}

export function PricingComponent({
  locale = "en",
  showBillingToggle = true,
  defaultPeriod,
  onPlanSelect,
  className
}: PricingComponentProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<PricingPeriod>(
    defaultPeriod || getRecommendedPeriod()
  );

  const handlePeriodChange = (period: PricingPeriod) => {
    setSelectedPeriod(period);
  };

  const handlePlanSelect = (planId: string, period: PricingPeriod) => {
    onPlanSelect?.(planId, period);
  };

  const pricingConfig = getPricingConfig(locale);

  // 国际化文本
  const texts = {
    zh: {
      title: "价格方案",
      subtitle: "简单透明的定价，没有隐藏费用。选择最适合您需求的方案，随时可以升级。",
      yearlyDiscount: "年付享受 20% 优惠，相比月付节省更多费用"
    },
    en: {
      title: "Pricing Plans",
      subtitle: "Simple and transparent pricing with no hidden fees. Choose the plan that best fits your needs, upgrade anytime.",
      yearlyDiscount: "Save 20% with yearly billing compared to monthly billing"
    },
    ja: {
      title: "料金プラン",
      subtitle: "シンプルで透明な料金設定、隠れた費用はありません。ニーズに最適なプランを選択し、いつでもアップグレードできます。",
      yearlyDiscount: "年払いで月払いと比較して20%お得"
    }
  };

  const currentTexts = texts[locale] || texts.en;

  return (
    <div className={cn("w-full", className)}>
      {/* 标题部分 */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          {currentTexts.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          {currentTexts.subtitle}
        </p>
        
        {/* 计费周期切换 */}
        {showBillingToggle && (
          <BillingToggle
            period={selectedPeriod}
            onPeriodChange={handlePeriodChange}
            locale={locale}
            className="mb-8"
          />
        )}
      </div>

      {/* 价格卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pricingConfig.plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            period={selectedPeriod}
            locale={locale}
            onSelect={handlePlanSelect}
            className={cn(
              plan.popular && "md:scale-105"
            )}
          />
        ))}
      </div>

      {/* 年付优惠说明 */}
      {selectedPeriod === 'yearly' && (
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {currentTexts.yearlyDiscount}
          </p>
        </div>
      )}
    </div>
  );
}
