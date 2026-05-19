"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo, stats, education } from "@/lib/data";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="about" className="section pb-24">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              About <span className="text-cyan-400">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed">{personalInfo.summary}</p>
              </div>

              {/* Info rows */}
              <div className="flex flex-col gap-5 pt-4">
                {[
                  { icon: MapPin, label: "Location", value: personalInfo.location },
                  { icon: Mail, label: "Email", value: personalInfo.email },
                  { icon: Phone, label: "Phone", value: personalInfo.phone },
                  { icon: GraduationCap, label: "University", value: personalInfo.university },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-[#1e293b] flex items-center justify-center shrink-0 shadow-inner">
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{label}</span>
                      <span className="text-slate-200 text-base font-medium">{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="card p-6 border border-[#1e293b] bg-[#0f172a]/50">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Education */}
            <div className="pt-4 lg:pt-0">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <GraduationCap size={20} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Education</h3>
              </div>

              <div className="flex flex-col gap-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.1 }}
                    className="card p-8 bg-[#0f172a]/40 border-[#1e293b]"
                  >
                    <div className="flex flex-col gap-2">
                      <h4 className="text-white text-lg font-bold leading-snug">{edu.degree}</h4>
                      <p className="text-cyan-400 text-base font-medium">{edu.institution}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        <span className="text-slate-400 text-sm font-medium bg-[#0b1121] px-3 py-1 rounded-md border border-[#1e293b]">
                          {edu.period}
                        </span>
                        <span className="text-blue-400 text-sm font-bold bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
