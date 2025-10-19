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
  pages: {
    features: {
      title: "機能",
      subtitle: "開発を加速する強力な機能",
      description: "ShipBaseを現代のSaaSアプリケーションに最適なプラットフォームにする包括的なツールと機能セットを発見してください。",
    },
    pricing: {
      title: "料金",
      subtitle: "シンプルで透明な料金",
      description: "ニーズに合ったプランを選択してください。無料で始めて、成長に合わせてスケールアップ。",
    },
    docs: {
      title: "ドキュメント",
      subtitle: "開始に必要なすべて",
      description: "素晴らしいアプリケーションを構築するのに役立つ包括的なガイド、APIリファレンス、チュートリアル。",
    },
    about: {
      title: "会社概要",
      subtitle: "SaaS開発の未来を構築",
      description: "私たちのミッション、チーム、ShipBaseを動かす技術について学んでください。",
    },
    integrations: {
      title: "統合",
      subtitle: "お気に入りのツールと接続",
      description: "ShipBaseを既存のワークフローとサードパーティサービスとシームレスに統合。",
    },
    api: {
      title: "API ドキュメント",
      subtitle: "強力なAPIで構築",
      description: "例、SDK、インタラクティブなドキュメントを含む完全なAPIリファレンス。",
    },
    help: {
      title: "ヘルプセンター",
      subtitle: "必要なサポートを取得",
      description: "よくある質問の回答、トラブルシューティングガイド、ベストプラクティスを見つけてください。",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "お手伝いします",
      description: "サポート、パートナーシップ、一般的なお問い合わせについて私たちのチームにお問い合わせください。",
    },
    status: {
      title: "サービス状況",
      subtitle: "リアルタイムシステム状況",
      description: "すべてのShipBaseサービスとインフラストラクチャの現在の状況を監視。",
    },
    privacy: {
      title: "プライバシーポリシー",
      subtitle: "あなたのプライバシーが重要",
      description: "私たちが個人情報をどのように収集、使用、保護するかを学んでください。",
    },
    terms: {
      title: "利用規約",
      subtitle: "私たちの利用規約",
      description: "利用規約を読み、あなたの権利と責任を理解してください。",
    },
    security: {
      title: "セキュリティ",
      subtitle: "あなたのデータは私たちと安全",
      description: "私たちのセキュリティ対策、コンプライアンス、データ保護の実践について学んでください。",
    },
    cookies: {
      title: "Cookie ポリシー",
      subtitle: "Cookieの使用方法",
      description: "私たちがプラットフォームでCookieや類似技術をどのように使用するかを理解してください。",
    },
  },
};
