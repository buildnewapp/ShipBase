"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  CalendarDays, 
  CreditCard, 
  Package, 
  MoreHorizontal, 
  Eye,
  RefreshCw,
  Filter,
  Search
} from "lucide-react";
import { format } from "date-fns";
import { zhCN, enUS, ja } from "date-fns/locale";
import type { Order } from "@/lib/db/schema/orders";
import { OrderDetails } from "./order-details";

interface OrdersPageProps {
  dict: {
    title: string;
    subtitle: string;
    description: string;
    ordersList: {
      title: string;
      subtitle: string;
      noOrders: string;
      loading: string;
      error: string;
      retry: string;
    };
    orderCard: {
      orderNumber: string;
      status: string;
      amount: string;
      product: string;
      createdAt: string;
      paidAt: string;
      actions: string;
      viewDetails: string;
      refreshStatus: string;
    };
    status: {
      pending: string;
      paid: string;
      failed: string;
      cancelled: string;
      refunded: string;
    };
    filters: {
      title: string;
      all: string;
      pending: string;
      paid: string;
      failed: string;
      cancelled: string;
      refunded: string;
    };
    search: {
      placeholder: string;
    };
    refresh: string;
    pagination: {
      previous: string;
      next: string;
      showing: string;
      of: string;
      results: string;
    };
    orderDetails: {
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
  };
}

export function OrdersPage({ dict }: OrdersPageProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const itemsPerPage = 10;

  // 获取订单列表
  const fetchOrders = useCallback(async (page = 1, statusFilter = filter, search = searchTerm) => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams({
        limit: itemsPerPage.toString(),
        offset: ((page - 1) * itemsPerPage).toString(),
      });

      if (statusFilter !== "all") {
        params.append("status", statusFilter);
      }

      if (search) {
        params.append("search", search);
      }

      const response = await fetch(`/api/orders?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "获取订单失败");
      }

      setOrders(data.data.orders || []);
      setTotalPages(Math.ceil((data.data.pagination?.total || 0) / itemsPerPage));
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : "获取订单失败");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [filter, searchTerm, itemsPerPage]);

  // 刷新订单状态
  const refreshOrderStatus = async (orderId: string) => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "刷新订单状态失败");
      }

      // 更新本地订单状态
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order.id === orderId ? { ...order, ...data.data.order } : order
        )
      );
    } catch (err) {
      console.error("刷新订单状态失败:", err);
    }
  };

  // 查看订单详情
  const viewOrderDetails = (orderId: string) => {
    setSelectedOrderId(orderId);
  };

  // 返回订单列表
  const backToOrders = () => {
    setSelectedOrderId(null);
  };

  // 处理筛选变化
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1);
    fetchOrders(1, newFilter, searchTerm);
  };

  // 处理搜索
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
    fetchOrders(1, filter, term);
  };

  // 处理刷新
  const handleRefresh = () => {
    setRefreshing(true);
    fetchOrders(currentPage, filter, searchTerm);
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
    const dateLocale = navigator.language.startsWith("zh") ? zhCN : 
                  navigator.language.startsWith("ja") ? ja : enUS;
    
    return format(dateObj, "yyyy-MM-dd HH:mm", { locale: dateLocale });
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
    fetchOrders();
  }, [fetchOrders]);

  // 如果选择了订单，显示详情页面
  if (selectedOrderId) {
    // 需要通过 locale 获取完整的订单详情翻译
    // 这里简化处理，直接传递一个对象
    return (
      <OrderDetails
        orderId={selectedOrderId}
        dict={dict.orderDetails}
        onBack={backToOrders}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{dict.title}</h1>
        <p className="text-muted-foreground mt-2">{dict.subtitle}</p>
      </div>

      {/* 筛选和搜索 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            {dict.filters.title || "筛选和搜索"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* 状态筛选 */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="justify-between">
                  {filter === "all" ? dict.filters.all : getStatusText(filter)}
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleFilterChange("all")}>
                  {dict.filters.all}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange("pending")}>
                  {dict.filters.pending}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange("paid")}>
                  {dict.filters.paid}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange("failed")}>
                  {dict.filters.failed}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange("cancelled")}>
                  {dict.filters.cancelled}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange("refunded")}>
                  {dict.filters.refunded}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 搜索框 */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={dict.search.placeholder}
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background"
              />
            </div>

            {/* 刷新按钮 */}
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={refreshing}
              className="shrink-0"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
              {dict.refresh || "刷新"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 订单列表 */}
      <Card>
        <CardHeader>
          <CardTitle>{dict.ordersList.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="h-6 w-6 animate-spin mr-2" />
              {dict.ordersList.loading}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-destructive mb-4">{dict.ordersList.error}</p>
              <Button onClick={() => fetchOrders()}>
                {dict.ordersList.retry}
              </Button>
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-12">
              <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">{dict.ordersList.noOrders}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{order.orderNumber}</h3>
                          <Badge variant={getStatusBadgeVariant(order.status)}>
                            {getStatusText(order.status)}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            <span>{formatAmount(order.amount, order.currency)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Package className="h-4 w-4" />
                            <span>{order.productName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4" />
                            <span>
                              {order.status === "paid" && order.paidAt
                                ? `${dict.orderCard.paidAt}: ${formatDate(order.paidAt)}`
                                : `${dict.orderCard.createdAt}: ${formatDate(order.createdAt)}`
                              }
                            </span>
                          </div>
                        </div>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => viewOrderDetails(order.id)}>
                            <Eye className="h-4 w-4 mr-2" />
                            {dict.orderCard.viewDetails}
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => refreshOrderStatus(order.id)}>
                            <RefreshCw className="h-4 w-4 mr-2" />
                            {dict.orderCard.refreshStatus}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* 分页 */}
          {!loading && !error && orders.length > 0 && totalPages > 1 && (
            <>
              <Separator className="my-6" />
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {dict.pagination.showing} {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, orders.length)} {dict.pagination.of} {orders.length} {dict.pagination.results}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => fetchOrders(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    {dict.pagination.previous}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => fetchOrders(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    {dict.pagination.next}
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
