"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  "Python", "Java", "JavaScript", "C++", "Dart", "SQL",
  "React.js", "Next.js", "Flutter", "Tailwind CSS", "HTML / CSS",
  "Node.js", "Express.js", "MongoDB", "Firebase", "MySQL", "SQLite",
  "TensorFlow", "LangChain", "Deep Learning", "CNN", "Groq / LLaMA",
  "Git / GitHub", "Android Studio", "Google Colab", "Postman", "Streamlit", "VS Code",
];

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={containerRef} className="relative pt-40 pb-48 overflow-hidden bg-[#050505] z-10 border-t border-white/5">
      <div className="site-container relative z-10">
        <div className="pt-8 mb-8 flex flex-col items-center text-center">
          <span className="text-white/50 font-semibold tracking-[0.5em] text-xs uppercase mb-6 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
            Technical<br/>Arsenal
          </h2>
        </div>

        <div className="h-16" />

        <motion.div 
          style={{ y }}
          className="flex flex-wrap gap-4 md:gap-6 justify-center"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md cursor-default transition-colors duration-300"
            >
              <span className="text-white text-sm md:text-base lg:text-lg font-bold tracking-tight uppercase whitespace-nowrap">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom spacer so next section doesn't bleed in */}
        <div className="h-24" />
      </div>

      {/* Abstract Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[var(--accent)]/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2 mix-blend-screen" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[var(--accent-2)]/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
    </section>
  );
}
