"use client";

import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

function StatCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 15,
    restDelta: 0.1
  });


  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  const displayValue = useTransform(springValue, (latest) => {
    const hasDecimals = value % 1 !== 0;
    const formatted = hasDecimals
      ? latest.toFixed(1)
      : Intl.NumberFormat("en-US").format(Math.floor(latest));
    return formatted + suffix;
  });

  return <motion.span style={{ fontVariantNumeric: 'tabular-nums' }}>{displayValue}</motion.span>;
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [demoIndex, setDemoIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const INDUSTRIES = ["Manufacturing", "Healthcare", "Agriculture", "Security", "Logistics", "Retail", "Robotics", "Automotive", "Transportation", "Entertainments"];


  const DEMO_IMAGES = [
    {
      id: 1,
      title: "Surveillance",
      src: "/demo/surveillance.png",
      boxes: [
        { id: 1, label: "OK", top: "28%", left: "19%", width: "16%", height: "44%", color: "#00ff4cff" },
        { id: 2, label: "No PPE", top: "30%", left: "80%", width: "13%", height: "42%", color: "#ff0000ff" }
      ]
    },
    {
      id: 2,
      title: "Agriculture",
      src: "/demo/agriculture.png",
      boxes: [
        { id: 1, label: "Apple", top: "4%", left: "22.5%", width: "7%", height: "9%", color: "#00ff4cff" },
        { id: 2, label: "Apple", top: "12%", left: "3%", width: "9%", height: "13%", color: "#00ff4cff" },
        { id: 3, label: "Apple", top: "42%", left: "7%", width: "9%", height: "12%", color: "#00ff4cff" },
        { id: 4, label: "Apple", top: "30%", left: "30%", width: "7%", height: "12%", color: "#00ff4cff" },
        { id: 5, label: "Apple", top: "12%", left: "59%", width: "9%", height: "12%", color: "#00ff4cff" },
        { id: 6, label: "Apple", top: "57%", left: "2%", width: "8%", height: "11%", color: "#00ff4cff" },
      ]
    },
    {
      id: 3,
      title: "Robotics",
      src: "/demo/robotics.png",
      boxes: [
        { id: 1, label: "Baseball", top: "48%", left: "51%", width: "17%", height: "23%", color: "#FBBF24" },
        { id: 2, label: "Baseball", top: "68%", left: "42%", width: "19%", height: "24%", color: "#FBBF24" },
        { id: 3, label: "Baseball", top: "60%", left: "2%", width: "18%", height: "20%", color: "#FBBF24" }
      ]
    },
    {
      id: 4,
      title: "Manufacturing",
      src: "/demo/manufacturing.png",
      boxes: [
        { id: 1, label: "Blister Pack", top: "7%", left: "14%", width: "73%", height: "84%", color: "#4866ecff" },
        { id: 2, label: "OK", top: "20%", left: "18%", width: "11%", height: "7%", color: "#00ff4cff" },
        { id: 3, label: "OK", top: "34%", left: "18%", width: "11%", height: "7%", color: "#00ff4cff" },
        { id: 4, label: "OK", top: "48%", left: "18.7%", width: "11%", height: "7%", color: "#00ff4cff" },
        { id: 5, label: "OK", top: "62.5%", left: "18.5%", width: "11%", height: "7%", color: "#00ff4cff" },
        { id: 6, label: "OK", top: "76%", left: "19%", width: "11%", height: "7%", color: "#00ff4cff" },
        { id: 7, label: "OK", top: "76%", left: "36%", width: "11%", height: "7%", color: "#00ff4cff" },
        { id: 8, label: "OK", top: "19%", left: "35%", width: "11%", height: "7%", color: "#00ff4cff" },
        { id: 9, label: "OK", top: "19%", left: "52.6%", width: "10.5%", height: "7%", color: "#00ff4cff" },
        { id: 10, label: "OK", top: "33.5%", left: "52.6%", width: "10.5%", height: "7%", color: "#00ff4cff" },
        { id: 11, label: "OK", top: "61.5%", left: "52.6%", width: "10.5%", height: "7%", color: "#00ff4cff" },
        { id: 12, label: "OK", top: "75.7%", left: "52.8%", width: "10.5%", height: "7%", color: "#00ff4cff" },
        { id: 13, label: "OK", top: "19%", left: "70%", width: "10.5%", height: "7%", color: "#00ff4cff" },
        { id: 14, label: "OK", top: "33%", left: "70.2%", width: "10.5%", height: "7%", color: "#00ff4cff" },
        { id: 15, label: "OK", top: "47.3%", left: "70.5%", width: "10.5%", height: "7%", color: "#00ff4cff" },
        { id: 16, label: "OK", top: "61.6%", left: "70.5%", width: "10.5%", height: "7%", color: "#00ff4cff" },
        { id: 17, label: "OK", top: "75.8%", left: "70.5%", width: "10.5%", height: "7%", color: "#00ff4cff" },
      ]
    },
    {
      id: 5,
      title: "Transportation",
      src: "/demo/transportation.png",
      boxes: [
        { id: 1, label: "Car", top: "44%", left: "16%", width: "10%", height: "8%", color: "#f63b3bff" },
        { id: 2, label: "Car", top: "50%", left: "32.7%", width: "8%", height: "11.5%", color: "#f63b3bff" },
        { id: 3, label: "Car", top: "69%", left: "56%", width: "13.5%", height: "17%", color: "#f63b3bff" },
        { id: 4, label: "Car", top: "68%", left: "70.5%", width: "15%", height: "20%", color: "#f63b3bff" },
        { id: 5, label: "Car", top: "10%", left: "75%", width: "8%", height: "15%", color: "#f63b3bff" },
        { id: 6, label: "Car", top: "10%", left: "75%", width: "8%", height: "15%", color: "#f63b3bff" },

      ]
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDemoIndex((prev) => (prev + 1) % DEMO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [DEMO_IMAGES.length, isPaused]);

  const slideNames = ["Hero", "Features", "Impact", "CTA", "Partners"];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">
      {/* Side Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6 p-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
        <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-orange-600/30 to-transparent" />
        {slideNames.map((name, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => {
                const element = document.getElementById(`slide-${index}`);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-500 relative z-10 ${activeSlide === index
                ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 scale-150 shadow-[0_0_15px_rgba(234,88,12,0.5)]'
                : 'bg-stone-500 scale-100 hover:bg-orange-500'
                }`}
              aria-label={`Go to slide ${name}`}
            />
            <span className="absolute right-10 top-1/2 -translate-y-1/2 px-3 py-1 bg-stone-900 text-white text-[10px] font-bold tracking-widest uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
              {name}
            </span>
          </div>
        ))}
      </div>

      {/* Slide 1 - Hero */}
      <motion.section
        id="slide-0"
        onViewportEnter={() => setActiveSlide(0)}
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="h-screen snap-start bg-[#fcfaf7] flex items-center justify-center px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-stone-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-screen-2xl mx-auto w-full z-10 px-4 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-block mt-8 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full">
                <span className="text-orange-600 text-sm font-medium">✨ Next-Gen Visual Platform</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-600 to-orange-400  bg-clip-text text-transparent">
                  Intelligent Computer Vision Platform
                </span>
              </h1>

              <p className="text-2xl text-stone-600 leading-relaxed max-w-xl">
                Transform your visual data into actionable insights with our cutting-edge AI-powered annotation and analysis tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-400 
                                    hover:scale-105 active:scale-95 hover:from-orange-400 hover:to-orange-300 
                                    text-white rounded-full transition-all duration-300 font-bold 
                                    shadow-xl shadow-orange-600/30 text-center">
                  Start Free Trial
                </button>
                <button className="px-10 py-4 bg-white hover:bg-stone-100 hover:scale-105 active:scale-95 
                                    text-stone-900 rounded-full transition-all duration-300 font-bold 
                                    border border-stone-200 shadow-sm text-center">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Content - Demo Visual */}
            <div className="lg:col-span-7 relative">
              <div className="relative bg-white rounded-3xl p-6 border-2 border-stone-200 shadow-2xl flex gap-6">

                {/* Side Navigation Images */}
                <div className="hidden md:flex flex-col gap-3 justify-center border-r border-stone-100 pr-4">
                  {DEMO_IMAGES.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={() => setDemoIndex(idx)}
                      className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 group ${idx === demoIndex
                        ? 'border-orange-600 scale-110 shadow-lg shadow-orange-100'
                        : 'border-stone-100 opacity-40 hover:opacity-100 hover:border-stone-300'
                        }`}
                    >
                      <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-orange-500/10 transition-opacity ${idx === demoIndex ? 'opacity-100' : 'opacity-0'}`} />

                      {/* Tooltip */}
                      <span className="absolute left-full ml-4 px-2 py-1 bg-stone-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                        {img.title}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex-1">
                  {/* Main Content Area */}
                  <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="bg-stone-100 rounded-2xl aspect-[4/3] relative overflow-hidden border-2 border-stone-200 group/demo"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={demoIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute inset-0"
                      >
                        <img
                          src={DEMO_IMAGES[demoIndex].src}
                          alt={DEMO_IMAGES[demoIndex].title}
                          className="w-full h-full object-cover"
                        />

                        {/* Overlay Gradient for better label readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                        {DEMO_IMAGES[demoIndex].boxes.map((box, bIdx) => (
                          <motion.div
                            key={box.id}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 + (bIdx * 0.1), type: "spring", stiffness: 100 }}
                            className="absolute border-2 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                            style={{
                              top: box.top,
                              left: box.left,
                              width: box.width,
                              height: box.height,
                              borderColor: box.color,
                              backgroundColor: `${box.color}10`
                            }}
                          >
                            <div
                              className="absolute -top-7 left-0 px-2 py-1 rounded text-[10px] text-white font-bold shadow-lg backdrop-blur-sm"
                              style={{ backgroundColor: box.color }}
                            >
                              {box.label}
                            </div>

                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50" />
                          </motion.div>
                        ))}

                        {/* Scanline effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(139,92,246,0.05)_50%,transparent_100%)] bg-[size:100%_4px] h-20 w-full animate-scan pointer-events-none" />
                      </motion.div>
                    </AnimatePresence>

                    {/* Image Title Overlay */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                      <span className="text-white text-xs font-bold tracking-wider uppercase drop-shadow-md">
                        {DEMO_IMAGES[demoIndex].title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-stone-500 font-medium">Scroll to explore</span>
          <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.section>

      {/* Slide 2 - Advanced Capabilities */}
      <motion.section
        id="slide-1"
        onViewportEnter={() => setActiveSlide(1)}
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="h-screen snap-start bg-[#fcfaf7] flex items-center justify-center px-6 lg:px-8 relative overflow-hidden pt-16"
      >
        <div className="max-w-7xl mx-auto w-full text-center">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-stone-900 mb-3">
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">Powerful</span> Features,
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent"> Advanced</span> Capabilities
            </h2>
            <p className="text-stone-600 text-xl font-medium">Everything you need for professional computer vision projects</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Capability 1 */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF7300] to-[#F1A222] rounded-2xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Realtime Analytics</h3>
              <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">Monitor and analyze visual data streams in real-time with ultra-low latency processing.</p>
            </div>

            {/* Capability 6 */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF7300] to-[#F1A222] rounded-2xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Smart Annotation</h3>
              <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">AI-assisted tools that speed up your workflow with intelligent suggestions and auto-labeling.</p>
            </div>

            {/* Capability 4 */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF7300] to-[#F1A222] rounded-2xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Lightning Fast</h3>
              <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">Process thousands of images with optimized performance and real-time collaboration.</p>
            </div>

            {/* Capability 5 */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF7300] to-[#F1A222] rounded-2xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Secure & Private</h3>
              <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">Enterprise-grade security with data encryption and compliance standards for all data.</p>
            </div>

            {/* Capability 2 */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF7300] to-[#F1A222] rounded-2xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Easy Deployment</h3>
              <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">Deploy your models instantly to the edge, cloud, or on-premise with a single click.</p>
            </div>

            {/* Capability 3 */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF7300] to-[#F1A222] rounded-2xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Scalability</h3>
              <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">Architected to support massive datasets and high-concurrency workflows for teams worldwide.</p>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Slide 3 - Stats Impact & Applications Content */}
      <motion.section
        id="slide-2"
        onViewportEnter={() => setActiveSlide(2)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}

        viewport={{ once: false, amount: 0.5 }}
        className="h-screen snap-start bg-[#0a0a0a] flex items-center justify-center px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-stone-900 to-black"></div>

        {/* Background Decorative Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[30vw] font-black tracking-tighter text-white">VISIOX</h2>
        </div>

        <div className="max-w-screen-2xl mx-auto w-full z-10 px-4 lg:px-12 text-center h-full flex flex-col justify-center py-20">
          {/* Header Section */}
          <div className="mb-12">
            <h2 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Global Impact,
              <br />
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Every Industry.
              </span>
            </h2>
          </div>

          {/* Industries Section */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl mx-auto px-4">
            {INDUSTRIES.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-orange-600/20 hover:text-orange-400 hover:border-orange-600/50 transition-all cursor-default shadow-sm backdrop-blur-sm"
              >
                {industry}
              </motion.span>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-4 lg:px-12 max-w-7xl mx-auto w-full">
            {[
              { label: "Users", value: 5000, suffix: "+" },
              { label: "Annotations", value: 10000, suffix: "+" },
              { label: "Uptime Speed", value: 99.9, suffix: "%" }
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="group p-10 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 hover:border-orange-600/50 hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
              >
                <div className="text-7xl font-bold text-white mb-2 tracking-tight">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-orange-600 font-black tracking-[0.2em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.section>


      {/* Slide 4 - CTA */}
      <motion.section
        id="slide-3"
        onViewportEnter={() => setActiveSlide(3)}
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="h-screen snap-start bg-gradient-to-br from-[#FF7300] via-[#E66700] to-[#F1A222] flex items-center justify-center px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center z-10">
          <h2 className="text-7xl lg:text-9xl font-bold text-white mb-8 leading-tight">
            Ready to
            <br />
            get started?
          </h2>
          <p className="text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of teams transforming their visual data into insights
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-white hover:bg-stone-50 hover:scale-105 text-stone-900 rounded-full transition-all duration-300 font-bold shadow-xl w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg hover:scale-105 text-white rounded-full transition-all duration-300 font-bold border border-white/30 w-full sm:w-auto">
              Contact Sales
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="slide-4"
        onViewportEnter={() => setActiveSlide(4)}
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.4 }}
        className="h-screen snap-start bg-[#f5f2ed] flex flex-col pt-8 overflow-hidden"
      >
        <div className="flex-grow flex items-center justify-center px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full py-8 text-center">

            {/* Title */}
            <div className="mb-8">
              <h2 className="text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
                Trusted by{" "}
                <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  leading partners
                </span>
              </h2>
              <p className="text-stone-600 text-xl font-medium">
                Powering the next generation of computer vision worldwide
              </p>
            </div>

            {/* Divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-14" />

            {/* Primary Partners */}
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
              {[
                "nvidia",
                "intel",
                "apple",
                "google",
                "microsoft",
              ].map((logo, index) => (
                <div key={logo} className="group flex items-center justify-center">
                  <motion.img
                    src={`/logos/${logo}.svg`}
                    alt={logo}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.6, 1, 0.6],
                      filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(100%)"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 1,
                      ease: "easeInOut",
                    }}
                    className="
                      h-10 lg:h-12
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:opacity-100
                      group-hover:grayscale-0
                    "
                  />
                </div>
              ))}
            </div>

            {/* Secondary Partners */}
            <div className="mt-20 flex flex-wrap justify-center items-center gap-12 lg:gap-16">
              {["yaskawa", "siemens", "abb", "bosch"].map((logo, index) => (
                <div key={logo} className="group flex items-center justify-center">
                  <motion.img
                    src={`/logos/${logo}.svg`}
                    alt={logo}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.9, 0.4],
                      filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(100%)"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: (index + 5) * 0.8,
                      ease: "easeInOut",
                    }}
                    className="
                      h-8 lg:h-9
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:opacity-90
                      group-hover:grayscale-0
                    "
                  />
                </div>
              ))}
            </div>

            {/* View Applications Button */}
            <div className="mt-20 flex justify-center">
              <Link href="/solutions">
                <button className="group w-full sm:w-70 h-16 px-8 
                                    bg-gradient-to-r from-orange-600 to-orange-400 
                                    hover:scale-105 active:scale-95 hover:from-orange-400 hover:to-orange-300 
                                    text-white rounded-full transition-all duration-300 font-semibold text-lg flex 
                                    items-center justify-center gap-2 shadow-xl shadow-orange-500/30">
                  <span>Explore Applications</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>

          </div>
        </div>

        <div className="mt-auto">
          <Footer />
        </div>
      </motion.section>
    </div>
  );
}