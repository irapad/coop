import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Wallet, ScanLine, Receipt, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
  isCenter?: boolean;
}

export const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: 'home', label: 'หน้าหลัก', icon: <Home size={24} />, path: '/home' },
    { id: 'accounts', label: 'บัญชี', icon: <Wallet size={24} />, path: '/accounts' },
    { id: 'scan', label: 'สแกน', icon: <ScanLine size={28} />, path: '/scan', isCenter: true },
    { id: 'transactions', label: 'รายการ', icon: <Receipt size={24} />, path: '/transactions' },
    { id: 'menu', label: 'อื่นๆ', icon: <Menu size={24} />, path: '/menu' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 flex justify-center pb-safe safe-area-bottom">
      <nav className="bg-card rounded-tab shadow-lg mx-4 mb-4 px-2 py-2 flex items-center justify-around max-w-app w-full">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(item.path)}
            className={`
              flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl tap-scale
              transition-colors relative
              ${item.isCenter ? 'scale-110' : ''}
            `}
          >
            {/* Center button special styling */}
            {item.isCenter && (
              <div className="absolute inset-0 gradient-purple rounded-xl -z-10" />
            )}

            <span className={`
              ${isActive(item.path) ? 'text-primary' : item.isCenter ? 'text-white' : 'text-textMuted'}
              ${item.isCenter ? 'text-white' : ''}
            `}>
              {item.icon}
            </span>

            <span className={`
              text-xs font-medium
              ${isActive(item.path) ? 'text-primary' : item.isCenter ? 'text-white' : 'text-textMuted'}
            `}>
              {item.label}
            </span>

            {/* Active indicator */}
            {isActive(item.path) && !item.isCenter && (
              <motion.div
                layoutId="activeTab"
                className="absolute -top-1 w-8 h-1 bg-primary rounded-full"
              />
            )}
          </motion.button>
        ))}
      </nav>
    </div>
  );
};
