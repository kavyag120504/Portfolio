"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "@/lib/data";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden pt-20 pb-16">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[80px]"
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl">
        
        {/* Avatar with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-8 group"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl group-hover:bg-cyan-400/50 transition-all duration-500" />
          <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-70 blur-md group-hover:opacity-100 transition-all duration-500" />
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#1e293b] bg-[#0f172a] shadow-[0_0_30px_rgba(14,165,233,0.3)] z-10">
            <Image
              src="/profile.jpg"
              alt="Kavya Goswami"
              fill
              className="object-cover object-top scale-110"
              priority
              unoptimized
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4"
        >
          Hi, I'm <span className="text-cyan-400">Kavya</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium mb-6 h-8 flex items-center justify-center"
        >
          I'm a&nbsp;
          <TypeAnimation
            sequence={personalInfo.roles.flatMap((r) => [r, 2400])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-white border-r-2 border-cyan-400 pr-1"
            cursor={false}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10"
        >
          I create beautiful, responsive web experiences using modern technologies.
          <br className="hidden sm:block" />
          Passionate about clean code, scalable architecture, and intelligent systems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center justify-center"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white text-base font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 whitespace-nowrap min-w-[180px]"
          >
            View My Work
          </button>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white text-base font-bold rounded-full transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5 whitespace-nowrap min-w-[180px]"
          >
            Download CV
          </a>
        </motion.div>

      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Scroll</span>
        <motion.button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2 hover:border-cyan-500 transition-colors"
          aria-label="Scroll down"
        >
          <motion.div 
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
          />
        </motion.button>
      </motion.div>
    </section>
  );
}
