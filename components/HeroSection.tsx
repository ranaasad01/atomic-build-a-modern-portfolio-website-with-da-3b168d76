"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, Code2 as Github, Briefcase as Linkedin, Mail } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, revealMask, popIn } from "@/lib/motion";

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
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};

const lineVariant: Variants = {
  hidden: { opacity: 0, x: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-7"
          >
            {/* Available badge */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="inline-flex items-center gap-2 w-fit"
            >
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/8 text-green-400 text-xs font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Headline */}
            <div className="flex flex-col gap-3">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
                <span className="text-white">Hi, I&apos;m </span>
                <span className="text-gradient">Alex</span>
              </h1>
              {/* Typewriter subtitle */}
              <div className="h-10 flex items-center">
                <span className="text-2xl md:text-3xl font-semibold text-[#888] tracking-tight">
                  {displayed}
                  <span className="inline-block w-0.5 h-7 bg-purple-400 ml-0.5 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            <p className="text-[#666] text-lg leading-relaxed max-w-md text-pretty">
              I build fast, accessible, and beautiful digital products — from pixel-perfect
              UIs to resilient backend systems.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.45)] active:scale-95"
              >
                View my work
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/25 font-semibold text-sm transition-all duration-300 active:scale-95"
              >
                Get in touch
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#555] hover:text-white hover:border-white/25 transition-colors duration-300"
              >
                <Github size={17} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#555] hover:text-blue-400 hover:border-blue-500/30 transition-colors duration-300"
              >
                <Linkedin size={17} />
              </motion.a>
              <motion.a
                href="mailto:hello@example.com"
                aria-label="Email"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#555] hover:text-purple-400 hover:border-purple-500/30 transition-colors duration-300"
              >
                <Mail size={17} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right — code window */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.015, transition: { duration: 0.4 } }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.5)] bg-[#111]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/6 bg-[#161616]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-4 text-xs text-[#444] font-mono">portfolio.ts</span>
              </div>

              {/* Code body */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      variants={lineVariant}
                      className="flex"
                      style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                    >
                      <span className="select-none text-[#333] w-6 shrink-0 text-right mr-4">{i + 1}</span>
                      <span>
                        {line.tokens.map((tok, j) => (
                          <span key={j} className={tok.c}>{tok.t}</span>
                        ))}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom status bar */}
              <div className="px-5 py-3 border-t border-white/5 bg-[#0e0e0e] flex items-center justify-between">
                <span className="text-xs text-[#333] font-mono">TypeScript</span>
                <span className="flex items-center gap-1.5 text-xs text-green-400/70 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
                  ready
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#444] text-xs font-mono tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-[#444]" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
