"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { stats } from "@/lib/data";

export default function AboutSection() {
  const shouldReduce = useReducedMotion();
  const vp = shouldReduce ? { once: true } : { once: true, margin: "-80px" };

  return (
    <section id="about" className="py-28 md:py-36 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-900/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-purple-400 text-xs font-mono tracking-[0.2em] uppercase">01 / About</span>
          <span className="flex-1 h-px bg-white/6 max-w-[80px]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left — avatar + decorative */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Rotating border ring — animated spin */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl border border-purple-500/20"
              />
              {/* Static second ring */}
              <div className="absolute inset-0 rounded-3xl border border-white/5 -rotate-2" />

              {/* Avatar image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHyzi4PondriQ/profile-displayphoto-shrink_200_200/B4EZdVcKjiHQAc-/0/1749485136590?e=2147483647&v=beta&t=PjDLOiKctni6kjpGzJWOFYEjfSI7OhL2PcmgzNhje2s"
                  alt="Rao Muhammad Ali — Full-Stack Engineer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 1, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-white/80 font-medium">Open to opportunities</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — bio + stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="flex flex-col gap-7"
          >
            <motion.h2
              variants={fadeInRight}
              className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-balance"
            >
              Crafting digital{" "}
              <span className="text-gradient">experiences</span>{" "}
              that resonate
            </motion.h2>

            <motion.p
              variants={fadeInRight}
              className="text-[#888] text-lg leading-relaxed"
            >
              Hey, I&apos;m <span className="text-white font-medium">Rao Muhammad Ali</span> — a full-stack
              engineer with a passion for building products that live at the intersection of
              performance, accessibility, and beautiful design.
            </motion.p>

            <motion.p
              variants={fadeInRight}
              className="text-[#888] leading-relaxed"
            >
              Over the past 5+ years I&apos;ve shipped production software for startups and
              scale-ups across fintech, SaaS, and developer tooling. I care deeply about
              clean architecture, thoughtful UX, and code that future-you will actually enjoy
              reading.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  className="card-surface rounded-2xl p-4 text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-[#555] text-xs mt-1 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] active:scale-95"
              >
                Get in touch
              </a>
              <a
                href="/resume"
                className="px-6 py-3 rounded-full border border-white/10 hover:border-purple-500/40 text-[#888] hover:text-white text-sm font-medium transition-all duration-300"
              >
                View résumé
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
