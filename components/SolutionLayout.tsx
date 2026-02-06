"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

interface Stat {
    label: string;
    value: string;
}

interface Capability {
    title: string;
    description: string;
    icon: ReactNode;
}

interface UseCase {
    title: string;
    tech?: string; // specific to robotics style
    industry?: string; // alternative label
    description: string;
    image: string;
    metric: string;
}

type ColorTheme = "orange";

interface SolutionLayoutProps {
    colorTheme?: ColorTheme;
    hero: {
        badge: string;
        title: ReactNode; // Allows gradient spans
        description: string;
        image: string;
        videoUrl?: string; // New field for background video
        stats: Stat[];
        ctaButtons: {
            primary: { text: string; href: string };
            secondary: { text: string; href: string };
        };
    };
    capabilities: {
        title?: string;
        description?: string;
        items: Capability[];
    };
    useCases: {
        title?: string;
        description?: string;
        items: UseCase[];
    };
    cta: {
        icon: ReactNode;
        title: ReactNode;
        description: string;
        buttons: {
            primary: { text: string; onClick?: () => void };
            secondary: { text: string; onClick?: () => void };
        };
    };
}

const themeStyles: Record<ColorTheme, any> = {
    orange: {
        accent: "orange",
        bgGradient: "from-orange-100/50",
        blob: "bg-amber-100/30",
        textGradient: "from-orange-600 via-amber-600 to-yellow-600",
        button: "bg-gradient-to-r from-orange-600 to-orange-400 hover:scale-105 active:scale-95 hover:from-orange-400 hover:to-orange-300",
        border: "border-orange-200",
        iconBg: "bg-orange-50",
        iconText: "text-orange-600",
        subText: "text-orange-600",
    },
};

export default function SolutionLayout({
    colorTheme = "orange",
    hero,
    capabilities,
    useCases,
    cta,
}: SolutionLayoutProps) {
    const theme = themeStyles[colorTheme];


    return (
        <div className="min-h-screen bg-[#fafafa] text-stone-900 overflow-x-hidden selection:bg-stone-900/10">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 pb-20 px-6 lg:px-8 overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className={`absolute top-0 right-0 w-[1000px] h-[1000px] ${theme.bgGradient} rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2`} />
                    <div className={`absolute top-1/2 left-0 w-[600px] h-[600px] ${theme.blob} rounded-full blur-[140px] -translate-x-1/2`} />
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Hero Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className={`w-12 h-px bg-${theme.accent}-500 transition-colors`} />
                                <span className={`text-sm font-bold uppercase tracking-[0.2em] ${theme.subText} transition-colors`}>{hero.badge}</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight tracking-tight">
                                {hero.title}
                            </h1>
                            <p className="text-xl text-stone-600 mb-12 leading-relaxed max-w-xl">
                                {hero.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    href={hero.ctaButtons.primary.href}
                                    className={`px-12 py-5 ${theme.button} text-white rounded-full transition-all duration-300 font-bold shadow-xl shadow-orange-600/30 text-center`}
                                >
                                    {hero.ctaButtons.primary.text}
                                </Link>
                                <Link
                                    href={hero.ctaButtons.secondary.href}
                                    className="px-12 py-5 bg-white hover:bg-stone-100 hover:scale-105 active:scale-95 
                                    text-stone-900 rounded-full transition-all duration-300 font-bold 
                                    border border-stone-200 shadow-sm text-center"
                                >
                                    {hero.ctaButtons.secondary.text}
                                </Link>
                            </div>
                        </motion.div>

                        {/* Hero Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className={`aspect-square rounded-[4rem] border ${theme.border} bg-white p-8 shadow-2xl shadow-stone-200/50 overflow-hidden group transition-colors`}>
                                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                                    {hero.videoUrl ? (
                                        <video
                                            src={hero.videoUrl}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    ) : (
                                        <img
                                            src={hero.image}
                                            alt="Solution Visual"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    )}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent`} />
                                    {/* UI Elements */}
                                    <div className="absolute inset-0 border-[20px] border-white/10" />
                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-${theme.accent}-400/30 rounded-full animate-ping opacity-20`} />
                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-${theme.accent}-500 rounded-full shadow-[0_0_20px_currentColor] text-${theme.accent}-500`} />
                                </div>
                            </div>

                            {/* Floating Stats */}
                            {hero.stats[0] && (
                                <div className="absolute top-12 -right-6 p-6 bg-white/90 backdrop-blur border border-stone-100 rounded-3xl shadow-xl shadow-stone-200/50 space-y-2 hidden lg:block">
                                    <div className={`text-[10px] font-bold ${theme.subText} uppercase`}>{hero.stats[0].label}</div>
                                    <div className="text-2xl font-bold text-stone-900">{hero.stats[0].value}</div>
                                </div>
                            )}
                            {hero.stats.length > 1 && (
                                <div className="absolute -bottom-6 left-12 p-6 bg-white/90 backdrop-blur border border-stone-100 rounded-3xl shadow-xl shadow-stone-200/50 flex gap-6 hidden sm:flex">
                                    {hero.stats.slice(1).map((stat, i) => (
                                        <div key={i} className="flex gap-6">
                                            {i > 0 && <div className="w-px h-10 bg-stone-100 mt-2" />}
                                            <div>
                                                <div className={`text-[10px] font-bold ${theme.subText} text-center uppercase`}>{stat.label}</div>
                                                <div className="text-2xl font-bold text-stone-900">{stat.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-26 px-6 lg:px-8 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className={`text-3xl lg:text-6xl font-bold mb-6 tracking-tight decoration-${theme.accent}-600 decoration-8 underline-offset-8 transition-colors`}>
                            {capabilities.title || "Core Intelligence"}
                        </h2>
                        <p className="text-xl text-stone-500 max-w-2xl mx-auto">
                            {capabilities.description}
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                        {capabilities.items.map((item, i) => (
                            <div key={i} className={`group p-10 bg-white rounded-[3rem] border border-stone-100 hover:border-${theme.accent}-500/30 hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500`}>
                                <div className={`mb-8 w-16 h-16 ${theme.iconBg} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                                    <div className={`${theme.iconText} transition-colors`}>{item.icon}</div>
                                </div>
                                <h3 className={`text-xl font-bold mb-4 group-hover:${theme.iconText} transition-colors uppercase tracking-tight text-stone-900`}>{item.title}</h3>
                                <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
``
            {/* Use Cases Section */}
            <section className="py-32 px-6 lg:px-8 bg-stone-100/50 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-20">
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">{useCases.title || "Success Stories"}</h2>
                            <p className="text-stone-500 mt-4">{useCases.description || "Deployments across the globe."}</p>
                        </div>
                        <Link href="/contact" className={`hidden md:flex items-center gap-2 ${theme.subText} font-bold hover:gap-4 transition-all`}>
                            Request Case Brief <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {useCases.items.map((useCase, i) => (
                            <div key={i} className={`group flex flex-col bg-white rounded-[3rem] overflow-hidden border border-stone-200/50 hover:shadow-2xl transition-all`}>
                                <div className="relative h-64 overflow-hidden">
                                    <div className={`absolute inset-0 bg-${theme.accent}-900/10 group-hover:bg-transparent transition-colors z-10`} />
                                    <img
                                        src={useCase.image}
                                        alt={useCase.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                    />
                                    <div className={`absolute top-6 left-6 z-20 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-[10px] font-black tracking-widest ${theme.subText} border border-stone-200 uppercase`}>
                                        {useCase.tech || useCase.industry}
                                    </div>
                                </div>
                                <div className="p-10">
                                    <h3 className="text-xl font-bold mb-4 text-stone-900">{useCase.title}</h3>
                                    <p className="text-stone-600 text-sm mb-10 leading-relaxed">{useCase.description}</p>
                                    <div className="flex items-center gap-4 py-6 border-t border-stone-100">
                                        <CheckCircle2 className={`w-6 h-6 text-${theme.accent}-500`} />
                                        <div className="text-xl font-bold text-stone-900">{useCase.metric}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 px-6 relative overflow-hidden">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl ${theme.bgGradient} rounded-full blur-[200px] pointer-events-none`} />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className={`w-20 h-20 text-${theme.accent}-500 mx-auto mb-12`}>
                        {cta.icon}
                    </div>
                    <h2 className="text-4xl lg:text-7xl font-bold mb-12 tracking-tight text-stone-900 leading-tight">
                        {cta.title}
                    </h2>
                    <p className="text-2xl text-stone-600 mb-16 leading-relaxed">
                        {cta.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            onClick={cta.buttons.primary.onClick}
                            className={`px-12 py-5 bg-stone-900 text-white rounded-full font-bold transition-all hover:${theme.button} shadow-xl w-full sm:w-auto`}
                        >
                            {cta.buttons.primary.text}
                        </button>
                        <button
                            onClick={cta.buttons.secondary.onClick}
                            className="px-12 py-5 bg-white text-stone-900 border border-stone-200 rounded-full font-bold hover:bg-stone-50 transition-all shadow-sm w-full sm:w-auto"
                        >
                            {cta.buttons.secondary.text}
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
