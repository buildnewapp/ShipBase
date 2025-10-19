import type { AppDictionary } from "@/i18n/types";

export const enDictionary: AppDictionary = {
  home: {
    badgeLabel: "2025🚀 Ship Now",
    heroTitle: "ShipBase, Ship More.",
    heroDescription:
      "ShipBase is a NextJS boilerplate for building AI SaaS startups. Ship Fast with a variety of templates and components.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Read Document",
    promotionText: "🎁 $100 off for the first 1000 customers",
    userCount: "from 250+ happy users",
    
    // Tech Stack Section
    techStackTitle: "ShipBase is built on the shoulders of giants",
    techStackItems: [
      { name: "Next.js", description: "React Full-stack Framework" },
      { name: "React", description: "User Interface Library" },
      { name: "TailwindCSS", description: "Utility-first CSS Framework" },
      { name: "Shadcn/UI", description: "Modern Component Library" },
      { name: "Vercel", description: "Deployment Platform" }
    ],
    
    // Features Section
    featuresTitle: "What is ShipBase",
    featuresSubtitle: "ShipBase is a NextJS boilerplate for building AI SaaS startups. Built in a variety of templates and components.",
    features: [
      {
        title: "Ready-to-use Templates",
        description: "Choose from dozens of production-ready AI SaaS templates to quickly start your project."
      },
      {
        title: "Infrastructure Setup",
        description: "Get instant access to scalable infrastructure with best practices built-in."
      },
      {
        title: "Quick Deployment",
        description: "Deploy your AI SaaS application to production in hours, not days."
      }
    ],
    
    // Benefits Section
    benefitsTitle: "Why Choose ShipBase",
    benefitsSubtitle: "Get everything you need to launch your AI startup - from ready-to-use templates to technical support.",
    benefits: [
      {
        title: "Complete Framework",
        description: "Built on Next.js with authentication, payments, and AI integration - everything works out of the box."
      },
      {
        title: "Rich Templates Library",
        description: "Choose from templates that fit your needs and start building quickly."
      },
      {
        title: "Technical Guidance",
        description: "Get professional technical support to help you get started quickly."
      }
    ],
    
    // Launch Steps
    launchStepsTitle: "How to Launch with ShipBase",
    launchStepsSubtitle: "Get your AI SaaS startup running in three simple steps:",
    launchSteps: [
      {
        step: "1",
        title: "Get ShipBase",
        description: "Buy ShipBase with a one-time payment. Check your email for the code and documentation."
      },
      {
        step: "2",
        title: "Start Your Project",
        description: "Read the documentation and clone the code of ShipBase. Start building your AI SaaS startup."
      },
      {
        step: "3",
        title: "Customize Your Project",
        description: "Modify the template with your data and contents. Specific AI functionality needs."
      },
      {
        step: "4",
        title: "Deploy to Production",
        description: "Deploy your project to production with a few steps and start serving customers immediately."
      }
    ],
    
    // Key Features
    keyFeaturesTitle: "Key Features of ShipBase",
    keyFeaturesSubtitle: "Everything you need to launch your AI SaaS startup quickly and efficiently.",
    keyFeatures: [
      {
        title: "Next.js Boilerplate",
        description: "Production-ready Next.js templates with SEO-friendly structure and i18n support."
      },
      {
        title: "Authentication & Payments",
        description: "Integrated Google OAuth, one-tap login, and Stripe payment processing."
      },
      {
        title: "Data Infrastructure",
        description: "Built-in Supabase integration for reliable and scalable data storage."
      },
      {
        title: "One-Click Deployment",
        description: "Seamless deployment to Vercel or Cloudflare with automated setup."
      },
      {
        title: "Business Analytics",
        description: "Integrated Google Analytics and Search Console for tracking growth."
      },
      {
        title: "AI-Ready Infrastructure",
        description: "Pre-configured AI integration with built-in credits system and API sales."
      }
    ],
    
    // Testimonials
    testimonialsTitle: "What Users Say About ShipBase",
    testimonialsSubtitle: "Hear from developers and founders who launched their AI startups with ShipBase.",
    testimonials: [
      {
        quote: "ShipBase has made the journey from idea to product simpler than ever before. Its comprehensive templates, scripts, and foundational infrastructure mean I hardly need to spend time on basic development. I highly recommend it to founders looking to quickly launch their SaaS businesses.",
        author: "Author of AITDK",
        role: "Independent Developer"
      },
      {
        quote: "ShipBase made it super easy to set up payments and handle all the nuts and bolts of commercialization, so we could stay laser-focused on building features that matter. If you're looking to ship and scale your AI SaaS fast, ShipBase is a no-brainer!",
        author: "Scar",
        role: "Front-end Engineer"
      },
      {
        quote: "I used ShipBase and launched a new website in 8 minutes, including login/payment, so amazing!",
        author: "Lafe",
        role: "Tech Lead"
      }
    ],
    
    // Final CTA
    finalCtaTitle: "Ship your first AI SaaS Startup",
    finalCtaSubtitle: "Start from here, ship with ShipBase.",
    finalCtaButton: "Get ShipBase",
    finalCtaSecondary: "Read Document"
  },
  authPanel: {
    title: "Sign in to Shipbase",
    description:
      "Authenticate with Google, GitHub, or a Magic Link powered by Better Auth.",
    signedInAs: "Signed in as {name}",
    sessionLabel: "Session ID: {id}",
    signOut: "Sign out",
    googleButton: {
      default: "Sign in with Google",
      loading: "Redirecting to Google…",
    },
    githubButton: {
      default: "Sign in with GitHub",
      loading: "Redirecting to GitHub…",
    },
    magicLinkHeading: "Or send a magic link",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    magicLinkButton: {
      default: "Send login link",
      loading: "Sending…",
    },
    messages: {
      emptyEmail: "Please enter an email address.",
      responseError: "Failed to send the email. Please try again.",
      requestError: "Something went wrong. Please try again later.",
      success:
        "Magic link sent. If an email service is not configured, check the server logs for the link.",
    },
    footer: [
      {
        type: "text",
        value:
          "After sign-in Better Auth issues a session on the server and stores an HTTP-only cookie. Combine ",
      },
      { type: "code", value: "authClient.useSession()" },
      {
        type: "text",
        value: " to access the current user in any client component.",
      },
    ],
  },
  header: {
    features: "Features",
    pricing: "Pricing",
    docs: "Docs",
    about: "About",
    login: "Login",
    signup: "Free Trial",
    languageSwitch: "Language",
    themeSwitch: "Theme",
    lightTheme: "Light",
    darkTheme: "Dark",
    systemTheme: "System",
  },
  footer: {
    description: "A modern SaaS platform that helps you quickly build and deploy applications.",
    product: "Product",
    features: "Features",
    pricing: "Pricing",
    integrations: "Integrations",
    apiDocs: "API Documentation",
    support: "Support",
    docs: "Documentation",
    helpCenter: "Help Center",
    contactUs: "Contact Us",
    serviceStatus: "Service Status",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    security: "Security",
    cookiePolicy: "Cookie Policy",
    copyright: "© 2024 ShipBase. All rights reserved.",
    madeWithLove: "Made with ❤️ in China",
  },
  pages: {
    features: {
      title: "Features",
      subtitle: "Powerful features to accelerate your development",
      description: "Discover the comprehensive set of tools and features that make ShipBase the perfect platform for modern SaaS applications.",
    },
    pricing: {
      title: "Pricing",
      subtitle: "Simple, transparent pricing",
      description: "Choose the plan that fits your needs. Start free and scale as you grow.",
    },
    docs: {
      title: "Documentation",
      subtitle: "Everything you need to get started",
      description: "Comprehensive guides, API references, and tutorials to help you build amazing applications.",
    },
    about: {
      title: "About Us",
      subtitle: "Building the future of SaaS development",
      description: "Learn about our mission, team, and the technology that powers ShipBase.",
    },
    integrations: {
      title: "Integrations",
      subtitle: "Connect with your favorite tools",
      description: "Seamlessly integrate ShipBase with your existing workflow and third-party services.",
    },
    api: {
      title: "API Documentation",
      subtitle: "Build with our powerful API",
      description: "Complete API reference with examples, SDKs, and interactive documentation.",
    },
    help: {
      title: "Help Center",
      subtitle: "Get the support you need",
      description: "Find answers to common questions, troubleshooting guides, and best practices.",
    },
    contact: {
      title: "Contact Us",
      subtitle: "We're here to help",
      description: "Get in touch with our team for support, partnerships, or general inquiries.",
    },
    status: {
      title: "Service Status",
      subtitle: "Real-time system status",
      description: "Monitor the current status of all ShipBase services and infrastructure.",
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "Your privacy matters",
      description: "Learn how we collect, use, and protect your personal information.",
    },
    terms: {
      title: "Terms of Service",
      subtitle: "Our terms and conditions",
      description: "Read our terms of service and understand your rights and responsibilities.",
    },
    security: {
      title: "Security",
      subtitle: "Your data is safe with us",
      description: "Learn about our security measures, compliance, and data protection practices.",
    },
    cookies: {
      title: "Cookie Policy",
      subtitle: "How we use cookies",
      description: "Understand how we use cookies and similar technologies on our platform.",
    },
    login: {
      title: "Sign In",
      subtitle: "Welcome back",
      description: "Sign in to your account to continue your journey with ShipBase.",
    },
    signup: {
      title: "Get Started",
      subtitle: "Create your account",
      description: "Join thousands of developers building amazing applications with ShipBase.",
    },
  },
};
