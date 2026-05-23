"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative min-h-screen py-40 bg-[#050505] z-10 flex items-center border-t border-white/5">
      <div className="site-container w-full flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
        
        {/* Left: Image & Stats */}
        <div className="w-full lg:w-[42%] flex flex-col gap-8 relative shrink-0 items-center lg:items-start">
          
          {/* Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent z-10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile.jpg" alt="Kavya Goswami" className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105" />
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects Built", value: "6+" },
              { label: "LLMs / AI Systems", value: "4+" },
              { label: "Open Source", value: "Active" },
              { label: "Full-Stack + AI", value: "Building" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                className="p-4 rounded-lg bg-white/4 border border-white/8 flex flex-col"
              >
                <span className="text-[10px] text-slate-500 font-semibold tracking-[0.15em] uppercase mb-1">{stat.label}</span>
                <span className="text-2xl font-black text-white">{stat.value}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-[58%] lg:pt-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-10 tracking-tight leading-[1.15] uppercase"
          >
            I build AI-powered systems, immersive experiences, and developer tools that feel futuristic.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-slate-400 text-sm md:text-base font-light leading-[1.9] space-y-6"
          >
            <p>
              My journey started with a deep curiosity for how systems think and evolve. Today, I specialize in combining{" "}
              <strong className="text-white font-medium">Generative AI, Large Language Models</strong>, and robust{" "}
              <strong className="text-white font-medium">Full-Stack Architectures</strong> to build tools that expand human capability.
            </p>
            <p>
              I believe that advanced technology shouldn't just be functional — it should be an{" "}
              <strong className="text-white font-medium">immersive, premium experience</strong>. That's why I focus heavily on the intersection of MERN stack performance, intelligent AI integration, and cutting-edge frontend architecture.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
