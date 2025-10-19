import type { PageDictionary, FeaturesPageDictionary, PricingPageDictionary, DocsPageDictionary } from "@/i18n/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, Rocket, Code, Database, Globe, BarChart3, Bot, CreditCard, Users, Lock } from "lucide-react";

interface PageTemplateProps {
  dictionary: PageDictionary | FeaturesPageDictionary | PricingPageDictionary | DocsPageDictionary;
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
    if (dictionary.title === "关于我们" || dictionary.title === "About Us" || dictionary.title === "会社概要") {
      return <AboutContent />;
    }
    if (dictionary.title === "文档" || dictionary.title === "Documentation" || dictionary.title === "ドキュメント") {
      return <DocsContent dictionary={dictionary as DocsPageDictionary} />;
    }
    if (dictionary.title === "集成" || dictionary.title === "Integrations" || dictionary.title === "統合") {
      return <IntegrationsContent />;
    }
    if (dictionary.title === "API文档" || dictionary.title === "API Documentation") {
      return <ApiContent />;
    }
    if (dictionary.title === "帮助中心" || dictionary.title === "Help Center" || dictionary.title === "ヘルプセンター") {
      return <HelpContent />;
    }
    if (dictionary.title === "联系我们" || dictionary.title === "Contact Us" || dictionary.title === "お問い合わせ") {
      return <ContactContent />;
    }
    if (dictionary.title === "服务状态" || dictionary.title === "Service Status" || dictionary.title === "サービス状況") {
      return <StatusContent />;
    }
    if (dictionary.title === "隐私政策" || dictionary.title === "Privacy Policy") {
      return <PrivacyContent />;
    }
    if (dictionary.title === "服务条款" || dictionary.title === "Terms of Service") {
      return <TermsContent />;
    }
    if (dictionary.title === "安全" || dictionary.title === "Security") {
      return <SecurityContent />;
    }
    if (dictionary.title === "Cookie政策" || dictionary.title === "Cookie Policy") {
      return <CookiesContent />;
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
    Shield: <Shield className="h-8 w-8 text-blue-600" />,
    Rocket: <Rocket className="h-8 w-8 text-blue-600" />,
    Database: <Database className="h-8 w-8 text-blue-600" />,
    Globe: <Globe className="h-8 w-8 text-blue-600" />,
    BarChart3: <BarChart3 className="h-8 w-8 text-blue-600" />,
    Bot: <Bot className="h-8 w-8 text-blue-600" />,
    CreditCard: <CreditCard className="h-8 w-8 text-blue-600" />,
    Users: <Users className="h-8 w-8 text-blue-600" />,
    Lock: <Lock className="h-8 w-8 text-blue-600" />,
    Zap: <Zap className="h-8 w-8 text-blue-600" />,
  };
  return iconMap[iconName as keyof typeof iconMap] || <Code className="h-8 w-8 text-blue-600" />;
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
            <Card key={index} className="p-6">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {feature.description}
              </p>
              <div className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">{highlight}</span>
                  </div>
                ))}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dictionary.techStack.technologies.map((tech, index) => (
            <Card key={index} className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {tech.name}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {tech.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* 对比 */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {dictionary.comparison.title}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {dictionary.comparison.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.comparison.traditional.title}
            </h3>
            <ul className="space-y-3">
              {dictionary.comparison.traditional.items.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="p-6 border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              {dictionary.comparison.shipbase.title}
            </h3>
            <ul className="space-y-3">
              {dictionary.comparison.shipbase.items.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-neutral-600 dark:text-neutral-300">{item.text}</span>
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
      {/* 方案选择 */}
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
            <Card key={index} className={`p-8 ${plan.popular ? 'border-blue-500 dark:border-blue-400' : ''}`}>
              {plan.popular && (
                <div className="text-center mb-4">
                  <Badge className="bg-blue-600 text-white">最受欢迎</Badge>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {plan.price}
                </div>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {plan.period}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-neutral-600 dark:text-neutral-300">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="h-5 w-5 text-red-500">✗</div>
                    <span className="text-neutral-500 dark:text-neutral-400">{limitation}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                size="lg"
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

// About页面内容组件
function AboutContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          About Us
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
          Building the future of SaaS development
        </p>
        <p className="text-neutral-600 dark:text-neutral-300">
          Learn about our mission, team, and the technology that powers ShipBase.
        </p>
        <div className="mt-6">
          <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 图标映射函数
function getIconComponent(iconName: string) {
  const iconMap = {
    Rocket: <Rocket className="h-6 w-6" />,
    Code: <Code className="h-6 w-6" />,
    Database: <Database className="h-6 w-6" />,
    Globe: <Globe className="h-6 w-6" />,
    Shield: <Shield className="h-6 w-6" />,
    Zap: <Zap className="h-6 w-6" />,
  };
  return iconMap[iconName as keyof typeof iconMap] || <Code className="h-6 w-6" />;
}

// 文档页面内容
function DocsContent({ dictionary }: { dictionary: DocsPageDictionary }) {
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
          {dictionary.quickStart.steps.map((step, index) => (
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
          {dictionary.navigation.sections.map((section, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-blue-600 dark:text-blue-400">
                  {getIconComponent(section.icon)}
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

// 其他页面内容组件（简化版本）
function IntegrationsContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Integrations
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Connect with your favorite tools and services.
        </p>
        <div className="mt-6">
          <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApiContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          API Documentation
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Complete API reference with examples and SDKs.
        </p>
        <div className="mt-6">
          <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelpContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Help Center
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Find answers to common questions and troubleshooting guides.
        </p>
        <div className="mt-6">
          <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Contact Us
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Get in touch with our team for support and inquiries.
        </p>
        <div className="mt-6">
          <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Service Status
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Monitor the current status of all ShipBase services.
        </p>
        <div className="mt-6">
          <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Privacy Policy
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Learn how we collect, use, and protect your personal information.
        </p>
        <div className="mt-6">
          <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Terms of Service
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Read our terms of service and understand your rights and responsibilities.
        </p>
        <div className="mt-6">
          <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Security
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Learn about our security measures and data protection practices.
        </p>
        <div className="mt-6">
          <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CookiesContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Cookie Policy
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Understand how we use cookies and similar technologies.
        </p>
        <div className="mt-6">
          <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}