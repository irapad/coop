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
      <div className="p-4 space-y-4">
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap tap-scale ${
                filter === f.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-textDark'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Transaction List */}
        <div className="bg-card rounded-app card-shadow divide-y">
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
