import { Variants, Transition } from 'framer-motion';

// Premium spring configurations for natural, high-end feel
export const springs = {
  gentle: { type: 'spring', stiffness: 120, damping: 14, mass: 1 } as Transition,
  snappy: { type: 'spring', stiffness: 400, damping: 30, mass: 1 } as Transition,
  bouncy: { type: 'spring', stiffness: 300, damping: 10, mass: 0.8 } as Transition,
  smooth: { type: 'spring', stiffness: 100, damping: 20, mass: 1.2 } as Transition,
};

// Premium fade variants with spring physics
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: springs.gentle,
  },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: springs.gentle,
  },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: springs.gentle,
  },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: springs.gentle,
  },
};

// Scale animations for cards and buttons
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: springs.snappy,
  },
};

export const scaleHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: springs.snappy,
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// Stagger configurations for lists
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Hero text reveal animation - premium entrance
export const heroTextReveal: Variants = {
  initial: { opacity: 0, y: 60, filter: 'blur(10px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      mass: 1.5,
    },
  },
};

// Blur-in effect for premium feel
export const blurIn: Variants = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Card hover effect with lift
export const cardHover: Variants = {
  initial: {
    y: 0,
    boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 12px 40px -4px rgba(0, 0, 0, 0.06)',
  },
  hover: {
    y: -4,
    boxShadow: '0 12px 40px -8px rgba(0, 0, 0, 0.12), 0 20px 60px -12px rgba(0, 0, 0, 0.1)',
    transition: springs.snappy,
  },
};

// Button press effect
export const buttonPress: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

// Floating animation for decorative elements
export const floatingAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const floatingAnimationSlow: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Gradient orb animation
export const orbAnimation: Variants = {
  initial: { scale: 1, opacity: 0.3 },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Reveal on scroll
export const revealOnScroll: Variants = {
  initial: { opacity: 0, y: 40, filter: 'blur(4px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
    },
  },
};

// Icon spin on hover
export const iconHover: Variants = {
  initial: { rotate: 0, scale: 1 },
  hover: {
    rotate: 5,
    scale: 1.1,
    transition: springs.snappy,
  },
};

// Underline expand effect
export const underlineExpand: Variants = {
  initial: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Counter animation helper
export const counterAnimation = {
  from: 0,
  duration: 2,
  ease: 'easeOut',
};

// Preset animation configs for common use cases
export const presets = {
  section: {
    initial: 'initial',
    whileInView: 'animate',
    viewport: { once: true, margin: '-100px' },
  },
  card: {
    initial: 'initial',
    whileInView: 'animate',
    whileHover: 'hover',
    viewport: { once: true },
  },
  button: {
    whileHover: 'hover',
    whileTap: 'tap',
  },
};
