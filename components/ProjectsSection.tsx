"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2 as Github, Eye } from 'lucide-react';
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/motion";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const shouldReduce = useReducedMotion();
  const vp = shouldReduce ? { once: true } : { once: true, margin: "-80px" };

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 md:py-36 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-purple-400 text-xs font-mono tracking-[0.2em] uppercase">03 / Projects</span>
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
            initial={{ opacity: 0, y: 44, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 65, damping: 15 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance"
          >
            Selected work
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#666] text-lg max-w-xl text-pretty">
            A handful of projects I&apos;m proud of. Each one taught me something new.
          </motion.p>
        </motion.div>

        {/* Featured — large 2-col */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="grid md:grid-cols-2 gap-6 mb-6"
        >
          {featured.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeIn}
              whileHover={{ y: -12, scale: 1.02, rotate: 0.3, transition: { type: 'spring', stiffness: 250, damping: 18 } }}
              className="group relative card-surface rounded-2xl overflow-hidden border border-white/6 hover:border-purple-500/25 transition-all duration-400 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_48px_rgba(168,85,247,0.12)]"
            >
              {/* Image */}
              <div className="scan-overlay relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/30 to-transparent" />

                {/* Hover overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    aria-label="Live preview"
                    className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-500 transition-all duration-300"
                  >
                    <Eye size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    aria-label="GitHub repository"
                    className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-500 transition-all duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="glitch-hover text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.liveUrl}
                      aria-label="Live preview"
                      className="text-[#555] hover:text-white transition-colors duration-300"
                    >
                      <Eye size={15} />
                    </a>
                    <a
                      href={project.githubUrl}
                      aria-label="GitHub"
                      className="text-[#555] hover:text-white transition-colors duration-300"
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>
                <p className="text-[#666] text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Secondary — compact 2-col */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="grid md:grid-cols-2 gap-6"
        >
          {rest.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeIn}
              whileHover={{ y: -8, scale: 1.025, rotate: -0.3, transition: { type: 'spring', stiffness: 250, damping: 18 } }}
              className="group relative card-surface rounded-2xl overflow-hidden border border-white/6 hover:border-purple-500/25 transition-all duration-400 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_48px_rgba(168,85,247,0.12)] flex gap-0 flex-col"
            >
              {/* Compact image strip */}
              <div className="scan-overlay relative h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="glitch-hover text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.liveUrl}
                      aria-label="Live preview"
                      className="text-[#555] hover:text-white transition-colors duration-300"
                    >
                      <Eye size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      aria-label="GitHub"
                      className="text-[#555] hover:text-white transition-colors duration-300"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>
                <p className="text-[#666] text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
