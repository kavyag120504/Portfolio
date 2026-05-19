"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certifications, extracurricular, personalInfo } from "@/lib/data";
import { ExternalLink, Award, Users } from "lucide-react";
import { GithubIcon, LeetCodeIcon } from "@/components/icons";

const hackathons = [
  { name: "Hacked 2.0", role: "Organizer" },
  { name: "HackBMU 6.0", role: "Organizer" },
  { name: "Smart India Hackathon 2024", role: "Organizer" },
  { name: "Smart India Hackathon 2023", role: "Qualifier" },
];

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="achievements" className="section pb-24">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Coding & <span className="text-cyan-400">Achievements</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* GitHub */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="card p-6 sm:p-8 border-[#1e293b] bg-white/[0.01] h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                    <GithubIcon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-lg font-bold">GitHub</p>
                    <p className="text-slate-400 text-sm">@kavyag120504</p>
                  </div>
                </div>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0f172a] border border-[#1e293b] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="space-y-4 flex-1 flex flex-col justify-end">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=kavyag120504&show_icons=true&theme=transparent&hide_border=true&title_color=22d3ee&icon_color=3b82f6&text_color=94a3b8&bg_color=00000000"
                  alt="GitHub Stats"
                  className="w-full rounded-xl border border-[#1e293b]/50"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=kavyag120504&theme=transparent&hide_border=true&ring=22d3ee&fire=3b82f6&currStreakLabel=22d3ee&sideLabels=94a3b8&dates=64748b&background=00000000"
                  alt="GitHub Streak"
                  className="w-full rounded-xl border border-[#1e293b]/50"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            </motion.div>

            {/* LeetCode */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 }}
              className="card p-6 sm:p-8 border-[#1e293b] bg-white/[0.01] h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shadow-inner">
                    <LeetCodeIcon size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white text-lg font-bold">LeetCode</p>
                    <p className="text-slate-400 text-sm">@kavyagoswami</p>
                  </div>
                </div>
                <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0f172a] border border-[#1e293b] text-slate-400 hover:text-yellow-400 hover:border-yellow-500/50 transition-all">
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <img
                  src="https://leetcard.jacoblin.cool/kavyagoswami?theme=dark&font=Nunito&ext=heatmap&border=0&radius=12"
                  alt="LeetCode Stats"
                  className="w-full rounded-xl border border-[#1e293b]/50"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "Problems", value: "100+" },
                    { label: "Contests", value: "Active" },
                    { label: "Rating", value: "—" },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-3 rounded-xl bg-[#0f172a]/50 border border-[#1e293b]">
                      <div className="text-white text-base font-bold">{s.value}</div>
                      <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
