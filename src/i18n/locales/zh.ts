import type { AppDictionary } from "@/i18n/types";

export const zhDictionary: AppDictionary = {
  home: {
    badgeLabel: "2025🚀 立即发布",
    heroTitle: "ShipBase，发布更多。",
    heroDescription:
      "ShipBase 是一个用于构建 AI SaaS 初创公司的 NextJS 模板。通过多种模板和组件快速发布。",
    ctaPrimary: "立即开始",
    ctaSecondary: "阅读文档",
    watchDemo: "观看演示",
    viewDetails: "查看详情",
    promotionText: "🎁 前1000名客户享受$100优惠",
    userCount: "来自250+满意用户",
    
    // 技术栈部分
    techStackTitle: "ShipBase 建立在巨人的肩膀上",
    techStackItems: [
      { name: "Next.js", description: "React 全栈框架" },
      { name: "React", description: "用户界面库" },
      { name: "TailwindCSS", description: "实用优先的CSS框架" },
      { name: "Shadcn/UI", description: "现代组件库" },
      { name: "Vercel", description: "部署平台" }
    ],
    
    // 功能特性部分
    featuresTitle: "什么是 ShipBase",
    featuresSubtitle: "ShipBase 是一个用于构建 AI SaaS 初创公司的 NextJS 模板。内置多种模板和组件。",
    features: [
      {
        title: "即用型模板",
        description: "从数十个生产就绪的 AI SaaS 模板中选择，快速启动您的项目。"
      },
      {
        title: "基础设施设置",
        description: "通过内置的最佳实践，立即获得可扩展的基础设施访问权限。"
      },
      {
        title: "快速部署",
        description: "在几小时内而不是几天内将您的 AI SaaS 应用程序部署到生产环境。"
      }
    ],
    
    // 优势部分
    benefitsTitle: "为什么选择 ShipBase",
    benefitsSubtitle: "获得启动 AI 初创公司所需的一切 - 从即用型模板到技术支持。",
    benefits: [
      {
        title: "完整框架",
        description: "基于 Next.js 构建，包含身份验证、支付和 AI 集成 - 一切开箱即用。"
      },
      {
        title: "丰富的模板库",
        description: "选择适合您需求的模板，快速开始构建。"
      },
      {
        title: "技术指导",
        description: "获得专业技术支持，帮助您快速上手。"
      }
    ],
    
    // 发布步骤
    launchStepsTitle: "如何使用 ShipBase 发布",
    launchStepsSubtitle: "通过三个简单步骤让您的 AI SaaS 初创公司运行：",
    launchSteps: [
      {
        step: "1",
        title: "获取 ShipBase",
        description: "一次性购买 ShipBase。检查您的电子邮件获取代码和文档。"
      },
      {
        step: "2", 
        title: "开始您的项目",
        description: "阅读文档并克隆 ShipBase 代码。开始构建您的 AI SaaS 初创公司。"
      },
      {
        step: "3",
        title: "自定义您的项目", 
        description: "使用您的数据和内容修改模板。满足特定的 AI 功能需求。"
      },
      {
        step: "4",
        title: "部署到生产环境",
        description: "通过几个步骤将您的项目部署到生产环境，立即开始为客户服务。"
      }
    ],
    
    // 关键特性
    keyFeaturesTitle: "ShipBase 的关键特性",
    keyFeaturesSubtitle: "快速高效地启动 AI SaaS 初创公司所需的一切。",
    keyFeatures: [
      {
        title: "Next.js 模板",
        description: "生产就绪的 Next.js 模板，具有 SEO 友好的结构和 i18n 支持。"
      },
      {
        title: "身份验证和支付",
        description: "集成 Google OAuth、一键登录和 Stripe 支付处理。"
      },
      {
        title: "数据基础设施",
        description: "内置 Supabase 集成，提供可靠和可扩展的数据存储。"
      },
      {
        title: "一键部署",
        description: "无缝部署到 Vercel 或 Cloudflare，自动设置。"
      },
      {
        title: "业务分析",
        description: "集成 Google Analytics 和 Search Console 用于跟踪增长。"
      },
      {
        title: "AI 就绪基础设施",
        description: "预配置的 AI 集成，内置积分系统和 API 销售。"
      }
    ],
    
    // 用户评价
    testimonialsTitle: "用户对 ShipBase 的评价",
    testimonialsSubtitle: "听听使用 ShipBase 启动 AI 初创公司的开发者和创始人的声音。",
    testimonials: [
      {
        quote: "ShipBase 让从想法到产品的旅程变得比以往任何时候都简单。其全面的模板、脚本和基础基础设施意味着我几乎不需要花时间在基础开发上。我强烈推荐给希望快速启动 SaaS 业务的创始人。",
        author: "AITDK 作者",
        role: "独立开发者"
      },
      {
        quote: "ShipBase 让设置支付和处理商业化的所有细节变得超级简单，这样我们就可以专注于构建重要的功能。如果您想快速发布和扩展 AI SaaS，ShipBase 是不二之选！",
        author: "Scar",
        role: "前端工程师"
      },
      {
        quote: "我使用 ShipBase 在8分钟内启动了一个新网站，包括登录/支付，太棒了！",
        author: "Lafe",
        role: "技术负责人"
      }
    ],
    
    // 产品展示
    productShowcaseTitle: "AI SaaS 初创公司展示",
    productShowcaseSubtitle: "看看使用 ShipBase 构建的令人惊叹的 AI SaaS 应用",
    showcaseItems: [
      {
        name: "Raphael AI",
        description: "几秒钟内创建令人惊叹的 AI 生成图像",
        image: "/api/placeholder/400/300",
        category: "AI 图像生成"
      },
      {
        name: "SiteSnapper", 
        description: "一键捕获任何网站",
        image: "/api/placeholder/400/300",
        category: "网站工具"
      },
      {
        name: "SEO Combine",
        description: "所有 SEO 工具合而为一",
        image: "/api/placeholder/400/300", 
        category: "SEO 工具"
      },
      {
        name: "TrendsBar",
        description: "Google 趋势分析工具",
        image: "/api/placeholder/400/300",
        category: "数据分析"
      },
      {
        name: "Deepseek Artifacts",
        description: "使用世界领先的开源模型创建 React 应用",
        image: "/api/placeholder/400/300",
        category: "AI 开发"
      },
      {
        name: "Rednote Club",
        description: "在 Rednote 中分享您生活的美好时刻",
        image: "/api/placeholder/400/300",
        category: "社交平台"
      }
    ],
    
    // 统计数据
    statsTitle: "人们喜爱 ShipBase",
    statsSubtitle: "因为它易于使用且发布快速",
    stats: [
      {
        number: "250+",
        label: "客户",
        description: "信任我们"
      },
      {
        number: "30+",
        label: "组件",
        description: "内置构建"
      },
      {
        number: "5",
        label: "分钟",
        description: "快速发布"
      }
    ],
    
    // FAQ 部分
    faqTitle: "关于 ShipBase 的常见问题",
    faqSubtitle: "还有其他问题？在 Discord 上联系我们或发送邮件。",
    faqs: [
      {
        question: "ShipBase 到底是什么，它是如何工作的？",
        answer: "ShipBase 是专门为构建 AI SaaS 初创公司而设计的综合 NextJS 模板。它提供即用型模板、基础设施设置和部署工具，帮助您在几小时内而不是几天内启动 AI 业务。"
      },
      {
        question: "使用 ShipBase 需要高级技术技能吗？",
        answer: "虽然基本的编程知识很有帮助，但 ShipBase 被设计为对开发者友好。我们的模板和文档让您即使不是 AI 或云基础设施专家也能轻松上手。"
      },
      {
        question: "我可以使用 ShipBase 构建什么类型的 AI SaaS？",
        answer: "ShipBase 支持广泛的 AI 应用，从内容生成到数据分析工具。我们的模板涵盖了流行的用例，如 AI 聊天机器人、内容生成器、图像处理应用等。"
      },
      {
        question: "使用 ShipBase 发布通常需要多长时间？",
        answer: "使用 ShipBase，您可以在几小时内拥有一个工作原型，在几小时内拥有一个生产就绪的应用程序。我们的一键部署和预配置基础设施大大减少了传统的数月开发周期。"
      },
      {
        question: "ShipBase 基础设施包含什么？",
        answer: "ShipBase 提供完整的基础设施堆栈，包括身份验证、数据库设置、API 集成、支付处理和可扩展的云部署。一切都预配置遵循行业最佳实践。"
      },
      {
        question: "我可以自定义模板以匹配我的品牌吗？",
        answer: "当然可以！所有 ShipBase 模板都是完全可自定义的。您可以修改设计、功能和特性以匹配您的品牌标识和特定业务需求，同时保持强大的底层基础设施。"
      }
    ],
    
    // 最终 CTA
    finalCtaTitle: "发布您的第一个 AI SaaS 初创公司",
    finalCtaSubtitle: "从这里开始，使用 ShipBase 发布。",
    finalCtaButton: "获取 ShipBase",
    finalCtaSecondary: "阅读文档"
  },
  authPanel: {
    title: "登录 Shipbase",
    description:
      "使用 Better Auth 提供的 Google、GitHub 或 Magic Link 完成身份认证。",
    signedInAs: "已登录为 {name}",
    sessionLabel: "会话 ID: {id}",
    signOut: "退出登录",
    googleButton: {
      default: "使用 Google 登录",
      loading: "跳转 Google…",
    },
    githubButton: {
      default: "使用 GitHub 登录",
      loading: "跳转 GitHub…",
    },
    magicLinkHeading: "或发送 Magic Link",
    emailLabel: "邮箱地址",
    emailPlaceholder: "you@example.com",
    magicLinkButton: {
      default: "发送登录链接",
      loading: "发送中…",
    },
    messages: {
      emptyEmail: "请输入邮箱地址。",
      responseError: "发送邮件失败，请重试。",
      requestError: "发送过程中出现问题，请稍后再试。",
      success:
        "魔法链接已发送。如果未集成邮件服务，请查看服务器日志获取登录链接。",
    },
    footer: [
      {
        type: "text",
        value:
          "登录后 Better Auth 会在服务器端生成会话并写入 HTTP-only Cookies。结合 ",
      },
      { type: "code", value: "authClient.useSession()" },
      {
        type: "text",
        value: " 可在任意客户端组件中读取当前用户。",
      },
    ],
  },
  header: {
    features: "功能特性",
    pricing: "价格方案",
    docs: "文档",
    about: "关于我们",
    login: "登录",
    signup: "免费试用",
    languageSwitch: "语言",
    themeSwitch: "主题",
    lightTheme: "浅色",
    darkTheme: "深色",
    systemTheme: "跟随系统",
  },
  footer: {
    description: "现代化的SaaS平台，帮助您快速构建和部署应用程序。",
    product: "产品",
    features: "功能特性",
    pricing: "价格方案",
    integrations: "集成",
    apiDocs: "API文档",
    support: "支持",
    docs: "文档",
    helpCenter: "帮助中心",
    contactUs: "联系我们",
    serviceStatus: "服务状态",
    legal: "法律",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    security: "安全",
    cookiePolicy: "Cookie政策",
    copyright: "© 2024 ShipBase. 保留所有权利。",
    madeWithLove: "由 ❤️ 在中国制造",
  },
  pages: {
    features: {
      title: "功能特性",
      subtitle: "强大的功能加速您的开发",
      description: "发现全面的工具和功能集，让ShipBase成为现代SaaS应用程序的完美平台。",
      coreFeatures: {
        title: "核心特性",
        subtitle: "为现代 SaaS 应用量身定制的完整解决方案，让您专注于产品创新而非基础设施搭建",
        features: [
          {
            icon: "Code",
            title: "Next.js 全栈框架",
            description: "基于最新的 Next.js 14+ 构建，支持 App Router、Server Components 和 Edge Runtime，提供最佳的性能和开发体验。",
            highlights: ["App Router", "Server Components", "Edge Runtime", "TypeScript 支持"]
          },
          {
            icon: "Shield",
            title: "企业级身份验证",
            description: "集成 Better Auth，支持多种登录方式，包括 Google OAuth、GitHub OAuth 和 Magic Link，确保安全可靠。",
            highlights: ["Google OAuth", "GitHub OAuth", "Magic Link", "会话管理"]
          },
          {
            icon: "CreditCard",
            title: "Stripe 支付集成",
            description: "完整的支付解决方案，支持订阅、一次性支付和发票管理，让您轻松实现商业化。",
            highlights: ["订阅管理", "一次性支付", "发票系统", "Webhook 处理"]
          },
          {
            icon: "Database",
            title: "Supabase 数据库",
            description: "强大的 PostgreSQL 数据库，内置实时功能、身份验证和存储，为您的应用提供可靠的数据基础。",
            highlights: ["PostgreSQL", "实时订阅", "文件存储", "Row Level Security"]
          },
          {
            icon: "Bot",
            title: "AI 就绪基础设施",
            description: "预配置的 AI 集成，支持 OpenAI、Anthropic 等主流 AI 服务，内置积分系统和 API 销售功能。",
            highlights: ["OpenAI 集成", "积分系统", "API 销售", "多模型支持"]
          },
          {
            icon: "Rocket",
            title: "一键部署",
            description: "支持 Vercel、Cloudflare 等主流平台的一键部署，自动化 CI/CD 流程，让发布变得简单。",
            highlights: ["Vercel 部署", "Cloudflare Pages", "CI/CD 自动化", "环境管理"]
          },
          {
            icon: "BarChart3",
            title: "业务分析",
            description: "集成 Google Analytics、Search Console 等分析工具，帮助您了解用户行为和业务增长。",
            highlights: ["Google Analytics", "Search Console", "用户行为分析", "转化跟踪"]
          },
          {
            icon: "Globe",
            title: "国际化支持",
            description: "内置多语言支持，支持中文、英文、日文等多种语言，让您的产品触达全球用户。",
            highlights: ["多语言支持", "RTL 支持", "动态语言切换", "SEO 优化"]
          }
        ]
      },
      techStack: {
        title: "技术栈",
        subtitle: "基于业界最佳实践和最新技术构建，确保您的应用具有最佳的性能、安全性和可扩展性",
        technologies: [
          { name: "Next.js 14+", description: "React 全栈框架" },
          { name: "React 19", description: "用户界面库" },
          { name: "TypeScript", description: "类型安全的 JavaScript" },
          { name: "Tailwind CSS", description: "实用优先的 CSS 框架" },
          { name: "Shadcn/UI", description: "现代组件库" },
          { name: "Better Auth", description: "身份验证解决方案" },
          { name: "Stripe", description: "支付处理平台" },
          { name: "Supabase", description: "后端即服务" },
          { name: "Vercel", description: "部署平台" }
        ]
      },
      comparison: {
        title: "为什么选择 ShipBase",
        subtitle: "与传统开发方式相比，ShipBase 让您节省 90% 的开发时间",
        traditional: {
          title: "传统开发",
          items: [
            { text: "需要 3-6 个月搭建基础设施" },
            { text: "需要学习多种技术栈" },
            { text: "需要处理复杂的部署流程" },
            { text: "需要自己实现身份验证和支付" },
            { text: "需要大量时间调试和优化" }
          ]
        },
        shipbase: {
          title: "使用 ShipBase",
          items: [
            { text: "5 分钟内完成基础设置" },
            { text: "开箱即用的完整解决方案" },
            { text: "一键部署到生产环境" },
            { text: "预配置的身份验证和支付" },
            { text: "专注于产品功能开发" }
          ]
        }
      },
      cta: {
        title: "准备开始构建您的 AI SaaS？",
        subtitle: "立即获取 ShipBase，在几分钟内启动您的下一个项目",
        primaryButton: "获取 ShipBase",
        secondaryButton: "查看文档"
      }
    },
    pricing: {
      title: "价格方案",
      subtitle: "简单透明的定价",
      description: "选择适合您需求的方案。免费开始，随需扩展。",
    },
    docs: {
      title: "文档",
      subtitle: "开始所需的一切",
      description: "全面的指南、API参考和教程，帮助您构建出色的应用程序。",
    },
    about: {
      title: "关于我们",
      subtitle: "构建SaaS开发的未来",
      description: "了解我们的使命、团队和驱动ShipBase的技术。",
    },
    integrations: {
      title: "集成",
      subtitle: "与您喜爱的工具连接",
      description: "将ShipBase与您现有的工作流程和第三方服务无缝集成。",
    },
    api: {
      title: "API文档",
      subtitle: "使用我们强大的API构建",
      description: "完整的API参考，包含示例、SDK和交互式文档。",
    },
    help: {
      title: "帮助中心",
      subtitle: "获得您需要的支持",
      description: "查找常见问题的答案、故障排除指南和最佳实践。",
    },
    contact: {
      title: "联系我们",
      subtitle: "我们随时为您提供帮助",
      description: "联系我们的团队获取支持、合作或一般咨询。",
    },
    status: {
      title: "服务状态",
      subtitle: "实时系统状态",
      description: "监控所有ShipBase服务和基础设施的当前状态。",
    },
    privacy: {
      title: "隐私政策",
      subtitle: "您的隐私很重要",
      description: "了解我们如何收集、使用和保护您的个人信息。",
    },
    terms: {
      title: "服务条款",
      subtitle: "我们的条款和条件",
      description: "阅读我们的服务条款，了解您的权利和责任。",
    },
    security: {
      title: "安全",
      subtitle: "您的数据在我们这里很安全",
      description: "了解我们的安全措施、合规性和数据保护实践。",
    },
    cookies: {
      title: "Cookie政策",
      subtitle: "我们如何使用Cookie",
      description: "了解我们如何在平台上使用Cookie和类似技术。",
    },
    login: {
      title: "登录",
      subtitle: "欢迎回来",
      description: "登录您的账户，继续您的ShipBase之旅。",
    },
    signup: {
      title: "开始使用",
      subtitle: "创建您的账户",
      description: "加入数千名开发者，使用ShipBase构建出色的应用程序。",
    },
  },
};
