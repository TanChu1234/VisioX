# Implementation Plan: Roboflow-Inspired High-Fidelity UI

**Feature Branch**: `001-roboflow-ui`  
**Spec Link**: [spec.md](./spec.md)  
**Target Completion**: 2026-03-24  

## Tech Stack & Architecture

- **Language/Version**: TypeScript 5.0+  
- **Framework**: Next.js 16 (App Router)  
- **Primary Dependencies**: Tailwind CSS 4, Framer Motion 12, Lucide React (for icons)  
- **Storage**: N/A (Frontend-only mockup for this iteration)  
- **Project Type**: Web Application  

## Component Architecture

### 1. Workspace Layout (`@/components/layout`)
- **MainSidebar**: A dense, dark-themed sidebar with collapsible categories and active-state animations.
- **TopNav**: breadcrumbs and profile/settings.
- **BlueprintGridCanvas**: A background component with a dot-matrix CSS pattern.
- **NodeCanvas**: A specialized component using Framer Motion `drag` and SVG paths for dynamic workflow mapping.

### 2. Hub Dashboards (`@/app/datasets`, `@/app/workflows`)
- **FeatureGrid**: Responsive grid with premium card hover effects.
- **MetricCard**: Glassmorphic stats containers with neon value displays.

### 3. Interactive Tools (`@/components/tools`)
- **AnnotatorCanvas**: A focus-first canvas for image inspection.
- **NodeBuilder**: Visual "bubbles" connected by SVG lines (Framer Motion).

## Step-by-Step Task List

### Phase 1: Foundation & Layout (P1)
- [ ] **Task 1.1**: Set up `@/components/Sidebar.tsx` with Roboflow-style density.
- [ ] **Task 1.2**: Implement `@/components/BlueprintGrid.tsx` for visual backgrounds.
- [ ] **Task 1.3**: Update `app/layout.tsx` to wrap the app in the new Workspace structure.

### Phase 2: Feature Hubs (P2)
- [ ] **Task 2.1**: Build the "Workflow Builder" page (`app/workflows/page.tsx`) with animated node cards.
- [ ] **Task 2.2**: Build the "Dataset Library" view (`app/datasets/page.tsx`) with high-fidelity grid.

### Phase 3: High-Fidelity Polish (P3)
- [ ] **Task 3.1**: Add neon accents and Framer Motion transitions between views.
- [ ] **Task 3.2**: Implement "Magic Hover" effects on all primary CTAs.

## Key Constraints & Risks

- **Constraint**: Must adhere to Visiox UI Constitution (Safe areas, accessibility).
- **Risk**: Performance of complex Framer Motion transitions on high-density pages.
- **Risk**: Visual consistency between different "Hubs" (Train vs. Annotate).

## Success Metrics

1. **SC-001**: 100% of pages display a professional, "Builder-Grade" aesthetic.
2. **SC-002**: Sidebar navigation is intuitive and correctly reflects active route.
