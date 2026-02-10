"use client";

import SolutionLayout from "@/components/SolutionLayout";
import { Sprout, CloudSun, Target, Tractor, Search, Droplets } from "lucide-react";

export default function AgriculturePage() {
  return (
    <SolutionLayout
      colorTheme="orange"
      hero={{
        badge: "Smart Agriculture",
        title: (
          <>
            Precision Vision for{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Sustainable Farming
            </span>
          </>
        ),
        description: "Maximize yields and minimize chemical usage with AI-powered crop health monitoring and precision spraying systems.",
        image: "/solutions/agriculture.png",
        stats: [
          { label: "Herbicide Savings", value: "80%" },
          { label: "Yield Increase", value: "15%" },
          { label: "Input Efficiency", value: "+30%" }
        ],
        ctaButtons: {
          primary: { text: "Optimize My Farm", href: "/demo" },
          secondary: { text: "Farmer Case Studies", href: "/contact" }
        }
      }}
      applications={{
        title: "Agricultural Intelligence",
        description: "Next-generation tools for the modern grower.",
        items: [
          {
            title: "Weed Identification",
            description: "Differentiate crop from weed in real-time to enable precision spraying only where needed.",
            icon: <Target className="w-6 h-6" />
          },
          {
            title: "Pest & Disease Detection",
            description: "Identify early signs of infestation or fungal infection from drone and field imagery.",
            icon: <Search className="w-6 h-6" />
          },
          {
            title: "Yield Mapping",
            description: "Monitor fruit/grain count and maturity levels to predict harvest timing and volume accurately.",
            icon: <Sprout className="w-6 h-6" />
          },
          {
            title: "Irrigation Optimization",
            description: "Detect water stress in plants visually to automate precision irrigation and conserve water.",
            icon: <Droplets className="w-6 h-6" />
          },
          {
            title: "Autonomous Vineyard Spraying",
            description: "Precision spraying that reduced chemical usage by 75% across 200 acres of vineyard.",
            icon: <Tractor className="w-6 h-6" />,
            image: "/solutions/use-cases/farm-sprayer.png",
            metric: "75% Less Chemical",
            tag: "Grapes"
          },
          {
            title: "Drone Crop Monitoring",
            description: "Weekly drone-based scouting that identified leaf rust 2 weeks faster than manual inspection.",
            icon: <Search className="w-6 h-6" />,
            image: "/solutions/use-cases/farm-drone.png",
            metric: "Faster Detection",
            tag: "Corn & Soy"
          },
          {
            title: "Livestock Health Tracking",
            description: "Automated monitoring of 1,000+ head of cattle to detect early signs of illness or distress.",
            icon: <Sprout className="w-6 h-6" />,
            image: "/solutions/use-cases/cow-monitor.png",
            metric: "100% Tracking",
            tag: "Dairy"
          }
        ]
      }}
      cta={{
        icon: <CloudSun className="w-full h-full" />,
        title: "Empower Your Fields with Vision",
        description: "Build a more sustainable and profitable farm with intelligent vision tools.",
        buttons: {
          primary: { text: "Consult an Expert", onClick: () => window.location.href = '/demo' },
          secondary: { text: "Get Field Data", onClick: () => window.location.href = '/contact' }
        }
      }}
    />
  );
}
