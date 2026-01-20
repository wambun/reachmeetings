'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { cardHover, springs } from '@/lib/animations';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  variant?: 'default' | 'subtle' | 'strong';
  hover?: boolean;
  glow?: 'none' | 'primary' | 'gold';
  className?: string;
}

export function GlassCard({
  children,
  variant = 'default',
  hover = true,
  glow = 'none',
  className,
  ...props
}: GlassCardProps) {
  const variantStyles = {
    default: 'bg-white/70 backdrop-blur-xl border border-white/20',
    subtle: 'bg-white/50 backdrop-blur-lg border border-white/10',
    strong: 'bg-white/90 backdrop-blur-2xl border border-white/30',
  };

  const glowStyles = {
    none: '',
    primary: 'shadow-glow-primary',
    gold: 'shadow-glow-gold',
  };

  return (
    <motion.div
      className={cn(
        'rounded-2xl p-6',
        variantStyles[variant],
        glowStyles[glow],
        hover && 'transition-all duration-300',
        className
      )}
      variants={hover ? cardHover : undefined}
      initial={hover ? 'initial' : undefined}
      whileHover={hover ? 'hover' : undefined}
      transition={springs.snappy}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface GlassCardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCardHeader({ children, className }: GlassCardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

interface GlassCardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCardTitle({ children, className }: GlassCardTitleProps) {
  return (
    <h3 className={cn('text-xl font-semibold tracking-tight text-gray-900', className)}>
      {children}
    </h3>
  );
}

interface GlassCardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCardDescription({ children, className }: GlassCardDescriptionProps) {
  return (
    <p className={cn('mt-2 text-gray-600', className)}>
      {children}
    </p>
  );
}

interface GlassCardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCardContent({ children, className }: GlassCardContentProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}

interface GlassCardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCardFooter({ children, className }: GlassCardFooterProps) {
  return (
    <div className={cn('mt-6 pt-4 border-t border-white/20', className)}>
      {children}
    </div>
  );
}
