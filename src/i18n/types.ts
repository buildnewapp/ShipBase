export const locales = [
  "en",
  "zh",
  "es",
  "ar",
  "id",
  "pt",
  "fr",
  "ja",
  "ru",
  "de",
] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

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
  userMenu: {
    dashboard: string;
    profile: string;
    membership: string;
    orders: string;
    adminMenu: string;
    signOut: string;
  };
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
  billingCycles: {
    "one-time": {
      label: string;
      description: string;
    };
    "monthly": {
      label: string;
      description: string;
    };
    "yearly": {
      label: string;
      description: string;
    };
  };
  plans: PricingPlan[];
  cta: {
    getStarted: string;
    buyNow: string;
    contactSales: string;
    currentPlan: string;
  };
  features: {
    included: string;
    limitations: string;
  };
  pricing: {
    free: string;
    popular: string;
    discount: string;
    save: string;
    perMonth: string;
    perYear: string;
    oneTime: string;
    forever: string;
  };
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

export interface CookiesPageDictionary extends PageDictionary {
  lastUpdated: string;
  introduction: {
    title: string;
    content: string;
  };
  howWeUseCookies: {
    title: string;
    subtitle: string;
    essential: {
      title: string;
      description: string;
      examples: string[];
    };
    analytics: {
      title: string;
      description: string;
      examples: string[];
    };
    functional: {
      title: string;
      description: string;
      examples: string[];
    };
    marketing: {
      title: string;
      description: string;
      examples: string[];
    };
  };
  cookieTypes: {
    title: string;
    subtitle: string;
    sessionCookies: {
      title: string;
      description: string;
    };
    persistentCookies: {
      title: string;
      description: string;
    };
    firstPartyCookies: {
      title: string;
      description: string;
    };
    thirdPartyCookies: {
      title: string;
      description: string;
    };
  };
  manageCookies: {
    title: string;
    subtitle: string;
    description: string;
    browserSettings: {
      title: string;
      description: string;
      instructions: string[];
    };
    optOut: {
      title: string;
      description: string;
      links: string[];
    };
  };
  dataRetention: {
    title: string;
    content: string;
  };
  updates: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    content: string;
    email: string;
  };
  consent: {
    content: string;
  };
}

export interface ProfilePageDictionary extends PageDictionary {
  basicInfo: {
    title: string;
    description: string;
    emailLabel: string;
    registrationDate: string;
    unknown: string;
  };
  accountStatus: {
    title: string;
    description: string;
    emailVerification: string;
    accountStatus: string;
    loginMethod: string;
    verified: string;
    unverified: string;
    normal: string;
    oauth: string;
    emailLogin: string;
  };
  actions: {
    editProfile: string;
    changePassword: string;
  };
  noNameSet: string;
}

export interface OrderStatus {
  pending: string;
  paid: string;
  failed: string;
  cancelled: string;
  refunded: string;
}

export interface OrderCardDictionary {
  orderNumber: string;
  status: string;
  amount: string;
  product: string;
  createdAt: string;
  paidAt: string;
  actions: string;
  viewDetails: string;
  refreshStatus: string;
}

export interface OrdersListDictionary {
  title: string;
  subtitle: string;
  noOrders: string;
  loading: string;
  error: string;
  retry: string;
}

export interface OrdersFiltersDictionary {
  title: string;
  all: string;
  pending: string;
  paid: string;
  failed: string;
  cancelled: string;
  refunded: string;
}

export interface OrdersSearchDictionary {
  placeholder: string;
}

export interface OrdersPaginationDictionary {
  previous: string;
  next: string;
  showing: string;
  of: string;
  results: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  current?: boolean;
}

export interface MembershipCurrentPlan {
  title: string;
  description: string;
  freeVersion: string;
  paidVersion: string;
}

export interface MembershipUsage {
  apiCalls: string;
  projectCount: string;
  supportLevel: string;
  remainingThisMonth: string;
  maxLimit: string;
  responseTime: string;
  priority: string;
  standard: string;
}

export interface MembershipUpgradePlan {
  title: string;
  currentPlan: string;
  freeUse: string;
  upgradePlan: string;
}

export interface MembershipBillingHistory {
  title: string;
  description: string;
  noRecords: string;
  upgradeMessage: string;
  table: {
    date: string;
    description: string;
    amount: string;
    status: string;
    action: string;
    view: string;
  };
  status: {
    pending: string;
    paid: string;
    failed: string;
    cancelled: string;
    refunded: string;
  };
}

export interface MembershipPageDictionary extends PageDictionary {
  currentPlan: MembershipCurrentPlan;
  usage: MembershipUsage;
  upgradePlan: MembershipUpgradePlan;
  billingHistory: MembershipBillingHistory;
  plans: MembershipPlan[];
}

export interface OrderDetailsDictionary {
  title: string;
  subtitle: string;
  orderInfo: {
    orderNumber: string;
    status: string;
    createdAt: string;
    paidAt: string;
    cancelledAt: string;
    amount: string;
    currency: string;
    paymentProvider: string;
    customerEmail: string;
  };
  productInfo: {
    title: string;
    productName: string;
    productType: string;
    productId: string;
  };
  paymentInfo: {
    title: string;
    provider: string;
    requestId: string;
    sessionId: string;
  };
  customerInfo: {
    title: string;
    email: string;
  };
  orderItems: {
    title: string;
    productName: string;
    description: string;
    unitPrice: string;
    quantity: string;
    totalPrice: string;
  };
  actions: {
    back: string;
    refreshStatus: string;
  };
  status: OrderStatus;
  loading: string;
  error: string;
  retry: string;
  notFound: string;
}

export interface OrdersPageDictionary extends PageDictionary {
  ordersList: OrdersListDictionary;
  orderCard: OrderCardDictionary;
  status: OrderStatus;
  filters: OrdersFiltersDictionary;
  search: OrdersSearchDictionary;
  refresh: string;
  pagination: OrdersPaginationDictionary;
  orderDetails: OrderDetailsDictionary;
}

export interface DashboardStatCard {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}

export interface DashboardRecentActivity {
  action: string;
  time: string;
  icon: string;
}

export interface DashboardQuickAction {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface DashboardPageDictionary extends PageDictionary {
  stats: {
    title: string;
    subtitle: string;
    cards: DashboardStatCard[];
  };
  recentActivity: {
    title: string;
    subtitle: string;
    noActivity: string;
    activities: DashboardRecentActivity[];
  };
  quickActions: {
    title: string;
    subtitle: string;
    actions: DashboardQuickAction[];
  };
  welcomeMessage: string;
}

export interface BlogsPageDictionary extends PageDictionary {
  filters: {
    all: string;
    growthHacking: string;
    marketing: string;
    nextjsTechniques: string;
  };
  endOfPosts: string;
  readMore: string;
  postedOn: string;
}

export interface AdminBlogEditDictionary {
  title: string;
  subtitle: string;
  form: {
    language: string;
    title: string;
    slug: string;
    description: string;
    tags: string;
    status: string;
    visibility: string;
    featured: string;
    featuredDescription: string;
    generateSlug: string;
    slugHelper: string;
    titleHelper: string;
    descriptionHelper: string;
  };
  actions: {
    cancel: string;
    update: string;
    create: string;
  };
  status: {
    draft: string;
    published: string;
  };
  visibility: {
    public: string;
    private: string;
    subscribers: string;
  };
}

export interface AdminBlogsDictionary extends PageDictionary {
  list: {
    title: string;
    subtitle: string;
    noBlogs: string;
    createNew: string;
  };
  table: {
    title: string;
    author: string;
    status: string;
    visibility: string;
    featured: string;
    createdAt: string;
    actions: string;
    edit: string;
    delete: string;
  };
  edit: AdminBlogEditDictionary;
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
  cookies: CookiesPageDictionary;
  login: PageDictionary;
  signup: PageDictionary;
  profile: ProfilePageDictionary;
  membership: MembershipPageDictionary;
  orders: OrdersPageDictionary;
  dashboard: DashboardPageDictionary;
  blogs: BlogsPageDictionary;
  adminBlogs: AdminBlogsDictionary;
}

export interface AppDictionary {
  home: HomeDictionary;
  authPanel: AuthPanelDictionary;
  header: HeaderDictionary;
  footer: FooterDictionary;
  pages: PagesDictionary;
}

export type PartialAppDictionary = DeepPartial<AppDictionary>;
