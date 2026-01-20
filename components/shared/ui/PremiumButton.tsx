'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { buttonPress, springs } from '@/lib/animations';
import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gold' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface PremiumButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shimmer?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-primary-500 to-primary-600
    text-white font-medium
    shadow-[0_4px_20px_-4px_rgba(59,130,246,0.5)]
    hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.6)]
    hover:from-primary-600 hover:to-primary-700
  `,
  secondary: `
    bg-gradient-to-r from-secondary-500 to-secondary-600
    text-white font-medium
    shadow-[0_4px_20px_-4px_rgba(139,92,246,0.5)]
    hover:shadow-[0_8px_30px_-4px_rgba(139,92,246,0.6)]
    hover:from-secondary-600 hover:to-secondary-700
  `,
  ghost: `
    bg-transparent
    text-gray-700 font-medium
    hover:bg-gray-100/80
  `,
  gold: `
    bg-gradient-to-r from-gold to-amber-500
    text-white font-semibold
    shadow-[0_4px_20px_-4px_rgba(212,175,55,0.5)]
    hover:shadow-[0_8px_30px_-4px_rgba(212,175,55,0.6)]
    hover:from-gold-dark hover:to-amber-600
  `,
  outline: `
    bg-transparent
    border-2 border-primary-500
    text-primary-600 font-medium
    hover:bg-primary-50
    hover:border-primary-600
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-4 text-lg rounded-xl gap-2.5',
};

export const PremiumButton = forwardRef<HTMLButtonElement, PremiumButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      shimmer = true,
      icon,
      iconPosition = 'right',
      fullWidth = false,
      loading = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <motion.button
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center overflow-hidden',
          'transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2',
          'disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        variants={buttonPress}
        initial="initial"
        whileHover={!isDisabled ? 'hover' : undefined}
        whileTap={!isDisabled ? 'tap' : undefined}
        transition={springs.snappy}
        disabled={isDisabled}
        {...props}
      >
        {/* Shimmer effect */}
        {shimmer && !isDisabled && (
          <span
            className={cn(
              'absolute inset-0 pointer-events-none',
              'bg-gradient-to-r from-transparent via-white/20 to-transparent',
              'translate-x-[-200%] group-hover:translate-x-[200%]',
              'transition-transform duration-700'
            )}
            aria-hidden="true"
          />
        )}

        {/* Loading spinner */}
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}

        {/* Button content */}
        <span
          className={cn(
            'relative flex items-center gap-inherit',
            loading && 'invisible'
          )}
        >
          {icon && iconPosition === 'left' && (
            <span className="flex-shrink-0">{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="flex-shrink-0">{icon}</span>
          )}
        </span>
      </motion.button>
    );
  }
);

PremiumButton.displayName = 'PremiumButton';

// Arrow icon for CTA buttons
export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('w-5 h-5 transition-transform group-hover:translate-x-1', className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
