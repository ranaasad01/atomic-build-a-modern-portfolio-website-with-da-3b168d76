"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, Code2 as Github, Briefcase as Linkedin, Mail } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, popIn } from "@/lib/motion";

const TITLES = [
  "Full-Stack Engineer",
  "UI/UX Craftsman",
  "Open Source Builder",
  "Product Thinker",
];

const codeLines = [
  { indent: 0, tokens: [{ t: "const ", c: "text-purple-400" }, { t: "portfolio", c: "text-blue-300" }, { t: " = {", c: "text-white/70" }] },
  { indent: 1, tokens: [{ t: "name", c: "text-green-300" }, { t: ": ", c: "text-white/50" }, { t: '"Alex Carter"', c: "text-amber-300" }, { t: ",", c: "text-white/50" }] },
  { indent: 1, tokens: [{ t: "role", c: "text-green-300" }, { t: ": ", c: "text-white/50" }, { t: '"Full-Stack Engineer"', c: "text-amber-300" }, { t: ",", c: "text-white/50" }] },
  { indent: 1, tokens: [{ t: "stack", c: "text-green-300" }, { t: ": [", c: "text-white/50" }] },
  { indent: 2, tokens: [{ t: '"Next.js"', c: "text-amber-300" }, { t: ", ", c: "text-white/50" }, { t: '"TypeScript"', c: "text-amber-300" }, { t: ",", c: "text-white/50" }] },
  { indent: 2, tokens: [{ t: '"Node.js"', c: "text-amber-300" }, { t: ", ", c: "text-white/50" }, { t: '"PostgreSQL"', c: "text-amber-300" }] },
  { indent: 1, tokens: [{ t: "],", c: "text-white/50" }] },
  { indent: 1, tokens: [{ t: "available", c: "text-green-300" }, { t: ": ", c: "text-white/50" }, { t: "true", c: "text-purple-400" }] },
  { indent: 0, tokens: [{ t: "}", c: "text-white/70" }] },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.5 } },
};

const lineVariant: Variants = {
  hidden: { opacity: 0, x: 28, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 90, damping: 18 },
  },
};

export default function HeroSection() {
  const shouldReduce = useReducedMotion();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduce) {
      setDisplayed(TITLES[0]);
      return;
    }
    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex, shouldReduce]);

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background mesh glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-800/8 blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* ── Left column ── */}
        <div className="flex flex-col gap-8">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 w-fit"
          >
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/8 text-purple-300 text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.3 }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-balance"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient glow-text">Alex Carter</span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 80, damping: 16, delay: 0.55 }}
            className="flex items-center gap-3 text-xl md:text-2xl text-[#888] font-light"
          >
            <span className="text-purple-400">&gt;</span>
            <span className="font-mono">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-purple-400 ml-0.5 animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* Bio blurb */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-[#666] text-lg leading-relaxed max-w-lg text-pretty"
          >
            I build fast, accessible, and beautiful digital products — from pixel-perfect
            UIs to scalable backend systems. 5+ years turning ideas into production.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.75 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-95"
            >
              View my work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3.5 rounded-full border border-white/12 hover:border-purple-500/40 text-white/80 hover:text-white font-semibold text-sm transition-all duration-300 hover:bg-white/4 active:scale-95"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center gap-4 pt-2"
          >
            <span className="text-[#444] text-xs font-mono tracking-widest uppercase">Find me on</span>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center text-[#555] hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right column — code window ── */}
        <motion.div
          initial={{ opacity: 0, x: 60, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', stiffness: 55, damping: 16, delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Glow behind window */}
            <div className="absolute -inset-4 rounded-3xl bg-purple-600/10 blur-2xl" />

            {/* Terminal window */}
            <div className="scan-overlay relative rounded-2xl border border-white/8 bg-[#0d0d0d] shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/6 bg-[#111]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-4 text-[#444] text-xs font-mono">portfolio.ts</span>
              </div>

              {/* Code lines */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="p-6 font-mono text-sm leading-7 space-y-0.5"
              >
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    variants={lineVariant}
                    className="flex"
                    style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                  >
                    <span className="select-none text-[#333] mr-5 text-xs w-4 text-right shrink-0">
                      {i + 1}
                    </span>
                    <span>
                      {line.tokens.map((tok, j) => (
                        <span key={j} className={tok.c}>
                          {tok.t}
                        </span>
                      ))}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-5 py-2.5 border-t border-white/5 bg-[#0a0a0a]">
                <span className="text-[#333] text-xs font-mono">TypeScript</span>
                <span className="flex items-center gap-1.5 text-green-400 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  ready
                </span>
              </div>
            </div>

            {/* Floating stat chips */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 glass rounded-xl px-4 py-2.5 border border-white/8 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="text-purple-400 text-lg font-bold">40+</span>
                <span className="text-[#666] text-xs">Projects shipped</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-5 glass rounded-xl px-4 py-2.5 border border-white/8 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-lg font-bold">5+</span>
                <span className="text-[#666] text-xs">Years experience</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[#444] text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="text-[#444]" />
      </motion.div>
    </motion.section>
  );
}
