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
};
