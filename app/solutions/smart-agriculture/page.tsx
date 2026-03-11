"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
    Leaf,
    Sprout,
    CloudSun,
    Droplets,
    ArrowRight,
    Target,
    Scan,
    TrendingUp
} from "lucide-react";

const capabilities = [
    {
        title: "Crop Health Monitoring",
        description: "Multispectral analysis to detect early signs of stress, nutrient deficiency, or disease.",
        icon: <Leaf className="w-6 h-6 text-green-500" />
    },
    {
        title: "Yield Prediction",
        description: "High-accuracy fruit counting and size estimation for precise harvest forecasting.",
        icon: <TrendingUp className="w-6 h-6 text-green-500" />
    },
    {
        title: "Automated Harvesting",
        description: "Vision guidance for robotic harvesters to identify and pick ripe produce without damage.",
        icon: <Sprout className="w-6 h-6 text-green-500" />
    },
    {
        title: "Precision Spraying",
        description: "Targeted application of fertilizers and pesticides only where needed, reducing waste.",
        icon: <Droplets className="w-6 h-6 text-green-500" />
    }
];

const useCases = [
    {
        title: "Drone Vineyard Analysis",
        location: "Napa Valley, USA",
        description: "Autonomous aerial mapping to optimize irrigation and detect vine diseases.",
        image: "/solutions/usecases/agri-drone.jpg",
        metric: "20% Water Saved"
    },
    {
        title: "Apple Grading Facility",
        location: "Kent, UK",
        description: "Automated classification of apples by color, size, and external defects.",
        image: "/solutions/usecases/apple-sorting.jpg",
        metric: "12 tons/hr Flow"
    },
    {
        title: "Greenhouse Monitoring",
        location: "Netherlands",
        description: "Fixed camera systems tracking plant growth rates and climate response.",
        image: "/solutions/usecases/greenhouse.jpg",
        metric: "+15% Yield Increase"
    }
];

export default function AgriculturePage() {
    return (
        <div className="min-h-screen bg-[#fafcf9] overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 lg:px-8 bg-white border-b border-green-50 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-lime-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-green-100">
                                <CloudSun className="w-4 h-4" /> Eco-Positive AI
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 mb-8 leading-[1.1]">
                                Precision AI for <br />
                                <span className="text-green-600 italic">Sustainable Yields</span>
                            </h1>
                            <p className="text-xl text-stone-600 mb-12 leading-relaxed max-w-xl">
                                Bridging the gap between traditional farming and high-tech agriculture with
                                visual intelligence that monitors every sprout and fruit.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-10 py-5 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-100">
                                    Join the Green Revolution
                                </button>
                                <button className="px-10 py-5 bg-white text-green-700 border border-green-200 rounded-2xl font-bold hover:bg-green-50 transition-colors">
                                    Download Agri-Tech Report
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="/solutions/smart-agriculture.jpg"
                                    alt="Smart Agriculture System"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-green-950/20 to-transparent" />

                                {/* Plant Analysis Markers */}
                                <div className="absolute inset-0 p-12">
                                    <div className="absolute top-1/4 left-1/4 group cursor-help">
                                        <div className="w-6 h-6 bg-lime-400 rounded-full border-2 border-white animate-bounce shadow-lg" />
                                        <div className="absolute top-8 left-0 bg-white/90 backdrop-blur p-2 rounded-lg text-[10px] font-bold text-stone-900 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                                            LEAF_NOD_OK: [99.2%]
                                        </div>
                                    </div>
                                    <div className="absolute bottom-1/3 right-1/2 group cursor-help">
                                        <div className="w-6 h-6 bg-red-400 rounded-full border-2 border-white shadow-lg" />
                                        <div className="absolute top-8 left-0 bg-white/90 backdrop-blur p-2 rounded-lg text-[10px] font-bold text-stone-900 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            WATER_STRESS: [HIGH]
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-32 px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-24">
                        <h2 className="text-4xl lg:text-6xl font-bold text-stone-900 mb-8 leading-tight">Digital Eyes in <br />the Field.</h2>
                        <p className="text-xl text-stone-500 leading-relaxed">
                            Our computer vision platform is ruggedized for outdoor environments,
                            operating across varying light conditions and weather patterns.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.map((item, i) => (
                            <div key={i} className="p-10 bg-green-50/30 rounded-[3rem] border border-green-100/50 hover:bg-white hover:shadow-2xl hover:border-green-200 transition-all group">
                                <div className="mb-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-green-600 transition-all duration-300">
                                    <div className="group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-4">{item.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sustainable Section */}
            <section className="py-32 px-6 lg:px-8 bg-[#1a2c1d] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-7xl font-bold mb-10 leading-none">Optimize Every <br />Square Meter.</h2>
                            <div className="space-y-8">
                                {[
                                    { label: "Efficiency Boost", val: "+30%", desc: "Increase in labor efficiency via automated harvest guidance." },
                                    { label: "Waste Reduction", val: "-40%", desc: "Reduction in pesticide and herbicide usage via targeted spraying." },
                                    { label: "Data Quality", val: "95%", desc: "Prediction accuracy for maturity grading and size estimation." }
                                ].map((stat, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="text-4xl font-black text-green-500 opacity-30 group-hover:opacity-100 transition-opacity">{stat.val}</div>
                                        <div>
                                            <div className="text-xl font-bold text-stone-100 mb-1">{stat.label}</div>
                                            <div className="text-stone-400 text-sm">{stat.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {useCases.map((useCase, i) => (
                                <div key={i} className={`rounded-[2.5rem] overflow-hidden group relative ${i === 2 ? 'col-span-2 aspect-[21/9]' : 'aspect-square'}`}>
                                    <img src={useCase.image} alt={useCase.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="text-[10px] font-bold text-green-400 uppercase tracking-widest mb-1">{useCase.location}</div>
                                        <h4 className="text-lg font-bold text-white mb-2">{useCase.title}</h4>
                                        <div className="text-xl font-black text-green-500">{useCase.metric}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <Sprout className="w-20 h-20 text-green-500 mx-auto mb-10" />
                    <h2 className="text-5xl lg:text-7xl font-bold text-stone-900 mb-8 tracking-tighter">Ready to grow smarter?</h2>
                    <p className="text-2xl text-stone-500 mb-16 max-w-2xl mx-auto">
                        Our agriculture AI experts are ready to help you deploy visual intelligence
                        across your fields or facility.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contact" className="px-12 py-5 bg-stone-900 text-white rounded-3xl font-black hover:bg-stone-800 transition-all shadow-2xl">
                            Schedule a Site Visit
                        </Link>
                        <Link href="/demo" className="px-12 py-5 bg-white text-stone-900 border-2 border-stone-100 rounded-3xl font-black hover:bg-stone-50 transition-all">
                            Virtual Demo
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
