"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "KAVI",
    subtitle: "MULTI-AGENT AI ASSISTANT",
    description: "An advanced conversational AI assistant integrating multiple specialized agents for Gmail, Calendar, Weather, and task orchestration. Features memory persistence and complex productivity workflows.",
    tech: ["LangChain", "Groq/LLaMA", "Streamlit", "SQLite", "REST APIs"],
    link: "https://multi-agent-assistant-kavi.streamlit.app/",
    // Red theme
    accent: "#ff2a2a",
    glow: "rgba(255,42,42,0.15)",
    gradient: "from-[#ff2a2a]/20 to-[#050505]",
    borderHover: "hover:border-[#ff2a2a]/50",
    textAccent: "text-[#ff2a2a]",
    mockType: "kavi",
  },
  {
    title: "Medical AI",
    subtitle: "MULTI-ORGAN DISEASE PREDICTION",
    description: "A deep learning framework for automated multi-organ, multi-disease classification using CT imaging. Features organ-specific EfficientNet architectures and clinical-style evaluation metrics.",
    tech: ["Python", "TensorFlow", "EfficientNet", "Transfer Learning"],
    link: "https://github.com/kavyag120504/Image-Processing-Project",
    // Blue-purple theme matching the screenshot
    accent: "#7c6fff",
    glow: "rgba(124,111,255,0.15)",
    gradient: "from-[#7c6fff]/20 to-[#050505]",
    borderHover: "hover:border-[#7c6fff]/50",
    textAccent: "text-[#7c6fff]",
    mockType: "medical",
  },
  {
    title: "AVATARA",
    subtitle: "3D AVATAR CUSTOMIZATION APP",
    description: "Cross-platform mobile app for real-time 3D avatar customization featuring 8 body types, real-time accessory swapping, and integrated Stable Diffusion AI portrait generation.",
    tech: ["React Native", "Three.js", "Node.js", "MongoDB", "Stable Diffusion"],
    link: "https://github.com/Aryan246cs/Avatar-app-mobile",
    // Purple theme
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.15)",
    gradient: "from-[#a855f7]/20 to-[#050505]",
    borderHover: "hover:border-[#a855f7]/50",
    textAccent: "text-[#a855f7]",
    mockType: "3d",
  },
  {
    title: "D-Prep",
    subtitle: "DISASTER PREPAREDNESS PLATFORM",
    description: "Interactive educational disaster preparedness platform featuring emergency simulations, gamified learning, and role-based student/teacher administrative panels.",
    tech: ["React.js", "Node.js", "MongoDB", "Firebase"],
    link: "https://github.com/kavyag120504/sih-2025",
    // Teal/emerald theme
    accent: "#10d9a0",
    glow: "rgba(16,217,160,0.15)",
    gradient: "from-[#10d9a0]/20 to-[#050505]",
    borderHover: "hover:border-[#10d9a0]/50",
    textAccent: "text-[#10d9a0]",
    mockType: "dashboard",
  },
];

export default function Projects() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative bg-[#050505] py-48 pb-40 z-20 overflow-hidden">
      <div className="site-container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-40"
        >
          <span className="text-white/50 font-semibold tracking-[0.5em] text-xs uppercase mb-6 block">Selected Works</span>
          <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-black text-white tracking-tighter uppercase leading-none">
            Featured<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">Projects</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              {/* ── Project Info ── */}
              <div className={`w-full lg:w-[45%] flex flex-col order-2 ${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <span className={`${project.textAccent} font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-6`}>
                  0{i + 1} // {project.subtitle}
                </span>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-12 max-w-lg">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-full border text-[10px] font-bold tracking-widest uppercase"
                      style={{ borderColor: `${project.accent}30`, color: `${project.accent}cc`, background: `${project.accent}10` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="self-start flex items-center gap-3 text-white font-bold tracking-widest uppercase text-xs md:text-sm group/btn transition-colors"
                  style={{ ["--hover-color" as string]: project.accent }}
                >
                  <span className="hover:opacity-80 transition-opacity">View Project</span>
                  <div
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:scale-110 transition-transform"
                    style={{ borderColor: `${project.accent}40` }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </a>
              </div>

              {/* ── Mockup Card ── */}
              <div
                className={`w-full lg:w-[55%] aspect-[4/3] md:aspect-[16/10] order-1 ${i % 2 === 1 ? "lg:order-1 lg:ml-auto" : "lg:order-2 lg:mr-auto"} relative overflow-hidden rounded-xl border border-white/5 ${project.borderHover} transition-colors duration-700`}
                style={{ background: "#0a0a0a" }}
              >
                {/* Per-project ambient glow */}
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 60% 40%, ${project.glow} 0%, transparent 70%)` }}
                />

                {/* Inner card */}
                <div className="absolute inset-5 md:inset-8 rounded-xl overflow-hidden flex flex-col shadow-2xl border border-white/8"
                  style={{ background: "#0d0d14" }}>

                  {/* Browser chrome */}
                  <div className="h-9 border-b border-white/8 flex items-center px-3 gap-1.5 shrink-0" style={{ background: "#111118" }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <div className="ml-3 flex-1 h-4 rounded bg-white/5 max-w-[140px]" />
                    <span className="ml-auto text-[9px] font-mono tracking-widest uppercase" style={{ color: `${project.accent}80` }}>
                      {project.mockType === "kavi" && "streamlit.app"}
                      {project.mockType === "medical" && "medical-ai.app"}
                      {project.mockType === "3d" && "avatara.app"}
                      {project.mockType === "dashboard" && "d-prep.app"}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex-1 overflow-hidden relative">

                    {/* ── KAVI ── */}
                    {project.mockType === "kavi" && (
                      <div className="h-full flex">
                        <div className="w-[46%] p-4 flex flex-col justify-center" style={{ background: "linear-gradient(135deg,#1a0808,#0a0404)" }}>
                          <p className="font-black text-base leading-tight mb-2" style={{ color: "#ff2a2a" }}>
                            Meet KAVI<br />Your AI Assistant
                          </p>
                          <p className="text-white/40 text-[8px] leading-relaxed mb-3">
                            A multi-agent AI platform handling weather, emails, calendar, news, tasks, reminders, web search, and code execution.
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {["Weather","Email","Calendar","Web Search","News","Tasks","Code","Reminders"].map((tag) => (
                              <span key={tag} className="px-1.5 py-0.5 rounded-full text-[6px] font-semibold border"
                                style={{ borderColor: "#ff2a2a50", color: "#ff2a2a99" }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="w-[54%] p-4 flex flex-col justify-center border-l border-white/5" style={{ background: "#0d0d0d" }}>
                          <div className="w-full h-5 rounded bg-white/5 mb-3" />
                          <div className="flex gap-3 mb-3">
                            <span className="text-[8px] font-bold border-b pb-0.5" style={{ color: "#ff2a2a", borderColor: "#ff2a2a" }}>Sign In</span>
                            <span className="text-[8px] text-white/25">Create Account</span>
                          </div>
                          <p className="text-white font-black text-xs mb-0.5">Welcome Back</p>
                          <p className="text-white/30 text-[7px] mb-2">Sign in to your KAVI account</p>
                          <div className="mb-1.5">
                            <p className="text-white/30 text-[6px] mb-0.5">Username</p>
                            <div className="w-full h-6 rounded border px-2 flex items-center" style={{ borderColor: "#ff2a2a60", background: "#0a0a0a" }}>
                              <span className="text-white/15 text-[7px]">your_username</span>
                            </div>
                          </div>
                          <div className="mb-2">
                            <p className="text-white/30 text-[6px] mb-0.5">Password</p>
                            <div className="w-full h-6 rounded border px-2 flex items-center justify-between border-white/10" style={{ background: "#0a0a0a" }}>
                              <span className="text-white/15 text-[9px] tracking-widest">••••••••</span>
                              <div className="w-2.5 h-2.5 rounded-full border border-white/15" />
                            </div>
                          </div>
                          <div className="w-full h-6 rounded flex items-center justify-center" style={{ background: "#ff2a2a" }}>
                            <span className="text-white text-[7px] font-bold tracking-wider">SIGN IN</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── MEDICAL AI — replica of screenshot ── */}
                    {project.mockType === "medical" && (
                      <div className="h-full flex" style={{ background: "#0e0e16" }}>
                        {/* Left sidebar */}
                        <div className="w-[28%] border-r border-white/8 p-3 flex flex-col gap-3" style={{ background: "#111118" }}>
                          <div className="flex items-center gap-1.5 mb-1">
                            <div className="w-3 h-3 rounded-full border border-white/20 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                            </div>
                            <span className="text-white text-[8px] font-bold">Configuration</span>
                          </div>
                          <div>
                            <p className="text-white/40 text-[6px] mb-1">Select Organ</p>
                            <div className="w-full h-5 rounded border border-white/10 px-2 flex items-center justify-between" style={{ background: "#1a1a24" }}>
                              <span className="text-white/60 text-[7px]">Brain</span>
                              <span className="text-white/30 text-[7px]">▾</span>
                            </div>
                          </div>
                          <div className="w-full h-px bg-white/8 my-1" />
                          <div>
                            <p className="text-white font-bold text-[7px] mb-2">Model Accuracy</p>
                            {[{ organ: "Brain", val: "80.25%" }, { organ: "Chest", val: "97.30%" }, { organ: "Kidney", val: "93.50%" }].map((s) => (
                              <div key={s.organ} className="mb-2">
                                <p className="text-white/40 text-[6px]">{s.organ}</p>
                                <p className="font-black text-sm leading-none" style={{ color: "#7c6fff" }}>{s.val}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Main content */}
                        <div className="flex-1 p-3 flex flex-col gap-2.5">
                          {/* Hero banner */}
                          <div className="w-full rounded-lg p-3 flex flex-col justify-center" style={{ background: "linear-gradient(135deg,#4a3aff,#9b59b6)", minHeight: "52px" }}>
                            <p className="text-white font-black text-[10px] leading-tight">
                              🏥 Multi-Organ Disease Detection System
                            </p>
                            <p className="text-white/70 text-[7px] mt-0.5">AI-Powered CT/MRI/X-Ray Medical Image Analysis</p>
                          </div>

                          {/* Two columns */}
                          <div className="flex gap-2 flex-1">
                            {/* Upload */}
                            <div className="flex-1 rounded-lg border border-white/8 p-2.5" style={{ background: "#111118" }}>
                              <p className="text-white font-bold text-[8px] mb-1">🏥 Upload Medical Image</p>
                              <p className="text-white/30 text-[6px] mb-1.5">Upload JPG or PNG image</p>
                              <div className="w-full rounded border border-dashed border-white/15 p-2 flex items-center gap-2" style={{ background: "#0e0e16" }}>
                                <div className="w-5 h-5 rounded-full border border-white/15 flex items-center justify-center shrink-0">
                                  <span className="text-[8px]">↑</span>
                                </div>
                                <div className="flex-1">
                                  <p className="text-white/50 text-[6px]">Drag and drop file here</p>
                                  <p className="text-white/20 text-[5px]">Limit 200MB • JPG, JPEG, PNG</p>
                                </div>
                                <div className="px-2 py-0.5 rounded text-[6px] font-bold text-white" style={{ background: "#7c6fff" }}>Browse</div>
                              </div>
                            </div>
                            {/* Results */}
                            <div className="flex-1 rounded-lg border border-white/8 p-2.5" style={{ background: "#111118" }}>
                              <p className="text-white font-bold text-[8px] mb-1">📊 Results</p>
                              <div className="w-full rounded p-2 text-[6px] text-white/40" style={{ background: "#1a2a3a" }}>
                                Upload an image and click Analyze.
                              </div>
                            </div>
                          </div>

                          {/* Footer note */}
                          <p className="text-white/25 text-[6px]">⚠ This is for educational research only — not for clinical diagnosis.</p>
                        </div>
                      </div>
                    )}

                    {/* ── AVATARA ── */}
                    {project.mockType === "3d" && (
                      <div className="h-full flex flex-col justify-between p-5" style={{ background: "linear-gradient(135deg,#0d0818,#120a20)" }}>
                        <div className="flex justify-between items-start">
                          <div className="w-14 h-14 rounded-xl border flex items-center justify-center text-xl"
                            style={{ borderColor: "#a855f730", background: "#a855f710" }}>
                            🧑‍🎤
                          </div>
                          <div className="flex flex-col gap-1.5">
                            {["Body","Colors","Store"].map((t, idx) => (
                              <div key={t} className="px-3 py-1 rounded-full text-[7px] font-bold"
                                style={{ background: idx === 2 ? "#a855f7" : "#a855f715", color: idx === 2 ? "#fff" : "#a855f7aa", border: `1px solid #a855f730` }}>
                                {t}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          {["Jacket","Pants","Hair"].map((c, idx) => (
                            <div key={c} className="flex-1 py-1.5 rounded-lg text-center text-[7px] font-bold"
                              style={{ background: idx === 0 ? "#a855f7" : "#a855f710", color: idx === 0 ? "#fff" : "#a855f780", border: "1px solid #a855f730" }}>
                              {c}
                            </div>
                          ))}
                        </div>
                        <div className="w-full h-16 mt-3 rounded-2xl border-t"
                          style={{ background: "linear-gradient(to top,#a855f720,transparent)", borderColor: "#a855f730" }} />
                        <div className="flex gap-2 mt-2">
                          <div className="flex-1 py-1.5 rounded-full border text-center text-[7px] font-bold text-white/40" style={{ borderColor: "#a855f730" }}>Reset</div>
                          <div className="flex-[2] py-1.5 rounded-full text-center text-[7px] font-bold text-white" style={{ background: "#a855f7" }}>Save Avatar</div>
                        </div>
                      </div>
                    )}

                    {/* ── D-PREP ── */}
                    {project.mockType === "dashboard" && (
                      <div className="h-full flex flex-col p-4 gap-2.5" style={{ background: "#080f0e" }}>
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <p className="text-[9px] font-black tracking-widest uppercase" style={{ color: "#10d9a0" }}>D-Prep Dashboard</p>
                          <div className="flex gap-1">
                            {["Active","Alert","Safe"].map((s, idx) => (
                              <span key={s} className="px-1.5 py-0.5 rounded text-[6px] font-bold"
                                style={{ background: ["#10d9a015","#ff6b2b15","#10d9a015"][idx], color: ["#10d9a0","#ff6b2b","#10d9a0"][idx], border: `1px solid ${["#10d9a030","#ff6b2b30","#10d9a030"][idx]}` }}>
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* Main grid */}
                        <div className="flex gap-2 flex-1">
                          <div className="flex-[2] rounded-lg border p-2 flex flex-col gap-1.5" style={{ borderColor: "#10d9a020", background: "#0d1a17" }}>
                            <p className="text-[7px] font-bold" style={{ color: "#10d9a0" }}>Live Drill Map</p>
                            <div className="flex-1 rounded" style={{ background: "linear-gradient(135deg,#10d9a010,#0d1a17)" }}>
                              {[...Array(3)].map((_, r) => (
                                <div key={r} className="flex gap-1 mb-1">
                                  {[...Array(5)].map((_, c) => (
                                    <div key={c} className="flex-1 h-3 rounded-sm"
                                      style={{ background: (r * 5 + c) % 3 === 0 ? "#10d9a030" : "#ffffff08" }} />
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col gap-2">
                            {[{ label: "Drills", val: "12" }, { label: "Users", val: "340" }, { label: "Score", val: "94%" }].map((s) => (
                              <div key={s.label} className="flex-1 rounded-lg border p-2 flex flex-col justify-center"
                                style={{ borderColor: "#10d9a020", background: "#0d1a17" }}>
                                <p className="text-[6px] text-white/30">{s.label}</p>
                                <p className="font-black text-sm leading-none" style={{ color: "#10d9a0" }}>{s.val}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Progress bar */}
                        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full w-[72%] rounded-full" style={{ background: "linear-gradient(90deg,#10d9a0,#0891b2)" }} />
                        </div>
                      </div>
                    )}

                    {/* Per-project ambient glow orb */}
                    <div
                      className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-[50px] opacity-30 animate-pulse pointer-events-none"
                      style={{ background: project.accent }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
