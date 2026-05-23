"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden z-20">
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <h2 className="text-[15vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent tracking-tighter uppercase whitespace-nowrap">
          Contact
        </h2>
      </div>

      <div className="site-container relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center w-full"
        >
        <span className="text-[var(--accent)] font-semibold tracking-[0.5em] text-xs uppercase mb-8 block">Ready for the future?</span>
        <h2 className="text-5xl md:text-8xl lg:text-[7rem] font-black text-white uppercase tracking-tighter leading-none mb-16">
          Let's Build<br/>Something<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)]">Impactful.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <a href={`mailto:${personalInfo.email}`} className="group relative text-2xl md:text-4xl font-bold text-white uppercase tracking-tight hover:text-[var(--accent)] transition-colors flex items-center gap-2">
            Email <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="group relative text-2xl md:text-4xl font-bold text-white uppercase tracking-tight hover:text-[var(--accent)] transition-colors flex items-center gap-2">
            Github <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="group relative text-2xl md:text-4xl font-bold text-white uppercase tracking-tight hover:text-[var(--accent)] transition-colors flex items-center gap-2">
            LinkedIn <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
          </a>
        </div>

        <motion.a 
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-20 px-12 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold tracking-[0.2em] uppercase text-sm hover:bg-white hover:text-black transition-colors duration-300"
        >
          View Resume
        </motion.a>
        </motion.div>
      </div>

      {/* Footer minimal */}
      <div className="absolute bottom-10 text-xs text-white/30 uppercase tracking-[0.3em] font-medium">
        © {new Date().getFullYear()} Kavya Goswami
      </div>
    </section>
  );
}
