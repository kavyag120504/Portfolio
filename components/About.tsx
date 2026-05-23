"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, Code, Cpu } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-[var(--card)] border border-white/5 rounded-[2rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left */}
            <div className="flex flex-col">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                About Me
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-md">
                I'm Kavya Goswami, an engineering student with {personalInfo.summary.substring(personalInfo.summary.indexOf('with ') + 5) || "a passion for software engineering, cloud solutions, and artificial intelligence. I'm focused on creating innovative, reliable systems that help businesses thrive in the digital world."}
              </p>
            </div>

            {/* Right: Feature Boxes */}
            <div className="flex flex-col gap-6">
              {/* Box 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 rounded-2xl bg-black/40 border border-white/5 group hover:border-[var(--accent)]/30 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(217,70,239,0.3)]">
                  <Code size={20} className="text-white" />
                </div>
                <p className="text-slate-300 text-sm font-medium leading-relaxed flex-1">
                  Build scalable web applications and mobile apps using React, Next.js, and Flutter.
                </p>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0 self-end sm:self-auto">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>

              {/* Box 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 rounded-2xl bg-black/40 border border-white/5 group hover:border-[var(--accent)]/30 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-2)] to-[#06b6d4] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <Cpu size={20} className="text-white" />
                </div>
                <p className="text-slate-300 text-sm font-medium leading-relaxed flex-1">
                  Design and deploy intelligent AI/ML models to solve complex, data-driven problems.
                </p>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0 self-end sm:self-auto">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
