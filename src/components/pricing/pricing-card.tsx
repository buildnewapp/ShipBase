"use client";

import { Check, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPrice, type PricingPlan, type PricingPeriod } from "@/lib/pricing/i18n-config";
import { usePayment } from "@/hooks/use-payment";
import type { PricingCopy } from "@/i18n/components/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  period: PricingPeriod;
  copy: PricingCopy["card"];
  onSelect?: (planId: string, period: PricingPeriod) => void;
  className?: string;
}

export function PricingCard({
  plan,
  period,
  copy,
  onSelect,
  className
}: PricingCardProps) {
  const pricing = plan.pricing[period];
  const hasDiscount = pricing.discount && pricing.originalPrice;
  const { isLoading, error, createCheckout } = usePayment();

  const handleSelect = async () => {
    // 如果是免费计划，直接调用原有的回调
    if (plan.id === 'free') {
      onSelect?.(plan.id, period);
      return;
    }

    // 如果是企业版，也调用原有回调（可能需要联系销售）
    if (plan.id === 'enterprise') {
      onSelect?.(plan.id, period);
      return;
    }

    // 其他付费计划，调用支付接口
    await createCheckout(plan.id);
  };

  const getCtaText = () => {
    if (plan.id === 'free') return copy.getStarted;
    if (plan.id === 'enterprise') return copy.contactSales;
    return copy.buyNow;
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
            {copy.popular}
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
                {copy.save} {pricing.discount}%
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-2">
              {copy.included}
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
                {copy.limitations}
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
        <div className="w-full space-y-2">
          <Button
            className="w-full"
            variant={plan.popular ? "default" : "outline"}
            onClick={handleSelect}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {copy.processing}
              </>
            ) : (
              getCtaText()
            )}
          </Button>
          
          {error && (
            <div className="text-sm text-red-600 dark:text-red-400 text-center">
              {error}
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
