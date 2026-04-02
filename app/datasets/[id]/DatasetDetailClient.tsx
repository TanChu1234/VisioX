"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Settings, 
  Database, 
  Zap, 
  Shield, 
  Share2, 
  Trash2,
  Play,
  History,
  Grid,
  Layers,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';
import ImageGrid from '@/components/datasets/ImageGrid';
import { useDataset } from '@/hooks/useDataset';
import BlueprintGrid from '@/components/BlueprintGrid';
import GenerateVersionSlideover from '@/components/versions/GenerateVersionSlideover';

interface DatasetDetailClientProps {
  id: string;
}

function formatVersionCreated(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  const diff = Date.now() - date.getTime();
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < minute) return "just now";
  if (diff < hour) return `${Math.floor(diff / minute)}m ago`;
  if (diff < day) return `${Math.floor(diff / hour)}h ago`;
  return `${Math.floor(diff / day)}d ago`;
}

export default function DatasetDetailClient({ id }: DatasetDetailClientProps) {
  const router = useRouter();
  const { dataset, images, versions, loading, error, generateVersion } = useDataset(id);
  const [isSlideoverOpen, setSlideoverOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'images' | 'versions'>('images');

  const classDistribution =
    dataset?.classDistribution && dataset.classDistribution.length > 0
      ? dataset.classDistribution
      : [
          { name: "Crack", count: 4201, color: "#f87171" },
          { name: "Scratch", count: 2190, color: "#60a5fa" },
          { name: "Puncture", count: 1205, color: "#34d399" },
          { name: "Dent", count: 890, color: "#fbbf24" },
          { name: "Stain", count: 420, color: "#a78bfa" },
        ];

  const classMaxCount = Math.max(...classDistribution.map((item) => item.count), 1);
  const annotatedPercent = dataset?.annotatedPercent || versions[0]?.annotations || 0;

  return (
    <div className="relative flex-1 flex flex-col min-h-screen bg-stone-50">
      <BlueprintGrid />
      
      {/* Top Navbar */}
      <nav className="z-20 px-8 py-4 bg-white/80 backdrop-blur-md border-b border-stone-200 flex items-center justify-between sticky top-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.back()}
            className="p-2 hover:bg-stone-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-stone-600" />
          </button>
          <div className="h-6 w-[1px] bg-stone-200" />
          <div>
            <h1 className="text-lg font-bold text-stone-900 leading-none">{dataset?.name || "Dataset Workspace"}</h1>
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">Dataset ID: {id}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white/60 backdrop-blur border border-stone-200 p-1 rounded-xl mr-4">
             <button 
                onClick={() => setActiveTab('images')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'images' ? 'bg-white shadow text-stone-900 border border-stone-100' : 'text-stone-500 hover:text-stone-900'}`}
             >
                <Grid className="w-3.5 h-3.5" />
                Images
             </button>
             <button 
                onClick={() => setActiveTab('versions')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'versions' ? 'bg-white shadow text-stone-900 border border-stone-100' : 'text-stone-500 hover:text-stone-900'}`}
             >
                <Layers className="w-3.5 h-3.5" />
                Versions ({versions.length})
             </button>
          </div>
          <button 
            onClick={() => setSlideoverOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold shadow-lg shadow-stone-900/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Generate Version</span>
          </button>
          <button className="p-2.5 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-all">
            <Settings className="w-4 h-4 text-stone-600" />
          </button>
        </div>
      </nav>

      <main className="flex-grow flex p-6 gap-6 z-10 overflow-hidden">
        {error && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-700">
            {error}
          </div>
        )}

        {/* Left Sidebar - Stats & Info */}
        <aside className="w-80 flex flex-col gap-6 shrink-0">
          <section className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center">
                   <Database className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                   <p className="text-xs font-bold text-stone-400 uppercase tracking-tighter">Inventory</p>
                   <p className="text-xl font-black text-stone-900">{loading ? "..." : images.length.toLocaleString()}</p>
                </div>
             </div>

             <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                   <span className="text-stone-500 font-medium">Annotated</span>
                   <span className="text-stone-900 font-bold">{annotatedPercent}%</span>
                </div>
                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                   <div className="h-full bg-orange-500" style={{ width: `${Math.min(100, annotatedPercent)}%` }} />
                </div>
                
                <div className="grid grid-cols-2 gap-3 pt-2">
                   <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100">
                      <p className="text-[9px] font-bold text-stone-400 uppercase">Classes</p>
                      <p className="text-lg font-bold text-stone-900">{dataset?.classCount ?? classDistribution.length}</p>
                   </div>
                   <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100">
                      <p className="text-[9px] font-bold text-stone-400 uppercase">Health</p>
                      <p className="text-lg font-bold text-green-600">{dataset?.healthScore?.toFixed(1) ?? "9.2"}</p>
                   </div>
                </div>
             </div>
          </section>

          <section className="flex-grow bg-white rounded-3xl border border-stone-200 p-6 shadow-sm flex flex-col">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-stone-900">Class Distribution</h3>
                <Zap className="w-3.5 h-3.5 text-stone-300" />
             </div>
             <div className="space-y-3 flex-grow overflow-y-auto pr-2">
                {classDistribution.map((cls) => (
                  <div key={cls.name} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-[10px] font-bold">
                       <span className="text-stone-600">{cls.name}</span>
                       <span className="text-stone-400">{cls.count}</span>
                    </div>
                    <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                       <div className="h-full" style={{ width: `${(cls.count / classMaxCount) * 100}%`, backgroundColor: cls.color }} />
                    </div>
                  </div>
                ))}
             </div>
             
             <button className="w-full mt-6 py-3 bg-stone-50 hover:bg-stone-100 text-stone-600 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                Add New Class
             </button>
          </section>
        </aside>

        {/* Center Content - The Grid */}
        <section className="flex-grow flex flex-col gap-6 min-w-0">
          <div className="flex items-center justify-between bg-white rounded-2xl border border-stone-200 px-6 py-3 shadow-sm">
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-100 rounded-xl text-[10px] font-bold text-stone-600">
                   <Shield className="w-3 h-3" />
                   <span>Quality Check: ON</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-stone-400">
                   <History className="w-3 h-3" />
                   <span>Last Batch: 12m ago</span>
                </div>
             </div>

             <div className="flex items-center gap-3">
                <button className="p-2 text-stone-400 hover:text-stone-900 transition-colors">
                   <Share2 className="w-4 h-4" />
                </button>
                <div className="h-4 w-[1px] bg-stone-200" />
                <button className="p-2 text-stone-400 hover:text-red-500 transition-colors">
                   <Trash2 className="w-4 h-4" />
                </button>
             </div>
          </div>

          <div className="flex-grow min-h-0 relative">
            {activeTab === 'images' && <ImageGrid images={images} columns={6} />}
            {activeTab === 'versions' && (
              <div className="w-full h-full border border-stone-200 rounded-3xl bg-white p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                   <h2 className="text-lg font-bold text-stone-900">Version History</h2>
                </div>
                
                <div className="space-y-4">
                  {versions.map((version) => {
                    const versionReady = version.status.toLowerCase() === "ready";
                    return (
                    <div key={version.id} className="relative group">
                       <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-stone-100 group-last:hidden" />
                       <div className="flex items-start gap-6 relative">
                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border-[3px] border-white shadow-sm z-10 ${versionReady ? 'bg-emerald-100 text-emerald-600' : 'bg-orange-100 text-orange-600 animate-pulse'}`}>
                            {versionReady ? <CheckCircle2 className="w-5 h-5" /> : <Zap className="w-5 h-5 fill-current" />}
                         </div>
                         
                         <div className="flex-grow bg-stone-50 border border-stone-100 rounded-3xl p-6 group-hover:border-stone-300 transition-colors mb-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                  <h3 className="font-bold text-stone-900 text-lg">{version.name}</h3>
                                  <p className="text-xs text-stone-500 font-medium">Created {formatVersionCreated(version.created)}</p>
                               </div>
                               <button className="p-2 hover:bg-white rounded-xl transition-colors">
                                  <MoreVertical className="w-5 h-5 text-stone-400" />
                               </button>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                               <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Images</p>
                                  <p className="text-lg font-black text-stone-900">{version.images}</p>
                               </div>
                               <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Health</p>
                                  <div className="flex items-center gap-2">
                                     <p className="text-lg font-black text-emerald-600">{version.annotations}%</p>
                                     <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden flex-grow max-w-[50px]">
                                        <div className="h-full bg-emerald-500" style={{ width: `${version.annotations}%` }} />
                                     </div>
                                  </div>
                               </div>
                               <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm col-span-2">
                                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Export Formats</p>
                                  <div className="flex gap-2 mt-2">
                                     {version.exportFormats.map((format) => (
                                       <span key={`${version.id}-${format}`} className="px-2 py-1 bg-stone-100 text-stone-600 rounded text-[10px] font-bold border border-stone-200">
                                         {format}
                                       </span>
                                     ))}
                                  </div>
                               </div>
                            </div>
                         </div>
                       </div>
                    </div>
                  );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <GenerateVersionSlideover 
         isOpen={isSlideoverOpen} 
         onClose={() => setSlideoverOpen(false)} 
         datasetId={id}
         onGenerate={(name, config) => {
           generateVersion(name, config);
           setActiveTab('versions');
         }}
      />
    </div>
  );
}
