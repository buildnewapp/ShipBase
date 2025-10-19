import type { PageDictionary, FeaturesPageDictionary, PricingPageDictionary } from "@/i18n/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, Rocket, Code, Database, Globe, BarChart3, Bot, CreditCard, Users, Lock } from "lucide-react";

interface PageTemplateProps {
  dictionary: PageDictionary | FeaturesPageDictionary | PricingPageDictionary;
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
    if (dictionary.title === "关于我们" || dictionary.title === "About Us") {
      return <AboutContent />;
    }
    if (dictionary.title === "文档" || dictionary.title === "Documentation") {
      return <DocsContent />;
    }
    if (dictionary.title === "集成" || dictionary.title === "Integrations") {
      return <IntegrationsContent />;
    }
    if (dictionary.title === "API文档" || dictionary.title === "API Documentation") {
      return <ApiContent />;
    }
    if (dictionary.title === "帮助中心" || dictionary.title === "Help Center") {
      return <HelpContent />;
    }
    if (dictionary.title === "联系我们" || dictionary.title === "Contact Us") {
      return <ContactContent />;
    }
    if (dictionary.title === "服务状态" || dictionary.title === "Service Status") {
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

// 关于我们页面内容
function AboutContent() {
  const team = [
    {
      name: "张三",
      role: "创始人 & CEO",
      description: "10+ 年全栈开发经验，前 Google 工程师",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "李四",
      role: "CTO",
      description: "AI 和机器学习专家，前 OpenAI 研究员",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "王五",
      role: "产品总监",
      description: "用户体验专家，前 Airbnb 产品经理",
      avatar: "/api/placeholder/150/150"
    }
  ];

  const values = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "快速交付",
      description: "我们相信速度就是一切。通过 ShipBase，开发者可以在几小时内而不是几个月内发布产品。"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "质量至上",
      description: "我们坚持最高标准，确保每个组件都经过严格测试，符合生产环境要求。"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "开发者优先",
      description: "我们始终站在开发者的角度思考问题，提供最符合开发习惯的工具和体验。"
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-500" />,
      title: "持续创新",
      description: "我们不断探索新技术，将最新的最佳实践融入到 ShipBase 中。"
    }
  ];

  return (
      <div className="space-y-16">
        {/* 公司使命 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              我们的使命
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto">
              让每个有想法的开发者都能快速构建和发布自己的 AI SaaS 产品。我们相信，通过降低技术门槛，
              可以释放更多创新潜力，让优秀的想法更快地变成现实。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                从想法到产品，只需几小时
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                传统的 SaaS 开发需要数月时间搭建基础设施，而 ShipBase 让这个过程缩短到几小时。
                我们提供完整的解决方案，包括身份验证、支付处理、数据库、AI 集成等，
                让开发者可以专注于核心业务逻辑的开发。
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-neutral-600 dark:text-neutral-300">250+ 成功案例</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-neutral-600 dark:text-neutral-300">平均节省 90% 开发时间</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-neutral-600 dark:text-neutral-300">24/7 技术支持</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-700 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-2">90%</div>
                <div className="text-lg text-neutral-600 dark:text-neutral-300">开发时间节省</div>
              </div>
            </div>
          </div>
        </div>

        {/* 核心价值观 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              核心价值观
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              这些价值观指导着我们的每一个决策，确保我们始终为开发者提供最好的服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* 团队介绍 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              我们的团队
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              由来自 Google、OpenAI、Airbnb 等知名公司的资深工程师和产品专家组成
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">
                  {member.name.charAt(0)}
                </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                    {member.description}
                  </p>
                </Card>
            ))}
          </div>
        </div>

        {/* 联系我们 */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            加入我们的旅程
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            如果您对我们的使命感到兴奋，或者想要了解更多关于 ShipBase 的信息，
            我们很乐意与您交流。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              联系我们
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              查看职位
            </Button>
          </div>
        </div>
      </div>
  );
}

// 文档页面内容
function DocsContent() {
  const quickStart = [
    {
      step: "1",
      title: "安装 ShipBase",
      description: "克隆仓库并安装依赖",
      code: "git clone https://github.com/your-repo/shipbase\ncd shipbase\nnpm install"
    },
    {
      step: "2",
      title: "配置环境变量",
      description: "设置必要的 API 密钥和配置",
      code: "cp .env.example .env.local\n# 编辑 .env.local 文件"
    },
    {
      step: "3",
      title: "启动开发服务器",
      description: "在本地运行项目",
      code: "npm run dev\n# 访问 http://localhost:3000"
    },
    {
      step: "4",
      title: "部署到生产环境",
      description: "一键部署到 Vercel",
      code: "npm run build\nvercel deploy"
    }
  ];

  const docSections = [
    {
      title: "快速开始",
      description: "5 分钟快速上手 ShipBase",
      icon: <Rocket className="h-6 w-6" />,
      links: [
        { name: "安装指南", href: "#" },
        { name: "环境配置", href: "#" },
        { name: "第一个应用", href: "#" }
      ]
    },
    {
      title: "核心功能",
      description: "了解 ShipBase 的核心功能",
      icon: <Code className="h-6 w-6" />,
      links: [
        { name: "身份验证", href: "#" },
        { name: "支付集成", href: "#" },
        { name: "数据库设置", href: "#" },
        { name: "AI 集成", href: "#" }
      ]
    },
    {
      title: "API 参考",
      description: "完整的 API 文档和示例",
      icon: <Database className="h-6 w-6" />,
      links: [
        { name: "REST API", href: "#" },
        { name: "GraphQL", href: "#" },
        { name: "Webhooks", href: "#" },
        { name: "SDK", href: "#" }
      ]
    },
    {
      title: "部署指南",
      description: "将您的应用部署到生产环境",
      icon: <Globe className="h-6 w-6" />,
      links: [
        { name: "Vercel 部署", href: "#" },
        { name: "Cloudflare Pages", href: "#" },
        { name: "Docker 部署", href: "#" },
        { name: "环境配置", href: "#" }
      ]
    },
    {
      title: "最佳实践",
      description: "开发和生产环境的最佳实践",
      icon: <Shield className="h-6 w-6" />,
      links: [
        { name: "安全指南", href: "#" },
        { name: "性能优化", href: "#" },
        { name: "监控和日志", href: "#" },
        { name: "错误处理", href: "#" }
      ]
    },
    {
      title: "故障排除",
      description: "常见问题和解决方案",
      icon: <Zap className="h-6 w-6" />,
      links: [
        { name: "常见问题", href: "#" },
        { name: "错误代码", href: "#" },
        { name: "调试技巧", href: "#" },
        { name: "社区支持", href: "#" }
      ]
    }
  ];

  return (
      <div className="space-y-16">
        {/* 快速开始 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              快速开始
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              只需几个简单步骤，您就可以开始使用 ShipBase 构建您的 AI SaaS 应用
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
              文档导航
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              浏览我们的完整文档，找到您需要的所有信息
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
            需要帮助？
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            我们的社区和支持团队随时为您提供帮助。加入我们的 Discord 社区或查看常见问题。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              加入 Discord
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              查看 FAQ
            </Button>
          </div>
        </div>
      </div>
  );
}

// 集成页面内容
function IntegrationsContent() {
  const integrations = [
    {
      category: "身份验证",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      services: [
        { name: "Google OAuth", description: "使用 Google 账户快速登录", status: "已集成" },
        { name: "GitHub OAuth", description: "开发者友好的 GitHub 登录", status: "已集成" },
        { name: "Magic Link", description: "无密码邮件登录", status: "已集成" },
        { name: "Discord OAuth", description: "Discord 社区登录", status: "计划中" }
      ]
    },
    {
      category: "支付处理",
      icon: <CreditCard className="h-8 w-8 text-green-600" />,
      services: [
        { name: "Stripe", description: "全球支付处理平台", status: "已集成" },
        { name: "PayPal", description: "PayPal 支付集成", status: "计划中" },
        { name: "支付宝", description: "中国用户支付", status: "计划中" },
        { name: "微信支付", description: "微信支付集成", status: "计划中" }
      ]
    },
    {
      category: "数据库",
      icon: <Database className="h-8 w-8 text-purple-600" />,
      services: [
        { name: "Supabase", description: "PostgreSQL 数据库服务", status: "已集成" },
        { name: "PlanetScale", description: "MySQL 数据库服务", status: "计划中" },
        { name: "MongoDB", description: "NoSQL 文档数据库", status: "计划中" },
        { name: "Redis", description: "缓存和会话存储", status: "已集成" }
      ]
    },
    {
      category: "AI 服务",
      icon: <Bot className="h-8 w-8 text-pink-600" />,
      services: [
        { name: "OpenAI", description: "GPT 模型集成", status: "已集成" },
        { name: "Anthropic", description: "Claude 模型集成", status: "已集成" },
        { name: "Google AI", description: "Gemini 模型集成", status: "计划中" },
        { name: "Hugging Face", description: "开源模型集成", status: "计划中" }
      ]
    },
    {
      category: "部署平台",
      icon: <Rocket className="h-8 w-8 text-orange-600" />,
      services: [
        { name: "Vercel", description: "Next.js 优化部署", status: "已集成" },
        { name: "Cloudflare Pages", description: "全球 CDN 部署", status: "已集成" },
        { name: "Netlify", description: "静态站点部署", status: "计划中" },
        { name: "Railway", description: "全栈应用部署", status: "计划中" }
      ]
    },
    {
      category: "分析工具",
      icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
      services: [
        { name: "Google Analytics", description: "网站流量分析", status: "已集成" },
        { name: "Mixpanel", description: "用户行为分析", status: "计划中" },
        { name: "PostHog", description: "产品分析平台", status: "计划中" },
        { name: "Sentry", description: "错误监控和性能", status: "已集成" }
      ]
    }
  ];

  return (
      <div className="space-y-16">
        {/* 集成概览 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              支持的集成服务
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              ShipBase 与您喜爱的工具无缝集成，让您的工作流程更加高效
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((category, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    {category.icon}
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                              {service.name}
                            </h4>
                            <p className="text-sm text-neutral-600 dark:text-neutral-300">
                              {service.description}
                            </p>
                          </div>
                          <Badge
                              variant={service.status === "已集成" ? "default" : "secondary"}
                              className={service.status === "已集成" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : ""}
                          >
                            {service.status}
                          </Badge>
                        </div>
                    ))}
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* 集成指南 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              如何集成第三方服务
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              简单的步骤让您快速集成所需的第三方服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "选择服务", description: "从支持的服务列表中选择您需要的集成" },
              { step: "2", title: "获取 API 密钥", description: "在服务提供商处创建账户并获取 API 密钥" },
              { step: "3", title: "配置环境变量", description: "将 API 密钥添加到您的环境变量中" },
              { step: "4", title: "开始使用", description: "重启应用，集成服务即可使用" }
            ].map((step, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="h-12 w-12 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                    {step.description}
                  </p>
                </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            需要其他集成？
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            如果您需要集成其他服务，请联系我们的团队，我们很乐意为您提供帮助
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              联系我们
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              查看文档
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
function HelpContent() {
  const faqs = [
    {
      category: "快速开始",
      questions: [
        {
          question: "如何开始使用 ShipBase？",
          answer: "首先克隆我们的模板，然后按照文档中的快速开始指南进行配置。整个过程只需要几分钟。"
        },
        {
          question: "需要什么技术背景？",
          answer: "基本的 JavaScript 和 React 知识就足够了。我们的文档和示例会帮助您快速上手。"
        },
        {
          question: "如何部署我的应用？",
          answer: "ShipBase 支持一键部署到 Vercel、Cloudflare Pages 等平台。只需连接您的 Git 仓库即可。"
        }
      ]
    },
    {
      category: "功能使用",
      questions: [
        {
          question: "如何集成支付功能？",
          answer: "我们已预配置 Stripe 集成。您只需要添加 Stripe API 密钥到环境变量中即可。"
        },
        {
          question: "如何添加用户身份验证？",
          answer: "ShipBase 内置了 Better Auth，支持 Google、GitHub 和 Magic Link 登录方式。"
        },
        {
          question: "如何自定义 UI 组件？",
          answer: "所有组件都基于 Shadcn/UI 构建，您可以根据需要自定义样式和功能。"
        }
      ]
    },
    {
      category: "故障排除",
      questions: [
        {
          question: "部署时出现错误怎么办？",
          answer: "检查环境变量是否正确配置，确保所有必需的 API 密钥都已添加。查看部署日志获取详细错误信息。"
        },
        {
          question: "数据库连接失败？",
          answer: "确认 Supabase 项目配置正确，检查数据库 URL 和 API 密钥是否有效。"
        },
        {
          question: "支付功能不工作？",
          answer: "确认 Stripe API 密钥正确，检查 Webhook 配置，确保测试环境设置正确。"
        }
      ]
    }
  ];

  const resources = [
    {
      title: "快速开始指南",
      description: "5 分钟快速上手 ShipBase",
      icon: <Rocket className="h-6 w-6" />,
      href: "#"
    },
    {
      title: "视频教程",
      description: "观看详细的视频教程",
      icon: <Zap className="h-6 w-6" />,
      href: "#"
    },
    {
      title: "社区论坛",
      description: "与其他开发者交流",
      icon: <Users className="h-6 w-6" />,
      href: "#"
    },
    {
      title: "Discord 支持",
      description: "实时技术支持",
      icon: <Shield className="h-6 w-6" />,
      href: "#"
    }
  ];

  return (
      <div className="space-y-16">
        {/* 帮助资源 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              帮助资源
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              找到您需要的帮助和支持
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-blue-600 dark:text-blue-400">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {resource.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    查看详情
                  </Button>
                </Card>
            ))}
          </div>
        </div>

        {/* 常见问题 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              常见问题
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              找到您问题的答案
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.questions.map((faq, idx) => (
                        <Card key={idx} className="p-6">
                          <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                            {faq.question}
                          </h4>
                          <p className="text-neutral-600 dark:text-neutral-300">
                            {faq.answer}
                          </p>
                        </Card>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* 联系支持 */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            需要更多帮助？
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            我们的支持团队随时为您提供帮助。通过多种方式联系我们
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              联系支持
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              加入 Discord
            </Button>
          </div>
        </div>
      </div>
  );
}

// 联系我们页面内容
function ContactContent() {
  const contactMethods = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Discord 社区",
      description: "加入我们的 Discord 社区，与其他开发者交流",
      action: "加入 Discord",
      href: "#"
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "邮件支持",
      description: "发送邮件到 support@shipbase.com",
      action: "发送邮件",
      href: "mailto:support@shipbase.com"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "GitHub Issues",
      description: "在 GitHub 上报告问题或提出建议",
      action: "查看 Issues",
      href: "#"
    },
    {
      icon: <Rocket className="h-8 w-8 text-orange-600" />,
      title: "企业合作",
      description: "企业级支持和定制开发服务",
      action: "联系销售",
      href: "mailto:sales@shipbase.com"
    }
  ];

  const team = [
    {
      name: "技术支持",
      email: "support@shipbase.com",
      description: "技术问题和故障排除"
    },
    {
      name: "销售团队",
      email: "sales@shipbase.com",
      description: "商业合作和定制服务"
    },
    {
      name: "产品反馈",
      email: "feedback@shipbase.com",
      description: "产品建议和功能请求"
    }
  ];

  return (
      <div className="space-y-16">
        {/* 联系方式 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              联系我们
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              我们很乐意听到您的声音。选择最适合您的联系方式
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {method.icon}
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
              直接联系团队
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              根据您的需求联系相应的团队
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {member.email}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300">
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
              响应时间
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              我们承诺快速响应您的请求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                &lt; 1 小时
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Discord 支持
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                社区支持，快速响应
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                &lt; 24 小时
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                邮件支持
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                专业团队，详细回复
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                &lt; 48 小时
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                企业支持
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                定制解决方案
              </p>
            </Card>
          </div>
        </div>
      </div>
  );
}

// 服务状态页面内容
function StatusContent() {
  const services = [
    {
      name: "API 服务",
      status: "operational",
      uptime: "99.9%",
      lastIncident: "无"
    },
    {
      name: "身份验证",
      status: "operational",
      uptime: "99.8%",
      lastIncident: "2 天前"
    },
    {
      name: "支付处理",
      status: "operational",
      uptime: "99.9%",
      lastIncident: "无"
    },
    {
      name: "数据库",
      status: "operational",
      uptime: "99.7%",
      lastIncident: "1 周前"
    },
    {
      name: "CDN",
      status: "operational",
      uptime: "99.9%",
      lastIncident: "无"
    },
    {
      name: "监控系统",
      status: "operational",
      uptime: "99.9%",
      lastIncident: "无"
    }
  ];

  const incidents = [
    {
      date: "2024-01-15",
      title: "数据库连接超时",
      status: "resolved",
      description: "部分用户遇到数据库连接超时问题，已修复"
    },
    {
      date: "2024-01-10",
      title: "API 响应延迟",
      status: "resolved",
      description: "API 响应时间增加，已优化性能"
    }
  ];

  return (
      <div className="space-y-16">
        {/* 服务状态概览 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              服务状态
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              实时监控所有 ShipBase 服务的运行状态
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600 dark:text-green-400">
                    正常
                  </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600 dark:text-neutral-300">正常运行时间</span>
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    {service.uptime}
                  </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600 dark:text-neutral-300">最后事件</span>
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    {service.lastIncident}
                  </span>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* 历史事件 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              历史事件
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              查看过去的事件和解决方案
            </p>
          </div>

          <div className="space-y-4">
            {incidents.map((incident, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                          {incident.title}
                        </h3>
                        <Badge
                            variant={incident.status === "resolved" ? "default" : "secondary"}
                            className={incident.status === "resolved" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : ""}
                        >
                          {incident.status === "resolved" ? "已解决" : "进行中"}
                        </Badge>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-2">
                        {incident.description}
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {incident.date}
                      </p>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>

        {/* 订阅更新 */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            订阅状态更新
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            通过邮件或 RSS 订阅获取服务状态更新
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              邮件订阅
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              RSS 订阅
            </Button>
          </div>
        </div>
      </div>
  );
}

// 隐私政策页面内容
function PrivacyContent() {
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
function TermsContent() {
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
function SecurityContent() {
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
function CookiesContent() {
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
