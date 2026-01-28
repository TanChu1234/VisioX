"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
    CheckCircle2,
    Settings2,
    ShieldAlert,
    Cpu,
    ArrowRight,
    TrendingUp,
    Target,
    Clock
} from "lucide-react";

const capabilities = [
    {
        title: "Defect Detection",
        description: "Identify scratches, cracks, or malformations in real-time with sub-millimeter precision.",
        icon: <ShieldAlert className="w-6 h-6 text-orange-500" />
    },
    {
        title: "Assembly Verification",
        description: "Ensureทุก component is correctly placed and secured in complex assembly lines.",
        icon: <Settings2 className="w-6 h-6 text-orange-500" />
    },
    {
        title: "PPE Compliance",
        description: "Automatically monitor safety gear usage to maintain a secure working environment.",
        icon: <CheckCircle2 className="w-6 h-6 text-orange-500" />
    },
    {
        title: "Predictive Maintenance",
        description: "Analyze visual cues of machine wear and tear to prevent costly downtime.",
        icon: <Cpu className="w-6 h-6 text-orange-500" />
    }
];

const useCases = [
    {
        title: "PCB Soldering Inspection",
        industry: "Electronics",
        description: "Automated inspection of BGA and surface mount components for soldering defects.",
        image: "/solutions/usecases/pcb-inspection.jpg",
        metric: "99.9% Accuracy"
    },
    {
        title: "Automotive Body Paint",
        industry: "Automotive",
        description: "Detection of dust, orange peel, and color inconsistencies on vehicle bodies.",
        image: "/solutions/usecases/car-paint.jpg",
        metric: "40% Faster Cycle"
    },
    {
        title: "Food Quality Grading",
        industry: "Food & Beverage",
        description: "Sorting produce by size, color, and ripeness with high-speed vision systems.",
        image: "/solutions/usecases/food-grading.jpg",
        metric: "15% Waste Reduction"
    }
];

export default function ManufacturingPage() {
    return (
        <div className="min-h-screen bg-[#fcfaf7] overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-white border-b border-stone-100 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <Link href="/solutions" className="text-sm font-medium text-stone-500 hover:text-orange-600">Solutions</Link>
                                <span className="text-stone-300">/</span>
                                <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">Manufacturing</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 mb-6 leading-[1.1]">
                                Precision Vision for <br />
                                <span className="bg-gradient-to-r from-[#FF7300] to-[#F1A222] bg-clip-text text-transparent">
                                    Modern Industry
                                </span>
                            </h1>
                            <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-xl">
                                Eliminate human error and maximize production efficiency with AI-powered inspection
                                systems that see what the eye misses.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-colors shadow-lg">
                                    Get Started
                                </button>
                                <button className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-xl font-bold hover:bg-stone-50 transition-colors">
                                    Contact Sales
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="/solutions/manufacturing-industrial.jpg"
                                    alt="Industrial Vision System"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                                {/* Floating Analysis UI Elements */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                                <CheckCircle2 className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-stone-500 uppercase">Status</p>
                                                <p className="text-sm font-bold text-stone-900">100% Pass Rate</p>
                                            </div>
                                        </div>
                                        <div className="h-10 w-px bg-stone-200" />
                                        <div className="text-right">
                                            <p className="text-xs font-bold text-stone-500 uppercase">Detection</p>
                                            <p className="text-sm font-bold text-stone-900">0 Defects Found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Accuracy", value: "99.9%", icon: <Target className="w-5 h-5" /> },
                            { label: "Throughput", value: "+45%", icon: <TrendingUp className="w-5 h-5" /> },
                            { label: "Cost Reduction", value: "30%", icon: <ArrowRight className="w-5 h-5 rotate-45" /> },
                            { label: "Inspection Time", value: "-90%", icon: <Clock className="w-5 h-5" /> }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
                                <div className="inline-flex p-3 bg-orange-50 rounded-xl text-orange-600 mb-4">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-stone-900 mb-1">{stat.value}</h3>
                                <p className="text-stone-500 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-stone-900 mb-6">Core Capabilities</h2>
                        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                            Our advanced algorithms are specifically tuned for the rigors of industrial environments.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.map((item, i) => (
                            <div key={i} className="p-8 bg-white rounded-3xl border border-stone-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                                <p className="text-stone-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 px-6 lg:px-8 bg-stone-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Real-World Impact</h2>
                            <p className="text-stone-400 text-lg max-w-xl">
                                See how industry leaders are using VisioX to transform their production floors.
                            </p>
                        </div>
                        <Link href="/case-studies" className="inline-flex items-center font-bold text-orange-500 group">
                            View all case studies
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {useCases.map((useCase, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                                    <div className="absolute inset-0 bg-stone-800 animate-pulse" />
                                    {/* Placeholder for real images */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                    <div className="absolute bottom-6 left-6 right-6 z-20">
                                        <div className="inline-block px-3 py-1 bg-orange-600 rounded-lg text-xs font-bold mb-3 uppercase tracking-wider">
                                            {useCase.industry}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                                        <div className="flex items-center gap-2 text-orange-400 font-bold">
                                            <TrendingUp className="w-4 h-4" />
                                            {useCase.metric}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-stone-400 leading-relaxed">
                                    {useCase.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-orange-600 to-orange-400 p-12 lg:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-8 italic">Ready to optimize your production line?</h2>
                        <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
                            Our experts will help you design a custom vision system tailored to your specific industrial needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-10 py-5 bg-white text-orange-600 rounded-2xl font-bold hover:bg-stone-50 transition-all shadow-xl hover:-translate-y-1">
                                Schedule a Demo
                            </button>
                            <button className="px-10 py-5 bg-stone-900/20 text-white border border-white/30 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                                Custom Quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
