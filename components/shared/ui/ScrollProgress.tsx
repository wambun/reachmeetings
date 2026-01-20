'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollProgressProps {
  variant?: 'gradient' | 'primary' | 'gold';
  height?: number;
  position?: 'top' | 'bottom';
  className?: string;
}

export function ScrollProgress({
  variant = 'gradient',
  height = 3,
  position = 'top',
  className,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const variantStyles = {
    gradient: 'bg-gradient-to-r from-primary-500 via-secondary-500 to-gold',
    primary: 'bg-primary-500',
    gold: 'bg-gradient-to-r from-gold-dark via-gold to-gold-light',
  };

  const positionStyles = {
    top: 'top-0',
    bottom: 'bottom-0',
  };

  return (
    <motion.div
      className={cn(
        'fixed left-0 right-0 z-50 origin-left',
        positionStyles[position],
        variantStyles[variant],
        className
      )}
      style={{
        scaleX,
        height,
      }}
    />
  );
}

interface ReadingProgressProps {
  targetRef: React.RefObject<HTMLElement>;
  variant?: 'gradient' | 'primary' | 'gold';
  className?: string;
}

export function ReadingProgress({
  targetRef,
  variant = 'gradient',
  className,
}: ReadingProgressProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const variantStyles = {
    gradient: 'bg-gradient-to-r from-primary-500 via-secondary-500 to-gold',
    primary: 'bg-primary-500',
    gold: 'bg-gradient-to-r from-gold-dark via-gold to-gold-light',
  };

  return (
    <div className={cn('sticky top-0 z-50 w-full h-1 bg-gray-200/50', className)}>
      <motion.div
        className={cn('h-full origin-left', variantStyles[variant])}
        style={{ scaleX }}
      />
    </div>
  );
}

interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  variant?: 'primary' | 'gold' | 'gradient';
  showValue?: boolean;
  className?: string;
}

export function CircularProgress({
  progress,
  size = 60,
  strokeWidth = 4,
  variant = 'primary',
  showValue = true,
  className,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  const variantStyles = {
    primary: 'stroke-primary-500',
    gold: 'stroke-gold',
    gradient: '',
  };

  return (
    <div className={cn('relative inline-flex', className)}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          className="stroke-gray-200"
        />

        {/* Progress circle */}
        {variant === 'gradient' ? (
          <>
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>
            </defs>
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
              fill="none"
              stroke="url(#progressGradient)"
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{
                strokeDasharray: circumference,
              }}
            />
          </>
        ) : (
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            className={variantStyles[variant]}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              strokeDasharray: circumference,
            }}
          />
        )}
      </svg>

      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-gray-900">
            {Math.round(progress)}%
          </span>
        </div>
      )}
    </div>
  );
}
