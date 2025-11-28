import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Delete, Fingerprint } from 'lucide-react';

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
      setPin(prev => prev + num);
    }
  };

  const handleDelete = () => {
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
          <motion.button
            key={num}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNumberClick(num)}
            className="aspect-square rounded-full bg-card hover:bg-white/10 text-3xl font-bold text-white tap-scale transition-colors border border-transparent hover:border-primary/30"
          >
            {num}
          </motion.button>
        ))}

        {/* Bottom Row */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onBiometric}
          className="aspect-square rounded-full flex items-center justify-center tap-scale"
          disabled={!onBiometric}
        >
          {onBiometric && <Fingerprint size={32} className="text-primary" />}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNumberClick('0')}
          className="aspect-square rounded-full bg-card hover:bg-white/10 text-3xl font-bold text-white tap-scale transition-colors border border-transparent hover:border-primary/30"
        >
          0
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleDelete}
          className="aspect-square rounded-full flex items-center justify-center tap-scale text-textMuted hover:text-danger transition-colors"
        >
          <Delete size={32} />
        </motion.button>
      </div>
    </div>
  );
};
