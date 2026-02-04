"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
    CheckCircle2,
    Settings2,
    ShieldAlert,
    Cpu,
    ArrowRight
} from "lucide-react";

const capabilities = [
    {
        title: "Defect Detection",
        description: "Identify scratches, cracks, or malformations in real-time with sub-millimeter precision.",
        icon: <ShieldAlert className="w-8 h-8" />
    },
    {
        title: "Assembly Verification",
        description: "Ensure every component is correctly placed and secured in complex assembly lines.",
        icon: <Settings2 className="w-8 h-8" />
    },
    {
        title: "PPE Compliance",
        description: "Automatically monitor safety gear usage to maintain a secure working environment.",
        icon: <CheckCircle2 className="w-8 h-8" />
    },
    {
        title: "Predictive Maintenance",
        description: "Analyze visual cues of machine wear and tear to prevent costly downtime.",
        icon: <Cpu className="w-8 h-8" />
    }
];

const useCases = [
    {
        title: "PCB Soldering Inspection",
        description: "Automated inspection of BGA and surface mount components for soldering defects.",
        image: "/solutions/usecases/pcb-inspection.jpg"
    },
    {
        title: "Automotive Body Paint",
        description: "Detection of dust, orange peel, and color inconsistencies on vehicle bodies.",
        image: "/solutions/usecases/car-paint.jpg"
    },
    {
        title: "Food Quality Grading",
        description: "Sorting produce by size, color, and ripeness with high-speed vision systems.",
        image: "/solutions/usecases/food-grading.jpg"
    }
];

const stats = [
    { value: "99.9%", label: "Accuracy" },
    { value: "45%", label: "Faster" },
    { value: "30%", label: "Cost Reduction" }
];

export default function ManufacturingPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section - Full screen with large image */}
            <section className="relative h-screen flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/solutions/manufacturing-industrial.jpg"
                        alt="Industrial Vision System"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6"
                    >
                        Manufacturing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl font-light"
                    >
                        Precision Vision for Modern Industry
                    </motion.p>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-white rounded-full mt-2" />
                    </div>
                </div>
            </section>

            {/* Stats Section - Tesla style simple stats */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-3 gap-8 text-center">
                        {stats.map((stat, i) => (
                            <div key={i}>
                                <h2 className="text-4xl md:text-6xl font-light mb-2">{stat.value}</h2>
                                <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-light mb-8 leading-relaxed">
                        Eliminate human error and maximize production efficiency with AI-powered
                        inspection systems that see what the eye misses.
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-block border-2 border-white px-12 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Capabilities Grid - Large images with overlay text */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-light mb-16">Core Capabilities</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {capabilities.map((item, i) => (
                            <div
                                key={i}
                                className="group relative aspect-[16/10] overflow-hidden cursor-pointer"
                            >
                                {/* Background placeholder - replace with actual images */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />

                                {/* Content */}
                                <div className="relative h-full p-12 flex flex-col justify-end">
                                    <div className="mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-light mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 max-w-md">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases - Full width image cards */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-4xl md:text-6xl font-light">Real-World Impact</h2>
                        <Link
                            href="/case-studies"
                            className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest group"
                        >
                            View All
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {useCases.map((useCase, i) => (
                            <div
                                key={i}
                                className="group relative aspect-[21/9] overflow-hidden cursor-pointer"
                            >
                                {/* Background placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />

                                {/* Content */}
                                <div className="relative h-full p-12 flex items-end">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-light mb-3">
                                            {useCase.title}
                                        </h3>
                                        <p className="text-gray-400 text-lg max-w-2xl">
                                            {useCase.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Showcase */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
                        Advanced algorithms tuned for industrial environments
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Our vision systems deliver sub-millimeter precision in real-time,
                        operating continuously to ensure zero-defect production.
                    </p>
                </div>
            </section>

            {/* CTA Section - Simple and bold */}
            <section className="py-32 px-6 border-t border-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-light mb-12">
                        Ready to optimize your production line?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-12 py-4 bg-white text-black text-sm uppercase tracking-widest font-medium hover:bg-gray-200 transition-colors">
                            Schedule Demo
                        </button>
                        <button className="px-12 py-4 border-2 border-white text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-all">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}