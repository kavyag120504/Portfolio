"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-20">
      {/* Background Waves (SVG) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="none">
           <path d="M0,400 Q250,200 500,400 T1000,400" fill="none" stroke="url(#grad1)" strokeWidth="3"/>
           <path d="M0,600 Q250,400 500,600 T1000,600" fill="none" stroke="url(#grad2)" strokeWidth="1.5"/>
           <defs>
             <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="var(--accent)" />
               <stop offset="100%" stopColor="var(--accent-2)" />
             </linearGradient>
             <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="var(--accent-2)" />
               <stop offset="100%" stopColor="var(--accent)" />
             </linearGradient>
           </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full relative">
          
          {/* LEFT SIDE: Hello & Roles */}
          <div className="flex flex-col z-20 max-w-sm mb-12 lg:mb-0 w-full lg:w-1/3">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-none"
            >
              Hello,
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-[280px]"
            >
              Delivering efficient, scalable solutions to transform your tech vision into reality.
            </motion.p>

            {/* Roles with connecting lines */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16 flex flex-col gap-10 relative pl-4 border-l border-white/10"
            >
              <div className="relative flex items-center">
                <div className="absolute -left-[21px] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
                <div className="w-16 h-[1px] bg-white/20 mr-4" />
                <span className="text-slate-200 text-lg font-medium tracking-wide">IT Engineer</span>
              </div>
              <div className="relative flex items-center">
                <div className="absolute -left-[21px] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
                <div className="w-12 h-[1px] bg-white/20 mr-4" />
                <span className="text-slate-200 text-lg font-medium tracking-wide">Web Dev</span>
              </div>
              <div className="relative flex items-center">
                <div className="absolute -left-[21px] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
                <div className="w-20 h-[1px] bg-white/20 mr-4" />
                <span className="text-slate-200 text-lg font-medium tracking-wide">Data Engineer</span>
              </div>
            </motion.div>
          </div>

          {/* CENTER: Portrait & Floating Icons */}
          <div className="relative flex justify-center items-center w-full lg:w-1/3 my-10 lg:my-0 z-10">
            {/* Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border border-white/5 shadow-[0_0_80px_rgba(217,70,239,0.15)] z-20 bg-[var(--card)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpg" alt="Kavya Goswami" className="w-full h-full object-cover" />
            </motion.div>

            {/* Social Nodes connected with angular lines */}
            <div className="absolute -top-10 right-0 hidden lg:block pointer-events-none">
              <motion.svg width="300" height="200" className="absolute -left-[250px] top-10 pointer-events-none">
                <path d="M0,150 L100,50 L250,50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <path d="M100,50 L180,150 L280,150" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              </motion.svg>

              <div className="flex items-center gap-16 relative">
                <motion.a 
                  href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px var(--accent)" }}
                  className="w-10 h-10 rounded-lg border border-white/20 bg-black/40 flex items-center justify-center backdrop-blur-md pointer-events-auto"
                >
                  <GithubIcon size={18} className="text-white" />
                </motion.a>
                <motion.a 
                  href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px var(--accent)" }}
                  className="w-10 h-10 rounded-lg border border-white/20 bg-black/40 flex items-center justify-center backdrop-blur-md pointer-events-auto -mt-20"
                >
                  <LinkedinIcon size={18} className="text-white" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: I am Name */}
          <div className="flex flex-col z-20 text-center lg:text-right justify-center w-full lg:w-1/3">
            <motion.h1 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-5xl sm:text-7xl xl:text-8xl font-black text-white leading-[1.1] tracking-tight"
            >
              <span className="block text-3xl sm:text-4xl xl:text-5xl font-medium text-slate-300 mb-2 tracking-wide">
                I am
              </span>
              Kavya<br />Goswami
            </motion.h1>
          </div>
          
        </div>
      </div>
    </section>
  );
}
