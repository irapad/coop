import React from 'react';
import { ArrowRightLeft, PiggyBank, Wallet, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}

export const QuickActions: React.FC = () => {
  const navigate = useNavigate();

  const actions: QuickAction[] = [
    {
      id: 'transfer',
      label: 'โอน',
      icon: <ArrowRightLeft size={24} />,
      path: '/transfer',
      color: 'bg-primary/90 text-dark'
    },
    {
      id: 'deposit',
      label: 'ฝาก',
      icon: <PiggyBank size={24} />,
      path: '/deposit',
      color: 'bg-white/10 text-white'
    },
    {
      id: 'withdraw',
      label: 'ถอน',
      icon: <Wallet size={24} />,
      path: '/withdraw',
      color: 'bg-white/10 text-white'
    },
    {
      id: 'loan',
      label: 'จ่ายกู้',
      icon: <CreditCard size={24} />,
      path: '/loans',
      color: 'bg-white/10 text-white'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {actions.map((action) => (
        <motion.button
          key={action.id}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate(action.path)}
          className="flex flex-col items-center gap-2 tap-scale"
        >
          <div className={`w-14 h-14 rounded-full ${action.color} flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-white/20`}>
            {action.icon}
          </div>
          <span className="text-sm text-white font-medium">{action.label}</span>
        </motion.button>
      ))}
    </div>
  );
};
