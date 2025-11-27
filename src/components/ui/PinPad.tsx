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
        className="flex gap-3 mb-12"
      >
        {Array.from({ length }).map((_, i) => (
          <div
            key={i}
            className={`
              w-4 h-4 rounded-full border-2 transition-all
              ${i < pin.length ? 'bg-primary border-primary' : 'border-gray-300'}
            `}
          />
        ))}
      </motion.div>

      {/* Number Grid */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-xs mb-4">
        {numbers.map(num => (
          <motion.button
            key={num}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNumberClick(num)}
            className="aspect-square rounded-full bg-gray-100 hover:bg-gray-200 text-2xl font-semibold tap-scale"
          >
            {num}
          </motion.button>
        ))}

        {/* Bottom Row */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onBiometric}
          className="aspect-square rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center tap-scale"
          disabled={!onBiometric}
        >
          {onBiometric && <Fingerprint size={28} className="text-primary" />}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNumberClick('0')}
          className="aspect-square rounded-full bg-gray-100 hover:bg-gray-200 text-2xl font-semibold tap-scale"
        >
          0
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleDelete}
          className="aspect-square rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center tap-scale"
        >
          <Delete size={28} className="text-danger" />
        </motion.button>
      </div>
    </div>
  );
};
