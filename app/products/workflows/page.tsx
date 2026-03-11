"use client";

import { motion } from "framer-motion";
import BlueprintGrid from "@/components/BlueprintGrid";
import { 
  Zap, 
  ArrowUpRight, 
  CheckCircle2, 
  Workflow, 
  Layers, 
  Cpu, 
  Activity,
  MousePointer2,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function WorkflowsProductPage() {
  return (
    <div className="relative flex-1 flex flex-col min-h-screen bg-[#fcfaf7]">
      <BlueprintGrid />
      
      <main className="flex-grow pt-32 pb-20 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full mb-8">
                <Workflow className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 text-xs font-bold uppercase tracking-widest">Pipeline Intelligence</span>
              </div>
              <h1 className="text-6xl font-bold text-stone-900 leading-[1.1] mb-8">
                Build Visual Logic <br />
                <span className="text-[#6735E0]">Without Code.</span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed mb-10 max-w-xl">
                VisioX Workflows allows you to architect complex computer vision pipelines through a high-performance, node-based visual interface. Connect sources, models, and actions in seconds.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/workflows">
                  <button className="px-8 py-4 bg-[#1c1917] text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl flex items-center gap-2 group">
                    Enter Workspace <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <button className="px-8 py-4 bg-white border border-stone-200 text-stone-900 rounded-2xl font-bold hover:bg-stone-50 transition-all flex items-center gap-2">
                  Watch Demo <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Visualizer Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square lg:aspect-video bg-white rounded-[40px] border border-stone-200 shadow-2xl p-4 overflow-hidden perspective-1000"
            >
               <div className="absolute inset-0 bg-stone-50 opacity-50" />
               <div className="relative h-full border-2 border-dashed border-stone-200 rounded-[32px] flex items-center justify-center">
                  {/* Decorative Nodes */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-10 top-20 p-4 bg-white border border-stone-200 rounded-2xl shadow-xl w-48"
                  >
                     <div className="w-2 h-2 bg-green-500 rounded-full mb-2" />
                     <div className="h-2 w-24 bg-stone-100 rounded mb-1" />
                     <div className="h-2 w-16 bg-stone-50 rounded" />
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute right-10 bottom-20 p-4 bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl w-48"
                  >
                     <div className="w-2 h-2 bg-orange-500 rounded-full mb-2" />
                     <div className="h-2 w-24 bg-stone-500 rounded mb-1" />
                     <div className="h-2 w-16 bg-stone-700 rounded" />
                  </motion.div>

                  <svg className="absolute inset-0 w-full h-full">
                     <motion.path 
                       d="M 230 140 Q 400 140, 450 300"
                       stroke="#FF7300"
                       strokeWidth="2"
                       fill="none"
                       strokeDasharray="10 5"
                       animate={{ strokeDashoffset: [0, -20] }}
                       transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     />
                  </svg>
                  
                  <div className="flex flex-col items-center gap-4 text-stone-400">
                     <MousePointer2 className="w-8 h-8 animate-bounce" />
                     <span className="text-sm font-bold uppercase tracking-widest text-stone-300">Drag & Drop Builder</span>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
             {[
               { title: "Zero Latency", desc: "Our visual compiler optimizes nodes into raw C++ for sub-millisecond execution.", icon: Zap },
               { title: "Infinite Scaling", desc: "Deploy your workflows across vast edge networks with a single click.", icon: Layers },
               { title: "Auto-Tune AI", desc: "Built-in Bayesian optimization automatically adjusts thresholds for max accuracy.", icon: Activity },
             ].map((f, i) => (
               <div key={i} className="bg-white p-10 rounded-[40px] border border-stone-100 shadow-sm group hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-600 group-hover:bg-orange-500 group-hover:text-white transition-all mb-6">
                     <f.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">{f.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{f.desc}</p>
               </div>
             ))}
          </div>

          {/* Technical Section */}
          <div className="bg-[#1c1917] rounded-[64px] p-16 text-white overflow-hidden relative">
             <div className="relative z-10 max-w-4xl">
                <h2 className="text-4xl font-bold mb-12">The World's Most Powerful <br /> <span className="text-orange-500 text-5xl">Visual Engine.</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-8">
                      <div className="flex gap-6">
                         <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                            <Cpu className="w-6 h-6 text-orange-500" />
                         </div>
                         <div>
                            <h4 className="font-bold text-xl mb-2">Native Hardware Support</h4>
                            <p className="text-stone-400 text-sm">Full acceleration for NVIDIA TensorRT, OpenVINO, and CoreML targets.</p>
                         </div>
                      </div>
                      <div className="flex gap-6">
                         <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                         </div>
                         <div>
                            <h4 className="font-bold text-xl mb-2">Validation Suite</h4>
                            <p className="text-stone-400 text-sm">Real-time linting and flow validation prevent logical errors before they deploy.</p>
                         </div>
                      </div>
                   </div>
                   
                   <div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-center">
                      <p className="text-lg text-stone-300 italic mb-6 leading-relaxed">
                        "The ability to visually map our entire production line's logic with VisioX reduced our development cycle from weeks to hours."
                      </p>
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-orange-500 rounded-full" />
                         <div>
                            <p className="font-bold">Sarah Chen</p>
                            <p className="text-stone-500 text-xs uppercase tracking-widest">Lead Vision Engineer, AutoFlow</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Background glow */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6735E0]/10 rounded-full blur-[150px] -mr-64 -mt-64" />
          </div>
        </div>
      </main>
    </div>
  );
}
