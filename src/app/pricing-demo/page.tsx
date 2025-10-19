"use client";

import { useState } from "react";
import { PricingComponent } from "@/components/pricing";
import { getPricingConfig, type PricingPeriod } from "@/lib/pricing/i18n-config";
import { type Locale } from "@/i18n/types";

interface PricingDemoPageProps {
  searchParams: {
    locale?: Locale;
  };
}

export default function PricingDemoPage({ searchParams }: PricingDemoPageProps) {
  const locale = searchParams.locale || "en";
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [selectedPeriod, setSelectedPeriod] = useState<PricingPeriod>("yearly");

  const pricingConfig = getPricingConfig(locale);

  const handlePlanSelect = (planId: string, period: PricingPeriod) => {
    setSelectedPlan(planId);
    setSelectedPeriod(period);
    
    // 模拟购买流程
    const plan = pricingConfig.plans.find(p => p.id === planId);
    const pricing = plan?.pricing[period];
    
    if (plan && pricing) {
      const texts = {
        zh: `您选择了 ${plan.name} - ${pricing.period}，价格：${pricing.price} ${pricing.currency}`,
        en: `You selected ${plan.name} - ${pricing.period}, Price: ${pricing.price} ${pricing.currency}`,
        ja: `${plan.name} - ${pricing.period} を選択しました。価格: ${pricing.price} ${pricing.currency}`
      };
      alert(texts[locale] || texts.en);
    }
  };

  // 国际化文本
  const texts = {
    zh: {
      title: "ShipBase 价格方案",
      subtitle: "支持一次性付费、按月付费、按年付费三种方式。年付享受 20% 优惠，一次性付费永久使用。",
      yourChoice: "您的选择",
      plan: "方案：",
      paymentMethod: "付费方式：",
      price: "价格：",
      period: "周期：",
      oneTimeTitle: "一次性付费",
      oneTimeDesc: "支付一次，永久使用。无需续费，适合长期项目。",
      monthlyTitle: "按月付费",
      monthlyDesc: "灵活付费，随时取消。适合短期项目或试用。",
      yearlyTitle: "按年付费",
      yearlyDesc: "年付享受 20% 优惠，节省更多费用。"
    },
    en: {
      title: "ShipBase Pricing Plans",
      subtitle: "Support for one-time payment, monthly payment, and yearly payment. Yearly payment offers 20% discount, one-time payment for lifetime use.",
      yourChoice: "Your Choice",
      plan: "Plan: ",
      paymentMethod: "Payment Method: ",
      price: "Price: ",
      period: "Period: ",
      oneTimeTitle: "One-time Payment",
      oneTimeDesc: "Pay once, use forever. No renewal fees, perfect for long-term projects.",
      monthlyTitle: "Monthly Payment",
      monthlyDesc: "Flexible payment, cancel anytime. Perfect for short-term projects or trials.",
      yearlyTitle: "Yearly Payment",
      yearlyDesc: "Save 20% with yearly payment, more cost-effective."
    },
    ja: {
      title: "ShipBase 料金プラン",
      subtitle: "一回払い、月払い、年払いの3つの支払い方法をサポート。年払いは20%割引、一回払いは永久利用可能。",
      yourChoice: "あなたの選択",
      plan: "プラン: ",
      paymentMethod: "支払い方法: ",
      price: "価格: ",
      period: "期間: ",
      oneTimeTitle: "一回払い",
      oneTimeDesc: "一度支払えば永久に利用可能。更新料金なし、長期プロジェクトに最適。",
      monthlyTitle: "月払い",
      monthlyDesc: "柔軟な支払い、いつでもキャンセル可能。短期プロジェクトや試用に最適。",
      yearlyTitle: "年払い",
      yearlyDesc: "年払いで20%割引、よりコスト効率が良い。"
    }
  };

  const currentTexts = texts[locale] || texts.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {currentTexts.title}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {currentTexts.subtitle}
          </p>
        </div>

        {/* 价格组件 */}
        <PricingComponent
          locale={locale}
          showBillingToggle={true}
          defaultPeriod="yearly"
          onPlanSelect={handlePlanSelect}
        />

        {/* 选择结果展示 */}
        {selectedPlan && (
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                {currentTexts.yourChoice}
              </h3>
              <div className="space-y-2">
                <p className="text-neutral-600 dark:text-neutral-300">
                  <span className="font-medium">{currentTexts.plan}</span>
                  {pricingConfig.plans.find(p => p.id === selectedPlan)?.name}
                </p>
                <p className="text-neutral-600 dark:text-neutral-300">
                  <span className="font-medium">{currentTexts.paymentMethod}</span>
                  {pricingConfig.billingCycles[selectedPeriod].label}
                </p>
                <p className="text-neutral-600 dark:text-neutral-300">
                  <span className="font-medium">{currentTexts.price}</span>
                  {pricingConfig.plans.find(p => p.id === selectedPlan)?.pricing[selectedPeriod].price} 
                  {pricingConfig.plans.find(p => p.id === selectedPlan)?.pricing[selectedPeriod].currency}
                </p>
                <p className="text-neutral-600 dark:text-neutral-300">
                  <span className="font-medium">{currentTexts.period}</span>
                  {pricingConfig.plans.find(p => p.id === selectedPlan)?.pricing[selectedPeriod].period}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 功能说明 */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                {currentTexts.oneTimeTitle}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                {currentTexts.oneTimeDesc}
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                {currentTexts.monthlyTitle}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                {currentTexts.monthlyDesc}
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                {currentTexts.yearlyTitle}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                {currentTexts.yearlyDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
