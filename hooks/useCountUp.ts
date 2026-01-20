'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

/**
 * Animated counter hook - counts up when element comes into view
 */
export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = '',
}: UseCountUpOptions): {
  ref: React.RefObject<HTMLElement | null>;
  value: string;
  isComplete: boolean;
} {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [value, setValue] = useState(start);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function - easeOutExpo for snappy feel
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const currentValue = start + (end - start) * easeOutExpo;

      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setValue(end);
        setIsComplete(true);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, start, end, duration]);

  const formattedValue = `${prefix}${value.toFixed(decimals)}${suffix}`;

  return { ref, value: formattedValue, isComplete };
}

/**
 * Parse a stat value like "20+" or "500+" and return the number and suffix
 */
export function parseStatValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (match) {
    return {
      number: parseInt(match[1], 10),
      suffix: match[2] || '',
    };
  }
  return { number: 0, suffix: value };
}
