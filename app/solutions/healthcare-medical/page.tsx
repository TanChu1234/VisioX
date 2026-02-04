"use client";

import SolutionLayout from "@/components/SolutionLayout";
import { Activity, Beaker, Heart, Microscope, Stethoscope, ClipboardList } from "lucide-react";

export default function HealthcarePage() {
  return (
    <SolutionLayout
      colorTheme="orange"
      hero={{
        badge: "Healthcare & Medical",
        title: (
          <>
            AI Precision for{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Patient Outcomes
            </span>
          </>
        ),
        description: "Enhance surgical safety, automate diagnostics, and monitor patient health with clinical-grade computer vision solutions.",
        image: "/solutions/healthcare.png",
        stats: [
          { label: "Diagnostic Speed", value: "12x Faster" },
          { label: "Surgical Accuracy", value: "99.9%" },
          { label: "Patient Safety", value: "Zero Falls" }
        ],
        ctaButtons: {
          primary: { text: "Improve Care", href: "/demo" },
          secondary: { text: "Clinical Trial Data", href: "/contact" }
        }
      }}
      capabilities={{
        title: "Clinical Intelligence",
        description: "Advanced visual analysis for high-stakes medical environments.",
        items: [
          {
            title: "Surgical Tool Tracking",
            description: "Automated counting and tracking of instruments in the OR to prevent retained foreign objects.",
            icon: <Stethoscope className="w-6 h-6" />
          },
          {
            title: "Pathology Automation",
            description: "Identify and count cancerous cells or specific biomarkers in high-resolution tissue slides.",
            icon: <Microscope className="w-6 h-6" />
          },
          {
            title: "Fall Prevention",
            description: "Privacy-first visual monitoring to detect and alert staff the moment a patient fall is detected.",
            icon: <Activity className="w-6 h-6" />
          },
          {
            title: "Workflow Audit",
            description: "Monitor hand-hygiene compliance and sterile procedure protocols automatically.",
            icon: <ClipboardList className="w-6 h-6" />
          }
        ]
      }}
      useCases={{
        title: "Medical Projects",
        description: "Technology saving lives in hospitals and labs.",
        items: [
          {
            title: "Oncology Slide Analysis",
            tech: "Histopathology",
            description: "Automated screening of thousands of biopsy slides to prioritize urgent cases for pathologists.",
            image: "/solutions/use-cases/pathology-ai.png",
            metric: "98% Sensitivity"
          },
          {
            title: "Smart Operating Rooms",
            tech: "Computer-Aided Surgery",
            description: "Real-time guidance and instrument verification during complex laparoscopic procedures.",
            image: "/solutions/use-cases/surgical-ai.png",
            metric: "Zero Retained Items"
          },
          {
            title: "Senior Care Fall Detection",
            tech: "Patient Monitoring",
            description: "Non-intrusive monitoring in nursing facilities that has prevented severe injury in 50+ cases.",
            image: "/solutions/use-cases/fall-detection.png",
            metric: "Immediate Response"
          }
        ]
      }}
      cta={{
        icon: <Heart className="w-full h-full" />,
        title: "Advance Your Medical Practice",
        description: "Implement AI-powered vision to support your clinical staff and patients.",
        buttons: {
          primary: { text: "Demo Platform", onClick: () => window.location.href = '/demo' },
          secondary: { text: "Contact Medical Team", onClick: () => window.location.href = '/contact' }
        }
      }}
    />
  );
}
