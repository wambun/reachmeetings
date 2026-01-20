'use client';

import { motion } from 'framer-motion';

interface FloatingShapesProps {
  variant?: 'hero' | 'section' | 'subtle';
}

export function FloatingShapes({ variant = 'hero' }: FloatingShapesProps) {
  const opacity = variant === 'subtle' ? 0.3 : variant === 'section' ? 0.5 : 0.6;
  const scale = variant === 'subtle' ? 0.7 : variant === 'section' ? 0.85 : 1;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient blob - top right */}
      <motion.div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          transform: `scale(${scale})`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [scale, scale * 1.1, scale],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary gradient blob - bottom left */}
      <motion.div
        className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          transform: `scale(${scale})`,
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [scale * 0.9, scale, scale * 0.9],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Gold accent orb - center right */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-[200px] h-[200px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          opacity,
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [opacity * 0.5, opacity, opacity * 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Small accent orb - top left */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[150px] h-[150px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          opacity: opacity * 0.7,
        }}
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
