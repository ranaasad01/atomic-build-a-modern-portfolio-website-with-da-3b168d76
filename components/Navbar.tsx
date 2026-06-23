"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    }
  };

  const getHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  const headerClass = scrolled
    ? "glass border-b border-white/5 py-3"
    : "bg-transparent py-5";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={"fixed top-0 left-0 right-0 z-50 transition-all duration-500 " + headerClass}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center text-white font-bold text-sm pulse-glow">
            R
          </span>
          <span className="text-white font-semibold tracking-tight text-lg group-hover:text-purple-400 transition-colors duration-300">
            Rao.dev
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={getHref(link.href)}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 text-sm text-[#888] hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5 font-medium tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:raoali.qa@gmail.com"
            className="ml-3 px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] active:scale-95"
          >
            Hire Me
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#888] hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden glass border-t border-white/5"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={getHref(link.href)}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-sm text-[#888] hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:raoali.qa@gmail.com"
                className="mt-2 px-5 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold text-center transition-all duration-300"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
