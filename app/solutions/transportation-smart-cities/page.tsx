"use client";

import SolutionLayout from "@/components/SolutionLayout";
import { Car, Map, Signal, Building2, Truck, Navigation } from "lucide-react";

export default function TransportationPage() {
  return (
    <SolutionLayout
      colorTheme="orange"
      hero={{
        badge: "Transportation & Smart Cities",
        title: (
          <>
            Intelligent Infrastructure for{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Urban Efficiency
            </span>
          </>
        ),
        description: "Optimize traffic flow, enhance public safety, and maintain infrastructure with AI-powered urban monitoring systems.",
        image: "/solutions/transportation.png",
        stats: [
          { label: "Congestion Reduced", value: "20%" },
          { label: "Recognition Accuracy", value: "99.8%" },
          { label: "Infrastructure ROI", value: "18 Months" }
        ],
        ctaButtons: {
          primary: { text: "Optimize My City", href: "/demo" },
          secondary: { text: "Urban Planning", href: "/contact" }
        }
      }}
      applications={{
        title: "Urban Intelligence",
        description: "Smart data for smarter city planning and real-time response.",
        items: [
          {
            title: "Traffic Flow Analysis",
            description: "Real-time vehicle counting and classification (cars, trucks, buses, cyclists) for signal optimization.",
            icon: <Signal className="w-6 h-6" />,
            // Added image as requested (reusing hero asset for demo due to generation limits)
            image: "/solutions/transportation.png"
          },
          {
            title: "Smart Parking",
            description: "Automated space detection and guidance systems to reduce urban cruising and emissions.",
            icon: <Car className="w-6 h-6" />
          },
          {
            title: "Infrastructure Health",
            description: "Automatic detection of potholes, cracked pavement, and damaged street signs using mobile vision.",
            icon: <Building2 className="w-6 h-6" />
          },
          {
            title: "Mobility Insights",
            description: "Analyze pedestrian patterns and multi-modal transit usage to improve public spaces.",
            icon: <Map className="w-6 h-6" />
          },
          {
            title: "Adaptive Traffic Control",
            description: "AI-linked traffic signals that adjust in real-time based on vehicle density at 40 intersections.",
            icon: <Signal className="w-6 h-6" />,
            image: "/solutions/use-cases/traffic-control.png",
            metric: "15% Lower Emissions",
            tag: "Municipal"
          },
          {
            title: "Automated Toll Processing",
            description: "High-speed license plate recognition for toll bridges operating at 120km/h.",
            icon: <Truck className="w-6 h-6" />,
            image: "/solutions/use-cases/toll-recognition.png",
            metric: "Zero Latency",
            tag: "Highways"
          },
          {
            title: "Public Transit Occupancy",
            description: "Real-time passenger counting for buses to optimize schedules and route frequency.",
            icon: <Navigation className="w-6 h-6" />,
            image: "/solutions/use-cases/bus-occupancy.png",
            metric: "30% Efficiency Gain",
            tag: "Transit"
          }
        ]
      }}
      cta={{
        icon: <Navigation className="w-full h-full" />,
        title: "Build the Future of Urban Mobility",
        description: "Join leading cities in implementing intelligent visual infrastructure.",
        buttons: {
          primary: { text: "Consultation", onClick: () => window.location.href = '/demo' },
          secondary: { text: "Technical Papers", onClick: () => window.location.href = '/contact' }
        }
      }}
    />
  );
}
