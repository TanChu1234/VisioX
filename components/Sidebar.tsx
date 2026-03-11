"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Database, 
  Workflow, 
  Cpu, 
  Send, 
  Settings, 
  HelpCircle,
  ChevronRight,
  Fingerprint
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Overview", icon: LayoutDashboard, href: "/" },
  { name: "Datasets", icon: Database, href: "/datasets" },
  { name: "Workflows", icon: Workflow, href: "/workflows" },
  { name: "Train", icon: Cpu, href: "/train" },
  { name: "Deploy", icon: Send, href: "/deploy" },
];

const solutionItems = [
  { name: "Manufacturing", href: "/solutions/manufacturing-industrial" },
  { name: "Security", href: "/solutions/surveillance-security" },
  { name: "Smart Cities", href: "/solutions/transportation-smart-cities" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-[#1c1917] flex flex-col border-r border-stone-800 fixed left-0 top-0 z-50">
      {/* Brand Header */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-900/20">
          <Fingerprint className="text-white w-6 h-6" />
        </div>
        <span className="text-white font-bold text-xl tracking-tight">VisioX</span>
      </div>

      {/* Primary Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest px-3 mb-4">
          Development Hub
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`group flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive 
                ? "bg-orange-500/10 text-orange-500" 
                : "text-stone-400 hover:bg-stone-800/50 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`w-5 h-5 ${isActive ? "text-orange-500" : "text-stone-500 group-hover:text-stone-300"}`} />
                <span className="font-medium text-sm">{item.name}</span>
              </div>
              {isActive && (
                <motion.div 
                  layoutId="active-indicator"
                  className="w-1 h-4 bg-orange-500 rounded-full"
                />
              )}
            </Link>
          );
        })}

        <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest px-3 mb-4 mt-8">
          Industry Solutions
        </div>
        {solutionItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive 
                ? "bg-orange-500/10 text-orange-500" 
                : "text-stone-400 hover:bg-stone-800/50 hover:text-white"
              }`}
            >
              <span className="text-xs font-medium">{item.name}</span>
              <ChevronRight className={`w-3 h-3 ${isActive ? "text-orange-500" : "text-stone-600"}`} />
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-stone-800 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-stone-400 hover:text-white hover:bg-stone-800/50 rounded-lg transition-all text-sm group">
          <Settings className="w-5 h-5 text-stone-500 group-hover:rotate-45 transition-transform" />
          <span>Project Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-stone-400 hover:text-white hover:bg-stone-800/50 rounded-lg transition-all text-sm">
          <HelpCircle className="w-5 h-5 text-stone-500" />
          <span>Documentation</span>
        </button>
        
        {/* User Workspace Profile */}
        <div className="mt-4 pt-4 border-t border-stone-800">
          <div className="flex items-center gap-3 p-2 bg-stone-900/50 rounded-xl border border-stone-800">
            <div className="w-8 h-8 rounded-lg bg-[#6735E0] flex items-center justify-center text-xs font-bold text-white shadow-lg">
              JS
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-white text-xs font-bold truncate">John's Workspace</p>
              <p className="text-[10px] text-stone-500 truncate">Professional Plan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
