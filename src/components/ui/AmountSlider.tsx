import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AmountSliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  currency?: string;
  quickAmounts?: number[];
}

export const AmountSlider: React.FC<AmountSliderProps> = ({
  min,
  max,
  value,
  onChange,
  step = 100,
  currency = '฿',
  quickAmounts = [1000, 5000, 10000, 50000]
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const formatAmount = (amount: number) => {
    return amount.toLocaleString('th-TH', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-6">
      {/* Amount Display */}
      <div className="text-center">
        <p className="text-5xl font-bold text-black mb-2">
          {currency}{formatAmount(value)}
        </p>
        <p className="text-sm text-black/60">
          ยอดคงเหลือ: {currency}{formatAmount(max)}
        </p>
      </div>

      {/* Slider */}
      <div className="relative px-2">
        <div className="relative h-3 bg-black/10 rounded-full overflow-hidden">
          {/* Progress Bar */}
          <motion.div
            className="absolute h-full bg-gradient-to-r from-primary via-primary-light to-primary rounded-full shadow-glow"
            style={{ width: `${percentage}%` }}
            animate={{ opacity: isDragging ? 1 : 0.9 }}
          />

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['200% 0', '-200% 0']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>

        {/* Slider Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {/* Thumb */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-lg pointer-events-none border-4 border-black/20"
          style={{ left: `calc(${percentage}% - 16px)` }}
          animate={{ scale: isDragging ? 1.2 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-primary"
            animate={{
              scale: isDragging ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.6,
              repeat: isDragging ? Infinity : 0,
            }}
          />
        </motion.div>
      </div>

      {/* Quick Amount Buttons */}
      <div className="grid grid-cols-4 gap-3">
        {quickAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => onChange(Math.min(amount, max))}
            className={`py-3 rounded-full font-bold text-sm transition-all ${
              value === amount
                ? 'bg-primary text-primary-foreground shadow-glow'
                : 'bg-black/5 text-black hover:bg-black/10 border border-black/10'
            }`}
          >
            {formatAmount(amount)}
          </button>
        ))}
      </div>

      {/* Min/Max Labels */}
      <div className="flex justify-between text-xs text-black/50">
        <span>{currency}{formatAmount(min)}</span>
        <span>{currency}{formatAmount(max)}</span>
      </div>
    </div>
  );
};
