"use client";

import { useState } from "react";

interface PaymentRequest {
  product_id: string;
  locale?: string;
}

interface PaymentResponse {
  ok: boolean;
  data?: {
    request_id: string;
    session_id: string;
    checkout_url: string;
  };
  message?: string;
}

interface PaymentState {
  isLoading: boolean;
  error: string | null;
  checkoutUrl: string | null;
}

export function usePayment() {
  const [state, setState] = useState<PaymentState>({
    isLoading: false,
    error: null,
    checkoutUrl: null,
  });

  const createCheckout = async (productId: string): Promise<boolean> => {
    setState({
      isLoading: true,
      error: null,
      checkoutUrl: null,
    });

    try {
      const response = await fetch("/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: productId,
        } as PaymentRequest),
      });

      const result: PaymentResponse = await response.json();

      if (!result.ok) {
        throw new Error(result.message || "支付请求失败");
      }

      if (!result.data?.checkout_url) {
        throw new Error("未获取到支付链接");
      }

      setState({
        isLoading: false,
        error: null,
        checkoutUrl: result.data.checkout_url,
      });

      // 自动跳转到支付页面
      window.location.href = result.data.checkout_url;
      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "支付请求失败";
      setState({
        isLoading: false,
        error: errorMessage,
        checkoutUrl: null,
      });
      return false;
    }
  };

  const reset = () => {
    setState({
      isLoading: false,
      error: null,
      checkoutUrl: null,
    });
  };

  return {
    ...state,
    createCheckout,
    reset,
  };
}
