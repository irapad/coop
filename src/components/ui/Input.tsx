import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  icon,
  endIcon,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-black mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-app border-2 border-black/10
            bg-black/5 text-black placeholder-black/40
            focus:border-primary focus:outline-none focus:bg-black/10
            transition-all
            ${icon ? 'pl-12' : ''}
            ${endIcon ? 'pr-12' : ''}
            ${error ? 'border-danger' : ''}
            ${className}
          `}
          {...props}
        />
        {endIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-textMuted cursor-pointer">
            {endIcon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-danger">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
