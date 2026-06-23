"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn, slideInFromBottom } from "@/lib/motion";

const socials = [
  {
    label: "GitHub",
    handle: "@alexcarter",
    href: "https://github.com",
    icon: Github,
    color: "hover:border-white/25 hover:text-white",
  },
  {
    label: "LinkedIn",
    handle: "Alex Carter",
    href: "https://linkedin.com",
    icon: Linkedin,
    color: "hover:border-blue-500/40 hover:text-blue-400",
  },
  {
    label: "Twitter",
    handle: "@alexcarter_dev",
    href: "https://twitter.com",
    icon: Twitter,
    color: "hover:border-sky-500/40 hover:text-sky-400",
  },
  {
    label: "Email",
    handle: "hello@alexcarter.dev",
    href: "mailto:hello@alexcarter.dev",
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
              {/* Blur-reveal heading */}
              <motion.h2
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                    whileHover={{
                      scale: 1.03,
                      x: 4,
                      transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] },
                    }}
                    whileTap={{ scale: 0.97 }}
                    className={[
                      "flex items-center gap-3 p-4 rounded-xl",
                      "border border-white/8 bg-white/2",
                      "transition-colors duration-300 group",
                      s.color,
                    ].join(" ")}
                  >
                    <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-[#666] group-hover:bg-white/8 transition-colors duration-300">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white/80 group-hover:text-inherit transition-colors duration-300">{s.label}</p>
                      <p className="text-xs text-[#555] truncate">{s.handle}</p>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-[#444] group-hover:text-inherit opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — contact form (slides up dramatically) */}
          <motion.div
            variants={slideInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="card-surface rounded-2xl p-8 border border-white/6"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mb-2">
                  <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Message sent!</h3>
                <p className="text-[#666] text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Send a message</h3>
                  <p className="text-[#555] text-sm">Fill out the form and I&apos;ll be in touch.</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[#666] mb-1.5 tracking-wide uppercase">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#666] mb-1.5 tracking-wide uppercase">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-[#666] mb-1.5 tracking-wide uppercase">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.04,
                    boxShadow: '0 0 30px rgba(168,85,247,0.5)',
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-colors duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
