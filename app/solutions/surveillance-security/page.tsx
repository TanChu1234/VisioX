
"use client";

import BlueprintGrid from "@/components/BlueprintGrid";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Zap, Shield, Target, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative flex-1 flex flex-col overflow-hidden bg-[#fcfaf7]">
      <BlueprintGrid />
      
      <main className="flex-grow p-8 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-stone-400 text-[10px] font-bold uppercase tracking-widest mb-8">
            <Link href="/" className="hover:text-stone-900 transition-colors">Workspace</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-900">Solutions</span>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                <Zap className="w-4 h-4" />
                <span>Industry Solution</span>
              </div>
              <h1 className="text-5xl font-bold text-stone-900 leading-[1.1] mb-6">
                Optimizing <br /><span className="text-[#6735E0]">Surveillance & Security</span> <br />with Vision AI.
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed mb-8 max-w-lg">
                VisioX provides the critical intelligence layer for surveillance & security, transforming visual data into actionable operational insights.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-[#1c1917] text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-white border border-stone-200 text-stone-900 rounded-2xl font-bold hover:bg-stone-50 transition-all flex items-center gap-2">
                  View Demo <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl border-8 border-white group"
            >
              <img src="https://images.unsplash.com/photo-1557597774-9d2739f85a94?q=80&w=800" alt="Surveillance & Security" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white italic text-sm">
                "VisioX has fundamentally changed how we monitor our surveillance & security environments."
              </div>
            </motion.div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { label: "Efficiency Boost", value: "+38%", icon: Zap },
              { label: "AI Precision", value: "99.4%", icon: Target },
              { label: "Compliance", value: "SOC2", icon: Shield },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="bg-white p-8 rounded-[40px] border border-stone-100 shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-orange-500 mx-auto mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-stone-900 mb-1">{stat.value}</h3>
                <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="bg-[#1c1917] rounded-[56px] p-16 text-white relative overflow-hidden">
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                   <h2 className="text-4xl font-bold mb-8">Core Capabilities</h2>
                   <div className="space-y-6">
                      {[
                        "Continuous real-time visual monitoring",
                        "High-accuracy anomaly detection engines",
                        "Multi-tenant data isolation and privacy",
                        "One-click edge device synchronization",
                      ].map((feature, i) => (
                        <div key={i} className="flex items-start gap-4">
                           <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center grow-0 shrink-0 mt-1">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                           </div>
                           <p className="text-stone-300 font-medium leading-relaxed">{feature}</p>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="flex flex-col justify-center">
                   <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-sm">
                      <p className="text-stone-400 text-sm mb-8 leading-relaxed">
                        Ready to accelerate your surveillance & security digital transformation? 
                        Speak with our industry experts today.
                      </p>
                      <button className="w-full py-4 bg-orange-500 rounded-2xl font-bold hover:bg-orange-600 hover:scale-[1.02] transition-all shadow-xl shadow-orange-500/10">
                        Request Strategy Session
                      </button>
                   </div>
                </div>
             </div>
             
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6735E0]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
          </div>
        </div>
      </main>
    </div>
  );
}
