"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Download } from 'lucide-react';

const skills = [
  "Cypress", "Selenium", "Playwright", "Appium", "Postman", "Newman",
  "JMeter", "REST Assured", "k6", "GitHub Actions", "Jenkins", "Docker",
  "JIRA", "TestNG", "JUnit", "Java", "JavaScript", "TypeScript",
  "Python", "SQL", "BDD/Gherkin", "Agile/Scrum", "ISTQB",
];

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
            Rao Muhammad Ali
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-[#888] text-lg mb-8"
          >
            SQA Engineer · Test Automation · Quality Assurance
          </motion.p>

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
            Results-driven SQA Engineer with 3+ years of experience in manual and automated testing
            across web, mobile, and API platforms. Proven track record of building scalable test
            automation frameworks, reducing regression cycles, and collaborating with cross-functional
            teams to deliver high-quality software.
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

          {/* Job 1 */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-white font-semibold text-base">SQA Engineer</h3>
                <p style={{ color: "#a855f7" }} className="text-sm font-medium">TechCorp Solutions</p>
              </div>
              <span className="text-[#555] text-sm font-mono">2022 – Present</span>
            </div>
            <ul className="space-y-2">
              {[
                "Built Cypress + TypeScript E2E framework reducing regression time by 70%",
                "Automated 300+ API tests using Postman/Newman integrated with GitHub Actions",
                "Led QA for 5 major product releases with zero critical post-release defects",
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-[#888] text-sm leading-relaxed">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#a855f7" }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.06] mb-8" />

          {/* Job 2 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-white font-semibold text-base">Junior QA Analyst</h3>
                <p style={{ color: "#a855f7" }} className="text-sm font-medium">Softwave Inc.</p>
              </div>
              <span className="text-[#555] text-sm font-mono">2021 – 2022</span>
            </div>
            <ul className="space-y-2">
              {[
                "Performed manual functional, regression, and UAT testing",
                "Created and maintained 200+ test cases in JIRA/Zephyr",
                "Collaborated with dev team in Agile sprints to ensure sprint quality",
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-[#888] text-sm leading-relaxed">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#a855f7" }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
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
            className="text-lg font-bold mb-5 flex items-center gap-3"
            style={{ color: "#f5f5f5" }}
          >
            <span
              className="inline-block w-1 h-5 rounded-full"
              style={{ background: "#a855f7" }}
            />
            Skills & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 rounded-full border"
                style={{
                  background: "rgba(168, 85, 247, 0.10)",
                  borderColor: "rgba(168, 85, 247, 0.20)",
                  color: "#d8b4fe",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
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
            Education & Certifications
          </h2>

          {/* Degree */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="text-white font-semibold text-base">BS Computer Science</h3>
                <p style={{ color: "#a855f7" }} className="text-sm font-medium">
                  University of Engineering &amp; Technology
                </p>
              </div>
              <span className="text-[#555] text-sm font-mono">2017 – 2021</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.06] mb-6" />

          {/* Certification */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="text-white font-semibold text-base">ISTQB Foundation Level</h3>
                <p className="text-[#888] text-sm">Certification</p>
              </div>
              <span className="text-[#555] text-sm font-mono">2022</span>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
