"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPrice, type PricingPlan, type PricingPeriod } from "@/lib/pricing/i18n-config";
import { type Locale } from "@/i18n/types";

interface PricingCardProps {
  plan: PricingPlan;
  period: PricingPeriod;
  locale?: Locale;
  onSelect?: (planId: string, period: PricingPeriod) => void;
  className?: string;
}

export function PricingCard({
  plan,
  period,
  locale = "en",
  onSelect,
  className
}: PricingCardProps) {
  const pricing = plan.pricing[period];
  const hasDiscount = pricing.discount && pricing.originalPrice;

  const handleSelect = () => {
    onSelect?.(plan.id, period);
  };

  // 国际化文本
  const texts = {
    zh: {
      popular: "推荐",
      getStarted: "开始使用",
      buyNow: "立即购买",
      contactSales: "联系销售",
      included: "包含功能",
      limitations: "限制说明",
      save: "节省"
    },
    en: {
      popular: "Popular",
      getStarted: "Get Started",
      buyNow: "Buy Now",
      contactSales: "Contact Sales",
      included: "Included Features",
      limitations: "Limitations",
      save: "Save"
    },
    ja: {
      popular: "人気",
      getStarted: "始める",
      buyNow: "今すぐ購入",
      contactSales: "営業に連絡",
      included: "含まれる機能",
      limitations: "制限事項",
      save: "節約"
    }
  };

  const currentTexts = texts[locale] || texts.en;

  const getCtaText = () => {
    if (plan.id === 'free') return currentTexts.getStarted;
    if (plan.id === 'enterprise') return currentTexts.contactSales;
    return currentTexts.buyNow;
  };

  return (
    <Card
      className={cn(
        "relative flex flex-col",
        plan.popular && "border-primary shadow-lg",
        className
      )}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="default" className="px-3 py-1">
            {currentTexts.popular}
          </Badge>
        </div>
      )}

      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <CardDescription className="text-base">
          {plan.description}
        </CardDescription>

        <div className="mt-4">
          <div className="flex items-baseline justify-center">
            {hasDiscount && (
              <span className="text-lg text-muted-foreground line-through mr-2">
                {formatPrice(pricing.originalPrice!, pricing.currency)}
              </span>
            )}
            <span className="text-4xl font-bold">
              {formatPrice(pricing.price, pricing.currency)}
            </span>
            <span className="text-muted-foreground ml-1">
              {pricing.period}
            </span>
          </div>

          {hasDiscount && (
            <div className="mt-2">
              <Badge variant="secondary" className="text-xs">
                {currentTexts.save} {pricing.discount}%
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-2">
              {currentTexts.included}
            </h4>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {plan.limitations && plan.limitations.length > 0 && (
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-2">
                {currentTexts.limitations}
              </h4>
              <ul className="space-y-2">
                {plan.limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={plan.popular ? "default" : "outline"}
          onClick={handleSelect}
        >
          {getCtaText()}
        </Button>
      </CardFooter>
    </Card>
  );
}
