"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/lib/auth";

export default function Header() {
    const { isLoggedIn } = useAuth();
    
    const productLinks = [
        { name: "DataHub", href: "/products/datahub" },
        { name: "Annotation", href: "/products/annotation" },
        { name: "Model Train", href: "/products/model-train" },
        { name: "Workflows", href: "/products/workflows" },
        { name: "Deploy", href: "/products/deploy" },
    ];

    const solutionLinks = [
        { name: "Manufacturing & Industrial", href: "/solutions/manufacturing-industrial" },
        { name: "Surveillance & Security", href: "/solutions/surveillance-security" },
        { name: "Transportation & Smart Cities", href: "/solutions/transportation-smart-cities" },
        { name: "Healthcare & Medical", href: "/solutions/healthcare-medical" },
        { name: "Retail & Commerce", href: "/solutions/retail-commerce" },
        { name: "Smart Agriculture", href: "/solutions/smart-agriculture" },
        { name: "Robotics & Automation", href: "/solutions/robotics-automation" },
        { name: "Logistics & Warehousing", href: "/solutions/logistics-warehousing" },
        { name: "Entertainment & Sports", href: "/solutions/entertainment-sports" },
    ];

    const aboutLinks = [
        { name: "Company", href: "/about/company" },
        { name: "Blog", href: "/about/blog" },
        { name: "Contact", href: "/about/contact" },
    ];

    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-stone-200"
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo (Refined text-based logo if png is missing) */}
                    <Link href="/">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="flex items-center space-x-2 cursor-pointer"
                        >
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
                                <span className="text-white font-black text-xl italic">V</span>
                            </div>
                            <span className="text-stone-900 font-bold text-xl tracking-tight">VisioX</span>
                        </motion.div>
                    </Link>

                    {/* Menu Items */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/">
                            <span className="text-stone-600 hover:text-[#FF7300] transition-colors cursor-pointer font-bold text-sm">Home</span>
                        </Link>

                        {/* Product Dropdown */}
                        <div className="relative group" onMouseEnter={() => setActiveDropdown('product')}>
                            <span className="text-stone-600 hover:text-[#FF7300] transition-colors cursor-pointer font-bold text-sm flex items-center gap-1">
                                Product
                                <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'product' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </span>
                            {activeDropdown === 'product' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute top-full -left-4 w-48 bg-white border border-stone-200 shadow-2xl rounded-xl p-2 mt-2"
                                >
                                    {productLinks.map((link) => (
                                        <Link key={link.name} href={link.href}>
                                            <span className="block px-4 py-2 text-xs font-bold text-stone-600 hover:bg-orange-50 hover:text-[#FF7300] rounded-lg transition-colors cursor-pointer">
                                                {link.name}
                                            </span>
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Solution Dropdown */}
                        <div className="relative group" onMouseEnter={() => setActiveDropdown('solution')}>
                            <Link href="/solutions">
                                <span className="text-stone-600 group-hover:text-[#FF7300] transition-colors cursor-pointer font-bold text-sm flex items-center gap-1">
                                    Solution
                                    <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'solution' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </span>
                            </Link>
                            {activeDropdown === 'solution' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute top-full -left-4 w-72 bg-white border border-stone-200 shadow-2xl rounded-xl p-2 mt-2"
                                >
                                    <div className="grid grid-cols-1 gap-1">
                                        {solutionLinks.slice(0, 6).map((link) => (
                                            <Link key={link.name} href={link.href}>
                                                <span className="block px-4 py-2 text-xs font-bold text-stone-600 hover:bg-orange-50 hover:text-[#FF7300] rounded-lg transition-colors cursor-pointer">
                                                    {link.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        <Link href="/about/blog">
                            <span className="text-stone-600 hover:text-[#FF7300] transition-colors cursor-pointer font-bold text-sm">Blog</span>
                        </Link>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex items-center space-x-6"
                    >
                        {isLoggedIn ? (
                            <Link href="/overview" className="hidden md:block text-stone-600 hover:text-[#FF7300] transition-colors font-bold text-sm">
                                Workspace
                            </Link>
                        ) : (
                            <Link href="/login" className="hidden md:block text-stone-600 hover:text-[#FF7300] transition-colors font-bold text-sm">
                                Sign In
                            </Link>
                        )}

                        <Link href={isLoggedIn ? "/overview" : "/login"}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#1c1917] hover:bg-stone-800 text-white px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-xl shadow-stone-900/10 font-bold text-sm"
                            >
                                <span>{isLoggedIn ? "Dashboard" : "Get Started"}</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
}
