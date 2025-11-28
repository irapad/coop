import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { BalanceCard } from '../components/BalanceCard';
import { QuickActions } from '../components/QuickActions';
import { AccountCard } from '../components/AccountCard';
import { TransactionItem } from '../components/TransactionItem';
import { user, accounts, transactions, getTotalBalance } from '../data/mock';
import { ChevronRight } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const totalBalance = getTotalBalance();
  const recentTransactions = transactions.slice(0, 5);

  return (
    <PageContainer
      showNotification
      notificationCount={2}
      headerLeftAction={
        <button
          onClick={() => navigate('/profile')}
          className="flex items-center gap-2 tap-scale"
        >
          <div className="w-10 h-10 rounded-full gradient-purple flex items-center justify-center text-white text-sm font-bold">
            {user.name.charAt(0)}
          </div>
        </button>
      }
    >
      <div className="p-4 space-y-6">
        {/* Greeting Section with Mascot */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c1c1e] to-[#0f0f11] p-6 border border-white/5 shadow-lg">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none" />

          <div className="flex items-center justify-between relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  สวัสดี, <span className="text-primary">{user.name.split(' ')[0]}</span>
                </h1>
                <p className="text-textMuted flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  {user.department}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: 10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="w-32 h-32 -mr-4 -my-6"
            >
              <motion.img
                src="/src/assets/mascot.png"
                alt="Mascot"
                animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-full h-full object-contain drop-shadow-2xl filter brightness-110"
              />
            </motion.div>
          </div>
        </div>

        {/* Balance Card */}
        <BalanceCard totalBalance={totalBalance} />

        {/* Quick Actions */}
        <QuickActions />

        {/* My Accounts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-title">บัญชีของฉัน</h2>
            <button
              onClick={() => navigate('/accounts')}
              className="flex items-center gap-1 text-sm text-primary font-medium tap-scale"
            >
              <span>ดูทั้งหมด</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Horizontal Scroll */}
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {accounts.map((account) => (
              <div key={account.id} className="min-w-[280px]">
                <AccountCard account={account} showDetails={false} />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-title">รายการล่าสุด</h2>
            <button
              onClick={() => navigate('/transactions')}
              className="flex items-center gap-1 text-sm text-primary font-medium tap-scale"
            >
              <span>ดูทั้งหมด</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onClick={() => navigate(`/transactions/${transaction.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
