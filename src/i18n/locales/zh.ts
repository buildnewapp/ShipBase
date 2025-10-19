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
      plansTitle: "选择适合您的方案",
      plansSubtitle: "简单透明的定价，没有隐藏费用。选择最适合您需求的方案，随时可以升级。",
      plans: [
        {
          name: "免费版",
          price: "¥0",
          period: "永久免费",
          description: "适合个人开发者和小型项目",
          features: [
            "基础 Next.js 模板",
            "GitHub 集成",
            "社区支持",
            "基础文档",
            "个人使用许可"
          ],
          limitations: [
            "不支持商业使用",
            "无技术支持",
            "功能有限"
          ],
          cta: "开始使用",
          popular: false
        },
        {
          name: "专业版",
          price: "¥299",
          period: "一次性付费",
          description: "适合初创公司和中小企业",
          features: [
            "完整功能模板",
            "身份验证系统",
            "支付集成",
            "数据库设置",
            "AI 集成",
            "一键部署",
            "邮件支持",
            "商业使用许可",
            "源码访问"
          ],
          limitations: [],
          cta: "立即购买",
          popular: true
        },
        {
          name: "企业版",
          price: "¥999",
          period: "一次性付费",
          description: "适合大型企业和团队",
          features: [
            "专业版所有功能",
            "高级 AI 功能",
            "多租户支持",
            "高级分析",
            "优先技术支持",
            "定制开发服务",
            "团队协作功能",
            "SLA 保障",
            "培训服务"
          ],
          limitations: [],
          cta: "联系销售",
          popular: false
        }
      ],
      faqTitle: "常见问题",
      faqSubtitle: "还有其他问题？我们很乐意为您解答",
      faqs: [
        {
          question: "免费版和付费版有什么区别？",
          answer: "免费版提供基础功能，适合学习和个人项目。付费版包含完整的商业功能，如身份验证、支付集成、AI 功能等，适合商业项目。"
        },
        {
          question: "是一次性付费还是订阅制？",
          answer: "ShipBase 采用一次性付费模式，购买后永久使用，无需每月付费。这让我们能够专注于产品本身而非续费。"
        },
        {
          question: "支持退款吗？",
          answer: "我们提供 30 天无条件退款保证。如果您在购买后 30 天内不满意，可以申请全额退款。"
        },
        {
          question: "可以用于商业项目吗？",
          answer: "专业版和企业版支持商业使用。免费版仅限个人学习和非商业项目使用。"
        },
        {
          question: "包含技术支持吗？",
          answer: "专业版提供邮件支持，企业版提供优先技术支持。我们会在 24 小时内回复您的问题。"
        },
        {
          question: "如何升级到更高版本？",
          answer: "您可以随时升级到更高版本，只需支付差价即可。升级后立即享受新版本的所有功能。"
        }
      ]
    },
    docs: {
      title: "文档",
      subtitle: "开始所需的一切",
      description: "全面的指南、API参考和教程，帮助您构建出色的应用程序。",
      quickStart: {
        title: "快速开始",
        subtitle: "只需几个简单步骤，您就可以开始使用 ShipBase 构建您的 AI SaaS 应用",
        steps: [
          {
            step: "1",
            title: "安装 ShipBase",
            description: "克隆仓库并安装依赖",
            code: "git clone https://github.com/your-repo/shipbase\ncd shipbase\npnpm install"
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
            code: "pnpm dev\n# 访问 http://localhost:3000"
          },
          {
            step: "4",
            title: "部署到生产环境",
            description: "一键部署到 Vercel",
            code: "pnpm build\nvercel deploy"
          }
        ]
      },
      navigation: {
        title: "文档导航",
        subtitle: "浏览我们的完整文档，找到您需要的所有信息",
        sections: [
          {
            title: "快速开始",
            description: "5 分钟快速上手 ShipBase",
            icon: "Rocket",
            links: [
              { name: "安装指南", href: "#" },
              { name: "环境配置", href: "#" },
              { name: "第一个应用", href: "#" }
            ]
          },
          {
            title: "核心功能",
            description: "了解 ShipBase 的核心功能",
            icon: "Code",
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
            icon: "Database",
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
            icon: "Globe",
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
            icon: "Shield",
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
            icon: "Zap",
            links: [
              { name: "常见问题", href: "#" },
              { name: "错误代码", href: "#" },
              { name: "调试技巧", href: "#" },
              { name: "社区支持", href: "#" }
            ]
          }
        ]
      },
      support: {
        title: "需要帮助？",
        subtitle: "我们的社区和支持团队随时为您提供帮助",
        description: "加入我们的 Discord 社区或查看常见问题。",
        discordButton: "加入 Discord",
        faqButton: "查看 FAQ"
      }
    },
    integrations: {
      title: "集成",
      subtitle: "与您喜爱的工具连接",
      description: "将ShipBase与您现有的工作流程和第三方服务无缝集成。",
      categories: [
        {
          name: "身份验证与安全",
          description: "安全可靠的用户身份验证解决方案",
          icon: "Shield",
          integrations: [
            {
              name: "Google OAuth",
              description: "使用Google账户快速登录",
              logo: "/api/placeholder/40/40",
              status: "available",
              features: ["一键登录", "用户信息同步", "安全可靠"],
              documentation: "/docs/auth/google"
            },
            {
              name: "GitHub OAuth",
              description: "开发者友好的GitHub登录",
              logo: "/api/placeholder/40/40",
              status: "available",
              features: ["开发者认证", "仓库信息访问", "团队协作"],
              documentation: "/docs/auth/github"
            },
            {
              name: "Magic Link",
              description: "无密码登录体验",
              logo: "/api/placeholder/40/40",
              status: "available",
              features: ["邮件验证", "无密码登录", "安全便捷"],
              documentation: "/docs/auth/magic-link"
            }
          ]
        },
        {
          name: "支付与计费",
          description: "完整的支付和订阅管理解决方案",
          icon: "CreditCard",
          integrations: [
            {
              name: "Stripe",
              description: "全球领先的支付处理平台",
              logo: "/api/placeholder/40/40",
              status: "available",
              features: ["订阅管理", "一次性支付", "发票系统", "Webhook支持"],
              documentation: "/docs/payments/stripe"
            },
            {
              name: "PayPal",
              description: "全球用户信赖的支付方式",
              logo: "/api/placeholder/40/40",
              status: "coming-soon",
              features: ["PayPal支付", "订阅管理", "退款处理"]
            }
          ]
        },
        {
          name: "数据库与存储",
          description: "可靠的数据存储和管理服务",
          icon: "Database",
          integrations: [
            {
              name: "Supabase",
              description: "开源的Firebase替代方案",
              logo: "/api/placeholder/40/40",
              status: "available",
              features: ["PostgreSQL数据库", "实时订阅", "文件存储", "Row Level Security"],
              documentation: "/docs/database/supabase"
            },
            {
              name: "PlanetScale",
              description: "无服务器MySQL数据库",
              logo: "/api/placeholder/40/40",
              status: "beta",
              features: ["无服务器架构", "分支管理", "自动扩缩容"]
            }
          ]
        },
        {
          name: "AI与机器学习",
          description: "强大的AI服务集成",
          icon: "Bot",
          integrations: [
            {
              name: "OpenAI",
              description: "领先的AI语言模型服务",
              logo: "/api/placeholder/40/40",
              status: "available",
              features: ["GPT模型", "嵌入向量", "图像生成", "API管理"],
              documentation: "/docs/ai/openai"
            },
            {
              name: "Anthropic",
              description: "Claude AI模型服务",
              logo: "/api/placeholder/40/40",
              status: "available",
              features: ["Claude模型", "长文本处理", "安全对话"],
              documentation: "/docs/ai/anthropic"
            },
            {
              name: "Hugging Face",
              description: "开源AI模型平台",
              logo: "/api/placeholder/40/40",
              status: "beta",
              features: ["开源模型", "模型托管", "推理API"]
            }
          ]
        },
        {
          name: "分析与监控",
          description: "深入了解用户行为和系统性能",
          icon: "BarChart3",
          integrations: [
            {
              name: "Google Analytics",
              description: "全面的网站分析工具",
              logo: "/api/placeholder/40/40",
              status: "available",
              features: ["用户行为分析", "转化跟踪", "实时报告", "自定义事件"],
              documentation: "/docs/analytics/google"
            },
            {
              name: "Mixpanel",
              description: "产品分析平台",
              logo: "/api/placeholder/40/40",
              status: "coming-soon",
              features: ["事件跟踪", "用户画像", "漏斗分析"]
            },
            {
              name: "Sentry",
              description: "错误监控和性能追踪",
              logo: "/api/placeholder/40/40",
              status: "beta",
              features: ["错误监控", "性能追踪", "发布跟踪"]
            }
          ]
        },
        {
          name: "通信与通知",
          description: "多渠道用户沟通解决方案",
          icon: "Mail",
          integrations: [
            {
              name: "SendGrid",
              description: "可靠的邮件发送服务",
              logo: "/api/placeholder/40/40",
              status: "available",
              features: ["邮件发送", "模板管理", "投递统计", "Webhook支持"],
              documentation: "/docs/email/sendgrid"
            },
            {
              name: "Twilio",
              description: "全球通信平台",
              logo: "/api/placeholder/40/40",
              status: "coming-soon",
              features: ["短信发送", "语音通话", "视频通话"]
            },
            {
              name: "Slack",
              description: "团队协作和通知",
              logo: "/api/placeholder/40/40",
              status: "beta",
              features: ["消息发送", "频道集成", "工作流自动化"]
            }
          ]
        }
      ],
      popularIntegrations: {
        title: "热门集成",
        subtitle: "最受开发者欢迎的集成服务",
        items: [
          {
            name: "Stripe",
            description: "全球领先的支付处理平台",
            logo: "/api/placeholder/60/60",
            status: "available",
            features: ["订阅管理", "一次性支付", "发票系统"]
          },
          {
            name: "OpenAI",
            description: "领先的AI语言模型服务",
            logo: "/api/placeholder/60/60",
            status: "available",
            features: ["GPT模型", "嵌入向量", "图像生成"]
          },
          {
            name: "Supabase",
            description: "开源的Firebase替代方案",
            logo: "/api/placeholder/60/60",
            status: "available",
            features: ["PostgreSQL", "实时订阅", "文件存储"]
          },
          {
            name: "Google Analytics",
            description: "全面的网站分析工具",
            logo: "/api/placeholder/60/60",
            status: "available",
            features: ["用户分析", "转化跟踪", "实时报告"]
          }
        ]
      },
      gettingStarted: {
        title: "快速开始",
        subtitle: "只需几个步骤即可集成您需要的服务",
        steps: [
          {
            step: "1",
            title: "选择集成服务",
            description: "浏览我们的集成目录，选择您需要的服务",
            code: "# 查看可用集成\nnpm run list-integrations"
          },
          {
            step: "2",
            title: "配置环境变量",
            description: "添加必要的API密钥和配置",
            code: "# 配置环境变量\ncp .env.example .env.local\n# 编辑 .env.local 文件"
          },
          {
            step: "3",
            title: "安装集成包",
            description: "安装对应的集成包和依赖",
            code: "# 安装集成包\npnpm add @shipbase/integrations-stripe"
          },
          {
            step: "4",
            title: "初始化集成",
            description: "在您的应用中初始化集成服务",
            code: "# 初始化集成\nimport { StripeIntegration } from '@shipbase/integrations-stripe'\nconst stripe = new StripeIntegration()"
          }
        ]
      },
      cta: {
        title: "准备开始集成？",
        subtitle: "立即开始使用ShipBase的强大集成功能",
        primaryButton: "查看文档",
        secondaryButton: "联系支持"
      }
    },
    help: {
      title: "帮助中心",
      subtitle: "获得您需要的支持",
      description: "查找常见问题的答案、故障排除指南和最佳实践。",
      searchPlaceholder: "搜索帮助文章...",
      popularArticles: {
        title: "热门文章",
        subtitle: "最常被查看的帮助文章",
        articles: [
          {
            title: "如何开始使用 ShipBase",
            description: "了解如何快速设置和部署您的第一个 AI SaaS 应用",
            href: "#",
            tags: ["快速开始", "部署", "设置"]
          },
          {
            title: "身份验证配置指南",
            description: "详细说明如何配置 Google OAuth、GitHub OAuth 和 Magic Link",
            href: "#",
            tags: ["身份验证", "OAuth", "配置"]
          },
          {
            title: "Stripe 支付集成",
            description: "如何设置订阅、一次性支付和发票管理",
            href: "#",
            tags: ["支付", "Stripe", "订阅"]
          },
          {
            title: "AI 功能集成",
            description: "集成 OpenAI、Anthropic 等 AI 服务的完整指南",
            href: "#",
            tags: ["AI", "OpenAI", "集成"]
          },
          {
            title: "数据库设置和迁移",
            description: "Supabase 数据库配置和数据迁移最佳实践",
            href: "#",
            tags: ["数据库", "Supabase", "迁移"]
          },
          {
            title: "部署到生产环境",
            description: "Vercel 和 Cloudflare 部署的详细步骤",
            href: "#",
            tags: ["部署", "Vercel", "生产环境"]
          }
        ]
      },
      categoriesTitle: "帮助分类",
      categoriesSubtitle: "按类别浏览帮助文章",
      categories: [
        {
          title: "快速开始",
          description: "新用户入门指南",
          icon: "Rocket",
          articles: [
            {
              title: "安装和设置",
              description: "从零开始设置 ShipBase 项目",
              href: "#",
              tags: ["安装", "设置", "环境"]
            },
            {
              title: "第一个应用",
              description: "创建您的第一个 AI SaaS 应用",
              href: "#",
              tags: ["教程", "应用", "开发"]
            },
            {
              title: "环境变量配置",
              description: "正确配置所有必要的环境变量",
              href: "#",
              tags: ["配置", "环境变量", "API 密钥"]
            }
          ]
        },
        {
          title: "核心功能",
          description: "ShipBase 主要功能的使用指南",
          icon: "Code",
          articles: [
            {
              title: "身份验证系统",
              description: "用户登录、注册和会话管理",
              href: "#",
              tags: ["身份验证", "用户管理", "会话"]
            },
            {
              title: "支付处理",
              description: "订阅管理和支付流程",
              href: "#",
              tags: ["支付", "订阅", "计费"]
            },
            {
              title: "数据库操作",
              description: "数据存储和查询最佳实践",
              href: "#",
              tags: ["数据库", "查询", "存储"]
            },
            {
              title: "AI 集成",
              description: "AI 服务的集成和使用",
              href: "#",
              tags: ["AI", "机器学习", "API"]
            }
          ]
        },
        {
          title: "部署和运维",
          description: "生产环境部署和运维指南",
          icon: "Globe",
          articles: [
            {
              title: "Vercel 部署",
              description: "使用 Vercel 部署您的应用",
              href: "#",
              tags: ["Vercel", "部署", "CDN"]
            },
            {
              title: "Cloudflare Pages",
              description: "Cloudflare Pages 部署指南",
              href: "#",
              tags: ["Cloudflare", "部署", "边缘计算"]
            },
            {
              title: "环境管理",
              description: "开发、测试和生产环境管理",
              href: "#",
              tags: ["环境", "配置", "管理"]
            },
            {
              title: "监控和日志",
              description: "应用监控和日志记录",
              href: "#",
              tags: ["监控", "日志", "分析"]
            }
          ]
        },
        {
          title: "故障排除",
          description: "常见问题和解决方案",
          icon: "Zap",
          articles: [
            {
              title: "常见错误",
              description: "解决常见的部署和运行错误",
              href: "#",
              tags: ["错误", "调试", "解决"]
            },
            {
              title: "性能优化",
              description: "提升应用性能的技巧",
              href: "#",
              tags: ["性能", "优化", "速度"]
            },
            {
              title: "安全最佳实践",
              description: "保护您的应用和数据安全",
              href: "#",
              tags: ["安全", "最佳实践", "保护"]
            }
          ]
        }
      ],
      faq: {
        title: "常见问题",
        subtitle: "快速找到您需要的答案",
        faqs: [
          {
            question: "ShipBase 支持哪些 AI 服务？",
            answer: "ShipBase 支持 OpenAI、Anthropic、Google AI 等主流 AI 服务，并提供了统一的接口来管理不同的 AI 提供商。"
          },
          {
            question: "如何自定义 ShipBase 的界面？",
            answer: "ShipBase 使用 Tailwind CSS 和 Shadcn/UI，您可以轻松自定义样式。所有组件都是可定制的，支持主题切换。"
          },
          {
            question: "ShipBase 是否支持多语言？",
            answer: "是的，ShipBase 内置了国际化支持，目前支持中文、英文和日文，您可以轻松添加更多语言。"
          },
          {
            question: "如何升级 ShipBase 版本？",
            answer: "您可以通过 Git 拉取最新代码来升级 ShipBase。我们建议在升级前备份您的自定义代码。"
          },
          {
            question: "ShipBase 的性能如何？",
            answer: "ShipBase 基于 Next.js 14+ 构建，支持 Server Components 和 Edge Runtime，具有出色的性能表现。"
          },
          {
            question: "如何获得技术支持？",
            answer: "您可以通过邮件联系我们，或者加入我们的 Discord 社区获得实时帮助。"
          }
        ]
      },
      contact: {
        title: "需要更多帮助？",
        subtitle: "联系我们的支持团队",
        description: "如果您在文档中找不到答案，我们的支持团队随时为您提供帮助。",
        emailButton: "发送邮件",
        discordButton: "加入 Discord"
      }
    },
    contact: {
      title: "联系我们",
      subtitle: "我们随时为您提供帮助",
      description: "联系我们的团队获取支持、合作或一般咨询。",
      contactMethodsTitle: "联系我们",
      contactMethodsSubtitle: "我们很乐意听到您的声音。选择最适合您的联系方式",
      teamTitle: "直接联系团队",
      teamSubtitle: "根据您的需求联系相应的团队",
      responseTimeTitle: "响应时间",
      responseTimeSubtitle: "我们承诺快速响应您的请求",
      contactMethods: [
        {
          icon: "Users",
          title: "Discord 社区",
          description: "加入我们的 Discord 社区，与其他开发者交流",
          action: "加入 Discord",
          href: "#"
        },
        {
          icon: "Zap",
          title: "邮件支持",
          description: "发送邮件到 support@shipbase.com",
          action: "发送邮件",
          href: "mailto:support@shipbase.com"
        },
        {
          icon: "Shield",
          title: "GitHub Issues",
          description: "在 GitHub 上报告问题或提出建议",
          action: "查看 Issues",
          href: "#"
        },
        {
          icon: "Rocket",
          title: "企业合作",
          description: "企业级支持和定制开发服务",
          action: "联系销售",
          href: "mailto:sales@shipbase.com"
        }
      ],
      team: [
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
      ],
      responseTimes: [
        {
          time: "< 1 小时",
          title: "Discord 支持",
          description: "社区支持，快速响应"
        },
        {
          time: "< 24 小时",
          title: "邮件支持",
          description: "专业团队，详细回复"
        },
        {
          time: "< 48 小时",
          title: "企业支持",
          description: "定制解决方案"
        }
      ]
    },
    status: {
      title: "服务状态",
      subtitle: "实时系统状态",
      description: "监控所有ShipBase服务和基础设施的当前状态。",
      overview: {
        title: "服务状态概览",
        subtitle: "实时监控所有ShipBase服务",
        allSystemsOperational: "所有系统正常运行",
        lastUpdated: "最后更新",
      },
      services: {
        title: "服务状态",
        subtitle: "所有ShipBase服务的当前状态",
        api: {
          name: "API服务",
          description: "核心API端点和服务",
        },
        auth: {
          name: "身份验证",
          description: "用户身份验证和授权",
        },
        payments: {
          name: "支付处理",
          description: "Stripe支付处理服务",
        },
        database: {
          name: "数据库",
          description: "Supabase数据库服务",
        },
        cdn: {
          name: "CDN",
          description: "内容分发网络",
        },
        monitoring: {
          name: "监控系统",
          description: "系统监控和告警",
        },
        statusOperational: "正常运行",
        statusDegraded: "性能降级",
        statusOutage: "服务中断",
        uptime: "正常运行时间",
        lastIncident: "最后事件",
        none: "无",
      },
      subscribe: {
        title: "订阅状态更新",
        subtitle: "通过邮件或RSS获取服务状态变更通知",
        emailSubscribe: "邮件订阅",
        rssSubscribe: "RSS订阅",
        description: "及时了解服务状态变更和维护窗口",
      },
    },
    privacy: {
      title: "隐私政策",
      subtitle: "您的隐私很重要",
      description: "了解我们如何收集、使用和保护您的个人信息。",
      lastUpdated: "最后更新：2024年1月1日",
      introduction: {
        title: "介绍",
        content: "欢迎使用 ShipBase，这是一个专为帮助您快速高效构建 AI SaaS 初创公司而设计的 **NextJS 模板**。在 ShipBase，您的隐私对我们至关重要，本隐私政策概述了您在使用我们的服务时，我们如何收集、使用和保护您的个人信息。"
      },
      informationCollection: {
        title: "信息收集和使用",
        subtitle: "我们收集以下类型的数据，以便在使用 ShipBase 时为您提供更好的体验：",
        accountInfo: {
          title: "账户信息",
          whatWeCollect: "我们收集的内容：这包括您的姓名、邮箱地址以及您在创建账户时提供的任何其他信息。",
          purpose: "目的：管理您的账户并提供客户支持。"
        },
        usageDetails: {
          title: "使用详情",
          whatWeCollect: "我们收集的内容：关于您如何使用 ShipBase 的信息，包括您的交互、访问的功能和使用频率。",
          purpose: "目的：分析用户参与度并改进我们的服务。"
        },
        deviceInfo: {
          title: "设备信息",
          whatWeCollect: "我们收集的内容：关于您用于访问 ShipBase 的设备的数据，如设备类型、操作系统和浏览器类型。",
          purpose: "目的：为不同设备优化我们的服务并确保兼容性。"
        },
        cookies: {
          title: "Cookie",
          whatWeCollect: "我们收集的内容：放置在您设备上的小型数据文件，帮助我们跟踪用户偏好并改善用户体验。",
          purpose: "目的：增强我们服务的功能并个性化您的体验。"
        },
        paymentInfo: {
          title: "支付和账单信息",
          whatWeCollect: "我们收集的内容：关于您支付方式的信息，如信用卡号、账单地址以及交易处理所需的任何详细信息。",
          purpose: "目的：为我们的服务提供账单和支付处理便利。"
        }
      },
      dataStorage: {
        title: "数据存储和安全",
        content: "我们认真对待您个人信息的安全。我们收集的数据安全地存储在我们的服务器上，我们实施各种安全措施，包括加密和访问控制，以保护您的个人信息免受未经授权的访问、更改、披露或销毁。但是，请注意，没有通过互联网传输或电子存储的方法是100%安全的，我们无法保证其绝对安全。"
      },
      informationSharing: {
        title: "信息共享和披露",
        content: "我们不会向外部方出售、交易或以其他方式转让您的个人信息，除非在以下情况下：",
        circumstances: [
          "遵守法律义务或响应公共当局的合法请求。",
          "保护我们的权利、财产或安全，或保护我们的用户或他人的权利、财产或安全。",
          "通过协助我们运营网站或开展业务的受信任第三方合作伙伴提供服务，但需遵守保密协议。"
        ]
      },
      policyChanges: {
        title: "政策变更",
        content: "我们可能会不时更新此隐私政策。我们将通过在此页面上发布新政策并更新本政策顶部的\"生效日期\"来通知您任何变更。建议您定期查看此隐私政策以了解任何变更。此隐私政策的变更在发布到此页面时生效。"
      },
      contactUs: {
        title: "联系我们",
        content: "如果您对此隐私政策或我们的数据实践有任何疑问或担忧，请通过以下方式联系我们：",
        copyrightOwner: "版权所有者：shipbase.ai",
        email: "邮箱：support@shipbase.ai"
      },
      consent: {
        content: "通过使用 ShipBase，您同意我们的隐私政策并同意其条款。感谢您信任我们处理您的信息！"
      }
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
