import React from 'react';
import { motion } from 'framer-motion';
import { haptics } from '../../utils/haptics';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  hapticFeedback?: 'light' | 'medium' | 'heavy';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  className = '',
  hapticFeedback = 'medium'
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all tap-scale shadow-sm';

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary-light shadow-glow',
    secondary: 'bg-card text-textDark hover:bg-card/80',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    ghost: 'bg-transparent text-textDark hover:bg-white/10',
    danger: 'bg-danger text-white hover:bg-danger/90'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const handleClick = () => {
    if (!disabled) {
      haptics[hapticFeedback]();
      onClick?.();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
