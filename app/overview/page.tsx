"use client";

import { motion } from "framer-motion";
import BlueprintGrid from "@/components/BlueprintGrid";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal,
  ArrowUpRight,
  Zap,
  Shield,
  Clock,
  Camera
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex-1 flex flex-col min-h-screen">
      <BlueprintGrid />
      
      <main className="flex-grow p-8 z-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-stone-900 tracking-tight mb-1">Workspace Overview</h1>
            <p className="text-stone-500 text-sm font-medium">Welcome back, John! Here's what's happening with your projects.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="pl-10 pr-4 py-2 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all">
              <Plus className="w-4 h-4" />
              <span>New Project</span>
            </button>
          </div>
        </div>

        {/* Stats Quick View */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Total Images", value: "48,291", change: "+12.5%", color: "text-blue-600", icon: Clock },
            { label: "Active Models", value: "7", change: "+2", color: "text-green-600", icon: Zap },
            { label: "API Calls / min", value: "1,204", change: "-3%", color: "text-red-600", icon: Shield },
            { label: "Storage Used", value: "1.2 TB", change: "+8%", color: "text-purple-600", icon: ArrowUpRight },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm group hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-stone-600 group-hover:text-orange-500 transition-colors">
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold text-stone-900">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Project Grid */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-stone-900">Recent Projects</h2>
          <div className="flex gap-2">
            <button className="p-2 bg-white border border-stone-200 rounded-lg text-stone-500 hover:text-stone-900 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
            <button className="text-orange-500 text-sm font-bold hover:underline">View All</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { name: "Safety Gear Detection", type: "Object Detection", status: "Active", accuracy: "98.2%", color: "bg-blue-500" },
            { name: "Quality Control v4", type: "Classification", status: "Training", accuracy: "94.5%", color: "bg-[#6735E0]" },
            { name: "Smart Traffic Flow", type: "Segmentation", status: "Draft", accuracy: "94.5%", color: "bg-orange-500" },
          ].map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-white rounded-3xl border border-stone-200 p-1 flex flex-col group cursor-pointer hover:border-orange-500/50 transition-all shadow-sm"
            >
              <div className="h-48 rounded-[22px] bg-stone-100 relative overflow-hidden m-1">
                <div className={`absolute inset-0 opacity-10 ${project.color}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 border-2 border-white/50 border-dashed rounded-full animate-spin-slow" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-stone-900 rounded-full shadow-sm">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-stone-900 group-hover:text-orange-600 transition-colors">{project.name}</h3>
                  <MoreHorizontal className="text-stone-400 w-5 h-5 hover:text-stone-900" />
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                   <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${project.status === 'Active' ? 'bg-green-500' : project.status === 'Training' ? 'bg-orange-500 animate-pulse' : 'bg-stone-300'}`} />
                      <span className="text-xs text-stone-500 font-medium">{project.status}</span>
                   </div>
                   <div className="mx-2 w-[1px] h-3 bg-stone-200" />
                   <span className="text-xs text-stone-900 font-bold">{project.accuracy} Accuracy</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflows Preview */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-stone-900">Active Pipelines</h2>
          <Link href="/workflows" className="text-orange-500 text-sm font-bold hover:underline">Launch Builder</Link>
        </div>

        <div className="bg-[#1c1917] rounded-[40px] p-8 border border-stone-800 shadow-2xl relative overflow-hidden group">
           <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                    <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">Real-time Flow</span>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-4">Core Logistic Pipeline v2</h3>
                 <p className="text-stone-400 text-sm mb-6 max-w-md">Processing 12 concurrent streams with YOLOv8.5 optimization. Current system load is nominal.</p>
                 <div className="flex gap-4">
                    <button className="px-6 py-2 bg-white text-stone-900 rounded-xl font-bold text-xs hover:scale-105 transition-all">Monitor Stats</button>
                    <button className="px-6 py-2 bg-stone-800 text-white rounded-xl font-bold text-xs hover:bg-stone-700 transition-all">Configure Nodes</button>
                 </div>
              </div>
              <div className="w-full md:w-64 h-32 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-x-0 flex items-center justify-around px-8">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center justify-center"><Camera className="w-4 h-4 text-green-500" /></div>
                    <div className="w-8 h-1 bg-stone-800 rounded-full relative overflow-hidden">
                       <motion.div animate={{ x: [-20, 40] }} transition={{ repeat: Infinity, duration: 1 }} className="absolute inset-y-0 w-4 bg-orange-500" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/50 flex items-center justify-center"><Zap className="w-4 h-4 text-orange-500" /></div>
                 </div>
              </div>
           </div>
           {/* Glow */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
        </div>
      </main>
    </div>
  );
}