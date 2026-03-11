"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
    ShieldCheck,
    Eye,
    BellRing,
    MapPin,
    ArrowRight,
    Zap,
    Lock,
    Search
} from "lucide-react";

const capabilities = [
    {
        title: "Intrusion Detection",
        description: "Instant alerts for unauthorized access in restricted zones using virtual fences.",
        icon: <ShieldCheck className="w-6 h-6 text-slate-400" />
    },
    {
        title: "Facial Recognition",
        description: "Highly accurate identification for secure access control and person-of-interest tracking.",
        icon: <Eye className="w-6 h-6 text-slate-400" />
    },
    {
        title: "Behavior Analysis",
        description: "Detect suspicious activities like loitering, running, or falling in public spaces.",
        icon: <BellRing className="w-6 h-6 text-slate-400" />
    },
    {
        title: "Crowd Management",
        description: "Real-time occupancy monitoring and density analysis for large-scale events.",
        icon: <MapPin className="w-6 h-6 text-slate-400" />
    }
];

const useCases = [
    {
        title: "Airport Perimeter Security",
        industry: "Transportation",
        description: "Multi-layered surveillance with thermal vision for total airport perimeter protection.",
        image: "/solutions/usecases/airport-security.jpg",
        metric: "0 Intrusions Missed"
    },
    {
        title: "Smart Office Access",
        industry: "Enterprise",
        description: "Touchless entry systems using high-speed facial recognition and liveness detection.",
        image: "/solutions/usecases/office-access.jpg",
        metric: "<0.5s Verif. Time"
    },
    {
        title: "Retail Loss Prevention",
        industry: "Retail",
        description: "Monitoring checkout areas and high-value aisles to reduce shrink and theft.",
        image: "/solutions/usecases/retail-security.jpg",
        metric: "25% Lower Shrink"
    }
];

export default function SurveillancePage() {
    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-slate-900 overflow-hidden text-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <Link href="/solutions" className="text-sm font-medium text-slate-400 hover:text-white">Solutions</Link>
                                <span className="text-slate-600">/</span>
                                <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">Surveillance</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                                Smart Sight for a <br />
                                <span className="text-blue-400">Safer World</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                                Next-generation security solutions powered by deep learning for proactive threat detection
                                and real-time situational awareness.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40">
                                    Deploy Now
                                </button>
                                <button className="px-8 py-4 bg-transparent text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                                    Watch Demo
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 relative">
                                {/* Security Camera Feed Simulation */}
                                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-red-600 rounded-lg animate-pulse">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Live Feed</span>
                                </div>
                                <div className="absolute top-4 right-4 z-20 text-xs font-mono text-white/60">
                                    CAM_042 // NORTH_GATE_01
                                </div>
                                <img
                                    src="/solutions/surveillance-security.jpg"
                                    alt="AI Surveillance Monitoring"
                                    className="w-full h-full object-cover opacity-60 grayscale-[0.5]"
                                />
                                {/* Visual Overlays */}
                                <div className="absolute inset-0 z-10 pointer-events-none">
                                    <div className="absolute top-1/4 left-1/3 w-32 h-44 border-2 border-blue-400 bg-blue-400/10 rounded-lg">
                                        <div className="absolute -top-6 left-0 text-[10px] font-bold text-blue-400 bg-slate-900 px-1">PERSON [98.2%]</div>
                                    </div>
                                    <div className="absolute top-1/2 right-1/4 w-24 h-16 border-2 border-red-500 bg-red-500/10 rounded-lg">
                                        <div className="absolute -top-6 left-0 text-[10px] font-bold text-red-500 bg-slate-900 px-1">UNAUTHORIZED_ACCESS</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-slate-800 border-y border-slate-700">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Uptime", value: "99.99%", icon: <Zap className="w-5 h-5 text-yellow-400" /> },
                            { label: "Security Delay", value: "< 250ms", icon: <Lock className="w-5 h-5 text-blue-400" /> },
                            { label: "Accuracy Rate", value: "98.5%", icon: <Search className="w-5 h-5 text-green-400" /> },
                            { label: "Response Speed", value: "Instant", icon: <BellRing className="w-5 h-5 text-red-400" /> }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="mb-2 uppercase text-xs font-bold text-slate-500 tracking-widest flex items-center gap-2">
                                    {stat.icon} {stat.label}
                                </div>
                                <div className="text-3xl font-bold text-white">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 underline decoration-blue-500 underline-offset-8 decoration-4">The New Standard in Physical Security</h2>
                        <p className="text-lg text-slate-600">
                            We combine edge computing with deep neural networks to provide instantaneous insights
                            without compromising privacy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.map((item, i) => (
                            <div key={i} className="p-8 group hover:bg-slate-900 transition-all duration-500 rounded-3xl border border-slate-200">
                                <div className="mb-6 p-4 bg-slate-100 rounded-2xl group-hover:bg-slate-800 transition-colors w-fit">{item.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">{item.title}</h3>
                                <p className="text-slate-600 group-hover:text-slate-400 leading-relaxed transition-colors">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 text-center mb-16">Deployment Scenarios</h2>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {useCases.map((useCase, i) => (
                            <div key={i} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
                                <div className="relative h-64 bg-slate-200">
                                    {/* Placeholder */}
                                    <div className="absolute inset-0 bg-slate-800/10" />
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-slate-900 shadow-sm uppercase">
                                        {useCase.industry}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{useCase.title}</h3>
                                    <p className="text-slate-600 mb-6">
                                        {useCase.description}
                                    </p>
                                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Key Metric</span>
                                        <span className="text-lg font-bold text-blue-600">{useCase.metric}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 bg-slate-900">
                <div className="max-w-6xl mx-auto rounded-3xl bg-blue-600/10 border border-blue-500/20 p-12 lg:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <ShieldCheck className="w-16 h-16 text-blue-500 mx-auto mb-8" />
                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Secure your perimeter today.</h2>
                        <p className="text-xl mb-12 text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Experience the power of proactive surveillance. Request a vulnerability assessment
                            and see how VisioX can harden your security posture.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40">
                                Request Free Assessment
                            </Link>
                            <Link href="/contact" className="px-10 py-5 bg-transparent text-white border border-slate-700 rounded-2xl font-bold hover:bg-slate-800 transition-all">
                                Talk to Security Advisor
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
