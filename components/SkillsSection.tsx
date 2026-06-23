"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerContainerFast, scaleIn, popIn } from "@/lib/motion";
import { skills, techBadges } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Frontend: "text-blue-400 border-blue-500/20 bg-blue-500/8",
  Backend: "text-green-400 border-green-500/20 bg-green-500/8",
  DevOps: "text-orange-400 border-orange-500/20 bg-orange-500/8",
  Design: "text-pink-400 border-pink-500/20 bg-pink-500/8",
};

const categoryDots: Record<string, string> = {
  Frontend: "bg-blue-400",
  Backend: "bg-green-400",
  DevOps: "bg-orange-400",
  Design: "bg-pink-400",
};

export default function SkillsSection() {
  const shouldReduce = useReducedMotion();
  const vp = shouldReduce ? { once: true } : { once: true, margin: "-80px" };

  return (
    <section id="skills" className="py-28 md:py-36 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-purple-900/8 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-purple-400 text-xs font-mono tracking-[0.2em] uppercase">02 / Skills</span>
          <span className="flex-1 h-px bg-white/6 max-w-[80px]" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="mb-16"
        >
          {/* Blur-reveal heading */}
          <motion.h2
            initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance"
          >
            Tools I work with
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#666] text-lg max-w-xl text-pretty">
            A curated stack built for performance, developer experience, and shipping fast.
          </motion.p>
        </motion.div>

        {/* Ticker */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
          <div className="ticker-track flex gap-4 w-max">
            {techBadges.map((badge, i) => (
              <span
                key={i}
                className="shimmer-hover shrink-0 px-5 py-2.5 rounded-full border border-white/8 bg-white/3 text-[#888] text-sm font-medium whitespace-nowrap hover:text-purple-300 hover:border-purple-500/30 transition-colors duration-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Skills grid — 4 categories */}
        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skills.map((cat) => (
            <motion.div
              key={cat.category}
              variants={popIn}
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(168,85,247,0.3)',
                transition: { duration: 0.25 },
              }}
              className="card-surface rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={"w-2 h-2 rounded-full " + categoryDots[cat.category]} />
                <h3 className={"text-sm font-semibold tracking-wide " + (categoryColors[cat.category] ?? "text-white")}>
                  {cat.category}
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {cat.items.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{
                      scale: 1.1,
                      color: '#a855f7',
                      transition: { duration: 0.2 },
                    }}
                    className="text-sm text-[#777] font-medium px-3 py-1.5 rounded-lg bg-white/3 border border-white/5 cursor-default"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
