"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
    Bot,
    Box,
    Cpu,
    Orbit,
    ArrowRight,
    Maximize,
    Move,
    CheckCircle
} from "lucide-react";

const capabilities = [
    {
        title: "6D Pose Estimation",
        description: "Precisely identify the position and orientation of parts for reliable robotic grasping.",
        icon: <Orbit className="w-6 h-6 text-violet-400" />
    },
    {
        title: "Random Bin Picking",
        description: "Enable robots to pick unsorted, overlapping parts from deep bins with collision avoidance.",
        icon: <Box className="w-6 h-6 text-violet-400" />
    },
    {
        title: "Autonomous Navigation",
        description: "Vision-based SLAM and obstacle detection for mobile robots in dynamic environments.",
        icon: <Move className="w-6 h-6 text-violet-400" />
    },
    {
        title: "Path Optimization",
        description: "Real-time recalculation of robotic trajectories to avoid obstacles and reduce cycle time.",
        icon: <Maximize className="w-6 h-6 text-violet-400" />
    }
];

const useCases = [
    {
        title: "AI Bin Picking",
        tech: "SolVision / Mech-Mind",
        description: "Robots picking complex metal parts from deep bins for production lines.",
        image: "/solutions/usecases/robotic-bin.jpg",
        metric: "99.9% Pick Success"
    },
    {
        title: "Palletizing Automation",
        tech: "3D Multi-Camera",
        description: "Intelligent stacking of mixed-size boxes on pallets for optimized logistics.",
        image: "/solutions/usecases/palletizing.jpg",
        metric: "-50% Labor Task"
    },
    {
        title: "SMT Line Assembly",
        tech: "High-Speed Inspection",
        description: "Guided placement of microscopic electronic components on PCBs.",
        image: "/solutions/usecases/smt-line.jpg",
        metric: "<10ms Latency"
    }
];

export default function RoboticsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-violet-600/20 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] -translate-x-1/2" />
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-px bg-violet-500" />
                                <span className="text-sm font-black uppercase tracking-[0.3em] text-violet-400">Next-Gen Automation</span>
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                                Visual Brain for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
                                    Autonomous Robots
                                </span>
                            </h1>
                            <p className="text-xl text-stone-400 mb-12 leading-relaxed max-w-xl">
                                Equip your robotic systems with human-like visual perception.
                                From bin picking to complex assembly, VisioX provides the precision needed
                                to automate the unautomatable.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="px-10 py-5 bg-violet-600 text-white rounded-full font-bold hover:bg-violet-500 transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:-translate-y-1">
                                    Request Solution Arch
                                </button>
                                <button className="px-10 py-5 bg-transparent text-white border border-stone-800 rounded-full font-bold hover:bg-stone-900 transition-all">
                                    Watch Tech Demo
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-[4rem] border border-violet-500/30 bg-violet-950/20 p-8 backdrop-blur-3xl overflow-hidden group">
                                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                                    <img
                                        src="/solutions/robotics-automation.jpg"
                                        alt="Robotic Vision System"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-violet-950/60 via-transparent to-transparent" />
                                    {/* UI Elements */}
                                    <div className="absolute inset-0 border-[20px] border-black/10" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-violet-400/50 rounded-full animate-ping opacity-20" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-violet-500 rounded-full shadow-[0_0_20px_#8b5cf6]" />
                                </div>
                            </div>
                            {/* Data Floating Elements */}
                            <div className="absolute top-12 -right-6 p-6 bg-stone-900/80 backdrop-blur border border-stone-800 rounded-3xl shadow-2xl space-y-2">
                                <div className="text-[10px] font-bold text-violet-400">LATENCY</div>
                                <div className="text-2xl font-black">12ms</div>
                            </div>
                            <div className="absolute -bottom-6 left-12 p-6 bg-stone-900/80 backdrop-blur border border-stone-800 rounded-3xl shadow-2xl flex gap-6">
                                <div>
                                    <div className="text-[10px] font-bold text-violet-400 text-center">UPTIME</div>
                                    <div className="text-2xl font-black">99.9%</div>
                                </div>
                                <div className="w-px h-10 bg-stone-700 mt-2" />
                                <div>
                                    <div className="text-[10px] font-bold text-violet-400 text-center">PRECISION</div>
                                    <div className="text-2xl font-black">0.5mm</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl lg:text-7xl font-black mb-6 italic tracking-tight underline decoration-violet-600 decoration-8 underline-offset-8">Core Intelligence</h2>
                        <p className="text-xl text-stone-500 max-w-2xl mx-auto">
                            Our software stack interfaces with any industrial robot brand (FANUC, ABB, KUKA, Universal Robots).
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                        {capabilities.map((item, i) => (
                            <div key={i} className="group p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-500">
                                <div className="mb-8 w-16 h-16 bg-violet-600/20 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-violet-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Dark */}
            <section className="py-32 px-6 lg:px-8 bg-black relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-20">
                        <div>
                            <h2 className="text-4xl lg:text-6xl font-black">Success Stories</h2>
                            <p className="text-stone-500 mt-4">Industry-tested vision algorithms across thousands of nodes.</p>
                        </div>
                        <Link href="/contact" className="hidden md:flex items-center gap-2 text-violet-400 font-bold hover:gap-4 transition-all">
                            Request Case Brief <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {useCases.map((useCase, i) => (
                            <div key={i} className="group flex flex-col bg-stone-900/40 rounded-[3rem] overflow-hidden border border-white/5 hover:border-violet-500/30 transition-all">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-violet-900/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img src={useCase.image} alt={useCase.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                                    <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-black/80 backdrop-blur rounded-full text-[10px] font-black tracking-widest text-violet-400 border border-violet-500/30 uppercase">
                                        {useCase.tech}
                                    </div>
                                </div>
                                <div className="p-10">
                                    <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                                    <p className="text-stone-500 text-sm mb-10 leading-relaxed">{useCase.description}</p>
                                    <div className="flex items-center gap-4 py-6 border-t border-white/10">
                                        <CheckDouble className="w-6 h-6 text-violet-500" />
                                        <div className="text-xl font-black text-stone-200">{useCase.metric}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 px-6 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-violet-600/20 rounded-full blur-[200px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <Bot className="w-20 h-20 text-violet-500 mx-auto mb-12" />
                    <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-tight">Automate the <br />Unpredictable.</h2>
                    <p className="text-2xl text-stone-400 mb-16 leading-relaxed">
                        Bring high-performance 3D vision to your robotic cells today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-16 py-6 bg-white text-black rounded-full font-black text-lg hover:bg-violet-500 hover:text-white transition-all">Start Your Project</button>
                        <button className="px-16 py-6 bg-transparent text-white border border-stone-800 rounded-full font-black text-lg hover:bg-stone-900 transition-all">Talk to a Robot Expert</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function CheckDouble(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 13l5 5 10-10" />
            <path d="M2 13l5 5 4-4" />
        </svg>
    );
}
