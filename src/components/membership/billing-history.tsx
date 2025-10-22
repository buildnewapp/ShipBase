"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { zhCN, enUS, ja } from "date-fns/locale";
import { 
  CreditCard, 
  FileText, 
  Calendar, 
  Package,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  RefreshCw
} from "lucide-react";
import type { Order } from "@/lib/db/schema/orders";
import { resolveIntlLocale } from "@/i18n/locale-config";

interface BillingHistoryProps {
  dict: {
    title: string;
    description: string;
    noRecords: string;
    upgradeMessage: string;
    table: {
      date: string;
      description: string;
      amount: string;
      status: string;
      action: string;
          view: string;
    };
    status: {
      pending: string;
      paid: string;
      failed: string;
      cancelled: string;
      refunded: string;
    };
  };
  locale: string;
}

export function BillingHistory({ dict, locale }: BillingHistoryProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 获取账单历史
  const fetchBillingHistory = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch("/api/orders?limit=50");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to load billing history");
      }

      setOrders(data.data.orders || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load billing history");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBillingHistory();
  }, []);

  // 获取状态图标
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "cancelled":
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
      case "refunded":
        return <RefreshCw className="h-4 w-4 text-blue-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  // 获取状态标签样式
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "paid":
        return "default";
      case "pending":
        return "secondary";
      case "failed":
        return "destructive";
      case "cancelled":
        return "outline";
      case "refunded":
        return "secondary";
      default:
        return "secondary";
    }
  };

  // 获取状态文本
  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return dict.status.pending;
      case "paid":
        return dict.status.paid;
      case "failed":
        return dict.status.failed;
      case "cancelled":
        return dict.status.cancelled;
      case "refunded":
        return dict.status.refunded;
      default:
        return status;
    }
  };

  // 格式化日期
  const formatDate = (date: string | Date | null) => {
    if (!date) return "-";
    
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const localeMap: Record<string, typeof zhCN | typeof ja | typeof enUS> = {
      zh: zhCN,
      ja: ja,
      en: enUS,
    };
    const dateLocale = localeMap[locale] || enUS;
    
    return format(dateObj, "yyyy-MM-dd HH:mm", { locale: dateLocale });
  };

  // 格式化金额
  const formatAmount = (amount: string, currency: string) => {
    const numAmount = parseFloat(amount);
    const resolvedLocale = resolveIntlLocale(locale);
    return new Intl.NumberFormat(resolvedLocale, {
      style: "currency",
      currency: currency || "USD",
    }).format(numAmount);
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{dict.title}</CardTitle>
          <CardDescription>{dict.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <Clock className="h-6 w-6 animate-spin mr-2" />
            <span className="text-muted-foreground">Loading...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{dict.title}</CardTitle>
          <CardDescription>{dict.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={fetchBillingHistory}>Retry</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (orders.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{dict.title}</CardTitle>
          <CardDescription>{dict.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-neutral-600 dark:text-neutral-400">
              {dict.noRecords}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
              {dict.upgradeMessage}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dict.title}</CardTitle>
        <CardDescription>{dict.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order, index) => (
            <div key={order.id}>
              <div className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900">
                    <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                        {order.productName}
                      </h4>
                      <Badge variant={getStatusBadgeVariant(order.status)} className="flex items-center gap-1">
                        {getStatusIcon(order.status)}
                        {getStatusText(order.status)}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(order.paidAt || order.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Package className="h-3 w-3" />
                        <span>{order.orderNumber}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                      {formatAmount(order.amount, order.currency)}
                    </p>
                  </div>
                </div>
              </div>
              
              {index < orders.length - 1 && <Separator className="my-2" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
