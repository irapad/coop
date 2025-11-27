import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  gradient?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  gradient = false,
  padding = 'md'
}) => {
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  const baseClasses = `rounded-app card-shadow ${paddingClasses[padding]}`;
  const backgroundClass = gradient ? 'gradient-purple text-white' : 'bg-card';
  const clickableClass = onClick ? 'cursor-pointer tap-scale' : '';

  return (
    <motion.div
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`${baseClasses} ${backgroundClass} ${clickableClass} ${className}`}
    >
      {children}
    </motion.div>
  );
};
