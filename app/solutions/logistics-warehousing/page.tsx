"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
    Package,
    Truck,
    Barcode,
    Layers,
    ArrowRight,
    Zap,
    Maximize2,
    CheckCircle
} from "lucide-react";

const capabilities = [
    {
        title: "High-Speed Sorting",
        description: "Automated classification of parcels on fast-moving conveyors using shape and label OCR.",
        icon: <Barcode className="w-6 h-6 text-indigo-500" />
    },
    {
        title: "Automated Dimensioning",
        description: "Instant 3D measurements of items for volumetric weight calculation and space optimization.",
        icon: <Maximize2 className="w-6 h-6 text-indigo-500" />
    },
    {
        title: "Depalletizing Guidance",
        description: "Vision-guided robotic arms for safe and efficient unloading of mixed-order pallets.",
        icon: <Layers className="w-6 h-6 text-indigo-500" />
    },
    {
        title: "Dock Occupancy",
        description: "Real-time monitoring of loading docks to optimize truck turnaround times.",
        icon: <Truck className="w-6 h-6 text-indigo-500" />
    }
];

const useCases = [
    {
        title: "Global Hub Sorting",
        facility: "Fulfillment Center",
        description: "Omni-directional scanning and sorting of 20,000+ parcels per hour.",
        image: "/solutions/usecases/logistics-sort.jpg",
        metric: "99.9% Read Rate"
    },
    {
        title: "Smart Storage Tracking",
        facility: "Cold Storage",
        description: "Vision-based inventory auditing in environments difficult for humans.",
        image: "/solutions/usecases/cold-storage.jpg",
        metric: "100% Stock Acc."
    },
    {
        title: "Last-Mile Verification",
        facility: "Delivery Fleet",
        description: "Automated proof-of-delivery via onboard package recognition cameras.",
        image: "/solutions/usecases/delivery-vision.jpg",
        metric: "Instant Evidence"
    }
];

export default function LogisticsPage() {
    return (
        <div className="min-h-screen bg-indigo-50/20 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 lg:px-8 bg-white overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-3 mb-8">
                                <div className="p-2 bg-indigo-600 rounded-lg text-white">
                                    <Package className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-black uppercase tracking-widest text-indigo-600">Smart Supply Chain</span>
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-black text-stone-900 mb-8 tracking-tighter leading-[0.9]">
                                Optimize Every <br />
                                <span className="text-indigo-600">Parcel in Motion</span>
                            </h1>
                            <p className="text-xl text-stone-600 mb-12 leading-relaxed max-w-xl">
                                Maximize warehouse throughput and eliminate sorting errors with high-speed
                                visual intelligence designed for modern logistics.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-100 italic">
                                    Launch Your Solution
                                </button>
                                <button className="px-12 py-5 bg-white text-indigo-900 border-2 border-indigo-100 rounded-2xl font-bold hover:bg-indigo-50 transition-colors">
                                    Contact Sales
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white bg-indigo-100">
                                <img
                                    src="/solutions/logistics-warehousing.jpg"
                                    alt="Logistics Vision System"
                                    className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent" />

                                {/* Visual OCR Simulation */}
                                <div className="absolute top-1/4 right-1/4 p-4 bg-white/90 backdrop-blur rounded-2xl shadow-2xl border border-indigo-100 animate-pulse">
                                    <div className="text-[10px] font-bold text-indigo-400 mb-1">OCR_LABEL_SCAN</div>
                                    <div className="font-mono text-sm font-bold text-stone-800">#TRK_8492011-B</div>
                                </div>

                                <div className="absolute bottom-12 left-12 p-6 bg-indigo-900 text-white rounded-[2rem] shadow-2xl">
                                    <div className="text-4xl font-black mb-1">0.8s</div>
                                    <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Sorting latency</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Logistics Stats */}
            <section className="py-24 px-6 lg:px-8 bg-indigo-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { label: "Throughput", val: "+50%", icon: <Zap className="w-5 h-5 text-indigo-400" /> },
                            { label: "Accuracy", val: "99.98%", icon: <CheckCircle className="w-5 h-5 text-indigo-400" /> },
                            { label: "Data Quality", val: "24/7", icon: <Package className="w-5 h-5 text-indigo-400" /> },
                            { label: "Cost Saving", val: "30%", icon: <ArrowRight className="w-5 h-5 text-indigo-400 -rotate-45" /> }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-4 group">
                                <div className="mx-auto w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-black text-white">{stat.val}</div>
                                <p className="text-indigo-300 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-32 px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <h2 className="text-4xl lg:text-7xl font-black text-stone-900 tracking-tight leading-none italic uppercase">Unrivaled <br />Precision.</h2>
                        <p className="max-w-md text-stone-500 text-lg leading-relaxed">
                            Seamlessly integrate our vision stack with WMS, ERP, and industrial PLC systems
                            for end-to-end operational visibility.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                        {capabilities.map((item, i) => (
                            <div key={i} className="p-10 bg-stone-50 rounded-[3rem] border border-stone-100 hover:bg-white hover:shadow-2xl hover:border-indigo-200 transition-all group">
                                <div className="mb-8 w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                                    <div className="group-hover:text-white transition-colors">{item.icon}</div>
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4">{item.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Grid */}
            <section className="py-24 px-6 lg:px-8 bg-indigo-50/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-black text-stone-900 text-center mb-20 italic">Global Logistics Excellence.</h2>
                    <div className="grid lg:grid-cols-3 gap-12">
                        {useCases.map((useCase, i) => (
                            <div key={i} className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-indigo-100/30 group">
                                <div className="h-48 bg-indigo-900 flex items-center justify-center relative overflow-hidden">
                                    <img src={useCase.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt={useCase.title} />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-black uppercase text-indigo-900">{useCase.facility}</div>
                                </div>
                                <div className="p-10">
                                    <h3 className="text-2xl font-bold text-stone-900 mb-4 uppercase tracking-tight">{useCase.title}</h3>
                                    <p className="text-stone-500 text-sm mb-10 leading-relaxed">{useCase.description}</p>
                                    <div className="py-6 border-t border-indigo-50 flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Key Result</span>
                                        <span className="text-2xl font-black text-indigo-600">{useCase.metric}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 px-6">
                <div className="max-w-5xl mx-auto rounded-[4rem] bg-indigo-600 p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                        <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-tighter leading-none italic">Ship Faster. <br />Grow Brighter.</h2>
                        <p className="text-2xl text-indigo-100 mb-16 max-w-xl mx-auto leading-relaxed">
                            Ready to upgrade your fulfillment technology? Schedule a consultation with our
                            supply chain engineers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="px-12 py-5 bg-white text-indigo-600 rounded-[2rem] font-black text-lg hover:bg-stone-50 transition-all">Start Your Pilot</button>
                            <button className="px-12 py-5 bg-indigo-700 text-white rounded-[2rem] font-black text-lg hover:bg-indigo-800 transition-all border border-indigo-400">Request a Site Audit</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
