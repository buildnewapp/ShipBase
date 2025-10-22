"use client";

import { cn } from "@/lib/utils";
import { getPricingConfig, type PricingPeriod } from "@/lib/pricing/i18n-config";
import { type Locale } from "@/i18n/types";

interface BillingToggleProps {
  period: PricingPeriod;
  onPeriodChange: (period: PricingPeriod) => void;
  locale?: Locale;
  discountLabel: string;
  className?: string;
}

export function BillingToggle({
  period,
  onPeriodChange,
  locale = "en",
  discountLabel,
  className
}: BillingToggleProps) {
  const periods: PricingPeriod[] = ['one-time', 'monthly', 'yearly'];
  const pricingConfig = getPricingConfig(locale);

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="flex items-center space-x-1 rounded-lg bg-muted p-1">
        {periods.map((p) => {
          const cycle = pricingConfig.billingCycles[p];
          return (
            <button
              key={p}
              onClick={() => onPeriodChange(p)}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                period === p
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cycle.label}
              {p === 'yearly' && (
                <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                  {discountLabel}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
