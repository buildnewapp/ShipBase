# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` hosts the Next.js App Router entrypoints; group features in subfolders (e.g. `src/app/(dashboard)/page.tsx`) and colocate supporting components nearby.
- Shared styles belong in `src/app/globals.css`; extend the embedded Tailwind theme tokens instead of hardcoding hex values in components.
- Static assets (logos, favicons, mock data) live under `public/` and are referenced via `/asset-name.ext`.
- Keep project-wide configuration in the root (`next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `tsconfig.json`) and document any changes in pull requests.

## Build, Test, and Development Commands
- `pnpm dev` launches the turbopack-powered dev server on http://localhost:3000.
- `pnpm build` creates an optimized production bundle; run before publishing infra changes.
- `pnpm start` serves the production build locally for smoke-testing.
- `pnpm lint` runs the shared ESLint profile; confirm a clean run before opening a pull request.
- Prefer `pnpm` for dependency management; sync lockfile updates with the change that requires them.

## Coding Style & Naming Conventions
- TypeScript and React 19 are the defaults; author components as typed functions with hooks over class patterns.
- Use two-space indentation, PascalCase for component files, camelCase for variables, and kebab-case for route or asset folders.
- Favor Tailwind utility classes and design tokens for styling; avoid ad-hoc inline styles except for computed values.
- Remove dead imports and prefer lightweight modules over deep barrel files to keep turbopack rebuilds fast.

## Testing Guidelines
- Automated tests are not configured yet; when adding a suite, define `pnpm test` and keep specs in `src/__tests__` or beside the component as `*.test.tsx`.
- Write at least happy- and edge-case coverage for new UI work using React Testing Library or Playwright, and document manual QA steps in the pull request until tooling lands.

## Commit & Pull Request Guidelines
- Follow the existing history by writing short, imperative commit subjects (e.g. “Add onboarding hero”); group related changes rather than batching unrelated edits.
- Every pull request should include a succinct summary, relevant issue links, screenshots or recordings for visual changes, and a checklist of `pnpm lint`/`pnpm build` results.
- Flag migrations or environment impacts in both the PR description and `AGENTS.md` so downstream contributors can react quickly.

## Environment & Configuration Tips
- Store secrets in `.env.local`; never commit environment files or production keys.
- Mirror new environment variables in `next.config.ts` and note default values in the PR to keep deployments reproducible.
- Better Auth expects the following variables during development and CI:
  - `BETTER_AUTH_SECRET` — session signing secret (`openssl rand -base64 32`).
  - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` (optional, enables Google OAuth).
  - `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` (optional, enables GitHub OAuth).
  - `NEXT_PUBLIC_AUTH_BASE_URL` (optional override for client fetches when the API runs on a different origin).
  - `MAGIC_LINK_WEBHOOK_URL` (optional POST endpoint to deliver magic links; otherwise links log to STDOUT).
- Sitemap generation requires:
  - `NEXT_PUBLIC_BASE_URL` — full base URL for sitemap generation (required in production).

这是一个NEXTJS SAAS模板

请使用中文回答所有问题。
