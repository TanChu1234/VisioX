# Implementation Plan: Visiox Infrastructure Foundations

**Spec Reference**: [core-platform.md](../specs/core-platform.md)
**Status**: Proposed

## Technical Direction

To ensure **scalability** and **maintainability**, we will adopt a "Clean Architecture" pattern with a focus on:
1. **Server-Side Image Optimization**: Using Next.js Image component and potentially a dedicated image proxy.
2. **Local-First State**: Using React state with optimistic updates for annotation speed, syncing to a scalable backend (Supabase or similar).
3. **Canvas Engine**: Utilizing `react-konva` or a custom lightweight `HTML5 Canvas` wrapper for high-performance annotations.

## Work Phases

### Phase 1: Core Layout & Data Plumbing (P1)
- [ ] Initialize Next.js project structure with `@/components`, `@/lib`, `@/hooks`.
- [ ] Implement `ImageGrid` with virtualization (using `react-window` or similar) to handle thousands of assets.
- [ ] Setup the Upload service (client-side chunking for large folders).

### Phase 2: Annotation Canvas (P1)
- [ ] Build the `AnnotationEditor` component.
- [ ] Implement Bounding Box logic (interaction, scaling, translation).
- [ ] Implement Polygon logic (multi-point drawing).

### Phase 3: Project & Versioning Logic (P2)
- [ ] Setup the relational schema for Projects -> Datasets -> Snapshots.
- [ ] Implement "Snapshot" logic (atomic copy of metadata).

### Phase 4: Export Engine (P2)
- [ ] Create transformation utilities for COCO/YOLO formats.
- [ ] Build the export download UI.

## Scalability Tactics
- **Database**: Use indexing on `project_id` and `image_id` for O(1) lookups.
- **Frontend**: Use `React.memo` and `useCallback` on annotation elements to prevent unnecessary canvas re-renders.
- **Maintenance**: Atomic components in `components/ui` for consistent design.
