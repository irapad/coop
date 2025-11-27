import React from 'react';
import { useNavigate } from 'react-router-dom';
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
        {/* Greeting */}
        <div>
          <h1 className="text-2xl font-bold text-textDark">
            สวัสดี, {user.name.split(' ')[0]}
          </h1>
          <p className="text-sm text-textMuted">{user.department}</p>
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

          <div className="bg-card rounded-app card-shadow divide-y">
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
