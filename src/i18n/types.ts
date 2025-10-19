export const locales = ["en", "zh", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type RichTextSegment =
  | { type: "text"; value: string }
  | { type: "code"; value: string };

export type RichText = RichTextSegment[];

export interface TechStackItem {
  name: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface LaunchStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface HomeDictionary {
  badgeLabel: string;
  heroTitle: string;
  heroDescription: string;
  ctaPrimary: string;
  ctaSecondary: string;
  promotionText: string;
  userCount: string;
  
  // Tech Stack Section
  techStackTitle: string;
  techStackItems: TechStackItem[];
  
  // Features Section
  featuresTitle: string;
  featuresSubtitle: string;
  features: FeatureItem[];
  
  // Benefits Section
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: FeatureItem[];
  
  // Launch Steps
  launchStepsTitle: string;
  launchStepsSubtitle: string;
  launchSteps: LaunchStep[];
  
  // Key Features
  keyFeaturesTitle: string;
  keyFeaturesSubtitle: string;
  keyFeatures: FeatureItem[];
  
  // Testimonials
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: Testimonial[];
  
  // Final CTA
  finalCtaTitle: string;
  finalCtaSubtitle: string;
  finalCtaButton: string;
  finalCtaSecondary: string;
}

export interface AuthPanelDictionary {
  title: string;
  description: string;
  signedInAs: string;
  sessionLabel: string;
  signOut: string;
  googleButton: {
    default: string;
    loading: string;
  };
  githubButton: {
    default: string;
    loading: string;
  };
  magicLinkHeading: string;
  emailLabel: string;
  emailPlaceholder: string;
  magicLinkButton: {
    default: string;
    loading: string;
  };
  messages: {
    emptyEmail: string;
    responseError: string;
    requestError: string;
    success: string;
  };
  footer: RichText;
}

export interface HeaderDictionary {
  features: string;
  pricing: string;
  docs: string;
  about: string;
  login: string;
  signup: string;
  languageSwitch: string;
  themeSwitch: string;
  lightTheme: string;
  darkTheme: string;
  systemTheme: string;
}

export interface FooterDictionary {
  description: string;
  product: string;
  features: string;
  pricing: string;
  integrations: string;
  apiDocs: string;
  support: string;
  docs: string;
  helpCenter: string;
  contactUs: string;
  serviceStatus: string;
  legal: string;
  privacyPolicy: string;
  termsOfService: string;
  security: string;
  cookiePolicy: string;
  copyright: string;
  madeWithLove: string;
}

export interface PageDictionary {
  title: string;
  subtitle: string;
  description: string;
}

export interface PagesDictionary {
  features: PageDictionary;
  pricing: PageDictionary;
  docs: PageDictionary;
  about: PageDictionary;
  integrations: PageDictionary;
  api: PageDictionary;
  help: PageDictionary;
  contact: PageDictionary;
  status: PageDictionary;
  privacy: PageDictionary;
  terms: PageDictionary;
  security: PageDictionary;
  cookies: PageDictionary;
  login: PageDictionary;
  signup: PageDictionary;
}

export interface AppDictionary {
  home: HomeDictionary;
  authPanel: AuthPanelDictionary;
  header: HeaderDictionary;
  footer: FooterDictionary;
  pages: PagesDictionary;
}
