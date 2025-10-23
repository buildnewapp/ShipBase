import type { Locale } from "@/i18n/types";

export interface PaymentSuccessDictionary {
  title: string;
  subtitle: string;
  description: string;
  loading: {
    processing: string;
  };
  errors: {
    generic: string;
    network: string;
  };
  order: {
    title: string;
    number: string;
    product: string;
    amount: string;
    paidAt: string;
    status: string;
    paidLabel: string;
  };
  paymentDetails: {
    title: string;
    requestId: string;
    checkoutId: string;
    orderId: string;
    customerId: string;
    productId: string;
  };
  actions: {
    goToDashboard: string;
    viewOrders: string;
    contactSupport: string;
  };
  features: {
    title: string;
    items: string[];
  };
  quickActionsTitle: string;
}

export interface PaymentFailedDictionary {
  title: string;
  subtitle: string;
  description: string;
  actions: {
    tryAgain: string;
    contactSupport: string;
    goBack: string;
  };
  troubleshooting: {
    title: string;
    items: string[];
  };
  nextStepsTitle: string;
}

const paymentSuccessCopy: Record<Locale, PaymentSuccessDictionary> = {
  en: {
    title: "Payment Successful",
    subtitle: "Thank you for your purchase!",
    description:
      "Your payment has been successfully processed. You can now start using our services.",
    loading: {
      processing: "Processing payment information...",
    },
    errors: {
      generic: "We ran into an issue while processing your payment information.",
      network: "Network error, please try again later.",
    },
    order: {
      title: "Order Details",
      number: "Order Number",
      product: "Product",
      amount: "Amount",
      paidAt: "Paid At",
      status: "Status",
      paidLabel: "Paid",
    },
    paymentDetails: {
      title: "Payment Details",
      requestId: "Request ID",
      checkoutId: "Checkout ID",
      orderId: "Order ID",
      customerId: "Customer ID",
      productId: "Product ID",
    },
    actions: {
      goToDashboard: "Go to Dashboard",
      viewOrders: "View Orders",
      contactSupport: "Contact Support",
    },
    features: {
      title: "What you can do next:",
      items: [
        "Access all premium features",
        "Enjoy priority technical support",
        "Get commercial use license",
        "Access complete documentation and tutorials",
      ],
    },
    quickActionsTitle: "Quick Actions",
  },
  zh: {
    title: "支付成功",
    subtitle: "感谢您的购买！",
    description: "您的支付已成功处理，您现在可以开始使用我们的服务了。",
    loading: {
      processing: "正在处理支付信息...",
    },
    errors: {
      generic: "处理支付信息时发生错误。",
      network: "网络错误，请稍后重试。",
    },
    order: {
      title: "订单详情",
      number: "订单号",
      product: "产品",
      amount: "金额",
      paidAt: "支付时间",
      status: "状态",
      paidLabel: "已支付",
    },
    paymentDetails: {
      title: "支付详情",
      requestId: "请求ID",
      checkoutId: "支付ID",
      orderId: "订单ID",
      customerId: "客户ID",
      productId: "产品ID",
    },
    actions: {
      goToDashboard: "前往控制台",
      viewOrders: "查看订单",
      contactSupport: "联系支持",
    },
    features: {
      title: "接下来您可以：",
      items: [
        "访问所有高级功能",
        "享受优先技术支持",
        "获得商业使用许可",
        "访问完整文档和教程",
      ],
    },
    quickActionsTitle: "快速操作",
  },
  ja: {
    title: "支払い成功",
    subtitle: "ご購入ありがとうございます！",
    description:
      "お支払いが正常に処理されました。今すぐサービスをご利用いただけます。",
    loading: {
      processing: "支払い情報を処理中...",
    },
    errors: {
      generic: "支払い情報の処理中にエラーが発生しました。",
      network: "ネットワークエラーが発生しました。後でもう一度お試しください。",
    },
    order: {
      title: "注文詳細",
      number: "注文番号",
      product: "商品",
      amount: "金額",
      paidAt: "支払日時",
      status: "状態",
      paidLabel: "支払済み",
    },
    paymentDetails: {
      title: "支払い詳細",
      requestId: "リクエストID",
      checkoutId: "支払いID",
      orderId: "注文ID",
      customerId: "顧客ID",
      productId: "商品ID",
    },
    actions: {
      goToDashboard: "ダッシュボードへ",
      viewOrders: "注文を確認",
      contactSupport: "サポートに連絡",
    },
    features: {
      title: "次にできること：",
      items: [
        "すべての高度な機能にアクセス",
        "優先技術サポートを受ける",
        "商用利用ライセンスを取得",
        "完全なドキュメントとチュートリアルにアクセス",
      ],
    },
    quickActionsTitle: "クイックアクション",
  },
  es: {
    title: "Pago completado",
    subtitle: "¡Gracias por tu compra!",
    description:
      "Tu pago se ha procesado correctamente. Ya puedes empezar a usar nuestros servicios.",
    loading: {
      processing: "Procesando la información de pago...",
    },
    errors: {
      generic: "Ocurrió un problema al procesar tu información de pago.",
      network: "Error de red, inténtalo de nuevo más tarde.",
    },
    order: {
      title: "Detalles del pedido",
      number: "Número de pedido",
      product: "Producto",
      amount: "Importe",
      paidAt: "Pagado el",
      status: "Estado",
      paidLabel: "Pagado",
    },
    paymentDetails: {
      title: "Detalles del pago",
      requestId: "ID de solicitud",
      checkoutId: "ID de checkout",
      orderId: "ID de pedido",
      customerId: "ID de cliente",
      productId: "ID de producto",
    },
    actions: {
      goToDashboard: "Ir al panel",
      viewOrders: "Ver pedidos",
      contactSupport: "Contactar soporte",
    },
    features: {
      title: "¿Qué puedes hacer ahora?",
      items: [
        "Acceder a todas las funciones premium",
        "Disfrutar de soporte técnico prioritario",
        "Obtener licencia para uso comercial",
        "Acceder a documentación y tutoriales completos",
      ],
    },
    quickActionsTitle: "Acciones rápidas",
  },
  ar: {
    title: "تم الدفع بنجاح",
    subtitle: "شكرًا لشرائك!",
    description:
      "تمت معالجة دفعتك بنجاح. يمكنك الآن البدء في استخدام خدماتنا.",
    loading: {
      processing: "جارٍ معالجة معلومات الدفع...",
    },
    errors: {
      generic: "واجهنا مشكلة أثناء معالجة معلومات الدفع الخاصة بك.",
      network: "خطأ في الشبكة، يرجى المحاولة لاحقًا.",
    },
    order: {
      title: "تفاصيل الطلب",
      number: "رقم الطلب",
      product: "المنتج",
      amount: "المبلغ",
      paidAt: "تاريخ الدفع",
      status: "الحالة",
      paidLabel: "مدفوع",
    },
    paymentDetails: {
      title: "تفاصيل الدفع",
      requestId: "معرّف الطلب",
      checkoutId: "معرّف الدفع",
      orderId: "معرّف الطلبية",
      customerId: "معرّف العميل",
      productId: "معرّف المنتج",
    },
    actions: {
      goToDashboard: "الذهاب إلى لوحة التحكم",
      viewOrders: "عرض الطلبات",
      contactSupport: "الاتصال بالدعم",
    },
    features: {
      title: "ما يمكنك القيام به بعد ذلك:",
      items: [
        "الوصول إلى جميع الميزات المتقدمة",
        "الاستفادة من دعم فني ذو أولوية",
        "الحصول على ترخيص للاستخدام التجاري",
        "الوصول إلى الوثائق والدروس الكاملة",
      ],
    },
    quickActionsTitle: "إجراءات سريعة",
  },
  id: {
    title: "Pembayaran berhasil",
    subtitle: "Terima kasih atas pembelian Anda!",
    description:
      "Pembayaran Anda telah berhasil diproses. Anda dapat langsung mulai menggunakan layanan kami.",
    loading: {
      processing: "Memproses informasi pembayaran...",
    },
    errors: {
      generic: "Terjadi masalah saat memproses informasi pembayaran Anda.",
      network: "Kesalahan jaringan, coba lagi nanti.",
    },
    order: {
      title: "Detail pesanan",
      number: "Nomor pesanan",
      product: "Produk",
      amount: "Jumlah",
      paidAt: "Dibayar pada",
      status: "Status",
      paidLabel: "Lunas",
    },
    paymentDetails: {
      title: "Detail pembayaran",
      requestId: "ID permintaan",
      checkoutId: "ID checkout",
      orderId: "ID pesanan",
      customerId: "ID pelanggan",
      productId: "ID produk",
    },
    actions: {
      goToDashboard: "Ke dashboard",
      viewOrders: "Lihat pesanan",
      contactSupport: "Hubungi dukungan",
    },
    features: {
      title: "Langkah berikutnya:",
      items: [
        "Akses semua fitur premium",
        "Nikmati dukungan teknis prioritas",
        "Dapatkan lisensi penggunaan komersial",
        "Akses dokumentasi dan tutorial lengkap",
      ],
    },
    quickActionsTitle: "Aksi cepat",
  },
  pt: {
    title: "Pagamento concluído",
    subtitle: "Obrigado pela sua compra!",
    description:
      "Seu pagamento foi processado com sucesso. Você já pode começar a usar nossos serviços.",
    loading: {
      processing: "Processando as informações de pagamento...",
    },
    errors: {
      generic: "Ocorreu um problema ao processar suas informações de pagamento.",
      network: "Erro de rede, tente novamente mais tarde.",
    },
    order: {
      title: "Detalhes do pedido",
      number: "Número do pedido",
      product: "Produto",
      amount: "Valor",
      paidAt: "Pago em",
      status: "Status",
      paidLabel: "Pago",
    },
    paymentDetails: {
      title: "Detalhes do pagamento",
      requestId: "ID da solicitação",
      checkoutId: "ID do checkout",
      orderId: "ID do pedido",
      customerId: "ID do cliente",
      productId: "ID do produto",
    },
    actions: {
      goToDashboard: "Ir para o painel",
      viewOrders: "Ver pedidos",
      contactSupport: "Contatar suporte",
    },
    features: {
      title: "O que você pode fazer agora:",
      items: [
        "Acessar todos os recursos premium",
        "Aproveitar suporte técnico prioritário",
        "Obter licença para uso comercial",
        "Acessar documentação e tutoriais completos",
      ],
    },
    quickActionsTitle: "Ações rápidas",
  },
  fr: {
    title: "Paiement réussi",
    subtitle: "Merci pour votre achat !",
    description:
      "Votre paiement a été traité avec succès. Vous pouvez commencer à utiliser nos services dès maintenant.",
    loading: {
      processing: "Traitement des informations de paiement...",
    },
    errors: {
      generic: "Un problème est survenu lors du traitement de votre paiement.",
      network: "Erreur réseau, veuillez réessayer plus tard.",
    },
    order: {
      title: "Détails de la commande",
      number: "Numéro de commande",
      product: "Produit",
      amount: "Montant",
      paidAt: "Payé le",
      status: "Statut",
      paidLabel: "Payé",
    },
    paymentDetails: {
      title: "Détails du paiement",
      requestId: "ID de requête",
      checkoutId: "ID de paiement",
      orderId: "ID de commande",
      customerId: "ID client",
      productId: "ID produit",
    },
    actions: {
      goToDashboard: "Aller au tableau de bord",
      viewOrders: "Voir les commandes",
      contactSupport: "Contacter le support",
    },
    features: {
      title: "Que faire ensuite :",
      items: [
        "Accéder à toutes les fonctionnalités premium",
        "Profiter d'un support technique prioritaire",
        "Obtenir une licence d'utilisation commerciale",
        "Accéder à la documentation et aux tutoriels complets",
      ],
    },
    quickActionsTitle: "Actions rapides",
  },
  ru: {
    title: "Платеж прошел успешно",
    subtitle: "Спасибо за покупку!",
    description:
      "Ваш платеж успешно обработан. Вы можете сразу начать пользоваться нашими сервисами.",
    loading: {
      processing: "Обработка платежной информации...",
    },
    errors: {
      generic: "Возникла проблема при обработке платежной информации.",
      network: "Ошибка сети, попробуйте позже.",
    },
    order: {
      title: "Детали заказа",
      number: "Номер заказа",
      product: "Продукт",
      amount: "Сумма",
      paidAt: "Дата оплаты",
      status: "Статус",
      paidLabel: "Оплачено",
    },
    paymentDetails: {
      title: "Детали платежа",
      requestId: "ID запроса",
      checkoutId: "ID платежа",
      orderId: "ID заказа",
      customerId: "ID клиента",
      productId: "ID продукта",
    },
    actions: {
      goToDashboard: "Перейти в панель",
      viewOrders: "Просмотреть заказы",
      contactSupport: "Связаться с поддержкой",
    },
    features: {
      title: "Что делать дальше:",
      items: [
        "Получить доступ ко всем премиум-функциям",
        "Воспользоваться приоритетной техподдержкой",
        "Получить лицензию для коммерческого использования",
        "Получить доступ к полной документации и руководствам",
      ],
    },
    quickActionsTitle: "Быстрые действия",
  },
  de: {
    title: "Zahlung erfolgreich",
    subtitle: "Vielen Dank für deinen Kauf!",
    description:
      "Deine Zahlung wurde erfolgreich verarbeitet. Du kannst unseren Service jetzt sofort nutzen.",
    loading: {
      processing: "Zahlungsinformationen werden verarbeitet...",
    },
    errors: {
      generic: "Beim Verarbeiten deiner Zahlungsinformationen ist ein Fehler aufgetreten.",
      network: "Netzwerkfehler, bitte versuche es später erneut.",
    },
    order: {
      title: "Bestelldetails",
      number: "Bestellnummer",
      product: "Produkt",
      amount: "Betrag",
      paidAt: "Bezahlt am",
      status: "Status",
      paidLabel: "Bezahlt",
    },
    paymentDetails: {
      title: "Zahlungsdetails",
      requestId: "Anfrage-ID",
      checkoutId: "Checkout-ID",
      orderId: "Bestell-ID",
      customerId: "Kunden-ID",
      productId: "Produkt-ID",
    },
    actions: {
      goToDashboard: "Zum Dashboard",
      viewOrders: "Bestellungen ansehen",
      contactSupport: "Support kontaktieren",
    },
    features: {
      title: "Nächste Schritte:",
      items: [
        "Zugriff auf alle Premium-Funktionen",
        "Priorisierten technischen Support nutzen",
        "Lizenz für kommerzielle Nutzung erhalten",
        "Zugriff auf vollständige Dokumentation und Tutorials",
      ],
    },
    quickActionsTitle: "Schnellaktionen",
  },
};

const paymentFailedCopy: Record<Locale, PaymentFailedDictionary> = {
  en: {
    title: "Payment Failed",
    subtitle: "Sorry, there was an issue processing your payment",
    description:
      "Your payment could not be completed successfully. Please check your payment information or try a different payment method.",
    actions: {
      tryAgain: "Try Again",
      contactSupport: "Contact Support",
      goBack: "Back to Pricing",
    },
    troubleshooting: {
      title: "Common troubleshooting:",
      items: [
        "Check if your card has sufficient balance",
        "Verify your payment information is correct",
        "Try using a different payment method",
        "Contact your bank to confirm transaction limits",
      ],
    },
    nextStepsTitle: "Next Steps",
  },
  zh: {
    title: "支付失败",
    subtitle: "很抱歉，支付处理出现问题",
    description:
      "您的支付未能成功完成。请检查您的支付信息或尝试其他支付方式。",
    actions: {
      tryAgain: "重试支付",
      contactSupport: "联系支持",
      goBack: "返回定价",
    },
    troubleshooting: {
      title: "常见问题解决：",
      items: [
        "检查银行卡余额是否充足",
        "确认支付信息输入正确",
        "尝试使用不同的支付方式",
        "联系银行确认交易限制",
      ],
    },
    nextStepsTitle: "下一步操作",
  },
  ja: {
    title: "支払い失敗",
    subtitle: "申し訳ございませんが、支払い処理に問題が発生しました",
    description:
      "お支払いが正常に完了しませんでした。支払い情報をご確認いただくか、他の支払い方法をお試しください。",
    actions: {
      tryAgain: "支払いを再試行",
      contactSupport: "サポートに連絡",
      goBack: "料金に戻る",
    },
    troubleshooting: {
      title: "よくある問題の解決：",
      items: [
        "カードの残高が十分かご確認ください",
        "支払い情報の入力が正しいかご確認ください",
        "別の支払い方法をお試しください",
        "銀行に連絡して取引制限を確認してください",
      ],
    },
    nextStepsTitle: "次のステップ",
  },
  es: {
    title: "Pago fallido",
    subtitle: "Lo sentimos, hubo un problema con tu pago",
    description:
      "Tu pago no pudo completarse correctamente. Verifica la información de pago o prueba con otro método.",
    actions: {
      tryAgain: "Intentar de nuevo",
      contactSupport: "Contactar soporte",
      goBack: "Volver a precios",
    },
    troubleshooting: {
      title: "Soluciones habituales:",
      items: [
        "Comprueba si tu tarjeta tiene saldo suficiente",
        "Verifica que la información de pago sea correcta",
        "Prueba con otro método de pago",
        "Contacta a tu banco para confirmar límites de transacción",
      ],
    },
    nextStepsTitle: "Próximos pasos",
  },
  ar: {
    title: "فشل الدفع",
    subtitle: "عذرًا، حدثت مشكلة أثناء معالجة الدفع",
    description:
      "لم نتمكن من إكمال الدفع بنجاح. يرجى التحقق من معلومات الدفع أو تجربة طريقة أخرى.",
    actions: {
      tryAgain: "إعادة المحاولة",
      contactSupport: "الاتصال بالدعم",
      goBack: "العودة إلى الأسعار",
    },
    troubleshooting: {
      title: "خطوات المساعدة الشائعة:",
      items: [
        "تحقق من توفر رصيد كافٍ في بطاقتك",
        "تأكد من صحة معلومات الدفع",
        "جرب استخدام طريقة دفع مختلفة",
        "تواصل مع البنك للتأكد من حدود المعاملات",
      ],
    },
    nextStepsTitle: "الخطوات التالية",
  },
  id: {
    title: "Pembayaran gagal",
    subtitle: "Maaf, terjadi masalah saat memproses pembayaran",
    description:
      "Pembayaran Anda tidak dapat diselesaikan. Harap periksa informasi pembayaran atau coba metode lain.",
    actions: {
      tryAgain: "Coba lagi",
      contactSupport: "Hubungi dukungan",
      goBack: "Kembali ke harga",
    },
    troubleshooting: {
      title: "Solusi umum:",
      items: [
        "Periksa apakah saldo kartu Anda mencukupi",
        "Pastikan informasi pembayaran sudah benar",
        "Coba gunakan metode pembayaran lain",
        "Hubungi bank Anda untuk memastikan batas transaksi",
      ],
    },
    nextStepsTitle: "Langkah selanjutnya",
  },
  pt: {
    title: "Pagamento falhou",
    subtitle: "Desculpe, houve um problema ao processar o pagamento",
    description:
      "Não foi possível concluir o pagamento. Verifique as informações ou tente outro método.",
    actions: {
      tryAgain: "Tentar novamente",
      contactSupport: "Contatar suporte",
      goBack: "Voltar aos preços",
    },
    troubleshooting: {
      title: "Soluções comuns:",
      items: [
        "Verifique se seu cartão tem saldo suficiente",
        "Confirme se as informações de pagamento estão corretas",
        "Tente usar outro método de pagamento",
        "Entre em contato com o banco para confirmar limites de transação",
      ],
    },
    nextStepsTitle: "Próximos passos",
  },
  fr: {
    title: "Paiement échoué",
    subtitle: "Désolé, un problème est survenu lors du paiement",
    description:
      "Votre paiement n'a pas pu être effectué. Vérifiez vos informations ou essayez une autre méthode.",
    actions: {
      tryAgain: "Réessayer",
      contactSupport: "Contacter le support",
      goBack: "Retour aux tarifs",
    },
    troubleshooting: {
      title: "Dépannage courant :",
      items: [
        "Vérifiez que votre carte dispose de fonds suffisants",
        "Assurez-vous que vos informations de paiement sont correctes",
        "Essayez une autre méthode de paiement",
        "Contactez votre banque pour confirmer les limites de transaction",
      ],
    },
    nextStepsTitle: "Étapes suivantes",
  },
  ru: {
    title: "Платеж не прошел",
    subtitle: "К сожалению, при обработке платежа возникла проблема",
    description:
      "Не удалось успешно завершить платеж. Проверьте данные или попробуйте другой способ оплаты.",
    actions: {
      tryAgain: "Повторить попытку",
      contactSupport: "Связаться с поддержкой",
      goBack: "Вернуться к тарифам",
    },
    troubleshooting: {
      title: "Частые решения:",
      items: [
        "Проверьте, достаточно ли средств на карте",
        "Убедитесь, что платежные данные введены верно",
        "Попробуйте другой способ оплаты",
        "Свяжитесь с банком, чтобы подтвердить лимиты операций",
      ],
    },
    nextStepsTitle: "Дальнейшие шаги",
  },
  de: {
    title: "Zahlung fehlgeschlagen",
    subtitle: "Leider gab es ein Problem bei der Verarbeitung der Zahlung",
    description:
      "Deine Zahlung konnte nicht abgeschlossen werden. Prüfe deine Angaben oder nutze eine andere Methode.",
    actions: {
      tryAgain: "Erneut versuchen",
      contactSupport: "Support kontaktieren",
      goBack: "Zurück zu den Preisen",
    },
    troubleshooting: {
      title: "Häufige Lösungen:",
      items: [
        "Prüfe, ob deine Karte genügend Guthaben hat",
        "Stelle sicher, dass deine Zahlungsdaten korrekt sind",
        "Versuche eine andere Zahlungsmethode",
        "Kontaktiere deine Bank, um Transaktionslimits zu prüfen",
      ],
    },
    nextStepsTitle: "Nächste Schritte",
  },
};

export function getPaymentSuccessDictionary(locale: Locale): PaymentSuccessDictionary {
  return paymentSuccessCopy[locale] ?? paymentSuccessCopy.en;
}

export function getPaymentFailedDictionary(locale: Locale): PaymentFailedDictionary {
  return paymentFailedCopy[locale] ?? paymentFailedCopy.en;
}
