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
};
