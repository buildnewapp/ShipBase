import type { AppDictionary } from "@/i18n/types";

export const zhDictionary: AppDictionary = {
  home: {
    badgeLabel: "Better Auth 集成",
    heroTitle: "为 Shipbase 启用多种安全登录方式",
    heroDescription:
      "通过 Better Auth 统一接入 Google、GitHub OAuth 以及 Magic Link 邮件登录。所有会话均由服务器维护，并自动同步 HTTP-only Cookies。",
    bullets: [
      [
        {
          type: "text",
          value: "支持多个 OAuth Provider，使用环境变量完成动态配置。",
        },
      ],
      [
        {
          type: "text",
          value: "Magic Link 默认打印到服务器日志，也可通过 Webhook 发送邮件。",
        },
      ],
      [
        { type: "text", value: "在客户端组件中使用 " },
        { type: "code", value: "authClient.useSession()" },
        {
          type: "text",
          value: " 实时读取登录状态。",
        },
      ],
    ],
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
