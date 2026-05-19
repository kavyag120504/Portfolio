"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f2e] py-10">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white font-medium text-sm hover:text-indigo-400 transition-colors"
          >
            {personalInfo.name}<span className="text-indigo-400">.</span>
          </button>

          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Kavya Goswami · Built with Next.js & Tailwind CSS
          </p>

          <div className="flex items-center gap-2">
            {[
              { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
              { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              { icon: LeetCodeIcon, href: personalInfo.leetcode, label: "LeetCode" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center text-slate-600 hover:text-white hover:border-white/12 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
