"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  CalendarDays, 
  CreditCard, 
  Package, 
  Mail,
  ArrowLeft,
  RefreshCw,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { format } from "date-fns";
import { zhCN, enUS, ja } from "date-fns/locale";
import type { Order, OrderItem } from "@/lib/db/schema/orders";

interface OrderDetailsProps {
  orderId: string;
  dict: {
    title: string;
    subtitle: string;
    orderInfo: {
      orderNumber: string;
      status: string;
      createdAt: string;
      paidAt: string;
      cancelledAt: string;
      amount: string;
      currency: string;
      paymentProvider: string;
      customerEmail: string;
    };
    productInfo: {
      title: string;
      productName: string;
      productType: string;
      productId: string;
    };
    paymentInfo: {
      title: string;
      provider: string;
      requestId: string;
      sessionId: string;
    };
    customerInfo: {
      title: string;
      email: string;
    };
    orderItems: {
      title: string;
      productName: string;
      description: string;
      unitPrice: string;
      quantity: string;
      totalPrice: string;
    };
    actions: {
      back: string;
      refreshStatus: string;
    };
    status: {
      pending: string;
      paid: string;
      failed: string;
      cancelled: string;
      refunded: string;
    };
    loading: string;
    error: string;
    retry: string;
    notFound: string;
  };
  onBack: () => void;
}

export function OrderDetails({ orderId, dict, onBack }: OrderDetailsProps) {
  const [order, setOrder] = useState<Order | null>(null);
  const [items, setItems] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  // 获取订单详情
  const fetchOrderDetails = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "获取订单详情失败");
      }

      setOrder(data.data.order);
      setItems(data.data.items || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "获取订单详情失败");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [orderId]);

  // 刷新订单状态
  const refreshOrderStatus = async () => {
    try {
      setRefreshing(true);
      await fetchOrderDetails();
    } catch (err) {
      console.error("刷新订单状态失败:", err);
    }
  };

  // 获取状态图标
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "failed":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "cancelled":
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
      case "refunded":
        return <RefreshCw className="h-5 w-5 text-blue-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
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
    const locale = navigator.language.startsWith("zh") ? zhCN : 
                  navigator.language.startsWith("ja") ? ja : enUS;
    
    return format(dateObj, "yyyy-MM-dd HH:mm", { locale });
  };

  // 格式化金额
  const formatAmount = (amount: string, currency: string) => {
    const numAmount = parseFloat(amount);
    return new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: currency || "USD",
    }).format(numAmount);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [orderId, fetchOrderDetails]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center py-12">
          <RefreshCw className="h-6 w-6 animate-spin mr-2" />
          {dict.loading}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <p className="text-destructive mb-4">{dict.error}</p>
          <Button onClick={fetchOrderDetails}>
            {dict.retry}
          </Button>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <p className="text-muted-foreground">{dict.notFound}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题和操作 */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{dict.title}</h1>
          <p className="text-muted-foreground mt-2">{dict.subtitle}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {dict.actions.back}
          </Button>
          <Button 
            variant="outline" 
            onClick={refreshOrderStatus}
            disabled={refreshing}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
            {dict.actions.refreshStatus}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 订单基本信息 */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getStatusIcon(order.status)}
                {dict.orderInfo.orderNumber}: {order.orderNumber}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{dict.orderInfo.status}:</span>
                <Badge variant={getStatusBadgeVariant(order.status)}>
                  {getStatusText(order.status)}
                </Badge>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{dict.orderInfo.createdAt}:</span>
                  <span>{formatDate(order.createdAt)}</span>
                </div>
                
                {order.status === "paid" && order.paidAt && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground">{dict.orderInfo.paidAt}:</span>
                    <span>{formatDate(order.paidAt)}</span>
                  </div>
                )}
                
                {order.status === "cancelled" && order.cancelledAt && (
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span className="text-muted-foreground">{dict.orderInfo.cancelledAt}:</span>
                    <span>{formatDate(order.cancelledAt)}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{dict.orderInfo.amount}:</span>
                  <span className="font-semibold">{formatAmount(order.amount, order.currency)}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{dict.orderInfo.paymentProvider}:</span>
                  <span className="capitalize">{order.paymentProvider}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 产品信息 */}
          <Card>
            <CardHeader>
              <CardTitle>{dict.productInfo.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{dict.productInfo.productName}:</span>
                <span className="font-medium">{order.productName}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">{dict.productInfo.productType}:</span>
                <Badge variant="outline" className="capitalize">
                  {order.productType}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">{dict.productInfo.productId}:</span>
                <code className="text-sm bg-muted px-2 py-1 rounded">{order.productId}</code>
              </div>
            </CardContent>
          </Card>

          {/* 订单项 */}
          {items.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>{dict.orderItems.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.productName}</h4>
                        {item.productDescription && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.productDescription}
                          </p>
                        )}
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span>{dict.orderItems.unitPrice}: {formatAmount(item.unitPrice, order.currency)}</span>
                          <span>{dict.orderItems.quantity}: {item.quantity}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          {formatAmount(item.totalPrice, order.currency)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* 侧边栏信息 */}
        <div className="space-y-6">
          {/* 支付信息 */}
          <Card>
            <CardHeader>
              <CardTitle>{dict.paymentInfo.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{dict.paymentInfo.provider}:</span>
                <span className="capitalize">{order.paymentProvider}</span>
              </div>
              
              {order.paymentRequestId && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{dict.paymentInfo.requestId}:</span>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{order.paymentRequestId}</code>
                </div>
              )}
              
              {order.paymentSessionId && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{dict.paymentInfo.sessionId}:</span>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{order.paymentSessionId}</code>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 客户信息 */}
          <Card>
            <CardHeader>
              <CardTitle>{dict.customerInfo.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{dict.customerInfo.email}:</span>
                <span>{order.customerEmail}</span>
              </div>
            </CardContent>
          </Card>

          {/* 元数据 */}
          {order.metadata && Object.keys(order.metadata).length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>额外信息</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                  {JSON.stringify(order.metadata, null, 2)}
                </pre>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
