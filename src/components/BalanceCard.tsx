import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, ChevronRight } from 'lucide-react';
import { Card } from './ui/Card';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface BalanceCardProps {
  totalBalance: number;
  className?: string;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ totalBalance, className = '' }) => {
  const [showBalance, setShowBalance] = useState(true);
  const [displayBalance, setDisplayBalance] = useState(0);
  const navigate = useNavigate();
  const shimmerControls = useAnimation();

  const formatBalance = (amount: number) => {
    return amount.toLocaleString('th-TH', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  // Number count-up animation
  useEffect(() => {
    if (showBalance) {
      let start = 0;
      const end = totalBalance;
      const duration = 1500; // 1.5 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayBalance(end);
          clearInterval(timer);
        } else {
          setDisplayBalance(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [totalBalance, showBalance]);

  // Shimmer animation
  useEffect(() => {
    shimmerControls.start({
      backgroundPosition: ['200% 0', '-200% 0'],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'linear'
      }
    });
  }, [shimmerControls]);

  return (
    <div className={className}>
      <Card gradient padding="lg" className="relative overflow-hidden">
        {/* Shimmer effect */}
        <motion.div
          animate={shimmerControls}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(221, 255, 100, 0.1) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
        />

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-black/80 text-sm mb-2">
                ยอดเงินรวม
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-black text-4xl font-bold">
                  {showBalance ? `฿${formatBalance(displayBalance)}` : '฿••••••'}
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="p-2 hover:bg-black/20 rounded-full transition-colors"
            >
              {showBalance ? (
                <Eye size={24} className="text-black" />
              ) : (
                <EyeOff size={24} className="text-black" />
              )}
            </button>
          </div>

          <button
            onClick={() => navigate('/accounts')}
            className="flex items-center gap-2 text-black/90 text-sm hover:text-black transition-colors"
          >
            <span>ดูรายละเอียด</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </Card>
    </div>
  );
};
