"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code2, Trophy, Mail } from "lucide-react";

const navLinks = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: Code2, label: "Projects" },
  { id: "skills", icon: Trophy, label: "Skills" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Find current section
      const sections = navLinks.map(link => document.getElementById(link.id));
      let current = "hero";
      
      for (const section of sections) {
        if (section && window.scrollY >= section.offsetTop - 300) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 bg-[#0f172a]/60 backdrop-blur-xl border border-[#1e293b] p-3 rounded-full shadow-2xl sidebar-glow">
      {navLinks.map((link) => {
        const Icon = link.icon;
        const isActive = activeSection === link.id;

        return (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`relative p-3 rounded-full flex items-center justify-center transition-all duration-300 group ${
              isActive 
                ? "text-white bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
            aria-label={link.label}
          >
            {isActive && (
              <motion.div
                layoutId="sidebar-active"
                className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full opacity-20"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <Icon size={20} className={isActive ? "text-cyan-400" : ""} />
            
            {/* Tooltip */}
            <div className="absolute left-full ml-4 px-3 py-1.5 bg-[#0f172a] border border-[#1e293b] text-white text-xs font-medium rounded opacity-0 -translate-x-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
              {link.label}
            </div>
          </button>
        );
      })}
    </div>
  );
}
