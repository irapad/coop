import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  gradient?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  glass?: boolean; // New prop for glassmorphism effect
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  gradient = false,
  padding = 'md',
  glass = false
}) => {
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  const baseClasses = `rounded-app ${paddingClasses[padding]} transition-all duration-300`;

  // Enhanced glassmorphism effect
  const glassClasses = glass
    ? 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20'
    : '';

  const backgroundClass = gradient
    ? 'gradient-purple text-white shadow-2xl'
    : glass
      ? glassClasses
      : 'bg-card card-shadow hover:shadow-lg';

  const clickableClass = onClick ? 'cursor-pointer tap-scale' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${backgroundClass} ${clickableClass} ${className}`}
    >
      {children}
    </div>
  );
};
