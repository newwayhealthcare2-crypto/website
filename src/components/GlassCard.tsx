import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../utils/cn';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  dark?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className,
  dark = false, // We keep the prop name for compatibility, but map it to a light-theme variant
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'relative rounded-2xl overflow-hidden p-6 lg:p-8 transition-all',
        dark ? 'glass-dark' : 'glass',
        // Removing the fluorescent glow, replacing with a subtle shadow lift
        glow && 'hover:shadow-lg hover:-translate-y-1',
        className
      )}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
