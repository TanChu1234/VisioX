"use client";

import SolutionLayout from "@/components/SolutionLayout";
import {
  Factory,
  ShieldCheck,
  Gauge,
  Lightbulb,
  Plug,
  Search,
  ScanText,
  Fish,
  Container
} from "lucide-react";

export default function ManufacturingPage() {
  return (
    <SolutionLayout
      colorTheme="orange"
      hero={{
        badge: "Manufacturing & Industrial",
        title: (
          <>
            Precision Vision for the{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Modern Factory
            </span>
          </>
        ),
        description: "",
        image: "/solutions/manufacturing.png",
        stats: [
          { label: "Defect Reduction", value: "98.5%" },
          { label: "Inspection Speed", value: "<15ms" },
          { label: "ROI Timeline", value: "4 Months" }
        ],
        ctaButtons: {
          primary: { text: "Optimize My Plant", href: "/demo" },
          secondary: { text: "Technical Specs", href: "/contact" }
        }
      }}
      applications={{
        title: "Industrial Intelligence",
        description: "Boost yield, ensure safety, and automate quality control with AI-powered visual inspection systems designed for high-speed production lines.",
        items: [
          {
            title: "PCB Assembly Inspection",
            description: "Verifying component placement and solder quality on 1,000+ PCBs per hour with sub-millimeter precision.",
            icon: <ShieldCheck className="w-6 h-6" />,
          },
          {
            title: "Metal Surface Inspection",
            description: "Detect microscopic defects, scratches, and inconsistencies on metal surfaces at line speed.",
            icon: <Search className="w-6 h-6" />
          },
          {
            title: "Shrimp Classification",
            description: "Automated grading and classification of seafood products by size and quality for food processing.",
            icon: <Fish className="w-6 h-6" />
          },
          {
            title: "Product Label Reading",
            description: "Instant verification of labels, barcodes, and expiration dates using high-speed OCR.",
            icon: <ScanText className="w-6 h-6" />
          },
          {
            title: "Gauge Meter Reading",
            description: "Automated digitization of analog gauge readings for real-time monitoring of legacy equipment.",
            icon: <Gauge className="w-6 h-6" />
          },
          {
            title: "Steel Inventory Management",
            description: "Visual counting and tracking of steel coils, bars, and raw materials in large-scale warehouses.",
            icon: <Container className="w-6 h-6" />
          },
          {
            title: "LED Inspection",
            description: "Quality assurance for LED panels, detecting dead pixels and color uniformity issues.",
            icon: <Lightbulb className="w-6 h-6" />
          },
          {
            title: "Adapter Inspection",
            description: "Visual check of electrical adapters and connectors for pin alignment and housing defects.",
            icon: <Plug className="w-6 h-6" />
          }
        ]
      }}
      cta={{
        icon: <Factory className="w-full h-full" />,
        title: "Ready to Automate Your Inspection?",
        description: "Speak with our industry experts to design a custom vision solution for your production floor.",
        buttons: {
          primary: { text: "Schedule a Site Visit", onClick: () => window.location.href = '/demo' },
          secondary: { text: "Download Brochure", onClick: () => window.location.href = '/contact' }
        }
      }}
    />
  );
}
