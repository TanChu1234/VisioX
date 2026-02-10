"use client";

import SolutionLayout from "@/components/SolutionLayout";
import { ShoppingBag, Users, Zap, Search, LayoutGrid, AlertCircle } from "lucide-react";

export default function RetailPage() {
  return (
    <SolutionLayout
      colorTheme="orange"
      hero={{
        badge: "Retail & Commerce",
        title: (
          <>
            The Intelligent Storefront for the{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Next Generation
            </span>
          </>
        ),
        description: "Boost conversion, prevent loss, and optimize store layout with real-time customer and inventory analytics.",
        image: "/solutions/retail.png",
        stats: [
          { label: "Restock Efficiency", value: "+40%" },
          { label: "Conversion Lift", value: "15%" },
          { label: "Loss Reduction", value: "35%" }
        ],
        ctaButtons: {
          primary: { text: "Optimize My Store", href: "/demo" },
          secondary: { text: "Retail Case Studies", href: "/contact" }
        }
      }}
      applications={{
        title: "Commerce Intelligence",
        description: "Deep insights into shopper behavior and inventory health.",
        items: [
          {
            title: "Shelf Monitoring",
            description: "Detect out-of-stock items and misplaced products in real-time to maximize sales.",
            icon: <LayoutGrid className="w-6 h-6" />
          },
          {
            title: "Customer Heat-mapping",
            description: "Visualize shopper paths and dwell times to optimize store layout and product placement.",
            icon: <Users className="w-6 h-6" />
          },
          {
            title: "Loss Prevention",
            description: "Detect suspicious behavior or un-scanned items at checkout to reduce shrinkage.",
            icon: <AlertCircle className="w-6 h-6" />
          },
          {
            title: "Smart Check-out",
            description: "Enable friction-less shopping with automated product identification and lane-status monitoring.",
            icon: <Zap className="w-6 h-6" />
          },
          {
            title: "Interactive Shelf Management",
            description: "Automated inventory tracking for 500+ SKU pharmacy chains with 99% accuracy.",
            icon: <Search className="w-6 h-6" />,
            image: "/solutions/use-cases/retail-shelf.png",
            metric: "No Stockouts",
            tag: "Inventory AI"
          },
          {
            title: "Boutique Layout Optimization",
            description: "Visual heat-maps led to a 25% increase in seasonal item sales through better placement.",
            icon: <Users className="w-6 h-6" />,
            image: "/solutions/use-cases/retail-heatmap.png",
            metric: "25% Higher Sales",
            tag: "Shopper Analytics"
          },
          {
            title: "Autonomous Grocery Store",
            description: "Full store coverage for 'grab and go' shopping experience with real-time bill generation.",
            icon: <Zap className="w-6 h-6" />,
            image: "/solutions/use-cases/retail-checkout.png",
            metric: "99.2% Bill Accuracy",
            tag: "Edge Vision"
          }
        ]
      }}
      cta={{
        icon: <ShoppingBag className="w-full h-full" />,
        title: "Transform Your Retail Space",
        description: "Start making data-driven decisions that impact your bottom line.",
        buttons: {
          primary: { text: "Get a custom Quote", onClick: () => window.location.href = '/demo' },
          secondary: { text: "View ROI Calculator", onClick: () => window.location.href = '/contact' }
        }
      }}
    />
  );
}
