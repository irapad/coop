import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { TransactionItem } from '../components/TransactionItem';
import { Filter } from 'lucide-react';
import { transactions } from '../data/mock';

export const Transactions: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'deposit', label: 'ฝาก' },
    { id: 'withdraw', label: 'ถอน' },
    { id: 'transfer', label: 'โอน' },
    { id: 'loan', label: 'กู้' }
  ];

  const filteredTransactions = filter === 'all'
    ? transactions
    : transactions.filter(t => t.type === filter);

  return (
    <PageContainer
      title="รายการทั้งหมด"
      showNotification
      notificationCount={2}
      headerRightAction={
        <button className="p-2 hover:bg-gray-100 rounded-full tap-scale">
          <Filter size={20} />
        </button>
      }
    >
      <div className="p-4 space-y-6">
        {/* Filters */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                filter === f.id
                  ? 'bg-primary text-white shadow-glow'
                  : 'bg-white/10 text-black/70 hover:bg-white/20 hover:text-black border border-black/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Transaction List */}
        <div className="space-y-3">
          {filteredTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onClick={() => navigate(`/transactions/${transaction.id}`)}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};
