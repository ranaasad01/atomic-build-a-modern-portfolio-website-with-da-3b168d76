import { type Variants } from "framer-motion";

// Spring-physics fade up — snappier, overshoots slightly
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 48, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 80, damping: 18, mass: 0.8 },
  },
};

// Fade in with a subtle scale pop
export const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

// Slide in from left with blur
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 70, damping: 16, mass: 0.9 },
  },
};

// Slide in from right with blur
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 70, damping: 16, mass: 0.9 },
  },
};

// Scale in with a strong spring overshoot
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.75, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  },
};

// Pop in — bouncy spring for badges/chips
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 20, rotate: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 200, damping: 16 },
  },
};

// Stagger container — slower stagger for dramatic reveals
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

// Fast stagger for dense grids
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

// Slide from bottom — dramatic hero-style entrance
export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 80, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 60, damping: 15, mass: 1.1 },
  },
};

// Card hover — lift + glow tilt feel
export const cardHover = {
  rest: { scale: 1, y: 0, rotate: 0 },
  hover: {
    scale: 1.03,
    y: -8,
    rotate: 0.4,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

// Reveal mask — clip-path wipe from bottom
export const revealMask: Variants = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};
