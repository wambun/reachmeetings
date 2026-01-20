'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  blurIn,
  revealOnScroll,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
} from '@/lib/animations';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur' | 'reveal';
type StaggerSpeed = 'fast' | 'normal' | 'slow';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationDirection;
  delay?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  stagger?: boolean;
  staggerSpeed?: StaggerSpeed;
}

const animationVariants: Record<AnimationDirection, Variants> = {
  up: fadeInUp,
  down: fadeInDown,
  left: fadeInLeft,
  right: fadeInRight,
  scale: scaleIn,
  blur: blurIn,
  reveal: revealOnScroll,
};

const staggerVariants: Record<StaggerSpeed, Variants> = {
  fast: staggerContainerFast,
  normal: staggerContainer,
  slow: staggerContainerSlow,
};

export function AnimatedSection({
  children,
  animation = 'up',
  delay = 0,
  className,
  once = true,
  threshold = 0.2,
  stagger = false,
  staggerSpeed = 'normal',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  });

  const variants = stagger ? staggerVariants[staggerSpeed] : animationVariants[animation];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  animation?: AnimationDirection;
  className?: string;
  delay?: number;
}

export function AnimatedItem({
  children,
  animation = 'up',
  className,
  delay = 0,
}: AnimatedItemProps) {
  return (
    <motion.div
      className={className}
      variants={animationVariants[animation]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedTextProps {
  children: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

export function AnimatedText({
  children,
  className,
  once = true,
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once });

  const words = children.split(' ');

  const container: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    initial: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={cn('inline-block', className)}
      variants={container}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  className,
  prefix = '',
  suffix = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CounterValue value={value} duration={duration} />
        </motion.span>
      ) : (
        '0'
      )}
      {suffix}
    </span>
  );
}

function CounterValue({ value, duration }: { value: number; duration: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  // Use useEffect to animate the counter
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const startTime = Date.now();
    const endValue = value;

    const updateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(easeOut * endValue);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  }, [value, duration]);

  return <span ref={nodeRef}>{displayValue}</span>;
}

import React from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxSection({
  children,
  className,
  speed = 0.5,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = require('framer-motion').useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = require('framer-motion').useTransform(
    scrollYProgress,
    [0, 1],
    [100 * speed, -100 * speed]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
