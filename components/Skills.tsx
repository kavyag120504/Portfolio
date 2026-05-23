"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Server, Cpu, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend & UI",
    icon: Code,
    color: "var(--accent)",
    skills: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    description: "Building responsive, modern, and interactive user interfaces."
  },
  {
    title: "Backend & DB",
    icon: Server,
    color: "var(--accent-2)",
    skills: ["Node.js", "Express", "MongoDB", "SQL"],
    description: "Designing robust server-side architecture and efficient databases."
  },
  {
    title: "AI & ML",
    icon: Cpu,
    color: "#06b6d4",
    skills: ["Python", "TensorFlow", "Scikit-Learn", "NLP"],
    description: "Developing intelligent models to solve complex, data-driven problems."
  },
  {
    title: "Mobile Dev",
    icon: Smartphone,
    color: "#f472b6",
    skills: ["Flutter", "Dart", "React Native", "Firebase"],
    description: "Creating seamless cross-platform mobile experiences."
  }
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              My Skills and Development
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col p-6 lg:p-8 rounded-[1.5rem] bg-[var(--card)] border border-white/5 hover:border-white/10 transition-colors group h-full shadow-lg"
              >
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ 
                    background: `linear-gradient(135deg, ${category.color}15, transparent)`,
                    border: `1px solid ${category.color}30`,
                    boxShadow: `0 0 20px ${category.color}15`
                  }}
                >
                  <category.icon size={22} color={category.color} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {category.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">
                  {category.description}
                </p>

                {/* Specific Skills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 rounded-md text-[11px] uppercase tracking-wider font-semibold bg-black/40 border border-white/5 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
