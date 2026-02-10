"use client";

import SolutionLayout from "@/components/SolutionLayout";
import { Trophy, Play, Users, Target, BarChart3, Presentation } from "lucide-react";

export default function SportsPage() {
    return (
        <SolutionLayout
            colorTheme="orange"
            hero={{
                badge: "Entertainment & Sports",
                title: (
                    <>
                        Dynamic Analytics for the{" "}
                        <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                            Next-Gen Fan Experience
                        </span>
                    </>
                ),
                description: "Revolutionize sports broadcasting and training with real-time player tracking, automated highlight generation, and immersive AR overlays.",
                image: "/solutions/entertainment.png",
                stats: [
                    { label: "Tracking Latency", value: "<50ms" },
                    { label: "Production Speed", value: "5x Faster" },
                    { label: "Fan Engagement", value: "+40%" }
                ],
                ctaButtons: {
                    primary: { text: "Power My Broadcast", href: "/demo" },
                    secondary: { text: "Sports AI Specs", href: "/contact" }
                }
            }}
            applications={{
                title: "Sports Intelligence",
                description: "Turning every frame into a data point for coaches and fans alike.",
                items: [
                    {
                        title: "Real-time Player Tracking",
                        description: "Track speed, distance, and positioning for every athlete on the field with sub-centimeter accuracy.",
                        icon: <Target className="w-6 h-6" />
                    },
                    {
                        title: "Automated Highlights",
                        description: "AI-powered detection of key moments (goals, fouls, home runs) to generate instant social media clips.",
                        icon: <Play className="w-6 h-6" />
                    },
                    {
                        title: "Fan Experience",
                        description: "In-stadium AR paths and queue monitoring to improve fan flow and food/beverage sales.",
                        icon: <Users className="w-6 h-6" />
                    },
                    {
                        title: "Performance Analytics",
                        description: "Deep-dive biomechanical analysis for professional training and injury prevention.",
                        icon: <BarChart3 className="w-6 h-6" />
                    },
                    {
                        title: "Football Tactical Analysis",
                        description: "Real-time tactical overlays for live broadcasts showing formation shifts and passing lanes.",
                        icon: <Presentation className="w-6 h-6" />,
                        image: "/solutions/use-cases/football-ai.png",
                        metric: "99% Tracking Accuracy",
                        tag: "European Leagues"
                    },
                    {
                        title: "Automated Tennis Court Audit",
                        description: "Instant 'In/Out' calls and ball trajectory mapping using multi-camera synchronization.",
                        icon: <Trophy className="w-6 h-6" />,
                        image: "/solutions/use-cases/tennis-ai.png",
                        metric: "<10ms Decision",
                        tag: "Grand Slams"
                    },
                    {
                        title: "Immersive Home Viewing",
                        description: "Interactive AR player stats available to home viewers via mobile app synchronized with live feed.",
                        icon: <Users className="w-6 h-6" />,
                        image: "/solutions/use-cases/basketball-ar.png",
                        metric: "+30% App Retention",
                        tag: "Basketball"
                    }
                ]
            }}
            cta={{
                icon: <Trophy className="w-full h-full" />,
                title: "Bring AI to the Arena",
                description: "Talk to our entertainment specialists about your next big production.",
                buttons: {
                    primary: { text: "Book a Trial", onClick: () => window.location.href = '/demo' },
                    secondary: { text: "Contact Partnership", onClick: () => window.location.href = '/contact' }
                }
            }}
        />
    );
}
