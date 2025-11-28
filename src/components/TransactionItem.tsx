import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownCircle,
  ArrowUpCircle,
  ArrowRightLeft,
  CreditCard,
  TrendingUp,
  Wallet
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
  const getIcon = (type: string) => {
    const iconProps = { size: 24 };
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
        return 'bg-green-100 text-green-600';
      case 'withdraw':
        return 'bg-orange-100 text-orange-600';
      case 'transfer':
        return 'bg-blue-100 text-blue-600';
      case 'loan':
        return 'bg-purple-100 text-purple-600';
      case 'share':
        return 'bg-accent/20 text-accent';
      case 'interest':
        return 'bg-success/20 text-success';
      default:
        return 'bg-gray-100 text-gray-600';
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

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex items-center gap-4 p-5 bg-card hover:bg-white/5 rounded-app cursor-pointer tap-scale shadow-sm border border-transparent hover:border-primary/20 transition-colors"
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-full ${getColor(transaction.type)} flex items-center justify-center flex-shrink-0`}>
        {getIcon(transaction.type)}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-bold text-textDark truncate mb-1">
          {transaction.desc}
        </h4>
        <p className="text-sm text-textMuted">
          {transaction.date} • {transaction.time}
        </p>
      </div>

      {/* Amount */}
      <div className="text-right">
        <p className={`text-xl font-bold ${amountColor}`}>
          {formatAmount(transaction.amount)}
        </p>
        <p className="text-xs text-textMuted mt-1">{transaction.account}</p>
      </div>
    </motion.div>
  );
};
