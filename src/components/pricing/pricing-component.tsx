"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { getPricingConfig, getRecommendedPeriod, type PricingPeriod } from "@/lib/pricing/i18n-config";
import { BillingToggle } from "./billing-toggle";
import { PricingCard } from "./pricing-card";
import { type Locale } from "@/i18n/types";
import { getPricingCopy } from "@/i18n/components/pricing";

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
  const pricingCopy = getPricingCopy(locale);

  return (
    <div className={cn("w-full", className)}>
      {/* 标题部分 */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          {pricingCopy.header.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          {pricingCopy.header.subtitle}
        </p>
        
        {/* 计费周期切换 */}
        {showBillingToggle && (
          <BillingToggle
            period={selectedPeriod}
            onPeriodChange={handlePeriodChange}
            locale={locale}
            discountLabel={pricingCopy.billingToggle.discount}
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
            copy={pricingCopy.card}
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
            {pricingCopy.header.yearlyDiscount}
          </p>
        </div>
      )}
    </div>
  );
}
