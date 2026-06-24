"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Download, MapPin, Mail, Briefcase as Linkedin } from 'lucide-react';
import { experience, education, skills, personalInfo } from "@/lib/data";

export default function ResumePage() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-purple-400 text-xs font-mono tracking-[0.2em] uppercase mb-4"
          >
            05 / Resume
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gradient mb-3"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-[#888] text-lg mb-6"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Contact info row */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-4 mb-8 text-sm text-[#666]"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
            >
              <Mail size={14} />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {personalInfo.location}
            </span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <a
              href="#"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] active:scale-95"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* ── Summary ────────────────────────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#161616] border border-white/[0.06] rounded-2xl p-6 mb-6"
        >
          <h2
            className="text-lg font-bold mb-4 flex items-center gap-3"
            style={{ color: "#f5f5f5" }}
          >
            <span
              className="inline-block w-1 h-5 rounded-full"
              style={{ background: "#a855f7" }}
            />
            Summary
          </h2>
          <p className="text-[#888] leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* ── Experience ─────────────────────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#161616] border border-white/[0.06] rounded-2xl p-6 mb-6"
        >
          <h2
            className="text-lg font-bold mb-6 flex items-center gap-3"
            style={{ color: "#f5f5f5" }}
          >
            <span
              className="inline-block w-1 h-5 rounded-full"
              style={{ background: "#a855f7" }}
            />
            Experience
          </h2>

          {experience.map((job, index) => (
            <div key={job.id} className={index < experience.length - 1 ? "mb-8" : ""}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-white font-semibold text-base">{job.role}</h3>
                  <p style={{ color: "#a855f7" }} className="text-sm font-medium">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#666] text-sm">{job.period}</p>
                  <p className="text-[#555] text-xs">{job.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#888] text-sm leading-relaxed">
                    <span
                      className="mt-2 w-1 h-1 rounded-full shrink-0"
                      style={{ background: "#a855f7" }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              {index < experience.length - 1 && (
                <div className="mt-8 border-t border-white/[0.04]" />
              )}
            </div>
          ))}
        </motion.div>

        {/* ── Education ──────────────────────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#161616] border border-white/[0.06] rounded-2xl p-6 mb-6"
        >
          <h2
            className="text-lg font-bold mb-6 flex items-center gap-3"
            style={{ color: "#f5f5f5" }}
          >
            <span
              className="inline-block w-1 h-5 rounded-full"
              style={{ background: "#a855f7" }}
            />
            Education
          </h2>

          {education.map((edu, index) => (
            <div key={edu.id} className={index < education.length - 1 ? "mb-6" : ""}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-white font-semibold text-base">{edu.institution}</h3>
                  <p className="text-[#888] text-sm mt-0.5">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#666] text-sm">{edu.period}</p>
                  <p className="text-[#555] text-xs">{edu.location}</p>
                </div>
              </div>
              {index < education.length - 1 && (
                <div className="mt-6 border-t border-white/[0.04]" />
              )}
            </div>
          ))}
        </motion.div>

        {/* ── Skills ─────────────────────────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#161616] border border-white/[0.06] rounded-2xl p-6 mb-6"
        >
          <h2
            className="text-lg font-bold mb-6 flex items-center gap-3"
            style={{ color: "#f5f5f5" }}
          >
            <span
              className="inline-block w-1 h-5 rounded-full"
              style={{ background: "#a855f7" }}
            />
            Skills
          </h2>

          <div className="space-y-5">
            {skills.map((cat) => (
              <div key={cat.category}>
                <p className="text-[#666] text-xs font-mono tracking-widest uppercase mb-3">
                  {cat.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                      style={{
                        background: "rgba(168,85,247,0.08)",
                        borderColor: "rgba(168,85,247,0.2)",
                        color: "#c084fc",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
