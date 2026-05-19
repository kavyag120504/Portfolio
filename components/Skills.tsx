"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BrainCircuit } from "lucide-react";

// Top skills to display as progress bars matching the image style
const topSkills = [
  { name: "React / Next.js", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Python / AI", level: 88 },
  { name: "Node.js", level: 82 },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            My <span className="text-cyan-400">Skills</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: AI Graphic / Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center h-[300px] sm:h-[400px]"
          >
            {/* Central glowing orb */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-[#1e293b] bg-[#0f172a] flex items-center justify-center shadow-[0_0_50px_rgba(14,165,233,0.15)] z-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 animate-pulse" />
              <BrainCircuit className="w-20 h-20 text-cyan-400 opacity-80" strokeWidth={1} />
            </div>

            {/* Orbiting elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-cyan-500/20"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full border border-blue-500/10"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-400" />
            </motion.div>
          </motion.div>

          {/* Right Column: Progress Bars */}
          <div className="flex flex-col gap-8">
            {topSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-white text-base sm:text-lg font-medium tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-cyan-400 text-sm font-semibold tabular-nums">
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar h-2">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
