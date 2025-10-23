import type { PartialAppDictionary } from "@/i18n/types";

export const esDictionary: PartialAppDictionary = {
  home: {
    badgeLabel: "2025🚀 Lanza ahora",
    heroTitle: "ShipBase, lanza más.",
    heroDescription:
      "ShipBase es un boilerplate de NextJS para crear startups de SaaS de IA. Lanza rápido con una variedad de plantillas y componentes.",
    ctaPrimary: "Comenzar",
    ctaSecondary: "Leer documentación",
    watchDemo: "Ver demo",
    viewDetails: "Ver detalles",
    promotionText: "🎁 100 USD de descuento para los primeros 1000 clientes",
    userCount: "de más de 250 usuarios felices",
    
    // Sección de tecnología
    techStackTitle: "ShipBase está construido sobre los hombros de gigantes",
    techStackItems: [
      { name: "Next.js", description: "Framework full‑stack de React" },
      { name: "React", description: "Biblioteca de interfaz de usuario" },
      { name: "TailwindCSS", description: "Framework CSS orientado a utilidades" },
      { name: "Shadcn/UI", description: "Biblioteca de componentes moderna" },
      { name: "Vercel", description: "Plataforma de despliegue" }
    ],
    
    // Sección de características
    featuresTitle: "Qué es ShipBase",
    featuresSubtitle: "ShipBase es un boilerplate de NextJS para construir startups de SaaS de IA. Incluye una variedad de plantillas y componentes.",
    features: [
      {
        title: "Plantillas listas para usar",
        description: "Elige entre docenas de plantillas de SaaS de IA listas para producción para comenzar tu proyecto rápidamente."
      },
      {
        title: "Configuración de infraestructura",
        description: "Obtén acceso instantáneo a una infraestructura escalable con buenas prácticas incorporadas."
      },
      {
        title: "Despliegue rápido",
        description: "Lanza tu aplicación de SaaS de IA en producción en horas, no días."
      }
    ],
    
    // Sección de beneficios
    benefitsTitle: "Por qué elegir ShipBase",
    benefitsSubtitle: "Obtén todo lo que necesitas para lanzar tu startup de IA: desde plantillas listas hasta soporte técnico.",
    benefits: [
      {
        title: "Marco completo",
        description: "Construido sobre Next.js con autenticación, pagos e integración de IA: todo funciona desde el primer momento."
      },
      {
        title: "Biblioteca de plantillas rica",
        description: "Selecciona plantillas que se ajusten a tus necesidades y comienza a construir de inmediato."
      },
      {
        title: "Guía técnica",
        description: "Recibe soporte técnico profesional para ayudarte a ponerte en marcha rápidamente."
      }
    ],
    
    // Pasos de lanzamiento
    launchStepsTitle: "Cómo lanzar con ShipBase",
    launchStepsSubtitle: "Pon en marcha tu startup de SaaS de IA en tres pasos sencillos:",
    launchSteps: [
      {
        step: "1",
        title: "Obtén ShipBase",
        description: "Compra ShipBase con un pago único. Revisa tu correo electrónico para el código y la documentación."
      },
      {
        step: "2",
        title: "Inicia tu proyecto",
        description: "Lee la documentación y clona el código de ShipBase. Empieza a construir tu startup de SaaS de IA."
      },
      {
        step: "3",
        title: "Personaliza tu proyecto",
        description: "Modifica la plantilla con tus datos y contenido. Cubre tus necesidades específicas de IA."
      },
      {
        step: "4",
        title: "Despliega a producción",
        description: "Lanza tu proyecto a producción en unos pocos pasos y comienza a servir a los clientes de inmediato."
      }
    ],
    
    // Características clave
    keyFeaturesTitle: "Características clave de ShipBase",
    keyFeaturesSubtitle: "Todo lo que necesitas para lanzar tu startup de SaaS de IA de forma rápida y eficiente.",
    keyFeatures: [
      {
        title: "Boilerplate de Next.js",
        description: "Plantillas de Next.js listas para producción con estructura amigable con SEO y soporte i18n."
      },
      {
        title: "Autenticación y pagos",
        description: "Integración de Google OAuth, inicio de sesión con un toque y procesamiento de pagos con Stripe."
      },
      {
        title: "Infraestructura de datos",
        description: "Integración integrada con Supabase para un almacenamiento de datos fiable y escalable."
      },
      {
        title: "Despliegue con un clic",
        description: "Implementación fluida en Vercel o Cloudflare con configuración automática."
      },
      {
        title: "Analítica empresarial",
        description: "Google Analytics y Search Console integrados para seguir el crecimiento."
      },
      {
        title: "Infraestructura lista para IA",
        description: "Integración de IA preconfigurada con sistema de créditos y venta de API integrada."
      }
    ],
    
    // Testimonios
    testimonialsTitle: "Lo que dicen los usuarios sobre ShipBase",
    testimonialsSubtitle: "Escucha a desarrolladores y fundadores que lanzaron sus startups de IA con ShipBase.",
    testimonials: [
      {
        quote: "ShipBase ha hecho que el viaje de la idea al producto sea más simple que nunca. Sus plantillas, scripts e infraestructura base completas significan que casi no tengo que dedicar tiempo al desarrollo básico. Lo recomiendo totalmente a los fundadores que quieren lanzar sus negocios SaaS rápidamente.",
        author: "Autor de AITDK",
        role: "Desarrollador independiente"
      },
      {
        quote: "ShipBase hizo súper fácil configurar los pagos y manejar todos los detalles de la comercialización, así pudimos mantenernos enfocados en construir funciones que importan. Si quieres lanzar y escalar tu SaaS de IA rápido, ShipBase es una apuesta segura!",
        author: "Scar",
        role: "Ingeniero front-end"
      },
      {
        quote: "Usé ShipBase y lancé un sitio nuevo en 8 minutos, incluyendo inicio de sesión y pagos, ¡increíble!",
        author: "Lafe",
        role: "Líder técnico"
      }
    ],
    
    // Demostraciones de producto
    productShowcaseTitle: "Startups de SaaS de IA creadas con ShipBase",
    productShowcaseSubtitle: "Descubre increíbles aplicaciones SaaS de IA construidas con ShipBase",
    showcaseItems: [
      {
        name: "Raphael AI",
        description: "Crea imágenes generadas por IA asombrosas en segundos",
        image: "/api/placeholder/400/300",
        category: "Generación de imágenes con IA"
      },
      {
        name: "SiteSnapper",
        description: "Captura cualquier sitio web con un solo clic",
        image: "/api/placeholder/400/300",
        category: "Herramientas web"
      },
      {
        name: "SEO Combine",
        description: "Todas las herramientas SEO en un solo lugar",
        image: "/api/placeholder/400/300",
        category: "Herramientas SEO"
      },
      {
        name: "TrendsBar",
        description: "Herramienta de análisis de Google Trends",
        image: "/api/placeholder/400/300",
        category: "Analítica de datos"
      },
      {
        name: "Deepseek Artifacts",
        description: "Crea aplicaciones React usando el principal modelo open‑source del mundo",
        image: "/api/placeholder/400/300",
        category: "Desarrollo de IA"
      },
      {
        name: "Rednote Club",
        description: "Comparte los momentos más bellos de tu vida en Rednote",
        image: "/api/placeholder/400/300",
        category: "Plataforma social"
      }
    ],
    
    // Estadísticas
    statsTitle: "La gente ama ShipBase",
    statsSubtitle: "porque es fácil de usar y lanzar rápido",
    stats: [
      {
        number: "250+",
        label: "Clientes",
        description: "Confían en nosotros"
      },
      {
        number: "30+",
        label: "Componentes",
        description: "Integrados"
      },
      {
        number: "5",
        label: "Minutos",
        description: "Lanza rápido en"
      }
    ],
    
    // Preguntas frecuentes
    faqTitle: "Preguntas frecuentes sobre ShipBase",
    faqSubtitle: "¿Tienes otra pregunta? Contáctanos en Discord o por correo electrónico.",
    faqs: [
      {
        question: "¿Qué es exactamente ShipBase y cómo funciona?",
        answer: "ShipBase es un boilerplate integral de NextJS diseñado específicamente para crear startups de SaaS de IA. Ofrece plantillas listas, configuración de infraestructura y herramientas de despliegue que te ayudan a lanzar tu negocio de IA en cuestión de horas."
      },
      {
        question: "¿Necesito habilidades técnicas avanzadas para usar ShipBase?",
        answer: "Aunque resulta útil tener conocimientos básicos de programación, ShipBase está pensado para ser amigable con los desarrolladores. Nuestras plantillas y documentación facilitan comenzar incluso si no eres experto en IA o infraestructura en la nube."
      },
      {
        question: "¿Qué tipos de SaaS de IA puedo construir con ShipBase?",
        answer: "ShipBase admite una amplia gama de aplicaciones de IA, desde generación de contenido hasta herramientas de análisis de datos. Nuestras plantillas cubren casos populares como chatbots de IA, generadores de contenido, aplicaciones de procesamiento de imágenes y más."
      },
      {
        question: "¿Cuánto tiempo tarda normalmente en lanzarse con ShipBase?",
        answer: "Con ShipBase puedes tener un prototipo funcional en horas y una aplicación lista para producción en muy poco tiempo. Nuestro despliegue con un clic y la infraestructura preconfigurada reducen enormemente el ciclo tradicional de desarrollo de meses."
      },
      {
        question: "¿Qué incluye la infraestructura de ShipBase?",
        answer: "ShipBase proporciona una pila de infraestructura completa que incluye autenticación, base de datos, integración de API, procesamiento de pagos y despliegue en la nube escalable. Todo está preconfigurado siguiendo las mejores prácticas de la industria."
      },
      {
        question: "¿Puedo personalizar las plantillas para adaptarlas a mi marca?",
        answer: "¡Por supuesto! Todas las plantillas de ShipBase son totalmente personalizables. Puedes modificar el diseño, las funciones y la lógica para alinearlos con tu identidad de marca y tus requisitos empresariales sin perder la infraestructura robusta."
      }
    ],
    
    // Llamada final a la acción
    finalCtaTitle: "Lanza tu primer SaaS de IA",
    finalCtaSubtitle: "Empieza aquí, lánzalo con ShipBase.",
    finalCtaButton: "Obtener ShipBase",
    finalCtaSecondary: "Leer documentación"
  },
  authPanel: {
    title: "Inicia sesión en ShipBase",
    description:
      "Autentícate con Google, GitHub o un enlace mágico impulsado por Better Auth.",
    signedInAs: "Conectado como {name}",
    sessionLabel: "ID de sesión: {id}",
    signOut: "Cerrar sesión",
    googleButton: {
      default: "Iniciar sesión con Google",
      loading: "Redirigiendo a Google…",
    },
    githubButton: {
      default: "Iniciar sesión con GitHub",
      loading: "Redirigiendo a GitHub…",
    },
    magicLinkHeading: "O envía un enlace mágico",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tu@ejemplo.com",
    magicLinkButton: {
      default: "Enviar enlace de acceso",
      loading: "Enviando…",
    },
    messages: {
      emptyEmail: "Por favor introduce una dirección de correo.",
      responseError: "No se pudo enviar el correo. Inténtalo de nuevo.",
      requestError: "Algo salió mal. Inténtalo más tarde.",
      success:
        "Enlace mágico enviado. Si no hay un servicio de correo configurado, revisa los registros del servidor para encontrarlo.",
    },
    footer: [
      {
        type: "text",
        value:
          "Después de iniciar sesión, Better Auth emite una sesión en el servidor y almacena una cookie solo‑HTTP. Combina ",
      },
      { type: "code", value: "authClient.useSession()" },
      {
        type: "text",
        value: " para acceder al usuario actual en cualquier componente del cliente.",
      },
    ],
  },
  header: {
    features: "Funciones",
    pricing: "Precios",
    docs: "Documentación",
    login: "Iniciar sesión",
    signup: "Prueba gratuita",
    languageSwitch: "Idioma",
    themeSwitch: "Tema",
    lightTheme: "Claro",
    darkTheme: "Oscuro",
    systemTheme: "Sistema",
    userMenu: {
      dashboard: "Panel",
      profile: "Perfil",
      membership: "Membresía",
      orders: "Pedidos",
      adminMenu: "Panel de administración",
      signOut: "Cerrar sesión",
    },
  },
  footer: {
    description: "Una plataforma SaaS moderna que te ayuda a crear y desplegar aplicaciones rápidamente.",
    product: "Producto",
    features: "Funciones",
    pricing: "Precios",
    integrations: "Integraciones",
    support: "Soporte",
    docs: "Documentación",
    helpCenter: "Centro de ayuda",
    contactUs: "Contáctanos",
    serviceStatus: "Estado del servicio",
    legal: "Legal",
    privacyPolicy: "Política de privacidad",
    termsOfService: "Términos del servicio",
    cookiePolicy: "Política de cookies",
    copyright: "© 2024 ShipBase. Todos los derechos reservados.",
    madeWithLove: "Hecho con ❤️",
  },
};
