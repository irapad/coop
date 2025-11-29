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
    ? 'bg-black/1 backdrop-blur-xl border border-black/10 shadow-2xl hover:bg-black/10 hover:border-black/20'
    : '';

  const backgroundClass = gradient
    ? 'gradient-purple text-black shadow-2xl'
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
