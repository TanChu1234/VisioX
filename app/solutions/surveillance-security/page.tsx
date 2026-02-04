"use client";

import SolutionLayout from "@/components/SolutionLayout";
import { Shield, Eye, AlertTriangle, Search, Lock, UserX } from "lucide-react";

export default function SecurityPage() {
  return (
    <SolutionLayout
      colorTheme="orange"
      hero={{
        badge: "Surveillance & Security",
        title: (
          <>
            AI-Driven Security for{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Complete Peace of Mind
            </span>
          </>
        ),
        description: "Proactive threat detection and real-time alerts. Transform your existing CCTV infrastructure into an intelligent, autonomous security network.",
        image: "/solutions/surveillance.png",
        stats: [
          { label: "False Alarm Reduction", value: "95%" },
          { label: "Alert Response", value: "<1 Second" },
          { label: "Uptime Guaranteed", value: "99.99%" }
        ],
        ctaButtons: {
          primary: { text: "Secure My Facility", href: "/demo" },
          secondary: { text: "Security Audit", href: "/contact" }
        }
      }}
      capabilities={{
        title: "Advanced Protection",
        description: "Beyond simple recording—intelligent analysis for critical infrastructure.",
        items: [
          {
            title: "Intrusion Detection",
            description: "Virtual tripwires and perimeter zones with instant human/vehicle classification.",
            icon: <UserX className="w-6 h-6" />
          },
          {
            title: "Behavioral Analysis",
            description: "Detect suspicious patterns like loitering, running, or erratic movement in restricted areas.",
            icon: <Eye className="w-6 h-6" />
          },
          {
            title: "Weapon Detection",
            description: "Real-time identification of firearms and dangerous objects for immediate emergency response.",
            icon: <Shield className="w-6 h-6" />
          },
          {
            title: "Object Tracking",
            description: "Multi-camera handoff to follow subjects of interest across large complexes autonomously.",
            icon: <Search className="w-6 h-6" />
          }
        ]
      }}
      useCases={{
        title: "Security Projects",
        description: "Real-world implementations in high-security environments.",
        items: [
          {
            title: "Mass Transit Perimeter Security",
            tech: "Perimeter Protection",
            description: "Automated monitoring of 15km of rail tracks to prevent trespassing and theft.",
            image: "/solutions/use-cases/rail-security.png",
            metric: "90% Cost Saving"
          },
          {
            title: "Public Space Threat Detection",
            tech: "AI Surveillance",
            description: "City-wide weapon detection and crowd density monitoring for major public events.",
            image: "/solutions/use-cases/city-security.png",
            metric: "Real-time Alerts"
          },
          {
            title: "Logistics Hub Access Control",
            tech: "LPR & ID",
            description: "Automated gate entry using license plate recognition and driver face verification.",
            image: "/solutions/use-cases/gate-security.png",
            metric: "3x Faster Entry"
          }
        ]
      }}
      cta={{
        icon: <Lock className="w-full h-full" />,
        title: "Enhance Your Security Infrastructure",
        description: "Upgrade your legacy surveillance system with state-of-the-art AI capabilities.",
        buttons: {
          primary: { text: "Request a Demo", onClick: () => window.location.href = '/demo' },
          secondary: { text: "Contact an Expert", onClick: () => window.location.href = '/contact' }
        }
      }}
    />
  );
}
