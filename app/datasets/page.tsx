"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlueprintGrid from "@/components/BlueprintGrid";
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Tag, 
  Image as ImageIcon,
  Grid,
  List,
  MoreVertical,
  CheckCircle2,
  Clock
} from "lucide-react";
import { assetPath } from "@/lib/assets";

const DATASETS = [
  { id: 1, name: "Industrial-Defect-v2", images: 12403, classes: 4, status: "Ready", lastModified: "2h ago", preview: assetPath("/demo/manufacturing.png") },
  { id: 2, name: "Safety-PPE-Monitor", images: 8521, classes: 6, status: "Annotating", lastModified: "15m ago", preview: assetPath("/demo/surveillance.png") },
  { id: 3, name: "Smart-Retail-Traffic", images: 1590, classes: 2, status: "Ready", lastModified: "1d ago", preview: assetPath("/demo/transportation.png") },
  { id: 4, name: "Medical-Imaging-Test", images: 420, classes: 8, status: "Draft", lastModified: "3d ago", preview: assetPath("/demo/robotics.png") },
];

export default function DatasetsPage() {
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
              <span className="text-stone-900">Datasets</span>
            </div>
            <h1 className="text-4xl font-bold text-stone-900 tracking-tight">Dataset Library</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-200 rounded-xl font-bold text-sm text-stone-600 hover:bg-stone-50 transition-all">
              <Download className="w-4 h-4" />
              <span>Export All</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-orange-500 text-white rounded-xl font-bold text-sm shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all">
              <Plus className="w-4 h-4" />
              <span>Create Dataset</span>
            </button>
          </div>
        </div>

        {/* Filters & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white/60 backdrop-blur-md p-2 rounded-2xl border border-stone-200 mb-8 sticky top-4 z-30">
          <div className="flex items-center gap-1 p-1">
            <button className="px-4 py-1.5 bg-stone-900 text-white rounded-xl text-xs font-bold flex items-center gap-2">
               <Grid className="w-3.5 h-3.5" />
               <span>Grid View</span>
            </button>
            <button className="px-4 py-1.5 text-stone-500 hover:bg-stone-100 rounded-xl text-xs font-bold flex items-center gap-2 transition-all">
               <List className="w-3.5 h-3.5" />
               <span>List View</span>
            </button>
          </div>

          <div className="flex items-center gap-3 px-2">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-3.5 h-3.5 group-focus-within:text-orange-500" />
              <input 
                type="text" 
                placeholder="Search images or tags..." 
                className="pl-9 pr-4 py-1.5 bg-transparent border-none text-xs font-medium focus:outline-none w-48"
              />
            </div>
            <div className="w-[1px] h-4 bg-stone-200" />
            <button className="flex items-center gap-2 px-3 py-1.5 text-stone-500 hover:text-stone-900 text-xs font-bold transition-colors">
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Dataset Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {DATASETS.map((dataset, i) => (
            <Link key={dataset.id} href={`/datasets/${dataset.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl border border-stone-200 p-2 group cursor-pointer shadow-sm hover:shadow-2xl hover:border-orange-500/20 transition-all duration-300 relative"
              >
                {/* Image Preview Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 mb-4">
                  <img 
                    src={dataset.preview} 
                    alt={dataset.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* Overlay Icons */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                     <button className="p-3 bg-white text-stone-900 rounded-2xl hover:bg-orange-500 hover:text-white transition-all shadow-xl">
                        <Download className="w-5 h-5" />
                     </button>
                     <button className="p-3 bg-white text-stone-900 rounded-2xl hover:bg-[#6735E0] hover:text-white transition-all shadow-xl">
                        <Tag className="w-5 h-5" />
                     </button>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[9px] font-bold text-stone-900 shadow-sm flex items-center gap-1.5 border border-white/40">
                     <div className={`w-1.5 h-1.5 rounded-full ${dataset.status === 'Ready' ? 'bg-green-500' : dataset.status === 'Annotating' ? 'bg-[#6735E0] animate-pulse' : 'bg-stone-300'}`} />
                     {dataset.status}
                  </div>
                </div>

                {/* Info Area */}
                <div className="px-4 pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-stone-900 group-hover:text-orange-600 transition-colors truncate pr-2">{dataset.name}</h3>
                    <MoreVertical className="w-4 h-4 text-stone-400 group-hover:text-stone-900" />
                  </div>

                  <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                     <div className="flex items-center gap-1.5">
                        <ImageIcon className="w-3 h-3" />
                        <span className="text-stone-900">{dataset.images.toLocaleString()}</span>
                     </div>
                     <div className="flex items-center gap-1.5">
                        <Tag className="w-3 h-3" />
                        <span className="text-stone-900">{dataset.classes} Classes</span>
                     </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-stone-50 flex justify-between items-center">
                     <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-stone-400" />
                        <span className="text-[10px] font-medium text-stone-500">Modified {dataset.lastModified}</span>
                     </div>
                     {dataset.status === 'Ready' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  </div>
                </div>

                {/* Interactive border effect */}
                <div className="absolute inset-0 border-2 border-orange-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              </motion.div>
            </Link>
          ))}
          
          {/* Create New Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="rounded-3xl border-2 border-dashed border-stone-200 p-8 flex flex-col items-center justify-center text-center gap-4 hover:bg-stone-50 transition-all cursor-pointer group"
          >
            <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-50 transition-all">
              <Plus className="w-8 h-8 text-stone-300 group-hover:text-orange-500" />
            </div>
            <div>
              <p className="font-bold text-stone-900">Create New Dataset</p>
              <p className="text-xs text-stone-500 mt-1 max-w-[150px]">Upload images or import from cloud storage</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}