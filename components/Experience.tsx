"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "@/lib/data";
import { MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Work <span className="text-cyan-400">Experience</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-10">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="w-full"
                >
                  <div className="card p-8 bg-[#0f172a]/40 border-[#1e293b]">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div>
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full">{exp.type}</span>
                        <h3 className="text-xl font-bold text-white mt-4">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2 text-base text-slate-400 font-medium">
                          <span className="text-slate-300">{exp.company}</span>
                          <span className="text-slate-600">·</span>
                          <div className="flex items-center gap-1 text-slate-500">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 font-medium text-sm bg-[#0b1121] px-4 py-2 rounded-md border border-[#1e293b] shrink-0 shadow-inner mt-2 sm:mt-0">
                        <Calendar size={14} className="text-cyan-500" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-4 text-slate-400 text-base leading-relaxed">
                          <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500 block shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="text-center pt-4">
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Open to new opportunities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
