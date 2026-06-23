"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, Code2 as Github, Briefcase as Linkedin, Mail } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, popIn } from "@/lib/motion";

const TITLES = [
  'SQA Engineer',
  'Test Automation Expert',
  'Quality Advocate',
  'Bug Hunter',
];

const codeLines = [
  { indent: 0, tokens: [{ t: 'const ', c: 'text-purple-400' }, { t: 'profile', c: 'text-blue-300' }, { t: ' = {', c: 'text-white/70' }] },
  { indent: 1, tokens: [{ t: 'name', c: 'text-green-300' }, { t: ': ', c: 'text-white/50' }, { t: '"Rao Muhammad Ali"', c: 'text-amber-300' }, { t: ',', c: 'text-white/50' }] },
  { indent: 1, tokens: [{ t: 'role', c: 'text-green-300' }, { t: ': ', c: 'text-white/50' }, { t: '"SQA Engineer"', c: 'text-amber-300' }, { t: ',', c: 'text-white/50' }] },
  { indent: 1, tokens: [{ t: 'tools', c: 'text-green-300' }, { t: ': [', c: 'text-white/50' }] },
  { indent: 2, tokens: [{ t: '"Cypress"', c: 'text-amber-300' }, { t: ', ', c: 'text-white/50' }, { t: '"Selenium"', c: 'text-amber-300' }, { t: ',', c: 'text-white/50' }] },
  { indent: 2, tokens: [{ t: '"Postman"', c: 'text-amber-300' }, { t: ', ', c: 'text-white/50' }, { t: '"JMeter"', c: 'text-amber-300' }] },
  { indent: 1, tokens: [{ t: '],', c: 'text-white/50' }] },
  { indent: 1, tokens: [{ t: 'available', c: 'text-green-300' }, { t: ': ', c: 'text-white/50' }, { t: 'true', c: 'text-purple-400' }] },
  { indent: 0, tokens: [{ t: '}', c: 'text-white/70' }] },
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

      <div className="max-w-6xl mx-auto px-6 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* ── Left column ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-purple-400 text-xs font-mono tracking-[0.2em] uppercase">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-balance"
            >
              Rao{" "}
              <span className="text-gradient">Muhammad</span>
              <br />
              Ali
            </motion.h1>

            {/* Typewriter title */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 h-9">
              <span className="text-xl md:text-2xl text-[#888] font-light">
                {displayed}
                <span className="inline-block w-0.5 h-6 bg-purple-400 ml-0.5 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeInUp}
              className="text-[#666] text-lg leading-relaxed max-w-lg text-pretty"
            >
              Passionate SQA Engineer dedicated to delivering high-quality software through
              rigorous testing, automation frameworks, and a relentless pursuit of bug-free
              experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-95"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3.5 rounded-full border border-white/10 hover:border-purple-500/40 text-[#888] hover:text-white font-semibold text-sm transition-all duration-300 hover:bg-white/5 active:scale-95"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#555] hover:text-white hover:border-white/25 transition-all duration-300"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#555] hover:text-blue-400 hover:border-blue-500/40 transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#555] hover:text-purple-400 hover:border-purple-500/40 transition-all duration-300"
              >
                <Mail size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right column — code window ── */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 rounded-3xl bg-purple-600/10 blur-[60px]" />

              {/* Code window */}
              <div className="relative rounded-2xl border border-white/8 bg-[#111] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/6 bg-[#0d0d0d]">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-[#444] font-mono">profile.ts</span>
                </div>

                {/* Code lines */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="p-6 font-mono text-sm leading-7"
                >
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      variants={lineVariant}
                      className="flex"
                      style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                    >
                      {line.tokens.map((token, j) => (
                        <span key={j} className={token.c}>
                          {token.t}
                        </span>
                      ))}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Status bar */}
                <div className="px-6 py-3 border-t border-white/6 bg-[#0d0d0d] flex items-center justify-between">
                  <span className="text-xs text-[#444] font-mono">TypeScript</span>
                  <span className="flex items-center gap-1.5 text-xs text-green-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    ready
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#444] text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[#444]" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
