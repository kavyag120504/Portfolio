"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/data";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const categories = ["All", "AI/ML", "Full Stack", "Mobile"];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                My <span className="text-blue-500">Portfolio</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-md">
                A collection of my recent projects.
              </p>
            </div>

            <div className="flex items-center gap-1 bg-[#0f172a] border border-[#1e293b] rounded-lg p-1 self-start sm:self-auto shadow-inner">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    active === cat 
                      ? "bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.3)]" 
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card flex flex-col group overflow-hidden"
                >
                  <div className="p-6 flex flex-col flex-1">
                    {/* Top */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full flex items-center justify-center bg-[#0f172a] border border-[#1e293b] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                          aria-label="GitHub"
                        >
                          <GithubIcon size={12} />
                        </a>
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-full flex items-center justify-center bg-[#0f172a] border border-[#1e293b] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                            aria-label="Live demo"
                          >
                            <ArrowUpRight size={12} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1e293b]">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="tag text-[10px] px-2 py-0.5">{t}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="tag text-[10px] px-2 py-0.5">+{project.tech.length - 3}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-14 text-center">
            <a
              href="https://github.com/kavyag120504"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <GithubIcon size={16} />
              View all projects on GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
