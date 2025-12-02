"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./ui/BrandLogo";
import { Card } from "./ui/Card";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

// AI Platform configurations
const AI_PLATFORMS = [
  { name: "ChatGPT", key: "chatgpt" },
  { name: "Claude", key: "claude" },
  { name: "Gemini", key: "gemini" },
];

export default function AIVisibilityContrast() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Rotate platforms every 3 seconds
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % AI_PLATFORMS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const platform = AI_PLATFORMS[currentPlatform];

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-950 py-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            When someone asks AI about your business...
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            93% of AI answers mention just one brand. Are you the recommendation, or the noise?
          </p>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          
          {/* LEFT SIDE: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4 flex items-center gap-2 text-red-400">
               <AlertCircle size={20} />
               <h3 className="text-lg font-bold uppercase tracking-widest">Your Reality Now</h3>
            </div>

            <Card className="bg-slate-900/50 border-slate-800 opacity-80 grayscale-[30%]">
              {/* Chat Header */}
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center p-1.5">
                   <BrandLogo platform={platform.key} size={20} />
                </div>
                <span className="text-sm font-medium text-slate-300">{platform.name}</span>
              </div>

              {/* Chat Body */}
              <div className="space-y-6 font-mono text-sm">
                 {/* User */}
                 <div className="flex justify-end">
                    <div className="bg-slate-800 text-slate-200 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                       Best tax preparer in Austin?
                    </div>
                 </div>

                 {/* AI Response */}
                 <div className="flex justify-start">
                    <div className="text-slate-400 space-y-4 w-full">
                       <p>Based on local expertise and reviews:</p>
                       <div className="space-y-3 pl-2 border-l-2 border-slate-800">
                          <div className="flex justify-between items-center">
                             <span>1. Austin Tax Solutions</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span>2. Capital CPA Group</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span>3. Texas Tax Advisors</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span>4. Lone Star CPA Firm</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Status */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-center">
                 <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-bold rounded-full border border-red-500/20">
                    YOU ARE INVISIBLE
                 </span>
              </div>
            </Card>
          </motion.div>

          {/* RIGHT SIDE: The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[80px] -z-10" />

            <div className="mb-4 flex items-center gap-2 text-blue-400">
               <CheckCircle2 size={20} />
               <h3 className="text-lg font-bold uppercase tracking-widest">Your Potential</h3>
            </div>

            <Card className="bg-slate-900 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
              {/* Chat Header */}
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center p-1.5">
                   <BrandLogo platform={platform.key} size={20} />
                </div>
                <span className="text-sm font-medium text-slate-300">{platform.name}</span>
              </div>

              {/* Chat Body */}
              <div className="space-y-6 font-mono text-sm">
                 {/* User */}
                 <div className="flex justify-end">
                    <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-lg shadow-blue-900/20">
                       Best tax preparer in Austin?
                    </div>
                 </div>

                 {/* AI Response */}
                 <div className="flex justify-start">
                    <div className="text-slate-300 space-y-4 w-full">
                       <p>Based on local expertise and reviews:</p>
                       <div className="space-y-3">
                          {/* Winner Card */}
                          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 flex items-start gap-3 relative overflow-hidden">
                             <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                             <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5">1</div>
                             <div>
                                <span className="font-bold text-white block">YOUR BUSINESS</span>
                                <span className="text-xs text-blue-200 leading-tight mt-1 block">
                                   Comprehensive tax preparation for individuals. Known for maximizing deductions.
                                </span>
                             </div>
                          </div>
                          
                          <div className="pl-2 border-l-2 border-slate-800 opacity-50 text-xs">
                             <span>2. Austin Tax Solutions</span>
                          </div>
                          <div className="pl-2 border-l-2 border-slate-800 opacity-30 text-xs">
                             <span>3. Capital CPA Group</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Status */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-center">
                 <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20 flex items-center gap-2">
                    <CheckCircle2 size={12} /> YOU ARE DOMINATING
                 </span>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}