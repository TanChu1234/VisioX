"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Save, 
  MousePointer2, 
  Square, 
  Pentagon, 
  Undo2, 
  Redo2,
  Trash2,
  Settings,
  HelpCircle
} from 'lucide-react';
import AnnotationEditor, { AnnotationBox } from '@/components/annotate/AnnotationEditor';
import BlueprintGrid from '@/components/BlueprintGrid';
import { Annotation, fetchAnnotations, fetchImageById, saveAnnotations } from '@/lib/api';

interface AnnotateClientProps {
  id: string;
  imageId: string;
}

function mapAnnotationsToBoxes(items: Annotation[]): AnnotationBox[] {
  return items
    .filter((item) => Array.isArray(item.bbox) && item.bbox.length >= 4)
    .map((item) => ({
      id: item.id,
      x: item.bbox?.[0] ?? 0,
      y: item.bbox?.[1] ?? 0,
      width: item.bbox?.[2] ?? 0,
      height: item.bbox?.[3] ?? 0,
      stroke: item.color || "#ff7300",
    }));
}

export default function AnnotateClient({ id, imageId }: AnnotateClientProps) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState(`https://picsum.photos/seed/${imageId}/1200/800`);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [boxes, setBoxes] = useState<AnnotationBox[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      setLoading(true);
      setMessage(null);

      const [imageResult, annotationResult] = await Promise.allSettled([
        fetchImageById(id, imageId),
        fetchAnnotations(imageId),
      ]);

      if (!mounted) return;

      if (imageResult.status === "fulfilled") {
        setImageUrl(imageResult.value.url);
      }

      if (annotationResult.status === "fulfilled") {
        setAnnotations(annotationResult.value);
        setBoxes(mapAnnotationsToBoxes(annotationResult.value));
      } else {
        setAnnotations([]);
        setBoxes([]);
      }

      if (imageResult.status === "rejected" || annotationResult.status === "rejected") {
        const firstError =
          imageResult.status === "rejected"
            ? imageResult.reason
            : annotationResult.status === "rejected"
              ? annotationResult.reason
              : null;
        const text =
          firstError instanceof Error
            ? firstError.message
            : "Some annotation resources failed to load.";
        setMessage(text);
      }

      setLoading(false);
    };

    void load();
    return () => {
      mounted = false;
    };
  }, [id, imageId]);

  const activeObjects = useMemo(
    () =>
      boxes.map((box) => {
        const matched = annotations.find((item) => item.id === box.id);
        return {
          id: box.id,
          label: matched?.label || "Object",
          color: box.stroke || matched?.color || "#ff7300",
        };
      }),
    [annotations, boxes],
  );

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    const annotationById = new Map(annotations.map((item) => [item.id, item]));
    const payload: Annotation[] = boxes.map((box) => {
      const current = annotationById.get(box.id);
      return {
        id: box.id,
        label: current?.label || "Object",
        color: box.stroke || current?.color || "#ff7300",
        bbox: [box.x, box.y, box.width, box.height],
      };
    });

    try {
      await saveAnnotations(id, imageId, payload);
      setAnnotations(payload);
      setMessage("Annotations saved successfully.");
    } catch (error) {
      const text = error instanceof Error ? error.message : "Failed to save annotations.";
      setMessage(text);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="relative flex-1 flex flex-col h-screen bg-stone-950 overflow-hidden">
      <BlueprintGrid />
      
      {/* Precision Toolbar - Top */}
      <nav className="z-30 px-6 py-3 bg-stone-900/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.back()}
            className="p-2 hover:bg-white/5 rounded-xl transition-colors text-stone-400 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="h-6 w-[1px] bg-white/10" />
          <div>
             <h1 className="text-sm font-bold text-white leading-none">Annotation Terminal</h1>
             <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mt-1">Image: {imageId}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-2xl border border-white/5">
           <button className="p-2.5 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-500/20">
              <Square className="w-4 h-4" />
           </button>
           <button className="p-2.5 text-stone-500 hover:text-white transition-colors">
              <Pentagon className="w-4 h-4" />
           </button>
           <button className="p-2.5 text-stone-500 hover:text-white transition-colors">
              <MousePointer2 className="w-4 h-4" />
           </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 pr-3 border-r border-white/10">
            <button className="p-2 text-stone-500 hover:text-white transition-colors"><Undo2 className="w-4 h-4" /></button>
            <button className="p-2 text-stone-500 hover:text-white transition-colors"><Redo2 className="w-4 h-4" /></button>
          </div>
          <button
            onClick={() => void handleSave()}
            disabled={saving || loading}
            className="flex items-center gap-2 px-6 py-2 bg-white text-stone-900 rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all disabled:opacity-60 disabled:hover:scale-100"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{saving ? "Saving..." : "Apply Changes"}</span>
          </button>
        </div>
      </nav>

      {/* Main Workspace */}
      <main className="flex-grow flex overflow-hidden">
        {/* Left - Toolbox */}
        <aside className="w-16 flex flex-col items-center py-6 gap-6 bg-stone-900/50 border-r border-white/5 z-20">
           <div className="flex flex-col gap-2">
             <div className="w-8 h-8 rounded-lg bg-red-400 shadow-lg shadow-red-400/20 cursor-pointer border-2 border-white/10" />
             <div className="w-8 h-8 rounded-lg bg-blue-400 opacity-40 hover:opacity-100 cursor-pointer border-2 border-white/10" />
             <div className="w-8 h-8 rounded-lg bg-emerald-400 opacity-40 hover:opacity-100 cursor-pointer border-2 border-white/10" />
           </div>
           
           <div className="mt-auto flex flex-col gap-4">
              <button className="text-stone-600 hover:text-white transition-colors"><Settings className="w-5 h-5" /></button>
              <button className="text-stone-600 hover:text-white transition-colors"><HelpCircle className="w-5 h-5" /></button>
           </div>
        </aside>

        {/* Center - Canvas */}
        <div className="flex-grow p-4 relative overflow-hidden flex items-center justify-center">
           <AnnotationEditor imageUrl={imageUrl} boxes={boxes} onChange={setBoxes} />
           {loading && (
             <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 text-white text-[10px] uppercase tracking-widest font-bold border border-white/10">
               Loading image and annotations...
             </div>
           )}
           {message && !loading && (
             <div className="absolute top-6 left-1/2 -translate-x-1/2 max-w-[70%] px-4 py-2 rounded-full bg-black/70 text-white text-[10px] uppercase tracking-widest font-bold border border-white/10 truncate">
               {message}
             </div>
           )}
        </div>

        {/* Right - Classes & Bounding Boxes */}
        <aside className="w-80 bg-stone-900/80 backdrop-blur-xl border-l border-white/5 p-6 flex flex-col z-20 overflow-y-auto">
           <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-black text-white uppercase tracking-widest">Active Objects</h3>
              <span className="px-2 py-0.5 bg-white/5 text-[10px] font-bold text-stone-500 rounded-lg">{activeObjects.length} Total</span>
           </div>

           <div className="space-y-3">
              {activeObjects.map((obj) => (
                <div key={obj.id} className="group p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer">
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: obj.color }} />
                        <span className="text-xs font-bold text-white">{obj.label}</span>
                     </div>
                     <Trash2 className="w-3.5 h-3.5 text-stone-600 group-hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all" />
                   </div>
                </div>
              ))}

              {activeObjects.length === 0 && !loading && (
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-xs text-stone-400">No objects yet. Draw a box to create your first annotation.</p>
                </div>
              )}
           </div>
        </aside>
      </main>
    </div>
  );
}
