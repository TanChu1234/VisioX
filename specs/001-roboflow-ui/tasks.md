# Feature Tasks: Roboflow-Inspired High-Fidelity UI

**Feature Branch**: `001-roboflow-ui`  
**Spec Link**: [spec.md](./spec.md)  
**Plan Link**: [plan.md](./plan.md)  

## Phase 1: Foundation & Layout (P1)
- [ ] **Task 1: Design System & Tokens**  (Priority: P1)
  - [ ] Define purple (`#6735E0`) as a Tailwind color token.
  - [ ] Create `BlueprintGrid` CSS pattern.
- [ ] **Task 2: Persistent Side Navigation** (Priority: P1)
  - [ ] Build `@/components/Sidebar.tsx`.
  - [ ] Integrate with Next.js router for active states.
- [ ] **Task 3: Global Sidebar Integration** (Priority: P1)
  - [ ] Update `app/layout.tsx` to include `Sidebar`.

## Phase 2: Feature Hubs (P2)
- [ ] **Task 4: Workflow Hub Page** (Priority: P2)
  - [ ] Build node-style animated cards in `app/workflows/page.tsx`.
- [ ] **Task 5: Dataset Dashboard** (Priority: P2)
  - [ ] Implement `app/datasets/page.tsx` with high-density grid cards.

## Phase 3: High-Fidelity Polish (P3)
- [ ] **Task 6: Framer Motion Master Class** (Priority: P3)
  - [ ] Add `AnimatePresence` to main page transitions.
- [ ] **Task 7: Neon Polish & Accessibility** (Priority: P3)
  - [ ] Ensure `:focus-visible` compliance.
  - [ ] Add neon pink (`#FF00FF`) accents to "Annotate" mockups.

## Final Review
- [ ] **Verification**: Validate against Visiox UI Constitution.
- [ ] **Demonstration**: Build a recorded walkthrough of the "New Workspace".
