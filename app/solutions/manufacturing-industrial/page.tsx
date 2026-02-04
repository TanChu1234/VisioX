"use client";

import SolutionLayout from "@/components/SolutionLayout";
import { Factory, ShieldCheck, BarChart3, Settings, ShieldAlert, PackageCheck } from "lucide-react";

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
        description: "Boost yield, ensure safety, and automate quality control with AI-powered visual inspection systems designed for high-speed production lines.",
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
      capabilities={{
        title: "Industrial Intelligence",
        description: "Seamlessly integrate computer vision into your existing PLC and SCADA systems.",
        items: [
          {
            title: "Quality Inspection",
            description: "Detect microscopic defects, surface scratches, and dimensional inaccuracies at line speed.",
            icon: <ShieldCheck className="w-6 h-6" />
          },
          {
            title: "PPE Monitoring",
            description: "Guarantee workspace safety by automatically detecting helmets, vests, and eyewear.",
            icon: <ShieldAlert className="w-6 h-6" />
          },
          {
            title: "Part Counting",
            description: "Automate inventory tracking and identify production bottlenecks in real-time.",
            icon: <BarChart3 className="w-6 h-6" />
          },
          {
            title: "Maintenance",
            description: "Predict equipment failure by monitoring thermal patterns and mechanical vibration visually.",
            icon: <Settings className="w-6 h-6" />
          }
        ]
      }}
      useCases={{
        title: "Live Deployments",
        description: "How leading manufacturers use VisioX to stay competitive.",
        items: [
          {
            title: "High-Speed Electronics Assembly",
            industry: "Electronics",
            description: "Verifying component placement and solder quality on 1,000+ PCBs per hour with sub-millimeter precision.",
            image: "/solutions/use-cases/pcb-inspection.png",
            metric: "99.9% Yield Rate"
          },
          {
            title: "Heavy Machinery Safety",
            industry: "Automotive",
            description: "Real-time safety perimeters around robotic welding cells to prevent human-machine collisions.",
            image: "/solutions/use-cases/factory-safety.png",
            metric: "Zero Accidents"
          },
          {
            title: "Pharma Packaging Audit",
            industry: "Pharmaceutical",
            description: "Automated verification of blister pack contents and expiration date legibility.",
            image: "/solutions/use-cases/pharma-audit.png",
            metric: "ISO 13485 Compliant"
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
