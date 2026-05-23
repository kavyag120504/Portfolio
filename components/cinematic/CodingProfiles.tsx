"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons";

export default function CodingProfiles() {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative bg-[#050505] pt-40 pb-40 z-20 overflow-hidden border-t border-white/5">
      <div className="site-container">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <span className="text-white/50 font-semibold tracking-[0.5em] text-xs uppercase mb-6 block">Continuous Engineering</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-tight mb-6">
            Coding Profiles
          </h2>
          <p className="text-slate-400 font-light max-w-lg text-sm md:text-base leading-relaxed">
            A visual representation of consistent problem solving, algorithmic thinking, and open source contributions.
          </p>
        </motion.div>

        <div className="h-16" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* GitHub Contribution Heatmap Mock */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-3/5 rounded-2xl border border-white/10 bg-[#0a0a0a] p-10 md:p-16 relative overflow-hidden group flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <GithubIcon size={24} className="text-white" />
                  <a href="https://github.com/kavyag120504" target="_blank" rel="noreferrer" className="text-white font-bold tracking-widest uppercase text-sm hover:text-[var(--accent)] transition-colors">
                    GitHub Activity @kavyag120504
                  </a>
                </div>
                <span className="text-xs font-mono text-slate-500">Active Open Source</span>
              </div>
              
              {/* Abstract Heatmap Visual */}
              <div className="flex-1 flex flex-col justify-end gap-1.5 opacity-80">
                    {Array.from({ length: 6 }).map((_, rowIndex) => (
                  <div key={rowIndex} className="flex gap-1.5">
                    {Array.from({ length: 30 }).map((_, colIndex) => {
                      // Deterministic pattern — no Math.random() to avoid hydration mismatch
                      const val = (rowIndex * 7 + colIndex * 13 + rowIndex * colIndex) % 10;
                      let bgClass = "bg-white/5";
                      if (val >= 8) bgClass = "bg-[var(--accent)]";
                      else if (val >= 6) bgClass = "bg-[var(--accent)]/60";
                      else if (val >= 3) bgClass = "bg-[var(--accent)]/30";
                      return (
                        <div
                          key={colIndex}
                          className={`w-full aspect-square rounded-sm ${bgClass}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LeetCode Stats Mock */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-2/5 rounded-2xl border border-white/10 bg-[#0a0a0a] p-10 md:p-16 relative overflow-hidden group flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-[#ffaa00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 text-center w-full">
              <span className="text-[#ffaa00] font-bold tracking-widest uppercase text-xs mb-8 block">LeetCode Analytics</span>
              
              {/* Circular Graph */}
              <a href="https://leetcode.com/u/kavyagoswami/" target="_blank" rel="noreferrer" className="relative w-40 h-40 mx-auto mb-8 flex items-center justify-center hover:scale-105 transition-transform group/link">
                {/* Outer Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                  <circle cx="80" cy="80" r="70" fill="none" stroke="#ffaa00" strokeWidth="8" strokeDasharray="440" strokeDashoffset="250" strokeLinecap="round" className="drop-shadow-[0_0_10px_#ffaa00]" />
                </svg>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-black text-white tracking-tighter group-hover/link:text-[#ffaa00] transition-colors">138</span>
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest">SOLVED</span>
                </div>
              </a>

              {/* Difficulty Bars */}
              <div className="w-full space-y-4">
                <div className="w-full">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest mb-1.5">
                    <span className="text-green-400">Easy</span>
                    <span className="text-slate-400 font-mono">56</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 w-[40%]" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest mb-1.5">
                    <span className="text-yellow-400">Medium</span>
                    <span className="text-slate-400 font-mono">71</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 w-[51%]" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest mb-1.5">
                    <span className="text-red-400">Hard</span>
                    <span className="text-slate-400 font-mono">11</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400 w-[9%]" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
