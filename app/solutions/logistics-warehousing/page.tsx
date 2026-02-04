"use client";

import SolutionLayout from "@/components/SolutionLayout";
import { Truck, Package, Layout, ShieldAlert, BarChart, Box } from "lucide-react";

export default function LogisticsPage() {
  return (
    <SolutionLayout
      colorTheme="orange"
      hero={{
        badge: "Logistics & Warehousing",
        title: (
          <>
            Synchronized Logistics with{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Visual Intelligence
            </span>
          </>
        ),
        description: "Eliminate shipping errors, prevent parcel damage, and optimize space utilization with automated cargo monitoring systems.",
        image: "/solutions/logistics.png",
        stats: [
          { label: "Claims Reduction", value: "85%" },
          { label: "Loading Speed", value: "+30%" },
          { label: "Inventory Accuracy", value: "99.9%" }
        ],
        ctaButtons: {
          primary: { text: "Optimize My Hub", href: "/demo" },
          secondary: { text: "Logistics Data Sheet", href: "/contact" }
        }
      }}
      capabilities={{
        title: "Logistics Intelligence",
        description: "Full visibility from the docking bay to the final delivery.",
        items: [
          {
            title: "Parcel Inspection",
            description: "Automatically detect crushed corners, open seals, or leaked contents on high-speed sorting belts.",
            icon: <Package className="w-6 h-6" />
          },
          {
            title: "Pallet Optimization",
            description: "3D visual analysis of pallets to identify under-utilized space and improve load balancing.",
            icon: <Layout className="w-6 h-6" />
          },
          {
            title: "Safety Perimeters",
            description: "Real-time personnel detection for forklifts and automated machinery to prevent workplace injuries.",
            icon: <ShieldAlert className="w-6 h-6" />
          },
          {
            title: "Inventory Auditing",
            description: "Drone or vehicle-mounted cameras that scan shelf tags and count items 10x faster than manual counts.",
            icon: <BarChart className="w-6 h-6" />
          }
        ]
      }}
      useCases={{
        title: "Warehouse Projects",
        description: "Deployments streamlining global supply chains.",
        items: [
          {
            title: "Automated Parcel Audit",
            industry: "Express Delivery",
            description: "Real-time quality checks for 50k+ packages per day on sorting lines.",
            image: "/solutions/use-cases/parcel-inspection.png",
            metric: "90% Error Reduction"
          },
          {
            title: "Smart Forklift Safety",
            industry: "Distribution",
            description: "Retrofitting 50 forklifts with AI collision-avoidance that alerts drivers to nearby pedestrians.",
            image: "/solutions/use-cases/forklift-safety.png",
            metric: "Zero Incidents"
          },
          {
            title: "3D Pallet Dimensioning",
            industry: "Air Cargo",
            description: "Instant volume calculation for incoming air freight to maximize aircraft belly space.",
            image: "/solutions/use-cases/pallet-3d.png",
            metric: "15% More Cargo"
          }
        ]
      }}
      cta={{
        icon: <Truck className="w-full h-full" />,
        title: "Scale Your Logistics Operation",
        description: "Implement visual intelligence to overcome labor shortages and increase throughput.",
        buttons: {
          primary: { text: "Speak to an Expert", onClick: () => window.location.href = '/demo' },
          secondary: { text: "Get Deployment Guide", onClick: () => window.location.href = '/contact' }
        }
      }}
    />
  );
}
