import type { AppDictionary } from "@/i18n/types";

export const enDictionary: AppDictionary = {
  home: {
    badgeLabel: "Better Auth Ready",
    heroTitle: "Enable secure sign-in methods for Shipbase",
    heroDescription:
      "Integrate Google and GitHub OAuth plus Magic Link email sign-in through Better Auth. Sessions stay on the server and automatically sync via HTTP-only cookies.",
    bullets: [
      [
        {
          type: "text",
          value:
            "Configure multiple OAuth providers on the fly with environment variables.",
        },
      ],
      [
        {
          type: "text",
          value:
            "Magic Link logs the URL on the server by default and can be delivered through a custom webhook.",
        },
      ],
      [
        { type: "text", value: "Use " },
        { type: "code", value: "authClient.useSession()" },
        {
          type: "text",
          value: " to read the current sign-in state in client components.",
        },
      ],
    ],
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
