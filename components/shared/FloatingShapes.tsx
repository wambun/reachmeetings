'use client';

import { motion } from 'framer-motion';

interface FloatingShapesProps {
  variant?: 'hero' | 'section' | 'minimal';
  className?: string;
}

const shapes = {
  hero: [
    {
      size: 400,
      color: 'rgba(65, 83, 113, 0.08)',
      position: { top: '10%', right: '5%' },
      duration: 20,
      delay: 0,
    },
    {
      size: 300,
      color: 'rgba(113, 84, 65, 0.06)',
      position: { top: '60%', right: '15%' },
      duration: 25,
      delay: 2,
    },
    {
      size: 200,
      color: 'rgba(65, 83, 113, 0.05)',
      position: { top: '30%', right: '25%' },
      duration: 18,
      delay: 1,
    },
    {
      size: 150,
      color: 'rgba(242, 236, 232, 0.8)',
      position: { bottom: '20%', right: '10%' },
      duration: 22,
      delay: 3,
    },
  ],
  section: [
    {
      size: 250,
      color: 'rgba(65, 83, 113, 0.05)',
      position: { top: '20%', left: '-5%' },
      duration: 20,
      delay: 0,
    },
    {
      size: 180,
      color: 'rgba(113, 84, 65, 0.04)',
      position: { bottom: '10%', right: '-3%' },
      duration: 24,
      delay: 1,
    },
  ],
  minimal: [
    {
      size: 200,
      color: 'rgba(65, 83, 113, 0.04)',
      position: { top: '10%', right: '5%' },
      duration: 22,
      delay: 0,
    },
  ],
};

export default function FloatingShapes({
  variant = 'hero',
  className = '',
}: FloatingShapesProps) {
  const shapeConfig = shapes[variant];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {shapeConfig.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            background: `radial-gradient(circle, ${shape.color} 0%, transparent 70%)`,
            ...shape.position,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.1, 1],
            x: [0, 20, 0, -20, 0],
            y: [0, -15, 0, 15, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: shape.delay },
            scale: {
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: {
              duration: shape.duration * 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            },
            y: {
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            },
          }}
        />
      ))}
    </div>
  );
}
