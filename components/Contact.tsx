"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, Send, MapPin, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/icons";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const socials = [
    { icon: GithubIcon, label: "GitHub", value: "@kavyag120504", href: personalInfo.github },
    { icon: LinkedinIcon, label: "LinkedIn", value: "Kavya Goswami", href: personalInfo.linkedin },
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: LeetCodeIcon, label: "LeetCode", value: "@kavyagoswami", href: personalInfo.leetcode },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-14">
            <p className="section-eyebrow">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Get in Touch</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-md">
              Open to internships, collaborations, and exciting opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left */}
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-slate-400 text-sm leading-relaxed">
                  I&apos;m currently looking for internship opportunities and interesting projects.
                  Whether you have a question, a project idea, or just want to say hello — feel free to reach out.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={13} className="text-slate-600 shrink-0" />
                    <span className="text-slate-400">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone size={13} className="text-slate-600 shrink-0" />
                    <span className="text-slate-400">{personalInfo.phone}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/4 border border-transparent hover:border-white/6 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-slate-500 group-hover:text-white transition-colors shrink-0">
                      <s.icon size={14} />
                    </div>
                    <div>
                      <p className="text-slate-600 text-xs">{s.label}</p>
                      <p className="text-slate-300 text-sm group-hover:text-white transition-colors">{s.value}</p>
                    </div>
                    <span className="ml-auto text-slate-700 group-hover:text-slate-400 transition-colors text-sm">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-500 text-xs font-medium mb-1.5 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/4 border border-white/8 rounded-lg text-white placeholder-slate-700 focus:outline-none focus:border-indigo-500/50 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-slate-500 text-xs font-medium mb-1.5 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/4 border border-white/8 rounded-lg text-white placeholder-slate-700 focus:outline-none focus:border-indigo-500/50 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-slate-500 text-xs font-medium mb-1.5 uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 bg-white/4 border border-white/8 rounded-lg text-white placeholder-slate-700 focus:outline-none focus:border-indigo-500/50 transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 ${
                  submitted ? "bg-emerald-600 text-white" : "bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                {submitted ? (
                  <><CheckCircle size={15} /> Message sent</>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
