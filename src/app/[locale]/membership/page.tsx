import { Metadata } from "next";
import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Star, Zap, Shield, Check } from "lucide-react";
import { getDictionary } from "@/i18n";
import { type Locale } from "@/i18n/types";
import { BillingHistory } from "@/components/membership";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dictionary = getDictionary(params.locale);
  
  return {
    title: dictionary.pages.membership.title,
    description: dictionary.pages.membership.description,
  };
}

export default async function MembershipPage({ params }: { params: { locale: Locale } }) {
  const session = await auth.api.getSession({
    headers: await import("next/headers").then((mod) => mod.headers()),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const dictionary = getDictionary(params.locale);

  // 模拟会员状态 - 在实际应用中，这应该从数据库获取
  const membershipStatus = {
    plan: "free", // free, pro, enterprise
    expiresAt: null,
    features: {
      apiCalls: 1000,
      maxProjects: 3,
      prioritySupport: false,
      advancedAnalytics: false,
    }
  };

  // 使用国际化的计划数据
  const plans = dictionary.pages.membership.plans.map(plan => ({
    ...plan,
    current: plan.id === membershipStatus.plan
  }));

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            {dictionary.pages.membership.subtitle}
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            {dictionary.pages.membership.description}
          </p>
        </div>

        {/* 当前计划状态 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5" />
              {dictionary.pages.membership.currentPlan.title}
            </CardTitle>
            <CardDescription>
              {dictionary.pages.membership.currentPlan.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {plans.find(p => p.id === membershipStatus.plan)?.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {plans.find(p => p.id === membershipStatus.plan)?.description}
                </p>
              </div>
              <Badge variant={membershipStatus.plan === "free" ? "secondary" : "default"}>
                {membershipStatus.plan === "free" ? dictionary.pages.membership.currentPlan.freeVersion : dictionary.pages.membership.currentPlan.paidVersion}
              </Badge>
            </div>
            
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {dictionary.pages.membership.usage.apiCalls}
                  </span>
                </div>
                <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {membershipStatus.features.apiCalls.toLocaleString()}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {dictionary.pages.membership.usage.remainingThisMonth}
                </p>
              </div>
              
              <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {dictionary.pages.membership.usage.projectCount}
                  </span>
                </div>
                <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {membershipStatus.features.maxProjects === -1 ? "∞" : membershipStatus.features.maxProjects}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {dictionary.pages.membership.usage.maxLimit}
                </p>
              </div>
              
              <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {dictionary.pages.membership.usage.supportLevel}
                  </span>
                </div>
                <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {membershipStatus.features.prioritySupport ? dictionary.pages.membership.usage.priority : dictionary.pages.membership.usage.standard}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {dictionary.pages.membership.usage.responseTime}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 升级计划 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            {dictionary.pages.membership.upgradePlan.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.current ? 'ring-2 ring-blue-600' : ''}`}>
                {plan.current && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">{dictionary.pages.membership.upgradePlan.currentPlan}</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="h-5 w-5" />
                    {plan.name}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                      ¥{plan.price}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400">
                      /{plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.current ? "outline" : "default"}
                    disabled={plan.current}
                  >
                    {plan.current ? dictionary.pages.membership.upgradePlan.currentPlan : plan.price === 0 ? dictionary.pages.membership.upgradePlan.freeUse : dictionary.pages.membership.upgradePlan.upgradePlan}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 账单历史 */}
        <BillingHistory 
          dict={dictionary.pages.membership.billingHistory} 
          locale={params.locale}
        />
      </div>
    </div>
  );
}
