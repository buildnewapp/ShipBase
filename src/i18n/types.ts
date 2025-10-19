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

export interface ShowcaseItem {
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface StatItem {
  number: string;
  label: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HomeDictionary {
  badgeLabel: string;
  heroTitle: string;
  heroDescription: string;
  ctaPrimary: string;
  ctaSecondary: string;
  watchDemo: string;
  viewDetails: string;
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
  
  // Product Showcase
  productShowcaseTitle: string;
  productShowcaseSubtitle: string;
  showcaseItems: ShowcaseItem[];
  
  // Stats Section
  statsTitle: string;
  statsSubtitle: string;
  stats: StatItem[];
  
  // FAQ Section
  faqTitle: string;
  faqSubtitle: string;
  faqs: FAQItem[];
  
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

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  limitations: string[];
  cta: string;
  popular: boolean;
}

export interface PricingPageDictionary extends PageDictionary {
  plansTitle: string;
  plansSubtitle: string;
  plans: PricingPlan[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: FAQItem[];
}

export interface FeatureDetail {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface TechStackDetail {
  name: string;
  description: string;
}

export interface ComparisonItem {
  text: string;
}

export interface FeaturesPageDictionary extends PageDictionary {
  coreFeatures: {
    title: string;
    subtitle: string;
    features: FeatureDetail[];
  };
  techStack: {
    title: string;
    subtitle: string;
    technologies: TechStackDetail[];
  };
  comparison: {
    title: string;
    subtitle: string;
    traditional: {
      title: string;
      items: ComparisonItem[];
    };
    shipbase: {
      title: string;
      items: ComparisonItem[];
    };
  };
  cta: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

export interface PagesDictionary {
  features: FeaturesPageDictionary;
  pricing: PricingPageDictionary;
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
