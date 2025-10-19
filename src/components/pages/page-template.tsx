import type { PageDictionary, FeaturesPageDictionary, PricingPageDictionary, DocsPageDictionary, IntegrationsPageDictionary, HelpPageDictionary, ContactPageDictionary, StatusPageDictionary } from "@/i18n/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, Rocket, Code, Database, Globe, BarChart3, Bot, CreditCard, Users, Lock } from "lucide-react";

interface PageTemplateProps {
  dictionary: PageDictionary | FeaturesPageDictionary | PricingPageDictionary | DocsPageDictionary | IntegrationsPageDictionary | HelpPageDictionary | ContactPageDictionary | StatusPageDictionary;
}

export function PageTemplate({ dictionary }: PageTemplateProps) {
  // 根据页面类型渲染不同的内容
  const renderPageContent = () => {
    if (dictionary.title === "功能特性" || dictionary.title === "Features" || dictionary.title === "機能") {
      return <FeaturesContent dictionary={dictionary as FeaturesPageDictionary} />;
    }
    if (dictionary.title === "价格方案" || dictionary.title === "Pricing" || dictionary.title === "料金") {
      return <PricingContent dictionary={dictionary as PricingPageDictionary} />;
    }
    if (dictionary.title === "文档" || dictionary.title === "Documentation" || dictionary.title === "ドキュメント") {
      return <DocsContent dictionary={dictionary as DocsPageDictionary} />;
    }
    if (dictionary.title === "集成" || dictionary.title === "Integrations" || dictionary.title === "統合") {
      return <IntegrationsContent dictionary={dictionary as IntegrationsPageDictionary} />;
    }
    if (dictionary.title === "API文档" || dictionary.title === "API Documentation") {
      return <ApiContent />;
    }
    if (dictionary.title === "帮助中心" || dictionary.title === "Help Center" || dictionary.title === "ヘルプセンター") {
      return <HelpContent dictionary={dictionary as HelpPageDictionary} />;
    }
    if (dictionary.title === "联系我们" || dictionary.title === "Contact Us" || dictionary.title === "お問い合わせ") {
      return <ContactContent dictionary={dictionary as ContactPageDictionary} />;
    }
    if (dictionary.title === "服务状态" || dictionary.title === "Service Status" || dictionary.title === "サービス状況") {
      return <StatusContent dictionary={dictionary as StatusPageDictionary} />;
    }
    if (dictionary.title === "隐私政策" || dictionary.title === "Privacy Policy" || dictionary.title === "プライバシーポリシー") {
      return <PrivacyContent dictionary={dictionary as PageDictionary} />;
    }
    if (dictionary.title === "服务条款" || dictionary.title === "Terms of Service" || dictionary.title === "利用規約") {
      return <TermsContent dictionary={dictionary as PageDictionary} />;
    }
    if (dictionary.title === "安全" || dictionary.title === "Security" || dictionary.title === "セキュリティ") {
      return <SecurityContent dictionary={dictionary as PageDictionary} />;
    }
    if (dictionary.title === "Cookie政策" || dictionary.title === "Cookie Policy" || dictionary.title === "Cookie ポリシー") {
      return <CookiesContent dictionary={dictionary as PageDictionary} />;
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
function PricingContent({ dictionary }: { dictionary: PricingPageDictionary }) {
  return (
      <div className="space-y-16">
        {/* 价格方案 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.plansTitle}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {dictionary.plansSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dictionary.plans.map((plan, index) => (
                <Card key={index} className={`p-8 relative ${plan.popular ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800' : ''}`}>
                  {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-blue-600 text-white px-4 py-1">
                          {dictionary.title === "价格方案" ? "最受欢迎" :
                              dictionary.title === "Pricing" ? "Most Popular" : "最も人気"}
                        </Badge>
                      </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                  <span className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                    {plan.price}
                  </span>
                      <span className="text-neutral-600 dark:text-neutral-300 ml-2">
                    {plan.period}
                  </span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-neutral-600 dark:text-neutral-300">{feature}</span>
                        </li>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="h-5 w-5 text-red-500 flex-shrink-0">×</span>
                          <span className="text-neutral-400 dark:text-neutral-500">{limitation}</span>
                        </li>
                    ))}
                  </ul>

                  <Button
                      className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </Card>
            ))}
          </div>
        </div>

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
function IntegrationsContent({ dictionary }: { dictionary: IntegrationsPageDictionary }) {
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
    // 根据当前语言环境确定状态文本
    const isChinese = dictionary.title === "集成";
    const isJapanese = dictionary.title === "統合";
    
    const statusMap = {
      available: { 
        text: isChinese ? "已集成" : isJapanese ? "利用可能" : "Available", 
        variant: "default" as const, 
        className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
      },
      "coming-soon": { 
        text: isChinese ? "计划中" : isJapanese ? "近日公開" : "Coming Soon", 
        variant: "secondary" as const, 
        className: "" 
      },
      beta: { 
        text: isChinese ? "测试版" : isJapanese ? "ベータ版" : "Beta", 
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

// API文档页面内容
function ApiContent() {
  const endpoints = [
    {
      method: "GET",
      path: "/api/users",
      description: "获取用户列表",
      parameters: [
        { name: "page", type: "number", required: false, description: "页码" },
        { name: "limit", type: "number", required: false, description: "每页数量" }
      ]
    },
    {
      method: "POST",
      path: "/api/users",
      description: "创建新用户",
      parameters: [
        { name: "name", type: "string", required: true, description: "用户姓名" },
        { name: "email", type: "string", required: true, description: "用户邮箱" }
      ]
    },
    {
      method: "GET",
      path: "/api/users/{id}",
      description: "获取特定用户信息",
      parameters: [
        { name: "id", type: "string", required: true, description: "用户ID" }
      ]
    },
    {
      method: "PUT",
      path: "/api/users/{id}",
      description: "更新用户信息",
      parameters: [
        { name: "id", type: "string", required: true, description: "用户ID" },
        { name: "name", type: "string", required: false, description: "用户姓名" },
        { name: "email", type: "string", required: false, description: "用户邮箱" }
      ]
    }
  ];

  return (
      <div className="space-y-16">
        {/* API 概览 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              ShipBase API 参考
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              完整的 REST API 文档，帮助您快速集成 ShipBase 的功能
            </p>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              基础 URL
            </h3>
            <div className="bg-neutral-900 dark:bg-neutral-800 rounded-lg p-4 mb-4">
              <code className="text-green-400">https://api.shipbase.com/v1</code>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300">
              所有 API 请求都需要在请求头中包含您的 API 密钥
            </p>
          </div>
        </div>

        {/* API 端点 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              API 端点
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              探索可用的 API 端点及其参数
            </p>
          </div>

          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <Badge
                        variant={endpoint.method === "GET" ? "default" : endpoint.method === "POST" ? "secondary" : "outline"}
                        className="flex-shrink-0"
                    >
                      {endpoint.method}
                    </Badge>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <code className="text-lg font-mono text-neutral-900 dark:text-neutral-100">
                          {endpoint.path}
                        </code>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                        {endpoint.description}
                      </p>
                      {endpoint.parameters.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                              参数
                            </h4>
                            <div className="space-y-2">
                              {endpoint.parameters.map((param, idx) => (
                                  <div key={idx} className="flex items-center space-x-4 text-sm">
                                    <code className="text-blue-600 dark:text-blue-400 font-mono">
                                      {param.name}
                                    </code>
                                    <Badge variant="outline" className="text-xs">
                                      {param.type}
                                    </Badge>
                                    <span className={param.required ? "text-red-600 dark:text-red-400" : "text-neutral-500"}>
                              {param.required ? "必需" : "可选"}
                            </span>
                                    <span className="text-neutral-600 dark:text-neutral-300">
                              {param.description}
                            </span>
                                  </div>
                              ))}
                            </div>
                          </div>
                      )}
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* SDK 和示例 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              SDK 和示例
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              使用我们的 SDK 或查看代码示例快速开始
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                JavaScript SDK
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-800 rounded-lg p-4 mb-4">
                <code className="text-green-400 text-sm whitespace-pre-wrap">
                  {`npm install @shipbase/sdk

import { ShipBase } from '@shipbase/sdk';

const client = new ShipBase({
  apiKey: 'your-api-key'
});

const users = await client.users.list();`}
                </code>
              </div>
              <Button variant="outline" className="w-full">
                查看文档
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                Python SDK
              </h3>
              <div className="bg-neutral-900 dark:bg-neutral-800 rounded-lg p-4 mb-4">
                <code className="text-green-400 text-sm whitespace-pre-wrap">
                  {`pip install shipbase-sdk

from shipbase import ShipBase

client = ShipBase(api_key='your-api-key')
users = client.users.list()`}
                </code>
              </div>
              <Button variant="outline" className="w-full">
                查看文档
              </Button>
            </Card>
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
function PrivacyContent({ dictionary }: { dictionary: PageDictionary }) {
  return (
      <div className="space-y-16">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>隐私政策</h2>
          <p>最后更新：2024年1月1日</p>

          <h3>1. 信息收集</h3>
          <p>我们收集您主动提供的信息，包括但不限于：</p>
          <ul>
            <li>账户注册信息（姓名、邮箱地址）</li>
            <li>使用服务时产生的数据</li>
            <li>技术信息（IP地址、浏览器类型）</li>
          </ul>

          <h3>2. 信息使用</h3>
          <p>我们使用收集的信息用于：</p>
          <ul>
            <li>提供和改进我们的服务</li>
            <li>与您沟通</li>
            <li>确保服务安全</li>
          </ul>

          <h3>3. 信息共享</h3>
          <p>我们不会出售、交易或转让您的个人信息给第三方，除非：</p>
          <ul>
            <li>获得您的明确同意</li>
            <li>法律要求</li>
            <li>保护我们的权利和财产</li>
          </ul>

          <h3>4. 数据安全</h3>
          <p>我们采用适当的安全措施保护您的个人信息，包括：</p>
          <ul>
            <li>加密传输</li>
            <li>安全存储</li>
            <li>访问控制</li>
          </ul>

          <h3>5. 您的权利</h3>
          <p>您有权：</p>
          <ul>
            <li>访问您的个人信息</li>
            <li>更正不准确的信息</li>
            <li>删除您的账户</li>
            <li>撤回同意</li>
          </ul>

          <h3>6. 联系我们</h3>
          <p>如果您对本隐私政策有任何疑问，请通过以下方式联系我们：</p>
          <p>邮箱：privacy@shipbase.com</p>
        </div>
      </div>
  );
}

// 服务条款页面内容
function TermsContent({ dictionary }: { dictionary: PageDictionary }) {
  return (
      <div className="space-y-16">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>服务条款</h2>
          <p>最后更新：2024年1月1日</p>

          <h3>1. 接受条款</h3>
          <p>通过使用 ShipBase 服务，您同意遵守本服务条款。</p>

          <h3>2. 服务描述</h3>
          <p>ShipBase 提供 AI SaaS 开发模板和相关服务，包括但不限于：</p>
          <ul>
            <li>代码模板和组件</li>
            <li>技术文档和支持</li>
            <li>部署和集成服务</li>
          </ul>

          <h3>3. 用户责任</h3>
          <p>用户同意：</p>
          <ul>
            <li>提供准确的信息</li>
            <li>遵守适用法律</li>
            <li>不滥用服务</li>
            <li>保护账户安全</li>
          </ul>

          <h3>4. 知识产权</h3>
          <p>ShipBase 及其内容受知识产权法保护。用户获得有限的、非独占的使用许可。</p>

          <h3>5. 服务可用性</h3>
          <p>我们努力保持服务的高可用性，但不保证服务不会中断。</p>

          <h3>6. 免责声明</h3>
          <p>服务按&ldquo;现状&rdquo;提供，我们不提供任何明示或暗示的保证。</p>

          <h3>7. 责任限制</h3>
          <p>我们的责任限于您支付的费用金额。</p>

          <h3>8. 终止</h3>
          <p>我们保留随时终止服务的权利。</p>

          <h3>9. 争议解决</h3>
          <p>任何争议应通过友好协商解决。</p>

          <h3>10. 联系我们</h3>
          <p>如有疑问，请联系：legal@shipbase.com</p>
        </div>
      </div>
  );
}

// 安全页面内容
function SecurityContent({ dictionary }: { dictionary: PageDictionary }) {
  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "数据加密",
      description: "所有数据传输和存储都使用行业标准加密"
    },
    {
      icon: <Lock className="h-8 w-8 text-green-600" />,
      title: "访问控制",
      description: "基于角色的访问控制和多因素身份验证"
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "安全监控",
      description: "24/7 安全监控和威胁检测"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "合规认证",
      description: "符合 SOC 2、GDPR 等安全标准"
    }
  ];

  return (
      <div className="space-y-16">
        {/* 安全概览 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              安全措施
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              我们采用多层安全措施保护您的数据和隐私
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {feature.description}
                  </p>
                </Card>
            ))}
          </div>
        </div>

        {/* 安全政策 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              安全政策
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              了解我们的安全实践和承诺
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h3>数据保护</h3>
            <p>我们采用以下措施保护您的数据：</p>
            <ul>
              <li>AES-256 加密存储</li>
              <li>TLS 1.3 传输加密</li>
              <li>定期安全审计</li>
              <li>数据备份和恢复</li>
            </ul>

            <h3>访问控制</h3>
            <p>严格的访问控制措施：</p>
            <ul>
              <li>多因素身份验证</li>
              <li>基于角色的权限管理</li>
              <li>定期权限审查</li>
              <li>最小权限原则</li>
            </ul>

            <h3>监控和响应</h3>
            <p>持续的安全监控：</p>
            <ul>
              <li>24/7 安全运营中心</li>
              <li>实时威胁检测</li>
              <li>自动安全响应</li>
              <li>事件响应计划</li>
            </ul>

            <h3>合规性</h3>
            <p>我们符合以下标准：</p>
            <ul>
              <li>SOC 2 Type II</li>
              <li>ISO 27001</li>
              <li>GDPR 合规</li>
              <li>CCPA 合规</li>
            </ul>
          </div>
        </div>

        {/* 安全报告 */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            报告安全问题
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            如果您发现安全漏洞，请通过安全邮箱联系我们
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              安全邮箱
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              查看政策
            </Button>
          </div>
        </div>
      </div>
  );
}

// Cookie政策页面内容
function CookiesContent({ dictionary }: { dictionary: PageDictionary }) {
  return (
      <div className="space-y-16">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>Cookie 政策</h2>
          <p>最后更新：2024年1月1日</p>

          <h3>什么是 Cookie？</h3>
          <p>Cookie 是存储在您设备上的小型文本文件，用于改善您的浏览体验。</p>

          <h3>我们使用的 Cookie 类型</h3>

          <h4>必要 Cookie</h4>
          <p>这些 Cookie 对于网站正常运行是必需的：</p>
          <ul>
            <li>会话管理</li>
            <li>安全功能</li>
            <li>基本功能</li>
          </ul>

          <h4>功能 Cookie</h4>
          <p>这些 Cookie 增强网站功能：</p>
          <ul>
            <li>语言偏好</li>
            <li>主题设置</li>
            <li>用户偏好</li>
          </ul>

          <h4>分析 Cookie</h4>
          <p>这些 Cookie 帮助我们了解网站使用情况：</p>
          <ul>
            <li>Google Analytics</li>
            <li>用户行为分析</li>
            <li>性能监控</li>
          </ul>

          <h3>Cookie 管理</h3>
          <p>您可以通过以下方式管理 Cookie：</p>
          <ul>
            <li>浏览器设置</li>
            <li>Cookie 同意工具</li>
            <li>联系我们</li>
          </ul>

          <h3>第三方 Cookie</h3>
          <p>我们可能使用第三方服务，它们有自己的 Cookie 政策。</p>

          <h3>联系我们</h3>
          <p>如有疑问，请联系：privacy@shipbase.com</p>
        </div>
      </div>
  );
}
