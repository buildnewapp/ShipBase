import { Metadata } from "next";
import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Star, Zap, Shield, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "会员中心 - ShipBase",
  description: "管理您的会员订阅和权益",
};

export default async function MembershipPage() {
  const session = await auth.api.getSession({
    headers: await import("next/headers").then((mod) => mod.headers()),
  });

  if (!session?.user) {
    redirect("/login");
  }

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

  const plans = [
    {
      id: "free",
      name: "免费版",
      price: 0,
      period: "永久",
      description: "适合个人用户和小型项目",
      features: [
        "每月 1,000 次 API 调用",
        "最多 3 个项目",
        "基础支持",
        "标准模板库",
      ],
      current: membershipStatus.plan === "free",
    },
    {
      id: "pro",
      name: "专业版",
      price: 29,
      period: "每月",
      description: "适合中小型团队",
      features: [
        "每月 50,000 次 API 调用",
        "无限项目",
        "优先支持",
        "高级模板库",
        "高级分析",
        "团队协作",
      ],
      current: membershipStatus.plan === "pro",
    },
    {
      id: "enterprise",
      name: "企业版",
      price: 99,
      period: "每月",
      description: "适合大型企业",
      features: [
        "无限 API 调用",
        "无限项目",
        "24/7 专属支持",
        "所有模板库",
        "企业级分析",
        "自定义集成",
        "SLA 保证",
      ],
      current: membershipStatus.plan === "enterprise",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            会员中心
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            管理您的订阅计划和会员权益
          </p>
        </div>

        {/* 当前计划状态 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5" />
              当前计划
            </CardTitle>
            <CardDescription>
              您当前的订阅状态和使用情况
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
                {membershipStatus.plan === "free" ? "免费版" : "付费版"}
              </Badge>
            </div>
            
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    API 调用
                  </span>
                </div>
                <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {membershipStatus.features.apiCalls.toLocaleString()}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  本月剩余
                </p>
              </div>
              
              <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    项目数量
                  </span>
                </div>
                <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {membershipStatus.features.maxProjects === -1 ? "∞" : membershipStatus.features.maxProjects}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  最大限制
                </p>
              </div>
              
              <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    支持级别
                  </span>
                </div>
                <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {membershipStatus.features.prioritySupport ? "优先" : "标准"}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  响应时间
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 升级计划 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            升级您的计划
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.current ? 'ring-2 ring-blue-600' : ''}`}>
                {plan.current && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">当前计划</Badge>
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
                    {plan.current ? "当前计划" : plan.price === 0 ? "免费使用" : "升级计划"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 账单历史 */}
        <Card>
          <CardHeader>
            <CardTitle>账单历史</CardTitle>
            <CardDescription>
              查看您的订阅和付款记录
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <p className="text-neutral-600 dark:text-neutral-400">
                暂无账单记录
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                升级到付费计划后，您将看到详细的账单信息
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
