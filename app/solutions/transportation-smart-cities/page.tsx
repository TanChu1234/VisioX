"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
    Car,
    TrafficCone,
    Map,
    Signal,
    ArrowRight,
    Wind,
    Zap,
    Navigation
} from "lucide-react";

const capabilities = [
    {
        title: "Traffic Flow Analysis",
        description: "Real-time vehicle counting and speed monitoring to balance urban congestion.",
        icon: <Car className="w-6 h-6 text-orange-500" />
    },
    {
        title: "Parking Management",
        description: "Automated identification of empty spaces and illegal parking via overhead cameras.",
        icon: <Navigation className="w-6 h-6 text-orange-500" />
    },
    {
        title: "Incident Detection",
        description: "Rapidly detect accidents, stalled vehicles, or debris on highways for emergency response.",
        icon: <TrafficCone className="w-6 h-6 text-orange-500" />
    },
    {
        title: "Smart Lighting",
        description: "Adaptive public lighting systems that respond to pedestrian and vehicle presence.",
        icon: <Zap className="w-6 h-6 text-orange-500" />
    }
];

const useCases = [
    {
        title: "Intelligent Intersections",
        city: "San Francisco",
        description: "Dynamic signal timing based on real-time pedestrian and vehicle density.",
        image: "/solutions/usecases/traffic-signal.jpg",
        metric: "-15% Wait Time"
    },
    {
        title: "Automated Toll Express",
        city: "Dubai",
        description: "High-speed ALPR and vehicle classification for seamless tolling without barriers.",
        image: "/solutions/usecases/toll-booth.jpg",
        metric: "99.95% OCR Acc."
    },
    {
        title: "Pothole Detection Fleet",
        city: "Chicago",
        description: "AI dashcams on public buses mapping road damage for proactive maintenance.",
        image: "/solutions/usecases/pothole-road.jpg",
        metric: "4x Faster Repair"
    }
];

export default function TransportationPage() {
    return (
        <div className="min-h-screen bg-stone-50 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-white overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full text-orange-600 mb-8 border border-orange-100">
                                <Signal className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Connected Infrastructure</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 mb-8 leading-[1.05]">
                                Intelligent <br />
                                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                                    Smart Cities
                                </span>
                            </h1>
                            <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-xl">
                                Harnessing computer vision to create safer, cleaner, and more efficient urban environments
                                for every citizen.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-10 py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-xl shadow-stone-200">
                                    Explore Platform
                                </button>
                                <button className="px-10 py-4 bg-white text-stone-900 border border-stone-200 rounded-2xl font-bold hover:bg-stone-50 transition-colors">
                                    Case Studies
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                                <img
                                    src="/solutions/transportation-smart-cities.jpg"
                                    alt="Smart City Traffic Monitoring"
                                    className="w-full h-full object-cover"
                                />
                                {/* Movement Trails Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent" />

                                {/* Data Points Layer */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                    <div className="flex gap-4 mb-4">
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex-1 border border-white/20">
                                            <div className="text-[10px] uppercase font-bold text-white/60 mb-1 tracking-widest text-center">Active Objects</div>
                                            <div className="text-2xl font-bold text-center">1,284</div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex-1 border border-white/20">
                                            <div className="text-[10px] uppercase font-bold text-white/60 mb-1 tracking-widest text-center">Flow Velocity</div>
                                            <div className="text-2xl font-bold text-center">42 km/h</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-stone-100 hidden lg:block">
                                <Wind className="w-8 h-8 text-green-500 mb-2" />
                                <div className="text-2xl font-bold text-stone-900">-22%</div>
                                <div className="text-xs font-bold text-stone-400 uppercase">CO2 Savings</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {capabilities.map((item, i) => (
                            <div key={i} className="group relative">
                                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:rotate-6 transition-all duration-300">
                                    <div className="group-hover:text-white group-hover:-rotate-6 transition-all">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4">{item.title}</h3>
                                <p className="text-stone-600 leading-relaxed max-w-xs">{item.description}</p>
                                <div className="mt-6 w-12 h-1 bg-stone-100 group-hover:w-24 group-hover:bg-orange-500 transition-all duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Section: Urban Efficiency */}
            <section className="py-24 px-6 lg:px-8 bg-stone-900 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">Data-Driven Urban Mobility</h2>
                            <p className="text-xl text-stone-400 mb-12 leading-relaxed">
                                By processing visual data at the edge, VisioX provides cities with the analytics needed
                                to optimize public transport, reduce congestion, and improve pedestrian safety
                                in real-time.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    "Edge-based processing for low latency",
                                    "Dynamic signal control integration",
                                    "Privacy-first citizens anonymization",
                                    "Multi-camera tracking & handoff"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4 text-stone-200 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-orange-600/20 flex items-center justify-center border border-orange-600/50">
                                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {useCases.map((useCase, i) => (
                                <div key={i} className={`p-8 rounded-[2rem] border border-stone-800 ${i === 0 ? 'bg-orange-600 col-span-2' : 'bg-stone-800/50 hover:bg-stone-800'} transition-all group`}>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-60">{useCase.city}</div>
                                        <TrendingUp className={`w-5 h-5 ${i === 0 ? 'text-white' : 'text-orange-500'}`} />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2">{useCase.title}</h4>
                                    <p className={`text-sm mb-6 ${i === 0 ? 'text-white/80' : 'text-stone-400'}`}>{useCase.description}</p>
                                    <div className={`text-3xl font-black ${i === 0 ? 'text-white' : 'text-orange-500'}`}>{useCase.metric}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto rounded-[3rem] bg-stone-50 border border-stone-200 p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="max-w-xl relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6 italic">Building the infrastructure of tomorrow.</h2>
                        <p className="text-lg text-stone-600 mb-8">
                            Join dozens of municipalities already using VisioX to power their smart city initiatives.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200">
                                Request Solution Brief
                            </button>
                            <button className="px-8 py-4 bg-transparent text-stone-900 border border-stone-300 rounded-xl font-bold hover:bg-stone-100 transition-all">
                                Partner with Us
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 relative z-10">
                        <div className="bg-white p-8 rounded-3xl shadow-2xl space-y-6 border border-stone-100">
                            <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">Upcoming Webinar</div>
                            <h4 className="text-xl font-bold text-stone-900">Vision AI for Net Zero Urban Initiatives</h4>
                            <div className="flex items-center gap-2 text-orange-600 font-bold">
                                <Clock className="w-5 h-5" />
                                Feb 24, 2026 // 10:00 AM EST
                            </div>
                            <button className="w-full py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-all">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

// Minimal missing icons
function TrendingUp(props: any) {
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
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </svg>
    );
}

function Clock(props: any) {
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
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}
