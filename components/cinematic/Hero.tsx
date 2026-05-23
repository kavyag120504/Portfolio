"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
    >
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--accent)]/5 via-[#050505] to-[#050505] pointer-events-none"
      />

      <div className="site-container relative z-10 flex flex-col items-center justify-center w-full text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-[var(--accent)] font-semibold tracking-[0.4em] text-xs uppercase mb-8">
            Introducing
          </span>
          <motion.h1 
            style={{ scale: textScale, opacity: textOpacity }}
            className="text-5xl sm:text-7xl lg:text-[8rem] font-black text-white drop-shadow-2xl tracking-tighter uppercase leading-[0.9]"
          >
            KAVYA<br/>GOSWAMI
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="text-slate-400 max-w-2xl text-xs md:text-sm tracking-[0.2em] font-medium mt-10 uppercase leading-loose"
        >
          AI ENGINEER <span className="mx-3 text-[var(--accent)]">•</span> FULL STACK DEVELOPER
        </motion.p>

        {/* Hero CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
          className="mt-16 flex flex-wrap justify-center items-center gap-6"
        >
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white text-black rounded-full font-bold tracking-widest uppercase text-xs hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            View Resume <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold tracking-widest uppercase text-xs hover:bg-white/10 transition-all duration-300"
          >
            GitHub
          </a>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold tracking-widest uppercase text-xs hover:bg-white/10 transition-all duration-300"
          >
            Contact
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
