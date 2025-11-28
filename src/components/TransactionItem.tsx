import React, { useState } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import {
  ArrowDownCircle,
  ArrowUpCircle,
  ArrowRightLeft,
  CreditCard,
  TrendingUp,
  Wallet,
  Share2,
  Trash2
} from 'lucide-react';

interface Transaction {
  id: string;
  type: string;
  desc: string;
  amount: number;
  date: string;
  time: string;
  account: string;
}

interface TransactionItemProps {
  transaction: Transaction;
  onClick?: () => void;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onClick }) => {
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5]);

  const getIcon = (type: string) => {
    const iconProps = { size: 20 };
    switch (type) {
      case 'deposit':
        return <ArrowDownCircle {...iconProps} />;
      case 'withdraw':
        return <ArrowUpCircle {...iconProps} />;
      case 'transfer':
        return <ArrowRightLeft {...iconProps} />;
      case 'loan':
        return <CreditCard {...iconProps} />;
      case 'share':
        return <TrendingUp {...iconProps} />;
      case 'interest':
        return <TrendingUp {...iconProps} />;
      default:
        return <Wallet {...iconProps} />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'deposit':
        return 'bg-gradient-to-br from-green-500/20 to-green-600/20 text-green-400 border-green-500/30';
      case 'withdraw':
        return 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 text-orange-400 border-orange-500/30';
      case 'transfer':
        return 'bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/30';
      case 'loan':
        return 'bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-purple-400 border-purple-500/30';
      case 'share':
        return 'bg-gradient-to-br from-primary/20 to-primary/30 text-primary border-primary/30';
      case 'interest':
        return 'bg-gradient-to-br from-success/20 to-success/30 text-success border-success/30';
      default:
        return 'bg-gradient-to-br from-white/10 to-white/5 text-white/70 border-white/20';
    }
  };

  const formatAmount = (amount: number) => {
    const formatted = Math.abs(amount).toLocaleString('th-TH', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return amount >= 0 ? `+฿${formatted}` : `-฿${formatted}`;
  };

  const amountColor = transaction.amount >= 0 ? 'text-success' : 'text-danger';

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      setSwipeDirection(info.offset.x > 0 ? 'right' : 'left');
      setTimeout(() => {
        setSwipeDirection(null);
        x.set(0);
      }, 300);
    } else {
      x.set(0);
    }
  };

  return (
    <div className="relative">
      {/* Swipe Actions Background */}
      <div className="absolute inset-0 flex justify-between items-center px-4 rounded-app overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: swipeDirection === 'right' ? 1 : 0 }}
          className="flex items-center gap-2 text-blue-400"
        >
          <Share2 size={20} />
          <span className="text-sm font-medium">Share</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: swipeDirection === 'left' ? 1 : 0 }}
          className="flex items-center gap-2 text-red-400"
        >
          <span className="text-sm font-medium">Delete</span>
          <Trash2 size={20} />
        </motion.div>
      </div>

      {/* Main Card */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ x, opacity }}
        onClick={onClick}
        className="relative flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md hover:bg-white/10 rounded-app cursor-pointer border border-white/10 hover:border-primary/30 transition-all shadow-lg"
      >
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-2xl ${getColor(transaction.type)} flex items-center justify-center flex-shrink-0 backdrop-blur-md border shadow-lg`}
        >
          {getIcon(transaction.type)}
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-bold text-white truncate mb-1">
            {transaction.desc}
          </h4>
          <p className="text-xs text-white/60">
            {transaction.date} • {transaction.time}
          </p>
        </div>

        {/* Amount */}
        <div className="text-right">
          <p className={`text-lg font-bold ${amountColor}`}>
            {formatAmount(transaction.amount)}
          </p>
          <p className="text-xs text-white/50 mt-0.5">{transaction.account}</p>
        </div>
      </motion.div>
    </div>
  );
};
