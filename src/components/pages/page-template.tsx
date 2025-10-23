import type { PageDictionary, FeaturesPageDictionary, PricingPageDictionary, DocsPageDictionary, IntegrationsPageDictionary, HelpPageDictionary, ContactPageDictionary, StatusPageDictionary, PrivacyPageDictionary, TermsPageDictionary, CookiesPageDictionary, Locale } from "@/i18n/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, Rocket, Code, Database, Globe, BarChart3, Bot, CreditCard, Users } from "lucide-react";
import { PricingComponent } from "@/components/pricing";

interface PageTemplateProps {
  dictionary: PageDictionary | FeaturesPageDictionary | PricingPageDictionary | DocsPageDictionary | IntegrationsPageDictionary | HelpPageDictionary | ContactPageDictionary | StatusPageDictionary | PrivacyPageDictionary | TermsPageDictionary | CookiesPageDictionary;
  locale: Locale;
}

export function PageTemplate({ dictionary, locale }: PageTemplateProps) {
  // 根据页面类型渲染不同的内容
  const renderPageContent = () => {
    // 使用类型判断而不是title字符串
    if ('coreFeatures' in dictionary) {
      return <FeaturesContent dictionary={dictionary as FeaturesPageDictionary} />;
    }
    if ('plans' in dictionary) {
      return <PricingContent dictionary={dictionary as PricingPageDictionary} locale={locale} />;
    }
    if ('quickStart' in dictionary) {
      return <DocsContent dictionary={dictionary as DocsPageDictionary} />;
    }
    if ('categories' in dictionary && 'popularIntegrations' in dictionary) {
      return <IntegrationsContent dictionary={dictionary as IntegrationsPageDictionary} locale={locale} />;
    }
    if ('searchPlaceholder' in dictionary) {
      return <HelpContent dictionary={dictionary as HelpPageDictionary} />;
    }
    if ('contactMethods' in dictionary) {
      return <ContactContent dictionary={dictionary as ContactPageDictionary} />;
    }
    if ('overview' in dictionary || 'services' in dictionary) {
      return <StatusContent dictionary={dictionary as StatusPageDictionary} />;
    }
    if ('informationCollection' in dictionary) {
      return <PrivacyContent dictionary={dictionary as PrivacyPageDictionary} locale={locale} />;
    }
    if ('serviceUse' in dictionary) {
      return <TermsContent dictionary={dictionary as TermsPageDictionary} locale={locale} />;
    }
    if ('howWeUseCookies' in dictionary) {
      return <CookiesContent dictionary={dictionary as CookiesPageDictionary} />;
    }

    // 默认内容
    return (
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Coming Soon
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              This page is currently under development. We&apos;re working hard to bring you amazing content and features.
            </p>
            <div className="mt-6">
              <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>In active development</span>
              </div>
            </div>
          </div>
        </div>
    );
  };

  return (
      <div className="min-h-screen bg-white dark:bg-neutral-950">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl">
                {dictionary.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                {dictionary.subtitle}
              </p>
              <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
                {dictionary.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {renderPageContent()}
        </div>
      </div>
  );
}

// 图标映射函数
function getIcon(iconName: string) {
  const iconMap = {
    Code: <Code className="h-8 w-8 text-blue-600" />,
    Shield: <Shield className="h-8 w-8 text-green-600" />,
    CreditCard: <CreditCard className="h-8 w-8 text-purple-600" />,
    Database: <Database className="h-8 w-8 text-orange-600" />,
    Bot: <Bot className="h-8 w-8 text-pink-600" />,
    Rocket: <Rocket className="h-8 w-8 text-red-600" />,
    BarChart3: <BarChart3 className="h-8 w-8 text-indigo-600" />,
    Globe: <Globe className="h-8 w-8 text-teal-600" />,
  };
  return iconMap[iconName as keyof typeof iconMap] || <Code className="h-8 w-8 text-blue-600" />;
}

// 分类图标映射函数
function getCategoryIcon(iconName: string) {
  switch (iconName) {
    case "Rocket":
      return <Rocket className="h-8 w-8" />;
    case "Code":
      return <Code className="h-8 w-8" />;
    case "Globe":
      return <Globe className="h-8 w-8" />;
    case "Zap":
      return <Zap className="h-8 w-8" />;
    default:
      return <Code className="h-8 w-8" />;
  }
}

// 功能特性页面内容
function FeaturesContent({ dictionary }: { dictionary: FeaturesPageDictionary }) {

  return (
      <div className="space-y-16">
        {/* 核心特性 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.coreFeatures.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.coreFeatures.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dictionary.coreFeatures.features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getIcon(feature.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* 技术栈 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.techStack.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.techStack.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dictionary.techStack.technologies.map((tech, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {tech.description}
                  </p>
                </Card>
            ))}
          </div>
        </div>

        {/* 特性对比 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.comparison.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.comparison.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 font-bold text-xl">×</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {dictionary.comparison.traditional.title}
                </h3>
              </div>
              <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
                {dictionary.comparison.traditional.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="text-red-500">•</span>
                      <span>{item.text}</span>
                    </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {dictionary.comparison.shipbase.title}
                </h3>
              </div>
              <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
                {dictionary.comparison.shipbase.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>{item.text}</span>
                    </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {dictionary.cta.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            {dictionary.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              {dictionary.cta.primaryButton}
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              {dictionary.cta.secondaryButton}
            </Button>
          </div>
        </div>
      </div>
  );
}

// 价格方案页面内容
function PricingContent({ dictionary, locale }: { dictionary: PricingPageDictionary; locale: Locale }) {
  return (
    <div className="space-y-16">
      {/* 使用新的价格组件 */}
      <PricingComponent
        locale={locale}
        showBillingToggle={true}
      />

      {/* FAQ */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {dictionary.faqTitle}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {dictionary.faqSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dictionary.faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                {faq.question}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// 文档页面内容
function DocsContent({ dictionary }: { dictionary: DocsPageDictionary }) {
  const quickStart = dictionary.quickStart.steps;

  const docSections = dictionary.navigation.sections.map(section => ({
    ...section,
    icon: getIcon(section.icon)
  }));

  return (
      <div className="space-y-16">
        {/* 快速开始 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.quickStart.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.quickStart.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStart.map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {step.description}
                  </p>
                  <div className="bg-neutral-900 dark:bg-neutral-800 rounded-lg p-3">
                    <code className="text-green-400 text-sm whitespace-pre-wrap">
                      {step.code}
                    </code>
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* 文档导航 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.navigation.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.navigation.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docSections.map((section, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-blue-600 dark:text-blue-400">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {section.description}
                  </p>
                  <ul className="space-y-2">
                    {section.links.map((link, idx) => (
                        <li key={idx}>
                          <a
                              href={link.href}
                              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                          >
                            {link.name}
                          </a>
                        </li>
                    ))}
                  </ul>
                </Card>
            ))}
          </div>
        </div>

        {/* 社区和支持 */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {dictionary.support.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            {dictionary.support.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              {dictionary.support.discordButton}
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              {dictionary.support.faqButton}
            </Button>
          </div>
        </div>
      </div>
  );
}

// 集成页面内容
function IntegrationsContent({ dictionary, locale }: { dictionary: IntegrationsPageDictionary; locale: Locale }) {
  // 图标映射函数
  const getCategoryIcon = (iconName: string) => {
    const iconMap = {
      Shield: <Shield className="h-8 w-8 text-blue-600" />,
      CreditCard: <CreditCard className="h-8 w-8 text-green-600" />,
      Database: <Database className="h-8 w-8 text-purple-600" />,
      Bot: <Bot className="h-8 w-8 text-pink-600" />,
      BarChart3: <BarChart3 className="h-8 w-8 text-indigo-600" />,
      Mail: <Users className="h-8 w-8 text-teal-600" />,
    };
    return iconMap[iconName as keyof typeof iconMap] || <Code className="h-8 w-8 text-gray-600" />;
  };

  // 状态映射函数
  const getStatusBadge = (status: string) => {
    // 根据locale映射状态文本
    const statusTextMap: Record<string, Record<string, string>> = {
      available: {
        zh: "已集成",
        ja: "利用可能",
        en: "Available",
        es: "Disponible",
        fr: "Disponible",
        de: "Verfügbar",
        pt: "Disponível",
        ru: "Доступно",
        id: "Tersedia",
        ar: "متاح"
      },
      "coming-soon": {
        zh: "计划中",
        ja: "近日公開",
        en: "Coming Soon",
        es: "Próximamente",
        fr: "Bientôt disponible",
        de: "Bald verfügbar",
        pt: "Em breve",
        ru: "Скоро",
        id: "Segera hadir",
        ar: "قريباً"
      },
      beta: {
        zh: "测试版",
        ja: "ベータ版",
        en: "Beta",
        es: "Beta",
        fr: "Bêta",
        de: "Beta",
        pt: "Beta",
        ru: "Бета",
        id: "Beta",
        ar: "تجريبي"
      }
    };
    
    const statusMap = {
      available: { 
        text: statusTextMap.available[locale] || statusTextMap.available.en, 
        variant: "default" as const, 
        className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
      },
      "coming-soon": { 
        text: statusTextMap["coming-soon"][locale] || statusTextMap["coming-soon"].en, 
        variant: "secondary" as const, 
        className: "" 
      },
      beta: { 
        text: statusTextMap.beta[locale] || statusTextMap.beta.en, 
        variant: "secondary" as const, 
        className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" 
      },
    };
    return statusMap[status as keyof typeof statusMap] || { text: status, variant: "secondary" as const, className: "" };
  };

  return (
      <div className="space-y-16">
        {/* 集成概览 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.popularIntegrations.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.popularIntegrations.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dictionary.categories.map((category, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    {getCategoryIcon(category.icon)}
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                    {category.description}
                  </p>
                  <div className="space-y-3">
                    {category.integrations.map((integration, idx) => {
                      const statusInfo = getStatusBadge(integration.status);
                      return (
                          <div key={idx} className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                                {integration.name}
                              </h4>
                              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                                {integration.description}
                              </p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {integration.features.slice(0, 2).map((feature, featureIdx) => (
                                    <span key={featureIdx} className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-2 py-1 rounded">
                                      {feature}
                                    </span>
                                ))}
                              </div>
                            </div>
                            <Badge
                                variant={statusInfo.variant}
                                className={statusInfo.className}
                            >
                              {statusInfo.text}
                            </Badge>
                          </div>
                      );
                    })}
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* 热门集成 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.popularIntegrations.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.popularIntegrations.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dictionary.popularIntegrations.items.map((integration, index) => {
              const statusInfo = getStatusBadge(integration.status);
              return (
                  <Card key={index} className="p-6 text-center">
                    <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl mx-auto mb-4 flex items-center justify-center font-bold text-2xl">
                      {integration.name.charAt(0)}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                      {integration.name}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">
                      {integration.description}
                    </p>
                    <Badge
                        variant={statusInfo.variant}
                        className={statusInfo.className}
                    >
                      {statusInfo.text}
                    </Badge>
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {integration.features.slice(0, 2).map((feature, featureIdx) => (
                            <span key={featureIdx} className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-2 py-1 rounded">
                              {feature}
                            </span>
                        ))}
                      </div>
                    </div>
                  </Card>
              );
            })}
          </div>
        </div>

        {/* 快速开始 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.gettingStarted.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.gettingStarted.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dictionary.gettingStarted.steps.map((step, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="h-12 w-12 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">
                    {step.description}
                  </p>
                  <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-3 text-left">
                    <pre className="text-xs text-neutral-600 dark:text-neutral-300 whitespace-pre-wrap">
                      {step.code}
                    </pre>
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {dictionary.cta.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            {dictionary.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              {dictionary.cta.primaryButton}
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              {dictionary.cta.secondaryButton}
            </Button>
          </div>
        </div>
      </div>
  );
}

// 帮助中心页面内容
function HelpContent({ dictionary }: { dictionary: HelpPageDictionary }) {

  return (
      <div className="space-y-16">
        {/* 搜索框 */}
        <div className="text-center">
          <div className="max-w-md mx-auto">
            <input
                type="text"
                placeholder={dictionary.searchPlaceholder}
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* 热门文章 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.popularArticles.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.popularArticles.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dictionary.popularArticles.articles.map((article, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                    ))}
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* 帮助分类 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.categoriesTitle}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.categoriesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dictionary.categories.map((category, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl mx-auto mb-4 flex items-center justify-center font-bold text-2xl">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    {category.articles.slice(0, 3).map((article, articleIndex) => (
                        <div key={articleIndex} className="text-left">
                          <a href={article.href} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                            {article.title}
                          </a>
                        </div>
                    ))}
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.faq.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.faq.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {dictionary.faq.faqs.map((faq, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      {faq.answer}
                    </p>
                  </Card>
              ))}
            </div>
          </div>
        </div>

        {/* 联系支持 */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.contact.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
              {dictionary.contact.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                {dictionary.contact.emailButton}
              </Button>
              <Button variant="outline">
                {dictionary.contact.discordButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
}

// 联系我们页面内容
function ContactContent({ dictionary }: { dictionary: ContactPageDictionary }) {
  const getContactIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="h-8 w-8 text-blue-600" />;
      case "Zap":
        return <Zap className="h-8 w-8 text-green-600" />;
      case "Shield":
        return <Shield className="h-8 w-8 text-purple-600" />;
      case "Rocket":
        return <Rocket className="h-8 w-8 text-orange-600" />;
      default:
        return <Users className="h-8 w-8 text-blue-600" />;
    }
  };

  return (
      <div className="space-y-16">
        {/* 联系方式 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.contactMethodsTitle}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.contactMethodsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dictionary.contactMethods.map((method, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {getContactIcon(method.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {method.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    {method.action}
                  </Button>
                </Card>
            ))}
          </div>
        </div>

        {/* 团队联系 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.teamTitle}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.teamSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dictionary.team.map((member, index) => (
                <Card key={index} className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">
                    {member.email}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                    {member.description}
                  </p>
                </Card>
            ))}
          </div>
        </div>

        {/* 响应时间 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.responseTimeTitle}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.responseTimeSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dictionary.responseTimes.map((response, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {response.time}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {response.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                    {response.description}
                  </p>
                </Card>
            ))}
          </div>
        </div>
      </div>
  );
}

// 服务状态页面内容
function StatusContent({ dictionary }: { dictionary: StatusPageDictionary }) {
  const services = [
    {
      name: dictionary.services.api.name,
      description: dictionary.services.api.description,
      status: "operational",
      uptime: "99.9%",
      lastIncident: dictionary.services.none
    },
    {
      name: dictionary.services.auth.name,
      description: dictionary.services.auth.description,
      status: "operational",
      uptime: "99.8%",
      lastIncident: "2 days ago"
    },
    {
      name: dictionary.services.payments.name,
      description: dictionary.services.payments.description,
      status: "operational",
      uptime: "99.9%",
      lastIncident: dictionary.services.none
    },
    {
      name: dictionary.services.database.name,
      description: dictionary.services.database.description,
      status: "operational",
      uptime: "99.7%",
      lastIncident: "1 week ago"
    },
    {
      name: dictionary.services.cdn.name,
      description: dictionary.services.cdn.description,
      status: "operational",
      uptime: "99.9%",
      lastIncident: dictionary.services.none
    },
    {
      name: dictionary.services.monitoring.name,
      description: dictionary.services.monitoring.description,
      status: "operational",
      uptime: "99.9%",
      lastIncident: dictionary.services.none
    }
  ];

  return (
      <div className="space-y-16">
        {/* 服务状态概览 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.services.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                        {service.name}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600 dark:text-green-400">
                        {dictionary.services.statusOperational}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600 dark:text-neutral-300">{dictionary.services.uptime}</span>
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">
                        {service.uptime}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600 dark:text-neutral-300">{dictionary.services.lastIncident}</span>
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">
                        {service.lastIncident}
                      </span>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* 订阅更新 */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {dictionary.subscribe.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            {dictionary.subscribe.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              {dictionary.subscribe.emailSubscribe}
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              {dictionary.subscribe.rssSubscribe}
            </Button>
          </div>
        </div>
      </div>
  );
}

// 隐私政策页面内容
function PrivacyContent({ dictionary, locale }: { dictionary: PrivacyPageDictionary; locale: Locale }) {
  const informationItems = [
    dictionary.informationCollection.accountInfo,
    dictionary.informationCollection.usageDetails,
    dictionary.informationCollection.deviceInfo,
    dictionary.informationCollection.cookies,
    dictionary.informationCollection.paymentInfo
  ];

  // 根据locale获取标签文本
  const getLabels = () => {
    const labelsMap: Record<string, Record<string, string>> = {
      "whatWeCollect": {
        zh: "我们收集的内容：",
        ja: "収集する内容：",
        en: "What We Collect:",
        es: "Lo que recopilamos:",
        fr: "Ce que nous collectons :",
        de: "Was wir sammeln:",
        pt: "O que coletamos:",
        ru: "Что мы собираем:",
        id: "Yang kami kumpulkan:",
        ar: "ما نجمع:"
      },
      "purpose": {
        zh: "目的：",
        ja: "目的：",
        en: "Purpose:",
        es: "Propósito:",
        fr: "Objectif :",
        de: "Zweck:",
        pt: "Propósito:",
        ru: "Цель:",
        id: "Tujuan:",
        ar: "الغرض:"
      },
      "consent": {
        zh: "同意条款",
        ja: "同意条項",
        en: "Consent",
        es: "Consentimiento",
        fr: "Consentement",
        de: "Einverständnis",
        pt: "Consentimento",
        ru: "Согласие",
        id: "Persetujuan",
        ar: "موافقة"
      }
    };
    
    return {
      whatWeCollect: labelsMap.whatWeCollect[locale] || labelsMap.whatWeCollect.en,
      purpose: labelsMap.purpose[locale] || labelsMap.purpose.en,
      consent: labelsMap.consent[locale] || labelsMap.consent.en
    };
  };

  const labels = getLabels();

  return (
    <div className="space-y-16">
      {/* 最后更新时间 */}
      <div className="text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {dictionary.lastUpdated}
        </p>
      </div>

      {/* 介绍 */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.introduction.title}
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {dictionary.introduction.content}
        </p>
      </div>

      {/* 信息收集和使用 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.informationCollection.title}
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
          {dictionary.informationCollection.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {informationItems.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                {item.title}
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">
                    {labels.whatWeCollect}
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                    {item.whatWeCollect}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">
                    {labels.purpose}
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                    {item.purpose}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 数据存储和安全 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.dataStorage.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.dataStorage.content}
          </p>
        </Card>
      </div>

      {/* 信息共享和披露 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.informationSharing.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
            {dictionary.informationSharing.content}
          </p>
          <ul className="space-y-3">
            {dictionary.informationSharing.circumstances.map((circumstance, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span className="text-neutral-600 dark:text-neutral-300">{circumstance}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* 政策变更 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.policyChanges.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.policyChanges.content}
          </p>
        </Card>
      </div>

      {/* 联系我们 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.contactUs.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
            {dictionary.contactUs.content}
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-neutral-600 dark:text-neutral-300">
                <strong>{dictionary.contactUs.copyrightOwner}</strong>
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-green-600" />
              <span className="text-neutral-600 dark:text-neutral-300">
                <strong>{dictionary.contactUs.email}</strong>
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* 同意声明 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {labels.consent}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.consent.content}
          </p>
        </div>
      </div>
    </div>
  );
}

// 服务条款页面内容
function TermsContent({ dictionary, locale }: { dictionary: TermsPageDictionary; locale: Locale }) {
  // 根据locale获取标签文本
  const getLabels = () => {
    const labelsMap: Record<string, Record<string, string>> = {
      "acknowledgment": {
        zh: "确认条款",
        ja: "確認条項",
        en: "Acknowledgment",
        es: "Reconocimiento",
        fr: "Reconnaissance",
        de: "Bestätigung",
        pt: "Confirmação",
        ru: "Подтверждение",
        id: "Pengakuan",
        ar: "الاعتراف"
      }
    };
    
    return {
      acknowledgment: labelsMap.acknowledgment[locale] || labelsMap.acknowledgment.en
    };
  };

  const labels = getLabels();

  return (
    <div className="space-y-16">
      {/* 最后更新时间 */}
      <div className="text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {dictionary.lastUpdated}
        </p>
      </div>

      {/* 介绍 */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.introduction.title}
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {dictionary.introduction.content}
        </p>
      </div>

      {/* 服务使用 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.serviceUse.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.serviceUse.content}
          </p>
        </Card>
      </div>

      {/* 用户账户 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.userAccounts.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.userAccounts.content}
          </p>
        </Card>
      </div>

      {/* 知识产权 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.intellectualProperty.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
            {dictionary.intellectualProperty.content}
          </p>
          <ul className="space-y-3">
            {dictionary.intellectualProperty.points.map((point, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span className="text-neutral-600 dark:text-neutral-300">{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* 禁止活动 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.prohibitedActivities.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
            {dictionary.prohibitedActivities.content}
          </p>
          <ul className="space-y-3">
            {dictionary.prohibitedActivities.activities.map((activity, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-red-600 dark:text-red-400 font-bold mt-1">•</span>
                <span className="text-neutral-600 dark:text-neutral-300">{activity}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* 隐私和数据收集 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.privacyData.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
            {dictionary.privacyData.content}
          </p>
          <ul className="space-y-3 mb-6">
            {dictionary.privacyData.dataTypes.map((dataType, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-green-600 dark:text-green-400 font-bold mt-1">•</span>
                <span className="text-neutral-600 dark:text-neutral-300">{dataType}</span>
              </li>
            ))}
          </ul>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.privacyData.privacyPolicy}
          </p>
        </Card>
      </div>

      {/* 定价和支付 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.pricingPayments.title}
        </h2>
        <Card className="p-8">
          <ul className="space-y-3">
            {dictionary.pricingPayments.points.map((point, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span className="text-neutral-600 dark:text-neutral-300">{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* 终止 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.termination.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.termination.content}
          </p>
        </Card>
      </div>

      {/* 免责声明 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.warranties.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.warranties.content}
          </p>
        </Card>
      </div>

      {/* 责任限制 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.liability.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.liability.content}
          </p>
        </Card>
      </div>

      {/* 赔偿 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.indemnification.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.indemnification.content}
          </p>
        </Card>
      </div>

      {/* 适用法律 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.governingLaw.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.governingLaw.content}
          </p>
        </Card>
      </div>

      {/* 条款变更 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.changes.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.changes.content}
          </p>
        </Card>
      </div>

      {/* 联系信息 */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          {dictionary.contact.title}
        </h2>
        <Card className="p-8">
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.contact.content}
          </p>
        </Card>
      </div>

      {/* 确认声明 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {labels.acknowledgment}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.acknowledgment.content}
          </p>
        </div>
      </div>
    </div>
  );
}


// Cookie政策页面内容
function CookiesContent({ dictionary }: { dictionary: CookiesPageDictionary }) {
  return (
    <div className="space-y-16">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
          {dictionary.lastUpdated}
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            {dictionary.introduction.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.introduction.content}
          </p>
        </section>

        {/* How We Use Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {dictionary.howWeUseCookies.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            {dictionary.howWeUseCookies.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Essential Cookies */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {dictionary.howWeUseCookies.essential.title}
                </h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {dictionary.howWeUseCookies.essential.description}
              </p>
              <ul className="space-y-2">
                {dictionary.howWeUseCookies.essential.examples.map((example, index) => (
                  <li key={index} className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {example}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Analytics Cookies */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {dictionary.howWeUseCookies.analytics.title}
                </h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {dictionary.howWeUseCookies.analytics.description}
              </p>
              <ul className="space-y-2">
                {dictionary.howWeUseCookies.analytics.examples.map((example, index) => (
                  <li key={index} className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                    {example}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Functional Cookies */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {dictionary.howWeUseCookies.functional.title}
                </h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {dictionary.howWeUseCookies.functional.description}
              </p>
              <ul className="space-y-2">
                {dictionary.howWeUseCookies.functional.examples.map((example, index) => (
                  <li key={index} className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                    {example}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Marketing Cookies */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Rocket className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {dictionary.howWeUseCookies.marketing.title}
                </h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {dictionary.howWeUseCookies.marketing.description}
              </p>
              <ul className="space-y-2">
                {dictionary.howWeUseCookies.marketing.examples.map((example, index) => (
                  <li key={index} className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    {example}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {dictionary.cookieTypes.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            {dictionary.cookieTypes.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {dictionary.cookieTypes.sessionCookies.title}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {dictionary.cookieTypes.sessionCookies.description}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {dictionary.cookieTypes.persistentCookies.title}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {dictionary.cookieTypes.persistentCookies.description}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {dictionary.cookieTypes.firstPartyCookies.title}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {dictionary.cookieTypes.firstPartyCookies.description}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {dictionary.cookieTypes.thirdPartyCookies.title}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {dictionary.cookieTypes.thirdPartyCookies.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Manage Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {dictionary.manageCookies.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4">
            {dictionary.manageCookies.subtitle}
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 mb-8">
            {dictionary.manageCookies.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                {dictionary.manageCookies.browserSettings.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {dictionary.manageCookies.browserSettings.description}
              </p>
              <ul className="space-y-2">
                {dictionary.manageCookies.browserSettings.instructions.map((instruction, index) => (
                  <li key={index} className="text-sm text-neutral-500 dark:text-neutral-400">
                    {instruction}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                {dictionary.manageCookies.optOut.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {dictionary.manageCookies.optOut.description}
              </p>
              <ul className="space-y-2">
                {dictionary.manageCookies.optOut.links.map((link, index) => (
                  <li key={index} className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            {dictionary.dataRetention.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.dataRetention.content}
          </p>
        </section>

        {/* Updates */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            {dictionary.updates.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {dictionary.updates.content}
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            {dictionary.contact.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4">
            {dictionary.contact.content}
          </p>
          <p className="text-lg text-blue-600 dark:text-blue-400">
            {dictionary.contact.email}
          </p>
        </section>

        {/* Consent */}
        <section className="mb-12">
          <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <p className="text-lg text-neutral-700 dark:text-neutral-300 font-medium">
              {dictionary.consent.content}
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}
