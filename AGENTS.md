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


这是一个NEXTJS SAAS模板

请使用中文回答所有问题。