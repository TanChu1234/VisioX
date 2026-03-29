# Feature Specification: Visiox Platform Core

**Feature Branch**: `001-platform-core`  
**Created**: 2026-03-12  
**Status**: Draft  
**Input**: User description: "Make web like roboflow. Make the platform easy to scale up and mantains"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Dataset Intake & Management (Priority: P1)

As a computer vision engineer, I want to upload hundreds of images and organize them into datasets so I can manage my training data efficiently.

**Why this priority**: Without data management, annotation and training are impossible. This is the foundation of the platform.

**Independent Test**: Can be tested by uploading a zip or folder of images, verifying they appear in the UI with correct metadata, and can be categorized.

**Acceptance Scenarios**:
1. **Given** a user is on the dashboard, **When** they drag and drop a folder of images, **Then** the system should batch upload them and display progress.
2. **Given** an uploaded dataset, **When** the user searches for specific image filenames, **Then** the results should update instantly.

---

### User Story 2 - Precision Annotation Suite (Priority: P1)

As a labeler, I want to draw bounding boxes and polygons on images so that I can provide ground truth for object detection models.

**Why this priority**: Annotation is the core value proposition of a Roboflow-like tool.

**Independent Test**: Can be tested by opening an image in the "Editor", drawing a box, and verifying the coordinates are saved correctly in the backend.

**Acceptance Scenarios**:
1. **Given** an open image, **When** the user clicks and drags, **Then** a bounding box should follow the cursor and snap to pixels.
2. **Given** an existing annotation, **When** the user double-clicks, **Then** they should be able to edit the class label.

---

### User Story 3 - Dataset Versioning & Snapshots (Priority: P2)

As a researcher, I want to create "Snapshots" of my dataset at different points in time so I can reproduce my training runs accurately.

**Why this priority**: Critical for "scaling up" and professional workflows where traceability is required.

**Independent Test**: Can be tested by creating a snapshot, modifying the original dataset, and verifying the snapshot remains unchanged.

**Acceptance Scenarios**:
1. **Given** a dataset with 100 labeled images, **When** the user clicks "Create Version", **Then** a read-only copy is archived with a unique version ID.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST support bulk image uploads (JPG, PNG, WEBP).
- **FR-002**: System MUST provide a Canvas-based annotation tool supporting Bounding Boxes and Polygons.
- **FR-003**: System MUST support "Projects" to isolate different computer vision tasks.
- **FR-004**: System MUST allow exporting annotations in COCO, YOLO, and Pascal VOC formats.
- **FR-005**: System MUST maintain an audit log of all label changes for quality control.

### Key Entities

- **Project**: The top-level container (e.g., "Autonomous Vehicle Detection").
- **Dataset**: A collection of images within a project.
- **Image**: Individual asset with metadata (dimensions, format, upload date).
- **Annotation**: Geometry data (points/rects) linked to an image and a class.
- **Class/Label**: The category name (e.g., "Car", "Tree").

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Large image gallery (1000+ items) must scroll at 60fps without lag.
- **SC-002**: Annotation saving must happen in <200ms after user action.
- **SC-003**: Export generation for 1000 images must complete in under 30 seconds.
- **SC-004**: New team members should be able to set up a project and start labeling in under 5 minutes.
