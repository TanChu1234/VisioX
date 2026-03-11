"use client";

import { motion } from "framer-motion";
import BlueprintGrid from "@/components/BlueprintGrid";
import { 
  Globe, 
  Terminal, 
  Copy, 
  Check, 
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Zap,
  Cpu,
  Smartphone,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

export default function DeployPage() {
  const [copied, setCopied] = useState(false);
  const endpoint = "https://api.visiox.ai/v1/predict/safety-ppe-v4";

  const handleCopy = () => {
    navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex-1 flex flex-col min-h-screen">
      <BlueprintGrid />
      
      <main className="flex-grow p-8 z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">
              <span>Workspace</span>
              <span>/</span>
              <span className="text-stone-900">Deployment</span>
            </div>
            <h1 className="text-4xl font-bold text-stone-900 tracking-tight">Cloud & Edge Deploy</h1>
          </div>

          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 px-6 py-2.5 bg-orange-500 text-white rounded-xl font-bold text-sm shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all">
                <Globe className="w-4 h-4" />
                <span>New Endpoint</span>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Endpoint Details */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
               <div className="flex justify-between items-start mb-8">
                  <div>
                     <h2 className="text-xl font-bold text-stone-900 mb-1">Safety-PPE-Model v4</h2>
                     <p className="text-xs font-medium text-stone-500 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                        Live in US-East-1 (Active)
                     </p>
                  </div>
                  <div className="flex bg-stone-100 rounded-xl p-1">
                     <button className="px-4 py-1.5 bg-white text-[#FF7300] shadow-sm rounded-lg text-xs font-bold transition-all">REST API</button>
                     <button className="px-4 py-1.5 text-stone-500 hover:text-stone-900 text-xs font-bold transition-all">WebSocket</button>
                  </div>
               </div>

               <div className="space-y-4">
                  <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">API Endpoint</label>
                  <div className="relative group">
                    <div className="flex items-center justify-between p-4 bg-stone-50 border border-stone-200 rounded-2xl font-mono text-sm text-stone-600 overflow-hidden pr-20">
                      <span className="truncate">{endpoint}</span>
                    </div>
                    <button 
                      onClick={handleCopy}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-white border border-stone-200 text-stone-600 rounded-xl hover:text-orange-500 transition-all shadow-sm"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
               </div>

               <div className="mt-10">
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Example Request (Python)</label>
                    <button className="text-[10px] font-bold text-orange-500 flex items-center gap-1 hover:underline">
                       <Terminal className="w-3 h-3" />
                       View Documentation
                    </button>
                  </div>
                  <div className="bg-[#1c1917] rounded-2xl p-6 font-mono text-xs text-stone-300 leading-relaxed shadow-inner">
                    <p><span className="text-purple-400">import</span> visiox</p>
                    <p><span className="text-purple-400">from</span> visiox.deploy <span className="text-purple-400">import</span> Model</p>
                    <p className="mt-2 text-stone-500"># Connect to endpoint</p>
                    <p>model = Model(<span className="text-orange-300">"safety-ppe-v4"</span>, api_key=<span className="text-orange-300">"vx_live_..."</span>)</p>
                    <p className="mt-2 text-stone-500"># Run inference</p>
                    <p>predictions = model.predict(<span className="text-orange-300">"image.jpg"</span>, confidence=<span className="text-green-400">0.45</span>)</p>
                    <p>print(predictions.to_json())</p>
                  </div>
               </div>
            </div>

            {/* Platform Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { title: "Hosted API", icon: Zap, status: "Active", latency: "14ms", desc: "Auto-scalable cloud clusters" },
                 { title: "Edge Native", icon: Cpu, status: "Ready", latency: "2ms", desc: "NVIDIA Jetson / OAK-D" },
                 { title: "Mobile SDK", icon: Smartphone, status: "Beta", latency: "12ms", desc: "iOS CoreML & Android TFLite" },
               ].map((item, i) => (
                 <div key={i} className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-4">
                       <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-stone-400 group-hover:text-orange-500 group-hover:bg-orange-50 transition-all">
                          <item.icon className="w-5 h-5" />
                       </div>
                       <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-50 text-[10px] font-bold text-green-700 rounded-full border border-green-100">
                          {item.status}
                       </div>
                    </div>
                    <h4 className="font-bold text-stone-900 mb-1">{item.title}</h4>
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">Latency: {item.latency}</p>
                    <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-[#1c1917] rounded-3xl p-8 border border-stone-800 text-white shadow-2xl relative overflow-hidden group">
               <h3 className="text-xl font-bold mb-4">Usage Analytics</h3>
               <div className="space-y-6">
                  <div>
                     <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-widest text-stone-400">
                        <span>API Calls</span>
                        <span className="text-white">82% of quota</span>
                     </div>
                     <div className="h-1.5 w-full bg-stone-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-orange-500"
                          initial={{ width: 0 }}
                          animate={{ width: "82%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-widest text-stone-400">
                        <span>Safety SLA</span>
                        <span className="text-white">99.99%</span>
                     </div>
                     <div className="h-1.5 w-full bg-stone-800 rounded-full overflow-hidden">
                        <div className="h-full w-[99%] bg-green-500" />
                     </div>
                  </div>
               </div>

               <div className="mt-12 pt-8 border-t border-stone-800 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                     <ShieldCheck className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest leading-none mb-1">Security Status</p>
                    <p className="text-xs font-bold text-white">SOC2 & GDPR Compliant</p>
                  </div>
               </div>
               
               {/* Pattern */}
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <RefreshCw className="w-24 h-24 animate-spin-slow rotate-[30deg]" />
               </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-stone-900">API Documentation</h3>
                  <ExternalLink className="w-4 h-4 text-stone-300" />
               </div>
               <p className="text-xs text-stone-500 leading-relaxed mb-6">
                 Integrate your detection models into any application using our SDKs and REST endpoints.
               </p>
               <div className="space-y-3">
                  {["Python SDK", "Node.js Client", "C++ Engine", "Swift / iOS"].map((lib, i) => (
                    <button key={i} className="w-full flex justify-between items-center p-3 bg-stone-50 rounded-xl text-xs font-bold text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-all">
                       {lib}
                       <ChevronRight className="w-4 h-4 text-stone-300" />
                    </button>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}