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
  support: string;
  docs: string;
  helpCenter: string;
  contactUs: string;
  serviceStatus: string;
  legal: string;
  privacyPolicy: string;
  termsOfService: string;
  cookiePolicy: string;
  copyright: string;
  madeWithLove: string;
}

export interface PageDictionary {
  title: string;
  subtitle: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar: string;
}

export interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}


export interface QuickStartStep {
  step: string;
  title: string;
  description: string;
  code: string;
}

export interface DocSectionLink {
  name: string;
  href: string;
}

export interface DocSection {
  title: string;
  description: string;
  icon: string;
  links: DocSectionLink[];
}

export interface DocsPageDictionary extends PageDictionary {
  quickStart: {
    title: string;
    subtitle: string;
    steps: QuickStartStep[];
  };
  navigation: {
    title: string;
    subtitle: string;
    sections: DocSection[];
  };
  support: {
    title: string;
    subtitle: string;
    description: string;
    discordButton: string;
    faqButton: string;
  };
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

export interface IntegrationCategory {
  name: string;
  description: string;
  icon: string;
  integrations: IntegrationItem[];
}

export interface IntegrationItem {
  name: string;
  description: string;
  logo: string;
  status: "available" | "coming-soon" | "beta";
  features: string[];
  documentation?: string;
}

export interface IntegrationsPageDictionary extends PageDictionary {
  categories: IntegrationCategory[];
  popularIntegrations: {
    title: string;
    subtitle: string;
    items: IntegrationItem[];
  };
  gettingStarted: {
    title: string;
    subtitle: string;
    steps: QuickStartStep[];
  };
  cta: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

export interface HelpCategory {
  title: string;
  description: string;
  icon: string;
  articles: HelpArticle[];
}

export interface HelpArticle {
  title: string;
  description: string;
  href: string;
  tags: string[];
}

export interface HelpPageDictionary extends PageDictionary {
  searchPlaceholder: string;
  popularArticles: {
    title: string;
    subtitle: string;
    articles: HelpArticle[];
  };
  categoriesTitle: string;
  categoriesSubtitle: string;
  categories: HelpCategory[];
  faq: {
    title: string;
    subtitle: string;
    faqs: FAQItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    emailButton: string;
    discordButton: string;
  };
}

export interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  action: string;
  href: string;
}

export interface ContactTeam {
  name: string;
  email: string;
  description: string;
}

export interface ResponseTime {
  time: string;
  title: string;
  description: string;
}

export interface ContactPageDictionary extends PageDictionary {
  contactMethods: ContactMethod[];
  team: ContactTeam[];
  responseTimes: ResponseTime[];
  contactMethodsTitle: string;
  contactMethodsSubtitle: string;
  teamTitle: string;
  teamSubtitle: string;
  responseTimeTitle: string;
  responseTimeSubtitle: string;
}

export interface ServiceInfo {
  name: string;
  description: string;
}

export interface StatusPageDictionary extends PageDictionary {
  overview: {
    title: string;
    subtitle: string;
    allSystemsOperational: string;
    lastUpdated: string;
  };
  services: {
    title: string;
    subtitle: string;
    api: ServiceInfo;
    auth: ServiceInfo;
    payments: ServiceInfo;
    database: ServiceInfo;
    cdn: ServiceInfo;
    monitoring: ServiceInfo;
    statusOperational: string;
    statusDegraded: string;
    statusOutage: string;
    uptime: string;
    lastIncident: string;
    none: string;
  };
  subscribe: {
    title: string;
    subtitle: string;
    emailSubscribe: string;
    rssSubscribe: string;
    description: string;
  };
}

export interface PrivacyInfoItem {
  title: string;
  whatWeCollect: string;
  purpose: string;
}

export interface PrivacyPageDictionary extends PageDictionary {
  lastUpdated: string;
  introduction: {
    title: string;
    content: string;
  };
  informationCollection: {
    title: string;
    subtitle: string;
    accountInfo: PrivacyInfoItem;
    usageDetails: PrivacyInfoItem;
    deviceInfo: PrivacyInfoItem;
    cookies: PrivacyInfoItem;
    paymentInfo: PrivacyInfoItem;
  };
  dataStorage: {
    title: string;
    content: string;
  };
  informationSharing: {
    title: string;
    content: string;
    circumstances: string[];
  };
  policyChanges: {
    title: string;
    content: string;
  };
  contactUs: {
    title: string;
    content: string;
    copyrightOwner: string;
    email: string;
  };
  consent: {
    content: string;
  };
}

export interface TermsPageDictionary extends PageDictionary {
  lastUpdated: string;
  introduction: {
    title: string;
    content: string;
  };
  serviceUse: {
    title: string;
    content: string;
  };
  userAccounts: {
    title: string;
    content: string;
  };
  intellectualProperty: {
    title: string;
    content: string;
    points: string[];
  };
  prohibitedActivities: {
    title: string;
    content: string;
    activities: string[];
  };
  privacyData: {
    title: string;
    content: string;
    dataTypes: string[];
    privacyPolicy: string;
  };
  pricingPayments: {
    title: string;
    points: string[];
  };
  termination: {
    title: string;
    content: string;
  };
  warranties: {
    title: string;
    content: string;
  };
  liability: {
    title: string;
    content: string;
  };
  indemnification: {
    title: string;
    content: string;
  };
  governingLaw: {
    title: string;
    content: string;
  };
  changes: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    content: string;
  };
  acknowledgment: {
    content: string;
  };
}

export interface PagesDictionary {
  features: FeaturesPageDictionary;
  pricing: PricingPageDictionary;
  docs: DocsPageDictionary;
  integrations: IntegrationsPageDictionary;
  help: HelpPageDictionary;
  contact: ContactPageDictionary;
  status: StatusPageDictionary;
  privacy: PrivacyPageDictionary;
  terms: TermsPageDictionary;
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
