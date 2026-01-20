'use client';

import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef, RefObject } from 'react';

/**
 * Parallax scroll effect hook
 * Creates a smooth parallax effect based on scroll position
 */
export function useParallax(distance: number = 100): {
  ref: RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return { ref, y: smoothY };
}

/**
 * Fade on scroll hook
 * Fades and scales element as it enters the viewport
 */
export function useScrollFade(): {
  ref: RefObject<HTMLDivElement | null>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return { ref, opacity, scale };
}

/**
 * Scroll progress indicator hook
 * Returns a spring-animated progress value (0-1)
 */
export function useScrollProgress(): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return scaleX;
}

/**
 * Reveal on scroll hook
 * Tracks when element enters viewport
 */
export function useScrollReveal(
  threshold: number = 0.2
): {
  ref: RefObject<HTMLDivElement | null>;
  progress: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', `start ${threshold}`],
  });

  return { ref, progress: scrollYProgress };
}

/**
 * Horizontal scroll transform
 * Creates horizontal movement based on vertical scroll
 */
export function useHorizontalScroll(distance: number = 200): {
  ref: RefObject<HTMLDivElement | null>;
  x: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, distance]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 });

  return { ref, x: smoothX };
}

/**
 * Rotation on scroll hook
 */
export function useScrollRotate(degrees: number = 10): {
  ref: RefObject<HTMLDivElement | null>;
  rotate: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-degrees, degrees]);
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });

  return { ref, rotate: smoothRotate };
}
