"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
    HeartPulse,
    Microscope,
    Activity,
    Stethoscope,
    ArrowRight,
    ShieldCheck,
    Zap,
    Crosshair
} from "lucide-react";

const capabilities = [
    {
        title: "Diagnostic Assistance",
        description: "AI-powered detection of abnormalities in medical imaging with high sensitivity.",
        icon: <Microscope className="w-6 h-6 text-emerald-500" />
    },
    {
        title: "Patient Monitoring",
        description: "Non-intrusive vision systems for detecting patient falls, distress, or movement in ICUs.",
        icon: <Activity className="w-6 h-6 text-emerald-500" />
    },
    {
        title: "Lab Automation",
        description: "Automated cell counting, sample sorting, and results verification for high-throughput labs.",
        icon: <HeartPulse className="w-6 h-6 text-emerald-500" />
    },
    {
        title: "Surgical Guidance",
        description: "Real-time tracking of surgical instruments and anatomical markers during procedures.",
        icon: <Crosshair className="w-6 h-6 text-emerald-500" />
    }
];

const useCases = [
    {
        title: "Automated Pill Inspection",
        industry: "Pharmaceutical",
        description: "Verifying pill shape, color, and integrity on high-speed packaging lines.",
        image: "/solutions/usecases/medical-pills.jpg",
        metric: "99.99% Reliable"
    },
    {
        title: "Pathology Slide Analysis",
        industry: "Clinical Lab",
        description: "Identifying cancerous cells in digital pathology slides with AI segmentation.",
        image: "/solutions/usecases/pathology.jpg",
        metric: "4x Faster Review"
    },
    {
        title: "Elderly Care Safety",
        industry: "Care Facilities",
        description: "Detecting falls or mobility issues without compromising resident privacy.",
        image: "/solutions/usecases/elderly-care.jpg",
        metric: "60% Quicker Help"
    }
];

export default function HealthcarePage() {
    return (
        <div className="min-h-screen bg-emerald-50/30 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-white overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-bold uppercase tracking-wider">Medical AI</div>
                                <div className="h-px w-8 bg-emerald-200" />
                                <span className="text-sm font-medium text-stone-500">HIPAA Compliant</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 mb-8 leading-tight">
                                Vision for a <br />
                                <span className="text-emerald-600 italic font-serif">Healthier Future</span>
                            </h1>
                            <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-xl">
                                Advancing patient care and clinical efficiency with medical-grade computer vision
                                and intelligent diagnostic support.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100">
                                    Request Whitepaper
                                </button>
                                <button className="px-10 py-4 bg-white text-emerald-900 border border-emerald-200 rounded-2xl font-bold hover:bg-emerald-50 transition-colors">
                                    Contact Specialist
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative p-4 md:p-8 bg-white rounded-[3rem] shadow-2xl border border-emerald-100">
                                <div className="aspect-video rounded-[2rem] overflow-hidden bg-stone-100 border-8 border-stone-50">
                                    <img
                                        src="/solutions/healthcare-medical.jpg"
                                        alt="AI Medical Diagnostics"
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent" />
                                </div>
                                {/* Clinical Metrics Overlays */}
                                <div className="mt-8 grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-emerald-600 font-black text-2xl">98%</div>
                                        <div className="text-[10px] font-bold text-stone-400 uppercase">Detection Sensitivity</div>
                                    </div>
                                    <div className="text-center border-x border-stone-100">
                                        <div className="text-emerald-600 font-black text-2xl">ISO</div>
                                        <div className="text-[10px] font-bold text-stone-400 uppercase">Level Certification</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-emerald-600 font-black text-2xl">-45%</div>
                                        <div className="text-[10px] font-bold text-stone-400 uppercase">Analysis Time</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Elements */}
            <section className="py-12 bg-white border-y border-stone-100 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 items-center opacity-50 grayscale">
                    {/* Simple placeholders for med logos */}
                    <div className="text-xl font-bold text-stone-500">BIO-TECH</div>
                    <div className="text-xl font-bold text-stone-500">HEALTHCORE</div>
                    <div className="text-xl font-bold text-stone-500">MED-SYS</div>
                    <div className="text-xl font-bold text-stone-500">LIFEVIEW</div>
                    <div className="text-xl font-bold text-stone-500">PHARMA-NEXT</div>
                </div>
            </section>

            {/* Clinical Capabilities */}
            <section className="py-24 px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-5xl font-bold text-stone-900 mb-6 underline decoration-emerald-200 decoration-8 underline-offset-4">Precision Capabilities</h2>
                        <p className="text-lg text-stone-500 max-w-2xl mx-auto">
                            Our models are trained on curated clinical datasets to ensure medical-grade reliability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {capabilities.map((item, i) => (
                            <div key={i} className="p-10 bg-emerald-50/20 rounded-[2.5rem] border border-emerald-100/50 hover:bg-white hover:shadow-2xl hover:border-emerald-200 transition-all group">
                                <div className="mb-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24 px-6 lg:px-8 bg-stone-950 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">Empowering Clinical <br />Workflows</h2>
                            <div className="space-y-12">
                                {useCases.map((useCase, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="hidden sm:block text-emerald-500 font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                                        <div>
                                            <h4 className="text-2xl font-bold mb-2 text-stone-100">{useCase.title}</h4>
                                            <p className="text-stone-400 mb-4">{useCase.description}</p>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-bold border border-emerald-500/20">
                                                <Zap className="w-3 h-3" />
                                                {useCase.metric}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                                <img
                                    src="/solutions/usecases/healthcare-workflow.jpg"
                                    alt="Clinical Workflow"
                                    className="w-full h-full object-cover grayscale brightness-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-full shadow-2xl border-4 border-stone-900 hidden lg:block">
                                <HeartPulse className="w-12 h-12 text-emerald-500 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <ShieldCheck className="w-16 h-16 text-emerald-500 mx-auto mb-8" />
                    <h2 className="text-4xl lg:text-6xl font-bold text-stone-900 mb-8 italic leading-[1.1]">Partner with VisioX for Clinical Excellence.</h2>
                    <p className="text-xl text-stone-500 mb-12 max-w-2xl mx-auto">
                        Discuss your medical vision requirements with our engineering team for HIPAA-compliant, high-performance integration.
                    </p>
                    <Link href="/contact" className="inline-block px-12 py-5 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-2xl hover:-translate-y-1">
                        Connect with Engineers
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
