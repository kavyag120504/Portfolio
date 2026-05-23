"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "@/lib/data";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineering Success Stories
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => {
              const isFirst = i === 0;
              return (
                <div key={i} className="flex flex-col">
                  {/* Top Row: Title, Date & Tags */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-white tracking-wide">
                        {exp.role} - <span className="text-slate-300 font-medium">{exp.company}</span>
                      </h3>
                      {isFirst && (
                        <p className="text-sm text-slate-500 mt-2">{exp.period}</p>
                      )}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-3">
                       {exp.tech.slice(0, 2).map((t, idx) => (
                         <span 
                           key={idx} 
                           className="px-4 py-1.5 bg-black/40 border border-white/5 rounded-full text-xs font-semibold text-slate-300 shadow-inner"
                         >
                           {t}
                         </span>
                       ))}
                    </div>
                  </div>

                  {/* Body for Featured (First) Item */}
                  {isFirst && (
                    <div className="grid sm:grid-cols-2 gap-8 mt-2 items-center">
                      <div className="w-full aspect-[21/9] bg-[var(--card)] rounded-xl border border-white/5 overflow-hidden relative shadow-lg">
                         <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent" />
                         <div className="flex items-center justify-center w-full h-full">
                           <div className="w-3/4 h-1/2 bg-black/50 rounded border border-white/10 flex items-center justify-center">
                             <span className="text-white/20 text-xs tracking-widest uppercase">Project UI</span>
                           </div>
                         </div>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {exp.points[0]} {exp.points[1] && exp.points[1]}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Divider line for all except last */}
                  {i !== experience.length - 1 && (
                    <div className="w-full h-[1px] bg-white/5 mt-10" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
