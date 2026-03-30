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

## 2. Global Aesthetics & Colors
- **The Base**: Use extreme generous whitespace and massive paddings (`py-24`, `px-6`). The primary background is NEVER pure white or pure black. Use off-whites like `bg-[#fcfaf7]` or `bg-stone-50`.
- **Primary Text**: Use `text-stone-900` for primary headings, and `text-stone-500` or `text-stone-600` for body copy. Avoid `#000` or `#333`.
- **Gradients**: Use highly saturated, modern gradients for `span` tags inside Headers.
   - *Example*: `<span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">`
- **Soft Shadows**: Elements should float beautifully. Use `shadow-xl shadow-stone-200/50` to create luxurious depth rather than generic harsh drop shadows.
- **Rounding**: Heavy radiuses are preferred! Use `rounded-2xl`, `rounded-3xl`, or `rounded-[2.5rem]` for main containers and imagery wrappers. Never use sharp box corners.

## 3. Structural Rules
- **"Client Components"**: Always add `"use client";` when writing interactive sections or anything requiring `framer-motion` hooks or standard React states.
- **Footers**: The `Footer` component is globally managed inside the main `app/layout.tsx` (via `LayoutShell`). **NEVER** import or render `<Footer />` inside individual page components, or you will cause a double-render!

## 4. Animation Best Practices
Every new major page section must instantly feel alive when rendering. 
- Use standard fade-up entrances:
  `<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>`
- If rendering lists of cards, stagger the delays: `transition={{ delay: index * 0.1 }}`.
- Image bounds should use "scale up" on hover (`group-hover:scale-105 transition-transform duration-700`).

## 5. UI Micro-interactions
- Buttons must scale or translate subtly on hover: `hover:-translate-y-0.5`.
- Active interaction links or badges should always include track-widened, bold typography: `text-sm font-bold uppercase tracking-widest`.
