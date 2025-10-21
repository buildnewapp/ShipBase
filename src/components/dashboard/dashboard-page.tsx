"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  ShoppingCart,
  Package,
  Settings,
  Crown,
  UserPlus,
  TrendingUp,
  DollarSign,
  Activity,
  Clock,
} from "lucide-react";
import Link from "next/link";
import type { DashboardPageDictionary } from "@/i18n/types";

interface DashboardPageProps {
  dictionary: DashboardPageDictionary;
  userName?: string;
}

type IconComponent = React.ComponentType<{ className?: string }>;

const iconMap: Record<string, IconComponent> = {
  ShoppingCart,
  Package,
  Settings,
  Crown,
  UserPlus,
  TrendingUp,
  DollarSign,
  Activity,
  Clock,
};

const trendIconMap = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  neutral: Minus,
};

export function DashboardPage({ dictionary, userName }: DashboardPageProps) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* 欢迎消息 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            {dictionary.welcomeMessage} {userName && <span className="text-blue-600">{userName}</span>}
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            {dictionary.description}
          </p>
        </div>

        {/* 统计卡片 */}
        <div className="mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {dictionary.stats.title}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {dictionary.stats.subtitle}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {dictionary.stats.cards.map((card, index) => {
              const TrendIcon = trendIconMap[card.trend];
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {card.title}
                    </CardTitle>
                    <TrendIcon
                      className={`h-4 w-4 ${
                        card.trend === "up"
                          ? "text-green-600"
                          : card.trend === "down"
                          ? "text-red-600"
                          : "text-neutral-500"
                      }`}
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {card.value}
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      {card.change}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* 最近活动 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                {dictionary.recentActivity.title}
              </CardTitle>
              <CardDescription>
                {dictionary.recentActivity.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {dictionary.recentActivity.activities.length > 0 ? (
                <div className="space-y-4">
                  {dictionary.recentActivity.activities.map((activity, index) => {
                    const Icon = iconMap[activity.icon] || Clock;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                            {activity.action}
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center py-4">
                  {dictionary.recentActivity.noActivity}
                </p>
              )}
            </CardContent>
          </Card>

          {/* 快速操作 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                {dictionary.quickActions.title}
              </CardTitle>
              <CardDescription>
                {dictionary.quickActions.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {dictionary.quickActions.actions.map((action, index) => {
                  const Icon = iconMap[action.icon] || Settings;
                  return (
                    <Link key={index} href={action.href}>
                      <Button
                        variant="outline"
                        className="w-full justify-start h-auto py-3 px-4 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      >
                        <div className="flex items-center gap-3 w-full">
                          <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1 text-left">
                            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                              {action.title}
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                              {action.description}
                            </p>
                          </div>
                        </div>
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

