"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
    Trophy,
    Gamepad2,
    Camera,
    Users,
    ArrowRight,
    Sparkles,
    PlayCircle,
    Zap
} from "lucide-react";

const capabilities = [
    {
        title: "Player Analytics",
        description: "High-precision tracking of player movement, velocity, and biomechanics for elite performance insights.",
        icon: <Trophy className="w-6 h-6 text-yellow-500" />
    },
    {
        title: "AR Broadcast Overlays",
        description: "Real-time visual effects and statistical overlays synced perfectly with live broadcast feeds.",
        icon: <Sparkles className="w-6 h-6 text-yellow-500" />
    },
    {
        title: "Interactive Experiences",
        description: "Gesture and posture recognition for theme parks, VR attractions, and interactive marketing.",
        icon: <Gamepad2 className="w-6 h-6 text-yellow-500" />
    },
    {
        title: "Crowd Insights",
        description: "Analyze fan engagement, sentiment, and dwell times during live events and concerts.",
        icon: <Users className="w-6 h-6 text-yellow-500" />
    }
];

const useCases = [
    {
        title: "Grand Slam Analytics",
        sport: "Tennis / ATP",
        description: "Ball tracking and player heatmaps for broadcast performance analysis.",
        image: "/solutions/usecases/sports-tennis.jpg",
        metric: "Sub-1cm Precision"
    },
    {
        title: "Smart Theme Park",
        sport: "Attractions",
        description: "Automated photo-capture and interactive gesture-based games for visitors.",
        image: "/solutions/usecases/theme-park.jpg",
        metric: "100k+ Visitors/Mo"
    },
    {
        title: "Virtual Film Studio",
        sport: "VFX / Production",
        description: "Real-time markerless motion capture for virtual character animation.",
        image: "/solutions/usecases/vfx-studio.jpg",
        metric: "-70% MoCap Costs"
    }
];

export default function EntertainmentPage() {
    return (
        <div className="min-h-screen bg-[#fffdf5] overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 lg:px-8 bg-white border-b border-yellow-50 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-xs font-black uppercase tracking-widest mb-10 border border-yellow-200">
                                <PlayCircle className="w-4 h-4" /> Next-Gen Engagement
                            </div>
                            <h1 className="text-6xl lg:text-[10rem] font-black text-stone-900 mb-10 tracking-tighter leading-[0.85] uppercase">
                                The Edge of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-rose-500">
                                    Sensation.
                                </span>
                            </h1>
                            <p className="text-2xl text-stone-600 mb-12 leading-relaxed max-w-2xl mx-auto italic">
                                Where high-performance vision meets the thrill of the moment. We power the technical heart of
                                modern entertainment and elite sports.
                            </p>
                            <div className="flex flex-wrap gap-6 justify-center">
                                <button className="px-12 py-5 bg-stone-900 text-white rounded-[2rem] font-black text-lg hover:bg-stone-800 transition-all shadow-2xl hover:-translate-y-1">
                                    Enhance Your Stadium
                                </button>
                                <button className="px-12 py-5 bg-white text-yellow-600 border-2 border-yellow-100 rounded-[2rem] font-black text-lg hover:bg-yellow-50 transition-colors">
                                    Join Partner Network
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-20 relative aspect-[21/9] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-8 border-white group"
                    >
                        <img
                            src="/solutions/entertainment-sports.jpg"
                            alt="Sports Vision Intelligence"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 cursor-pointer hover:scale-110 transition-transform">
                                <PlayCircle className="w-12 h-12 text-white" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Dynamic Grid */}
            <section className="py-32 px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="grid grid-cols-2 gap-4">
                            {capabilities.map((item, i) => (
                                <div key={i} className="p-8 bg-yellow-50/50 rounded-[3rem] border border-yellow-100 hover:bg-white hover:shadow-2xl transition-all group">
                                    <div className="mb-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-black text-stone-900 mb-3 tracking-tight">{item.title}</h3>
                                    <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-none italic uppercase">Don't Just Watch. <br />Experience.</h2>
                            <p className="text-xl text-stone-600 mb-10 leading-relaxed">
                                VisioX transforms raw broadcast and arena data into immersive assets,
                                providing athletes with the data they need to win—and fans with
                                the experiences they never forget.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <div className="font-bold text-stone-900">Markerless tracking tech</div>
                                </div>
                                <div className="flex items-center gap-4 opacity-70">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <div className="font-bold text-stone-900">Millisecond sync latency</div>
                                </div>
                                <div className="flex items-center gap-4 opacity-40">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <div className="font-bold text-stone-900">Scalable to full-stadium deployments</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-32 px-6 lg:px-8 bg-[#151515] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl lg:text-7xl font-black mb-6 italic tracking-tight">Visions of Victory</h2>
                        <div className="w-24 h-2 bg-yellow-500 mx-auto" />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {useCases.map((useCase, i) => (
                            <div key={i} className="flex flex-col group">
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5">
                                    <img src={useCase.image} alt={useCase.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                    <div className="absolute bottom-10 left-10">
                                        <div className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.2em] mb-2">{useCase.sport}</div>
                                        <h3 className="text-3xl font-black italic tracking-tighter uppercase">{useCase.title}</h3>
                                    </div>
                                </div>
                                <p className="text-stone-400 mb-6 leading-relaxed px-4">{useCase.description}</p>
                                <div className="flex items-center gap-3 text-yellow-500 font-bold px-4">
                                    <Zap className="w-5 h-5" />
                                    <span className="text-xl uppercase tracking-widest">{useCase.metric}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-stone-900 font-black text-9xl opacity-5 mb-10 select-none">NEXT</div>
                    <h2 className="text-5xl lg:text-8xl font-black text-stone-900 mb-12 tracking-tight">Ready for the <br />main stage?</h2>
                    <p className="text-2xl text-stone-500 mb-16 max-w-xl mx-auto">
                        Elevate your entertainment venue or broadcast capabilities with high-performance
                        vision AI from VisioX.
                    </p>
                    <button className="px-16 py-6 bg-yellow-500 text-stone-900 rounded-full font-black text-xl hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_20px_50px_rgba(234,179,8,0.3)]">
                        Get in the Game
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}

