---
name: visiox-frontend-agent
description: Enforces the premium, light-themed, animated design system of the VisioX UI project when building or modifying React/Next.js components. Use this skill whenever generating frontend code.
---

# VisioX Frontend Engineering Guidelines

When acting as an AI coding assistant on the VisioX repository, you MUST strictly adhere to these specific design, architectural, and aesthetic rules. The project has heavily transitioned from a generic dark mode to a premium, breathable light-theme aesthetic.

## 1. Core Tech Stack
- **Framework**: Next.js 16 (App Router) with React 19.
- **Styling**: Tailwind CSS v4. Do NOT write custom CSS unless absolutely necessary.
- **Animations**: `framer-motion`. Do NOT use raw CSS transitions for complex layout entrances or scroll triggers. Always wrap elements in `<motion.div>` for sophisticated appearances.
- **Icons**: `lucide-react`. Do NOT use standard SVGs or other libraries.
- **Package Manager**: `pnpm` (v10). Always use `pnpm` for installs and scripts.

## 2. Global Aesthetics & Colors
- **The Base**: Use extreme generous whitespace and massive paddings (`py-24`, `px-6`). The primary background is NEVER pure white or pure black. Use off-whites like `bg-[#fcfaf7]` or `bg-stone-50`.
- **Primary Text**: Use `text-stone-900` for primary headings, and `text-stone-500` or `text-stone-600` for body copy. Avoid `#000` or `#333`.
- **Gradients**: Use highly saturated, modern gradients for `span` tags inside Headers.
   - *Example*: `<span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">`
   - *Brand gradient*: `from-[#E66700] via-[#FF7300] to-[#F1A222]`
- **Soft Shadows**: Elements should float beautifully. Use `shadow-xl shadow-stone-200/50` to create luxurious depth rather than generic harsh drop shadows.
- **Rounding**: Heavy radiuses are preferred! Use `rounded-2xl`, `rounded-3xl`, or `rounded-[2.5rem]` for main containers and imagery wrappers. Never use sharp box corners.

## 3. Structural Rules
- **Server vs Client Components**: Next.js 16 does NOT allow `"use client"` and `generateStaticParams()` in the same file. If a page requires both:
  1. Create a separate `*Client.tsx` file (e.g., `DatasetDetailClient.tsx`) with `"use client"` and all interactive logic.
  2. Keep `page.tsx` as a **server component** that exports `generateStaticParams()` and renders the client component, passing params as props.
  3. In Next.js 16, `params` in page components is a `Promise` — always `await` it: `const { id } = await params;`

- **"use client" Directive**: Always add `"use client";` when writing interactive sections or anything requiring `framer-motion` hooks or standard React states. But NEVER in files that export `generateStaticParams`.

- **Layout & Shell**: The root `app/layout.tsx` wraps all pages in `<AuthProvider>` and `<LayoutShell>`. The `LayoutShell` component handles the `<Header />` and `<Footer />` globally.
  - **NEVER** import or render `<Header />` or `<Footer />` inside individual page components, or you will cause a double-render!
  - Use the `<Badge>` component from `@/components/Badge` for section tags/labels.

- **Static Export**: The project uses `output: "export"` in `next.config.mjs` for GitHub Pages deployment. All pages MUST be statically renderable. Do NOT use server-side features like `cookies()`, `headers()`, or API routes.

## 4. Configuration & Deployment
- **Config file**: `next.config.mjs` (NOT `.ts`). It must always include:
  - `output: "export"` — required for static HTML generation into `/out`
  - `images: { unoptimized: true }` — required because GitHub Pages has no image optimization server
  - Automatic `basePath` calculation from `GITHUB_REPOSITORY` env var for CI
- **GitHub Actions**: Two workflows exist:
  - `nextjs-deploy.yml` — Builds and deploys to **GitHub Pages** (main branch only)
  - `deploy.yml` — Deploys to **Vercel** (currently disabled until token is updated, can be triggered manually via `workflow_dispatch`)
- **Remote setup**: `origin` points to `TanChu1234/VisioX` (fork), `upstream` points to `the-visiox/visiox-ui` (original).

## 5. Animation Best Practices
Every new major page section must instantly feel alive when rendering. 
- Use standard fade-up entrances:
  `<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>`
- If rendering lists of cards, stagger the delays: `transition={{ delay: index * 0.1 }}`.
- Image bounds should use "scale up" on hover (`group-hover:scale-105 transition-transform duration-700`).
- For scroll-triggered animations, use `whileInView` with `viewport={{ once: true }}`.

## 6. UI Micro-interactions
- Buttons must scale or translate subtly on hover: `hover:-translate-y-0.5` or `hover:scale-105 active:scale-95`.
- Active interaction links or badges should always include track-widened, bold typography: `text-sm font-bold uppercase tracking-widest`.
- Use `backdrop-blur-md` or `backdrop-blur-xl` on overlays and navigation bars.

## 7. Key Components & Patterns
- **`BlueprintGrid`** — Background grid pattern used on workspace pages (datasets, annotation, etc.)
- **`SolutionPageTemplate`** — Reusable template for industry solution pages
- **`AnnotationEditor`** — Canvas-based image annotation component using `react-konva`
- **`ImageGrid`** — Virtualized image grid for dataset browsing
- **`GenerateVersionSlideover`** — Slide-over panel for dataset version generation
- **`LayoutShell`** — Handles conditional Header/Footer rendering based on route

## 8. File Naming Conventions
- Page components: `page.tsx` (server component when possible)
- Client wrappers: `*Client.tsx` (e.g., `DatasetDetailClient.tsx`, `AnnotateClient.tsx`)
- Shared components: `components/*.tsx`
- Hooks: `hooks/*.ts`
- Utilities: `lib/*.ts` or `lib/*.tsx`
