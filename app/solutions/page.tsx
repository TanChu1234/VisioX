"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

const solutions = [
    {
        title: "Manufacturing & Industrial",
        description: "Streamline production lines with AI-powered inspection, assembly verification, and predictive maintenance.",
        image: "/solutions/manufacturing.png",
        href: "/solutions/manufacturing-industrial",
        color: "from-blue-600 to-cyan-400"
    },
    {
        title: "Surveillance & Security",
        description: "Advanced threat detection, perimeter security, and real-time monitoring for safer environments.",
        image: "/solutions/surveillance.png",
        href: "/solutions/surveillance-security",
        color: "from-slate-700 to-slate-900"
    },
    {
        title: "Transportation & Smart Cities",
        description: "Optimize traffic flow, autonomous vehicle navigation, and intelligent public infrastructure monitoring.",
        image: "/solutions/transportation.png",
        href: "/solutions/transportation-smart-cities",
        color: "from-orange-600 to-amber-400"
    },
    {
        title: "Healthcare & Medical",
        description: "AI-assisted diagnostics, surgical robot guidance, and patient monitoring for improved health outcomes.",
        image: "/solutions/healthcare.png",
        href: "/solutions/healthcare-medical",
        color: "from-emerald-500 to-teal-400"
    },
    {
        title: "Retail & Commerce",
        description: "Transform shopping experiences with automated checkout, shelf-stock analysis, and customer insights.",
        image: "/solutions/retail.png",
        href: "/solutions/retail-commerce",
        color: "from-rose-500 to-pink-400"
    },
    {
        title: "Robotics & Automation",
        description: "Seamlessly integrate vision-guided robots for bin picking, palletizing, and warehouse logistics.",
        image: "/solutions/robotics.png",
        href: "/solutions/robotics-automation",
        color: "from-violet-600 to-purple-400"
    },
    {
        title: "Smart Agriculture",
        description: "Maximize yields with crop health monitoring, precision irrigation, and automated harvesting systems.",
        image: "/solutions/agriculture.png",
        href: "/solutions/smart-agriculture",
        color: "from-green-600 to-lime-400"
    },
    {
        title: "Logistics & Warehousing",
        description: "Efficient sorting, package tracking, and automated storage and retrieval using intelligent vision.",
        image: "/solutions/logistics.png",
        href: "/solutions/logistics-warehousing",
        color: "from-indigo-600 to-blue-400"
    },
    {
        title: "Entertainment & Sports",
        description: "Enhanced viewer experiences through player tracking, AR broadcasts, and fan engagement tools.",
        image: "/solutions/entertainment.png",
        href: "/solutions/entertainment-sports",
        color: "from-yellow-500 to-orange-400"
    }
];

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-[#fcfaf7]">
            {/* Hero Section */}
            <section className="min-h-[80vh] flex items-center px-6 lg:px-8 bg-white border-b border-stone-100 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-orange-600 uppercase bg-orange-50 rounded-full border border-orange-100">
                            Industry Applications
                        </span>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-stone-900 mb-8 tracking-tight leading-tight">
                            Intelligent Solutions for{" "}
                            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                                Every Sector
                            </span>
                        </h1>
                        <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-12">
                            Explore how VisioX's cutting-edge computer vision platform transforms industries,
                            automates complex tasks, and unlocks unprecedented visual insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/demo" className="px-12 py-5 bg-stone-900 text-white rounded-full font-bold transition-all hover:-translate-y-1 shadow-2xl text-center w-full sm:w-auto">
                                Book a Demo
                            </Link>
                            <Link href="/contact" className="px-12 py-5 bg-white text-stone-900 border border-stone-200 rounded-full font-bold hover:bg-stone-50 transition-all shadow-sm text-center w-full sm:w-auto">
                                Contact Sales
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link href={solution.href} className="group block h-full bg-white rounded-3xl border border-stone-200 overflow-hidden hover:shadow-2xl hover:border-orange-200 transition-all duration-500">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        {/* Background fallback gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-20`} />

                                        {/* Image */}
                                        <img
                                            src={solution.image}
                                            alt={solution.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                                        {/* Tag */}
                                        <div className="absolute top-4 left-4">
                                            <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold text-stone-900 shadow-sm border border-stone-100">
                                                {solution.title.split(' & ')[0]}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
                                            {solution.title}
                                        </h3>
                                        <p className="text-stone-600 leading-relaxed mb-6">
                                            {solution.description}
                                        </p>
                                        <div className="flex items-center text-orange-600 font-bold group-hover:gap-2 transition-all">
                                            <span>View details</span>
                                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 lg:px-8 bg-stone-900">
                <div className="max-max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 p-12 lg:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Didn't find what you're looking for?</h2>
                        <p className="text-xl mb-10 text-white/90">
                            Our platform is highly customizable. Contact our team to discuss your specific industry needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/contact" className="px-12 py-5 bg-white text-orange-600 rounded-full font-bold hover:bg-stone-50 transition-all shadow-xl w-full sm:w-auto text-center">
                                Contact Sales
                            </Link>
                            <Link href="/demo" className="px-12 py-5 bg-orange-600/20 text-white rounded-full font-bold hover:bg-orange-600/30 transition-all border border-white/20 w-full sm:w-auto text-center">
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
