"use client";

import { motion } from "framer-motion";
import BlueprintGrid from "@/components/BlueprintGrid";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Cpu, 
  Activity, 
  ChevronRight,
  Target,
  BarChart3,
  FlaskConical,
  Settings2
} from "lucide-react";

export default function TrainPage() {
  return (
    <div className="relative flex-1 flex flex-col min-h-screen">
      <BlueprintGrid />
      
      <main className="flex-grow p-8 z-10">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">
              <span>Workspace</span>
              <span>/</span>
              <span className="text-stone-900">Training Jobs</span>
            </div>
            <h1 className="text-4xl font-bold text-stone-900 tracking-tight">Active Training</h1>
          </div>

          <div className="flex items-center gap-3">
             <div className="px-4 py-2 bg-white border border-stone-200 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
                <span className="text-sm font-bold text-stone-900">GPU-01 Active</span>
             </div>
             <button className="flex items-center gap-2 px-6 py-2.5 bg-[#1c1917] text-white rounded-xl font-bold text-sm shadow-xl hover:scale-105 transition-all">
                <FlaskConical className="w-4 h-4 text-orange-500" />
                <span>New Experiment</span>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Monitor Area */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <div className="bg-[#1c1917] rounded-3xl p-8 border border-stone-800 shadow-2xl relative overflow-hidden group">
               {/* Glowing Backgrounds */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6735E0]/10 rounded-full blur-[100px] -ml-32 -mb-32" />

               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-12">
                   <div>
                     <h2 className="text-2xl font-bold text-white mb-2">Safety-PPE-Model v4</h2>
                     <p className="text-stone-400 text-sm">Epoch: <span className="text-white font-mono">144 / 300</span></p>
                   </div>
                   <div className="flex gap-2">
                     <button className="p-3 bg-stone-800 text-stone-400 rounded-2xl hover:text-white transition-all"><Pause className="w-5 h-5" /></button>
                     <button className="p-3 bg-stone-800 text-stone-400 rounded-2xl hover:text-white transition-all"><RotateCcw className="w-5 h-5" /></button>
                   </div>
                 </div>

                 {/* Simulated Graph */}
                 <div className="h-64 flex items-end gap-1 mb-8 overflow-hidden">
                    {[40, 45, 42, 50, 55, 52, 60, 65, 62, 70, 75, 78, 80, 85, 82, 88, 90, 89, 92, 94].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 1 }}
                        className="flex-1 min-w-[4px] bg-gradient-to-t from-orange-600/20 to-orange-500 rounded-t-sm relative group"
                      >
                         <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-1.5 py-1 bg-white text-stone-900 text-[8px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {h}%
                         </div>
                      </motion.div>
                    ))}
                 </div>

                 <div className="flex justify-between items-center text-stone-400 text-xs font-bold uppercase tracking-widest border-t border-stone-800 pt-6">
                    <div className="flex items-center gap-2">
                       <Activity className="w-4 h-4 text-green-500" />
                       <span>Loss: <span className="text-white">0.024</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                       <BarChart3 className="w-4 h-4 text-[#6735E0]" />
                       <span>mAP@.5: <span className="text-white">0.962</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Target className="w-4 h-4 text-blue-500" />
                       <span>Recall: <span className="text-white">0.941</span></span>
                    </div>
                 </div>
               </div>
            </div>

            {/* Hardware Info */}
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600">
                        <Cpu className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">GPU Memory</p>
                        <h4 className="text-xl font-bold text-stone-900">12.4 GB / 16 GB</h4>
                     </div>
                  </div>
                  <div className="w-12 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                     <div className="h-full w-3/4 bg-green-500" />
                  </div>
               </div>
               <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600">
                        <Activity className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Temperature</p>
                        <h4 className="text-xl font-bold text-stone-900">64°C</h4>
                     </div>
                  </div>
                  <div className="w-12 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                     <div className="h-full w-1/2 bg-orange-500" />
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar / Configuration */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-stone-900 flex items-center gap-2">
                     <Settings2 className="w-4 h-4 text-orange-500" />
                     Hyperparameters
                  </h3>
                  <button className="text-xs font-bold text-orange-500 hover:underline">Edit</button>
               </div>

               <div className="space-y-4">
                  {[
                    { label: "Learning Rate", value: "0.001" },
                    { label: "Batch Size", value: "32" },
                    { label: "Weight Decay", value: "0.0005" },
                    { label: "Optimzer", value: "AdamW" },
                    { label: "Augmentations", value: "TrivialAug" },
                  ].map((param, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-stone-50 last:border-0">
                       <span className="text-xs font-medium text-stone-500">{param.label}</span>
                       <span className="text-xs font-bold text-stone-900">{param.value}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-stone-900 to-[#1c1917] rounded-3xl border border-stone-800 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-xl font-bold mb-4">Export Result</h3>
                 <p className="text-stone-400 text-sm mb-8 leading-relaxed">Your model can be exported to OpenVINO, ONNX, or CoreML once training reaches 90% accuracy.</p>
                 <button className="w-full flex justify-between items-center px-6 py-4 bg-orange-500 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-orange-500/10">
                    <span>Choose Export Format</span>
                    <ChevronRight className="w-5 h-5" />
                 </button>
               </div>
               <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                 <div className="grid grid-cols-4 gap-4 p-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="aspect-square bg-white rounded-lg" />
                    ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}