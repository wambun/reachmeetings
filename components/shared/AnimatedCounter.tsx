'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

/**
 * Parses a stat value like "20+", "500+", "100%" and returns number and suffix
 */
function parseValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (match) {
    return {
      number: parseInt(match[1], 10),
      suffix: match[2] || '',
    };
  }
  return { number: 0, suffix: value };
}

export default function AnimatedCounter({
  value,
  className = '',
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);
  const { number: targetNumber, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    let animationFrame: number;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function - easeOutExpo for snappy feel
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const currentValue = Math.round(targetNumber * easeOutExpo);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      } else {
        setDisplayValue(targetNumber);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, targetNumber, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
      {suffix}
    </motion.span>
  );
}
