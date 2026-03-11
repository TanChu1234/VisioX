
import BlueprintGrid from "@/components/BlueprintGrid";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="relative flex-1 flex flex-col overflow-hidden">
      <BlueprintGrid />
      
      <main className="flex-grow p-8 z-10">
        {/* Breadcrumb / Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-stone-400 text-xs font-medium mb-2">
            <span>Product</span>
            <span>/</span>
            <span className="text-stone-900 font-bold">Model Train</span>
          </div>
          <h1 className="text-4xl font-bold text-stone-900 tracking-tight">Model Train</h1>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">
            
            <div className="bg-white rounded-3xl p-10 border border-stone-200 shadow-xl">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Overview</h2>
              <p className="text-stone-600 leading-relaxed text-lg mb-8">
                Manage your model train pipeline with enterprise-grade precision. 
                VisioX provides a unified workspace for high-stakes computer vision automation.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <h3 className="font-bold text-stone-900 mb-2">Real-time Performance</h3>
                  <p className="text-stone-500 text-sm italic">Optimized for sub-200ms latency across global clusters.</p>
                </div>
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <h3 className="font-bold text-stone-900 mb-2">Security & Privacy</h3>
                  <p className="text-stone-500 text-sm italic">End-to-end encryption for all visual data streams.</p>
                </div>
              </div>
            </div>
            
          </div>

          {/* Sidebar / Stats Panel */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-4">Quick Stats</span>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-sm text-stone-600 font-medium">Active Channels</span>
                  <span className="text-2xl font-bold text-stone-900">12</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-sm text-stone-600 font-medium">MTTF</span>
                  <span className="text-lg font-bold text-green-600">99.9%</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#6735E0] to-[#8B5CF6] rounded-3xl shadow-xl text-white overflow-hidden relative group">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">Professional Plan</h3>
                <p className="text-white/80 text-xs mb-4">Scale your model train operations with unlimited bandwidth.</p>
                <button className="w-full py-2 bg-white text-[#6735E0] font-bold rounded-xl hover:scale-105 transition-transform text-sm">
                  Upgrade Now
                </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
    