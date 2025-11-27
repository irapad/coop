import React, { useState } from 'react';
import { Eye, EyeOff, ChevronRight } from 'lucide-react';
import { Card } from './ui/Card';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface BalanceCardProps {
  totalBalance: number;
  className?: string;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ totalBalance, className = '' }) => {
  const [showBalance, setShowBalance] = useState(true);
  const navigate = useNavigate();

  const formatBalance = (amount: number) => {
    return amount.toLocaleString('th-TH', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  return (
    <Card gradient padding="lg" className={className}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-white/80 text-sm mb-2">ยอดเงินรวม</p>
          <div className="flex items-baseline gap-2">
            <span className="text-white text-4xl font-bold">
              {showBalance ? `฿${formatBalance(totalBalance)}` : '฿••••••'}
            </span>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowBalance(!showBalance)}
          className="p-2 hover:bg-white/20 rounded-full tap-scale"
        >
          {showBalance ? (
            <Eye size={24} className="text-white" />
          ) : (
            <EyeOff size={24} className="text-white" />
          )}
        </motion.button>
      </div>

      <button
        onClick={() => navigate('/accounts')}
        className="flex items-center gap-2 text-white/90 text-sm hover:text-white tap-scale"
      >
        <span>ดูรายละเอียด</span>
        <ChevronRight size={16} />
      </button>
    </Card>
  );
};
