# VisioX — Intelligent Computer Vision Workspace

VisioX is a high-fidelity platform for managing computer vision workflows, from data annotation to edge deployment. Inspired by modern CV hubs like Roboflow, it provides a workspace-dense environment with a focus on performance and precision.

## ✨ Features

- **Unified Workspace Hub**: Sidebar navigation across Datasets, Workflows, Training, and Deployment.
- **Visual Workflow Builder**: Interactive node-based canvas for designing CV pipelines.
- **Dataset Intelligence**: High-density image libraries with class distribution analytics.
- **Live Training Monitor**: Real-time metric visualization (mAP, Loss, Accuracy) with hardware monitoring.
- **Pro Deployment Dashboard**: Instant REST/WebSocket endpoints with auto-generated code snippets.

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Branch Structure

| Branch | Description |
|---|---|
| `main` | Stable production branch |
| `001-roboflow-ui` | Active feature: Roboflow-inspired high-fidelity UI |

## 📁 Project Structure

```
visiox-ui/
├── app/                  # Next.js App Router pages
│   ├── products/         # Product hub pages (Workflows, etc.)
│   ├── solutions/        # Solutions pages by industry
│   ├── login/            # Authentication pages
│   └── contact/          # Contact page
├── components/           # Shared UI components
├── specs/                # Feature specifications and plans
│   └── 001-roboflow-ui/  # Active feature spec, plan, and tasks
└── public/               # Static assets
```
