"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn, slideInFromBottom } from "@/lib/motion";
import { personalInfo } from "@/lib/data";

const socials = [
  {
    label: "GitHub",
    handle: "@raomuhammadali",
    href: personalInfo.github,
    icon: Github,
    color: "hover:border-white/25 hover:text-white",
  },
  {
    label: "LinkedIn",
    handle: personalInfo.name,
    href: personalInfo.linkedin,
    icon: Linkedin,
    color: "hover:border-blue-500/40 hover:text-blue-400",
  },
  {
    label: "Twitter",
    handle: "@raoali_qa",
    href: "https://twitter.com",
    icon: Twitter,
    color: "hover:border-sky-500/40 hover:text-sky-400",
  },
  {
    label: "Email",
    handle: personalInfo.email,
    href: "mailto:" + personalInfo.email,
    icon: Mail,
    color: "hover:border-purple-500/40 hover:text-purple-400",
  },
];

export default function ContactSection() {
  const shouldReduce = useReducedMotion();
  const vp = shouldReduce ? { once: true } : { once: true, margin: "-80px" };

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-purple-800/12 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-purple-400 text-xs font-mono tracking-[0.2em] uppercase">04 / Contact</span>
          <span className="flex-1 h-px bg-white/6 max-w-[80px]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left — headline + socials */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="flex flex-col gap-8"
          >
            <div>
              {/* Blur-reveal heading — updated animation */}
              <motion.h2
                initial={{ opacity: 0, y: 44, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ type: 'spring', stiffness: 65, damping: 15 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-5 text-balance"
              >
                Let&apos;s build something{" "}
                <span className="text-gradient">great together</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#666] text-lg leading-relaxed text-pretty">
                Whether you have a project in mind, want to collaborate, or just want to say
                hello — my inbox is always open. I typically respond within 24 hours.
              </motion.p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    variants={scaleIn}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] bg-[#161616] transition-all duration-300 ${s.color}`}
                  >
                    <span className="w-10 h-10 rounded-xl border border-white/8 bg-white/3 flex items-center justify-center text-[#888] group-hover:scale-110 transition-transform duration-300">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-[#555] font-medium mb-0.5">{s.label}</p>
                      <p className="text-sm text-white/80 font-medium truncate">{s.handle}</p>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-[#444] group-hover:text-current group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            variants={slideInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div className="bg-[#161616] border border-white/[0.06] rounded-3xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mb-2">
                    <Mail size={28} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message sent!</h3>
                  <p className="text-[#666] text-sm max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", message: "" }); }}
                    className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs text-[#555] font-medium mb-2 tracking-wide uppercase">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#555] font-medium mb-2 tracking-wide uppercase">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#555] font-medium mb-2 tracking-wide uppercase">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all duration-300 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(168,85,247,0.45)] flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
