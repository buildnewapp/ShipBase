"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/types";
import type { PaymentSuccessDictionary } from "@/i18n/pages/payment";
import { resolveIntlLocale } from "@/i18n/locale-config";

interface PaymentSuccessHandlerProps {
  searchParams: {
    request_id?: string;
    checkout_id?: string;
    order_id?: string;
    customer_id?: string;
    product_id?: string;
    signature?: string;
  };
  dictionary: PaymentSuccessDictionary;
  locale: Locale;
}

interface Order {
  id: string;
  orderNumber: string;
  status: string;
  productName: string;
  amount: string;
  currency: string;
  paidAt: string | null;
  createdAt: string;
}

export function PaymentSuccessHandler({
  searchParams,
  dictionary,
  locale,
}: PaymentSuccessHandlerProps) {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { errors } = dictionary;

  useEffect(() => {
    async function handlePaymentSuccess() {
      if (!searchParams.request_id) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/payment/success", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(searchParams),
        });

        const data = await response.json();

        if (data.success && data.order) {
          setOrder(data.order);
        } else {
          setError(data.error || errors.generic);
        }
      } catch (err) {
        console.error("处理支付成功时发生错误:", err);
        setError(errors.network);
      } finally {
        setLoading(false);
      }
    }

    handlePaymentSuccess();
  }, [searchParams, errors.generic, errors.network]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <svg
                className="h-8 w-8 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl">
              {dictionary.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              {dictionary.subtitle}
            </p>
            <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
              {dictionary.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-900 dark:border-neutral-100"></div>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              {dictionary.loading.processing}
            </p>
          </div>
        )}

        {error && (
          <div className="mb-8 rounded-lg bg-red-50 dark:bg-red-900/20 p-4 border border-red-200 dark:border-red-800">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                  {error}
                </h3>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Order Details */}
            {order && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                  {dictionary.order.title}
                </h2>
                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">
                      {dictionary.order.number}
                      :
                    </span>
                    <span className="font-mono text-sm text-neutral-900 dark:text-neutral-100">
                      {order.orderNumber}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">
                      {dictionary.order.product}
                      :
                    </span>
                    <span className="text-neutral-900 dark:text-neutral-100">
                      {order.productName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">
                      {dictionary.order.amount}
                      :
                    </span>
                    <span className="text-neutral-900 dark:text-neutral-100 font-semibold">
                      {order.currency} {order.amount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">
                      {dictionary.order.paidAt}
                      :
                    </span>
                    <span className="text-neutral-900 dark:text-neutral-100">
                      {order.paidAt
                        ? new Date(order.paidAt).toLocaleString(resolveIntlLocale(locale))
                        : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">
                      {dictionary.order.status}
                      :
                    </span>
                    <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-200">
                      {dictionary.order.paidLabel}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Params (if order not loaded) */}
            {!order &&
              (searchParams.request_id ||
                searchParams.checkout_id ||
                searchParams.order_id) && (
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                    {dictionary.paymentDetails.title}
                  </h2>
                  <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 space-y-4">
                    {searchParams.request_id && (
                      <div className="flex justify-between">
                        <span className="text-neutral-600 dark:text-neutral-300">
                          {dictionary.paymentDetails.requestId}:
                        </span>
                        <span className="font-mono text-sm text-neutral-900 dark:text-neutral-100">
                          {searchParams.request_id}
                        </span>
                      </div>
                    )}
                    {searchParams.checkout_id && (
                      <div className="flex justify-between">
                        <span className="text-neutral-600 dark:text-neutral-300">
                          {dictionary.paymentDetails.checkoutId}:
                        </span>
                        <span className="font-mono text-sm text-neutral-900 dark:text-neutral-100">
                          {searchParams.checkout_id}
                        </span>
                      </div>
                    )}
                    {searchParams.order_id && (
                      <div className="flex justify-between">
                        <span className="text-neutral-600 dark:text-neutral-300">
                          {dictionary.paymentDetails.orderId}:
                        </span>
                        <span className="font-mono text-sm text-neutral-900 dark:text-neutral-100">
                          {searchParams.order_id}
                        </span>
                      </div>
                    )}
                    {searchParams.customer_id && (
                      <div className="flex justify-between">
                        <span className="text-neutral-600 dark:text-neutral-300">
                          {dictionary.paymentDetails.customerId}:
                        </span>
                        <span className="font-mono text-sm text-neutral-900 dark:text-neutral-100">
                          {searchParams.customer_id}
                        </span>
                      </div>
                    )}
                    {searchParams.product_id && (
                      <div className="flex justify-between">
                        <span className="text-neutral-600 dark:text-neutral-300">
                          {dictionary.paymentDetails.productId}:
                        </span>
                        <span className="font-mono text-sm text-neutral-900 dark:text-neutral-100">
                          {searchParams.product_id}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                {dictionary.features.title}
              </h2>
              <ul className="space-y-4">
                {dictionary.features.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-neutral-600 dark:text-neutral-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center">
            {dictionary.quickActionsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Link
              href="/dashboard"
              className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {dictionary.actions.goToDashboard}
            </Link>
            <Link
              href="/orders"
              className="block w-full rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-4 py-3 text-center text-sm font-semibold text-neutral-900 dark:text-neutral-100 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {dictionary.actions.viewOrders}
            </Link>
            <Link
              href="/contact"
              className="block w-full rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-4 py-3 text-center text-sm font-semibold text-neutral-900 dark:text-neutral-100 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {dictionary.actions.contactSupport}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
