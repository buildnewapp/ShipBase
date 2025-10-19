import type { AppDictionary } from "@/i18n/types";

export const jaDictionary: AppDictionary = {
  home: {
    badgeLabel: "Better Auth 対応",
    heroTitle: "Shipbase の安全なサインイン方法を有効化",
    heroDescription:
      "Better Auth を通じて Google と GitHub OAuth および Magic Link メールサインインを統合。セッションはサーバーで維持され、HTTP-only Cookies で自動同期されます。",
    bullets: [
      [
        {
          type: "text",
          value: "環境変数を使用して複数の OAuth プロバイダーを動的に設定。",
        },
      ],
      [
        {
          type: "text",
          value: "Magic Link はデフォルトでサーバーログに出力され、カスタム Webhook を通じてメール配信も可能。",
        },
      ],
      [
        { type: "text", value: "クライアントコンポーネントで " },
        { type: "code", value: "authClient.useSession()" },
        {
          type: "text",
          value: " を使用して現在のサインイン状態を読み取り。",
        },
      ],
    ],
  },
  authPanel: {
    title: "Shipbase にサインイン",
    description:
      "Better Auth が提供する Google、GitHub、または Magic Link で認証。",
    signedInAs: "{name} としてサインイン中",
    sessionLabel: "セッション ID: {id}",
    signOut: "サインアウト",
    googleButton: {
      default: "Google でサインイン",
      loading: "Google にリダイレクト中…",
    },
    githubButton: {
      default: "GitHub でサインイン",
      loading: "GitHub にリダイレクト中…",
    },
    magicLinkHeading: "またはマジックリンクを送信",
    emailLabel: "メールアドレス",
    emailPlaceholder: "you@example.com",
    magicLinkButton: {
      default: "ログインリンクを送信",
      loading: "送信中…",
    },
    messages: {
      emptyEmail: "メールアドレスを入力してください。",
      responseError: "メールの送信に失敗しました。再試行してください。",
      requestError: "問題が発生しました。後でもう一度お試しください。",
      success:
        "マジックリンクが送信されました。メールサービスが設定されていない場合は、サーバーログでリンクを確認してください。",
    },
    footer: [
      {
        type: "text",
        value:
          "サインイン後、Better Auth はサーバーでセッションを発行し、HTTP-only Cookies に保存します。",
      },
      { type: "code", value: "authClient.useSession()" },
      {
        type: "text",
        value: " を組み合わせて、任意のクライアントコンポーネントで現在のユーザーにアクセスできます。",
      },
    ],
  },
  header: {
    features: "機能",
    pricing: "料金",
    docs: "ドキュメント",
    about: "会社概要",
    login: "ログイン",
    signup: "無料トライアル",
    languageSwitch: "言語",
    themeSwitch: "テーマ",
    lightTheme: "ライト",
    darkTheme: "ダーク",
    systemTheme: "システム",
  },
  footer: {
    description: "アプリケーションを迅速に構築・デプロイできるモダンなSaaSプラットフォーム。",
    product: "製品",
    features: "機能",
    pricing: "料金",
    integrations: "統合",
    apiDocs: "API ドキュメント",
    support: "サポート",
    docs: "ドキュメント",
    helpCenter: "ヘルプセンター",
    contactUs: "お問い合わせ",
    serviceStatus: "サービス状況",
    legal: "法的情報",
    privacyPolicy: "プライバシーポリシー",
    termsOfService: "利用規約",
    security: "セキュリティ",
    cookiePolicy: "Cookie ポリシー",
    copyright: "© 2024 ShipBase. 全著作権所有。",
    madeWithLove: "❤️ で日本で作られました",
  },
};
