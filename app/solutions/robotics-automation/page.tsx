"use client";

import SolutionLayout from "@/components/SolutionLayout";
import { Bot, Cpu, Move, Zap, Target } from "lucide-react";

export default function RoboticsPage() {
  return (
    <SolutionLayout
      colorTheme="orange"
      hero={{
        badge: "Robotics & Automation",
        title: (
          <>
            Autonomous Vision for the{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Robotic Workforce
            </span>
          </>
        ),
        description: "Enable robots to see, navigate, and interact with complex environments using high-precision 3D vision and real-time AI.",
        image: "/solutions/robotics.png",
        stats: [
          { label: "Picking Speed", value: "+75%" },
          { label: "Navigation Uptime", value: "99.99%" },
          { label: "Error Margin", value: "<0.1mm" }
        ],
        ctaButtons: {
          primary: { text: "Power My Robots", href: "/demo" },
          secondary: { text: "Robotics SDK Docs", href: "/contact" }
        }
      }}
      applications={{
        title: "Robotic Intelligence",
        description: "Providing the 'eyes' and 'brain' for advanced automated systems.",
        items: [
          {
            title: "Smart Bin Picking",
            description: "Identify and pick specific parts from disorganized, overlapping piles with extreme precision.",
            icon: <Target className="w-6 h-6" />
          },
          {
            title: "AMR Navigation",
            description: "Real-time obstacle avoidance and dynamic path planning for mobile service and warehouse robots.",
            icon: <Move className="w-6 h-6" />
          },
          {
            title: "Visual Servoing",
            description: "Real-time feedback loops for robotic arms to perform delicate tasks like micro-assembly and soldering.",
            icon: <Cpu className="w-6 h-6" />
          },
          {
            title: "Quality Assurance",
            description: "Instant verification of robotic tasks (e.g., screw torque, glue alignment) directly at the point of assembly.",
            icon: <Zap className="w-6 h-6" />
          },
          {
            title: "E-commerce Fulfillment",
            description: "Autonomous robots picking 1,200 unique items per hour across a 500k sq. ft. warehouse.",
            icon: <Zap className="w-6 h-6" />,
            image: "/solutions/use-cases/robot-picking.png",
            metric: "1,200 picks/hour",
            tag: "Logistics"
          },
          {
            title: "PCB Micro-Assembly",
            description: "Visual guidance for high-speed placement of capacitors and chips on multi-layer boards.",
            icon: <Cpu className="w-6 h-6" />,
            image: "/solutions/use-cases/robot-circuit.png",
            metric: "99.9% Precision",
            tag: "Electronics"
          },
          {
            title: "Hospital Service Robots",
            description: "Autonomous delivery of meals and linens through crowded hospital corridors without human intervention.",
            icon: <Bot className="w-6 h-6" />,
            image: "/solutions/use-cases/hospital-robot.png",
            metric: "24/7 Autonomy",
            tag: "Medical"
          }
        ]
      }}
      cta={{
        icon: <Bot className="w-full h-full" />,
        title: "Bring Your Robots to Life",
        description: "Integrate VisioX's vision platform with your robotic hardware today.",
        buttons: {
          primary: { text: "Scale Automation", onClick: () => window.location.href = '/demo' },
          secondary: { text: "Developer Guide", onClick: () => window.location.href = '/contact' }
        }
      }}
    />
  );
}
