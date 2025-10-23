import type { Locale } from "@/i18n/types";

export interface PricingCopy {
  header: {
    title: string;
    subtitle: string;
    yearlyDiscount: string;
  };
  card: {
    popular: string;
    getStarted: string;
    buyNow: string;
    contactSales: string;
    included: string;
    limitations: string;
    save: string;
    processing: string;
  };
  billingToggle: {
    discount: string;
  };
}

const pricingCopy: Record<Locale, PricingCopy> = {
  en: {
    header: {
      title: "Pricing Plans",
      subtitle:
        "Simple and transparent pricing with no hidden fees. Choose the plan that best fits your needs, upgrade anytime.",
      yearlyDiscount: "Save 20% with yearly billing compared to monthly billing",
    },
    card: {
      popular: "Popular",
      getStarted: "Get Started",
      buyNow: "Buy Now",
      contactSales: "Contact Sales",
      included: "Included Features",
      limitations: "Limitations",
      save: "Save",
      processing: "Processing...",
    },
    billingToggle: {
      discount: "20% OFF",
    },
  },
  zh: {
    header: {
      title: "价格方案",
      subtitle: "简单透明的定价，没有隐藏费用。选择最适合您需求的方案，随时可以升级。",
      yearlyDiscount: "年付享受 20% 优惠，相比月付节省更多费用",
    },
    card: {
      popular: "推荐",
      getStarted: "开始使用",
      buyNow: "立即购买",
      contactSales: "联系销售",
      included: "包含功能",
      limitations: "限制说明",
      save: "节省",
      processing: "处理中...",
    },
    billingToggle: {
      discount: "20% 折扣",
    },
  },
  ja: {
    header: {
      title: "料金プラン",
      subtitle:
        "シンプルで透明な料金設定、隠れた費用はありません。ニーズに最適なプランを選択し、いつでもアップグレードできます。",
      yearlyDiscount: "年払いで月払いと比較して20%お得",
    },
    card: {
      popular: "人気",
      getStarted: "始める",
      buyNow: "今すぐ購入",
      contactSales: "営業に連絡",
      included: "含まれる機能",
      limitations: "制限事項",
      save: "節約",
      processing: "処理中...",
    },
    billingToggle: {
      discount: "20% 割引",
    },
  },
  es: {
    header: {
      title: "Planes de precios",
      subtitle:
        "Precios simples y transparentes sin cargos ocultos. Elige el plan que mejor se adapte a tus necesidades y actualiza cuando quieras.",
      yearlyDiscount: "Ahorra un 20% con facturación anual frente a la mensual",
    },
    card: {
      popular: "Popular",
      getStarted: "Comenzar",
      buyNow: "Comprar ahora",
      contactSales: "Contactar a ventas",
      included: "Funciones incluidas",
      limitations: "Limitaciones",
      save: "Ahorra",
      processing: "Procesando...",
    },
    billingToggle: {
      discount: "20% DTO.",
    },
  },
  ar: {
    header: {
      title: "خطط التسعير",
      subtitle:
        "تسعير بسيط وشفاف دون رسوم مخفية. اختر الخطة التي تناسب احتياجاتك ويمكنك الترقية في أي وقت.",
      yearlyDiscount: "وفر 20٪ مع الفوترة السنوية مقارنةً بالفوترة الشهرية",
    },
    card: {
      popular: "الأكثر شيوعًا",
      getStarted: "ابدأ الآن",
      buyNow: "اشتر الآن",
      contactSales: "تواصل مع المبيعات",
      included: "الميزات المتضمنة",
      limitations: "القيود",
      save: "وفر",
      processing: "جاري المعالجة...",
    },
    billingToggle: {
      discount: "خصم 20٪",
    },
  },
  id: {
    header: {
      title: "Paket harga",
      subtitle:
        "Harga sederhana dan transparan tanpa biaya tersembunyi. Pilih paket yang paling sesuai dengan kebutuhan Anda, tingkatkan kapan saja.",
      yearlyDiscount: "Hemat 20% dengan penagihan tahunan dibanding bulanan",
    },
    card: {
      popular: "Populer",
      getStarted: "Mulai sekarang",
      buyNow: "Beli sekarang",
      contactSales: "Hubungi sales",
      included: "Fitur yang disertakan",
      limitations: "Batasan",
      save: "Hemat",
      processing: "Memproses...",
    },
    billingToggle: {
      discount: "Diskon 20%",
    },
  },
  pt: {
    header: {
      title: "Planos de preços",
      subtitle:
        "Preços simples e transparentes, sem taxas ocultas. Escolha o plano que melhor atende às suas necessidades e faça upgrade a qualquer momento.",
      yearlyDiscount: "Economize 20% com faturamento anual em comparação ao mensal",
    },
    card: {
      popular: "Popular",
      getStarted: "Começar agora",
      buyNow: "Comprar agora",
      contactSales: "Fale com vendas",
      included: "Recursos incluídos",
      limitations: "Limitações",
      save: "Economize",
      processing: "Processando...",
    },
    billingToggle: {
      discount: "20% OFF",
    },
  },
  fr: {
    header: {
      title: "Forfaits tarifaires",
      subtitle:
        "Des tarifs simples et transparents sans frais cachés. Choisissez le forfait qui correspond le mieux à vos besoins et passez à l'offre supérieure quand vous le souhaitez.",
      yearlyDiscount: "Économisez 20 % avec la facturation annuelle par rapport à la mensuelle",
    },
    card: {
      popular: "Populaire",
      getStarted: "Commencer",
      buyNow: "Acheter maintenant",
      contactSales: "Contacter les ventes",
      included: "Fonctionnalités incluses",
      limitations: "Limitations",
      save: "Économisez",
      processing: "Traitement...",
    },
    billingToggle: {
      discount: "-20 %",
    },
  },
  ru: {
    header: {
      title: "Тарифные планы",
      subtitle:
        "Простое и прозрачное ценообразование без скрытых платежей. Выберите тариф, который лучше всего подходит вам, и обновляйте его в любое время.",
      yearlyDiscount: "Экономьте 20% при ежегодной оплате по сравнению с ежемесячной",
    },
    card: {
      popular: "Популярный",
      getStarted: "Начать",
      buyNow: "Купить сейчас",
      contactSales: "Связаться с отделом продаж",
      included: "Включенные функции",
      limitations: "Ограничения",
      save: "Экономия",
      processing: "Обработка...",
    },
    billingToggle: {
      discount: "Скидка 20%",
    },
  },
  de: {
    header: {
      title: "Preispläne",
      subtitle:
        "Einfache und transparente Preise ohne versteckte Gebühren. Wähle den Plan, der am besten zu deinen Bedürfnissen passt, und upgrade jederzeit.",
      yearlyDiscount: "Spare 20 % mit jährlicher Abrechnung im Vergleich zur monatlichen",
    },
    card: {
      popular: "Beliebt",
      getStarted: "Jetzt starten",
      buyNow: "Jetzt kaufen",
      contactSales: "Vertrieb kontaktieren",
      included: "Enthaltene Funktionen",
      limitations: "Einschränkungen",
      save: "Sparen",
      processing: "Wird verarbeitet...",
    },
    billingToggle: {
      discount: "20 % RABATT",
    },
  },
};

export function getPricingCopy(locale: Locale): PricingCopy {
  return pricingCopy[locale] ?? pricingCopy.en;
}
