"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
    ShoppingBag,
    Users,
    BarChart3,
    Tag,
    ArrowRight,
    Sparkles,
    Search,
    Timer
} from "lucide-react";

const capabilities = [
    {
        title: "Footfall Analytics",
        description: "Map customer journey and dwell times to optimize store layout and staffing.",
        icon: <Users className="w-6 h-6 text-rose-500" />
    },
    {
        title: "Inventory Monitoring",
        description: "Automated shelf-scanning for out-of-stock detection and planogram compliance.",
        icon: <Tag className="w-6 h-6 text-rose-500" />
    },
    {
        title: "Automated Checkout",
        description: "Vision-based object recognition for friction-less self-checkout experiences.",
        icon: <ShoppingBag className="w-6 h-6 text-rose-500" />
    },
    {
        title: "Heatmap Visualization",
        description: "Identify high-traffic 'hot zones' and dead spaces to maximize floor value.",
        icon: <BarChart3 className="w-6 h-6 text-rose-500" />
    }
];

const useCases = [
    {
        title: "Cashier-Free Boutique",
        industry: "High-end Retail",
        description: "Seamless 'Grab & Go' system utilizing multi-camera fusion tracking.",
        image: "/solutions/usecases/retail-shop.jpg",
        metric: "98% Transaction Acc."
    },
    {
        title: "End-Cap Promo Analysis",
        industry: "FMCG / Grocery",
        description: "Real-time auditing of promotional display performance and engagement.",
        image: "/solutions/usecases/grocery-shelf.jpg",
        metric: "+20% Sales Lift"
    },
    {
        title: "Queue Length Control",
        industry: "Supermarkets",
        description: "Predictive queue management that alerts staff before bottlenecks form.",
        image: "/solutions/usecases/retail-queue.jpg",
        metric: "-4min Avg. Wait"
    }
];

export default function RetailPage() {
    return (
        <div className="min-h-screen bg-rose-50/20 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 lg:px-8 bg-white overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 shadow-[0_0_400px_100px_rgba(255,182,193,0.3)]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 text-rose-600 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-rose-100">
                                <Sparkles className="w-4 h-4" /> Omni-Channel Insights
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-black text-stone-900 mb-8 tracking-tighter leading-[0.9]">
                                The Future of <br />
                                <span className="bg-gradient-to-r from-rose-600 to-orange-400 bg-clip-text text-transparent">
                                    Physical Retail
                                </span>
                            </h1>
                            <p className="text-xl text-stone-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                                Transform your store into a data-driven powerhouse with computer vision
                                that understands every customer interaction and shelf movement.
                            </p>
                            <div className="flex flex-wrap gap-6 justify-center">
                                <button className="px-12 py-5 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-2xl shadow-rose-200 hover:-translate-y-1">
                                    Start Your Pilot
                                </button>
                                <button className="px-12 py-5 bg-white text-rose-600 border border-rose-200 rounded-2xl font-bold hover:bg-rose-50 transition-colors">
                                    View Demo Store
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative max-w-5xl mx-auto mt-12"
                    >
                        <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(255,0,0,0.1)] border border-stone-100 bg-white">
                            <img
                                src="/solutions/retail-commerce.jpg"
                                alt="Retail Visual Intelligence"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent" />
                        </div>

                        {/* Visual Callout */}
                        <div className="absolute -bottom-8 -right-8 -left-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { label: "Conversion Rate", value: "+12%", color: "bg-rose-600" },
                                { label: "Customer Dwell", value: "8.4 min", color: "bg-orange-500" },
                                { label: "Inventory Accuracy", value: "99.2%", color: "bg-stone-900" }
                            ].map((card, i) => (
                                <div key={i} className="bg-white p-6 rounded-[2rem] shadow-xl border border-stone-50 flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">{card.label}</div>
                                        <div className="text-2xl font-black text-stone-900">{card.value}</div>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full ${card.color} flex items-center justify-center text-white`}>
                                        <BarChart3 className="w-5 h-5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-32 px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl lg:text-6xl font-black text-stone-900 tracking-tight leading-none italic">Bridge the gap between <br />URL and IRL.</h2>
                            <p className="text-lg text-stone-600 leading-relaxed">
                                We bring the deep analytics of e-commerce to the physical storefront, providing
                                unprecedented visibility into what your customers want and why they buy.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {capabilities.map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start p-4 hover:bg-rose-50 rounded-2xl transition-colors">
                                        <div className="mt-1">{item.icon}</div>
                                        <div>
                                            <div className="font-bold text-stone-900">{item.title}</div>
                                            <div className="text-sm text-stone-500">{item.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="flex items-center gap-2 text-rose-600 font-black uppercase text-sm tracking-widest group">
                                Explore all features <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="aspect-square bg-rose-50 rounded-[2.5rem] overflow-hidden">
                                        <img src="/solutions/retail-visual-1.jpg" className="w-full h-full object-cover grayscale brightness-110" alt="Retail Visual" />
                                    </div>
                                    <div className="aspect-[3/4] bg-stone-900 rounded-[2.5rem] overflow-hidden p-8 flex flex-col justify-end text-white">
                                        <Timer className="w-10 h-10 text-rose-500 mb-6" />
                                        <div className="text-3xl font-black mb-2">30s</div>
                                        <div className="text-sm text-stone-400 font-medium">Average automated checkout time.</div>
                                    </div>
                                </div>
                                <div className="space-y-6 pt-12">
                                    <div className="aspect-[3/4] bg-orange-400 rounded-[2.5rem] overflow-hidden">
                                        <img src="/solutions/retail-visual-2.jpg" className="w-full h-full object-cover" alt="Retail Visual" />
                                    </div>
                                    <div className="aspect-square bg-stone-50 rounded-[2.5rem] border-2 border-dashed border-rose-200 flex items-center justify-center p-8 text-center">
                                        <div className="text-rose-600 font-black text-lg">Scalable for 100+ SKU detection per camera.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Grid */}
            <section className="py-24 px-6 lg:px-8 bg-stone-50 border-y border-stone-200">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                    {useCases.map((useCase, i) => (
                        <div key={i} className="flex-1 bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group">
                            <div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-4">{useCase.industry}</div>
                            <h3 className="text-2xl font-black text-stone-900 mb-4">{useCase.title}</h3>
                            <p className="text-stone-500 text-sm mb-8 leading-relaxed">{useCase.description}</p>
                            <div className="py-6 border-t border-stone-100 flex items-center justify-between">
                                <span className="text-sm font-bold text-stone-400">IMPACT</span>
                                <span className="text-xl font-black text-rose-600">{useCase.metric}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto rounded-[4rem] bg-gradient-to-br from-rose-600 to-orange-400 p-1 bg-stone-100">
                    <div className="bg-white rounded-[3.9rem] p-12 lg:p-24 text-center">
                        <h2 className="text-5xl lg:text-7xl font-black text-stone-900 mb-8 tracking-tighter">Ready to redesign <br />the store?</h2>
                        <p className="text-xl text-stone-600 mb-12 max-w-xl mx-auto">
                            Our retail solutions are designed for quick deployment with minimal hardware overhead.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-12 py-5 bg-stone-900 text-white rounded-2xl font-bold hover:scale-105 transition-all">Get a Custom Quote</button>
                            <button className="px-12 py-5 bg-white text-stone-900 border border-stone-200 rounded-2xl font-bold hover:bg-stone-50 transition-all">Speak to an Expert</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
