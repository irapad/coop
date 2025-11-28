import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Delete, Fingerprint } from 'lucide-react';
import { haptics } from '../../utils/haptics';

interface PinPadProps {
  onComplete: (pin: string) => void;
  onBiometric?: () => void;
  length?: number;
  title?: string;
}

export const PinPad: React.FC<PinPadProps> = ({
  onComplete,
  onBiometric,
  length = 6,
  title = 'ใส่รหัส PIN'
}) => {
  const [pin, setPin] = useState('');
  const [shake] = useState(false);

  useEffect(() => {
    if (pin.length === length) {
      onComplete(pin);
    }
  }, [pin, length, onComplete]);

  const handleNumberClick = (num: string) => {
    if (pin.length < length) {
      haptics.light();
      setPin(prev => prev + num);
    }
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      haptics.selection();
    }
    setPin(prev => prev.slice(0, -1));
  };

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div className="flex flex-col items-center p-6">
      <h3 className="text-title mb-8">{title}</h3>

      {/* PIN Dots */}
      <motion.div
        animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
        className="flex gap-4 mb-12"
      >
        {Array.from({ length }).map((_, i) => (
          <div
            key={i}
            className={`
              w-4 h-4 rounded-full transition-all duration-300
              ${i < pin.length ? 'bg-primary scale-110 shadow-glow' : 'bg-card border border-gray-700'}
            `}
          />
        ))}
      </motion.div>

      {/* Number Grid */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-xs mb-4">
        {numbers.map(num => (
          <button
            key={num}
            onClick={() => handleNumberClick(num)}
            className="aspect-square rounded-full bg-card hover:bg-white/10 text-3xl font-bold text-white transition-colors border border-transparent hover:border-primary/30"
          >
            {num}
          </button>
        ))}

        {/* Bottom Row */}
        <button
          onClick={onBiometric}
          className="aspect-square rounded-full flex items-center justify-center"
          disabled={!onBiometric}
        >
          {onBiometric && <Fingerprint size={32} className="text-primary" />}
        </button>

        <button
          onClick={() => handleNumberClick('0')}
          className="aspect-square rounded-full bg-card hover:bg-white/10 text-3xl font-bold text-white transition-colors border border-transparent hover:border-primary/30"
        >
          0
        </button>

        <button
          onClick={handleDelete}
          className="aspect-square rounded-full flex items-center justify-center text-textMuted hover:text-danger transition-colors"
        >
          <Delete size={32} />
        </button>
      </div>
    </div>
  );
};
