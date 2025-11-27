import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';
import {
  Wallet, TrendingUp, CreditCard, ArrowRightLeft, ArrowDownCircle,
  ArrowUpCircle, Calculator, FileText, Phone, Settings, User
} from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
  category: string;
}

export const Menu: React.FC = () => {
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { id: 'accounts', label: 'บัญชี', icon: <Wallet size={24} />, path: '/accounts', category: 'บัญชี' },
    { id: 'deposit', label: 'ฝากเงิน', icon: <ArrowDownCircle size={24} />, path: '/deposit', category: 'บัญชี' },
    { id: 'withdraw', label: 'ถอนเงิน', icon: <ArrowUpCircle size={24} />, path: '/withdraw', category: 'บัญชี' },
    { id: 'transfer', label: 'โอนเงิน', icon: <ArrowRightLeft size={24} />, path: '/transfer', category: 'บัญชี' },
    { id: 'loans', label: 'เงินกู้', icon: <CreditCard size={24} />, path: '/loans', category: 'เงินกู้' },
    { id: 'loan-apply', label: 'สมัครกู้', icon: <FileText size={24} />, path: '/loans/apply', category: 'เงินกู้' },
    { id: 'calculator', label: 'คำนวณกู้', icon: <Calculator size={24} />, path: '/calculator', category: 'เงินกู้' },
    { id: 'shares', label: 'หุ้น', icon: <TrendingUp size={24} />, path: '/shares', category: 'หุ้น' },
    { id: 'statements', label: 'Statement', icon: <FileText size={24} />, path: '/statements', category: 'อื่นๆ' },
    { id: 'contact', label: 'ติดต่อ', icon: <Phone size={24} />, path: '/contact', category: 'อื่นๆ' },
    { id: 'settings', label: 'ตั้งค่า', icon: <Settings size={24} />, path: '/settings', category: 'อื่นๆ' },
    { id: 'profile', label: 'โปรไฟล์', icon: <User size={24} />, path: '/profile', category: 'อื่นๆ' },
  ];

  const categories = ['บัญชี', 'เงินกู้', 'หุ้น', 'อื่นๆ'];

  return (
    <PageContainer title="เมนู" showNotification notificationCount={2}>
      <div className="p-4 space-y-6">
        {categories.map(category => (
          <div key={category}>
            <h3 className="text-title mb-3">{category}</h3>
            <div className="grid grid-cols-4 gap-4">
              {menuItems
                .filter(item => item.category === category)
                .map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(item.path)}
                    className="flex flex-col items-center gap-2 tap-scale"
                  >
                    <Card className="w-full aspect-square flex items-center justify-center">
                      <span className="text-primary">{item.icon}</span>
                    </Card>
                    <span className="text-xs text-center text-textDark">{item.label}</span>
                  </motion.button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
