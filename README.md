# ShipBase

> A modern, full-featured SaaS starter template built with Next.js 15, featuring Better Auth, payment integration, and complete internationalization support.

**📖 [中文版 / Chinese Version](./README.zh.md)**

---

## 🌟 Features

### ✅ Authentication
- **Better Auth** integration with multiple providers
- Supports **Google OAuth**, **GitHub OAuth**, and **Magic Link** authentication
- Session management with secure cookies
- Role-based access control ready

### 💳 Payment & Billing
- **Creem** payment gateway integration
- Support for one-time, monthly, and yearly billing
- 20% discount for annual subscriptions
- Complete order management system
- Payment webhook handling

### 🌍 Internationalization
- Multi-language support (English, Chinese, Japanese)
- Currency support (USD, CNY, JPY)
- Localized pricing and content
- Language switcher component

### 🎨 Modern UI
- **Tailwind CSS 4** for styling
- Responsive design
- Dark mode support
- Accessible components

### 🗄️ Database
- **Drizzle ORM** for type-safe database operations
- PostgreSQL support (compatible with Supabase, Neon, self-hosted)
- Migration management with Drizzle Kit
- Schema definition with TypeScript

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 9+
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shipbase
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DATABASE_URL=postgresql://user:password@host:5432/dbname
   DATABASE_SSL=true  # Optional, recommended for production

   # Better Auth
   BETTER_AUTH_SECRET=your-secret-key  # Generate with: openssl rand -base64 32
   BETTER_AUTH_URL=http://localhost:3000  # Optional
   NEXT_PUBLIC_APP_URL=http://localhost:3000  # Optional

   # Google OAuth (Optional)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   # GitHub OAuth (Optional)
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret

   # Magic Link (Optional)
   MAGIC_LINK_WEBHOOK_URL=https://your-webhook-url  # Optional, for sending magic links

   # Admin Configuration
   ADMIN_EMAILS=admin@example.com,owner@example.com  # Admin emails (comma-separated)

   # Creem Payment
   CREEM_API_KEY=your-creem-api-key
   CREEM_ENV=test  # or production
   CREEM_PRODUCTS={"professional":"prod_xxx","enterprise":"prod_yyy"}
   CREEM_WEBHOOK_SECRET=your-webhook-secret

   # Application
   NEXT_PUBLIC_WEB_URL=http://localhost:3000
   NEXT_PUBLIC_PROJECT_NAME=ShipBase
   PAY_PROVIDER=creem
   ```

4. **Setup database**
   ```bash
   # Generate migration files
   pnpm db:generate

   # Push schema to database
   pnpm db:push
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📖 Common Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build production bundle |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm db:generate` | Generate Drizzle migration files |
| `pnpm db:push` | Push schema to database |

---

## 🗂️ Project Structure

```
shipbase/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── pricing/       # Pricing page
│   │   │   ├── login/         # Login page
│   │   │   ├── signup/        # Signup page
│   │   │   ├── dashboard/     # Dashboard
│   │   │   ├── orders/        # Orders page
│   │   │   └── profile/       # Profile page
│   │   └── api/               # API routes
│   │       ├── auth/          # Authentication API
│   │       ├── payments/      # Payment API
│   │       └── orders/        # Orders API
│   ├── components/            # React components
│   │   ├── auth/              # Authentication components
│   │   ├── layout/            # Layout components
│   │   ├── pricing/           # Pricing components
│   │   └── ui/                # UI components
│   ├── lib/                   # Utilities and services
│   │   ├── auth/              # Auth configuration
│   │   ├── db/                # Database client and schema
│   │   ├── orders/            # Order service
│   │   ├── payments/          # Payment integration
│   │   └── pricing/           # Pricing configuration
│   ├── i18n/                  # Internationalization
│   │   ├── locales/           # Translation files
│   │   │   ├── en.ts          # English
│   │   │   ├── zh.ts          # Chinese
│   │   │   └── ja.ts          # Japanese
│   │   └── types.ts           # i18n types
│   └── hooks/                 # Custom React hooks
├── public/                    # Static assets
├── drizzle/                   # Database migrations
├── docs/                      # Documentation
├── next.config.ts            # Next.js configuration
├── drizzle.config.ts         # Drizzle configuration
└── package.json              # Dependencies
```

---

## 🔐 Authentication Setup

### Google OAuth Setup

1. Visit [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new project and create OAuth Client ID
3. Configure authorized domains and redirect URIs:

   ```
   Authorized JavaScript origins:
   http://localhost:3000
   https://your-domain.com

   Authorized redirect URIs:
   http://localhost:3000/api/auth/callback/google
   https://your-domain.com/api/auth/callback/google
   ```

4. Copy Client ID and Client Secret to `.env.local`

### GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/applications/new)
2. Create a new OAuth App
3. Configure settings:

   ```
   Homepage URL:
   http://localhost:3000 (development)
   https://your-domain.com (production)

   Authorization callback URL:
   http://localhost:3000/api/auth/callback/github
   https://your-domain.com/api/auth/callback/github
   ```

4. Copy Client ID and Client Secret to `.env.local`

### Magic Link

Magic Links are sent via webhook (if configured) or logged to console in development.

---

## 💰 Payment Integration

### Creem Payment Setup

1. Sign up at [Creem](https://creem.io) and get your API key
2. Create products in Creem dashboard
3. Configure webhook URL: `https://your-domain.com/api/pay/callback/creem`
4. Add configuration to `.env.local`:

   ```env
   CREEM_API_KEY=your_api_key
   CREEM_ENV=test  # or production
   CREEM_PRODUCTS={"professional":"prod_xxx","enterprise":"prod_yyy"}
   CREEM_WEBHOOK_SECRET=your_webhook_secret
   ```

### Payment Flow

1. User selects a plan and clicks "Buy Now"
2. System creates payment session and order
3. User completes payment on Creem
4. Webhook updates order status
5. User redirected to success page

---

## 🌐 Internationalization

### Supported Languages

- 🇺🇸 English (en)
- 🇨🇳 Chinese (zh)
- 🇯🇵 Japanese (ja)

### Add New Language

1. Create translation file in `src/i18n/locales/`:

   ```typescript
   // src/i18n/locales/es.ts
   export const esDictionary = {
     home: { /* ... */ },
     auth: { /* ... */ },
     // ...
   };
   ```

2. Update `src/i18n/index.ts` to include new language

3. Create route directory: `src/app/[locale]/es/`

---

## 📊 Database Schema

### Users Table
- id, email, name, image, role, etc.
- Automatically managed by Better Auth

### Orders Table
- id, user_id, order_number, status, amount, currency
- Supports payment tracking and status management

### Order Items Table
- id, order_id, product_id, quantity, price
- Supports multiple items per order

---

## 🧪 Testing

### Test Order Flow

```bash
# Run order flow test script
npx tsx src/lib/orders/test-flow.ts
```

---

## 📚 Documentation

- [Implementation Summary](./docs/IMPLEMENTATION_SUMMARY.md)
- [Order Flow](./docs/ORDER_FLOW.md)
- [Payment Integration](./docs/PAYMENT_INTEGRATION.md)
- [Pricing System](./docs/PRICING.md)
- [I18N Guide](./docs/I18N_COMPLETION_SUMMARY.md)

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS 4
- **Authentication**: Better Auth
- **Database**: PostgreSQL with Drizzle ORM
- **Payment**: Creem
- **Deployment**: Vercel, Railway, or self-hosted

---

## 🤝 Contributing

Contributions are welcome! Please follow the guidelines in [AGENTS.md](./AGENTS.md).

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Better Auth](https://better-auth.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Creem](https://creem.io/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Built with ❤️ using Next.js**
