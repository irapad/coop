import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { AccountCard } from '../components/AccountCard';
import { Button } from '../components/ui/Button';
import { Plus } from 'lucide-react';
import { accounts } from '../data/mock';

export const Accounts: React.FC = () => {
  return (
    <PageContainer title="บัญชีของฉัน" showNotification notificationCount={2}>
      <div className="p-4 space-y-4">
        {/* Summary */}
        <div className="bg-card rounded-app card-shadow p-4">
          <h3 className="text-sm text-textMuted mb-2">ยอดรวมทุกบัญชี</h3>
          <p className="text-3xl font-bold text-textDark">
            ฿{accounts.reduce((sum, acc) => sum + acc.balance, 0).toLocaleString('th-TH')}
          </p>
        </div>

        {/* Account List */}
        <div className="space-y-3">
          {accounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>

        {/* Open New Account */}
        <Button
          fullWidth
          variant="outline"
          icon={<Plus size={20} />}
          onClick={() => alert('เปิดบัญชีใหม่')}
        >
          เปิดบัญชีใหม่
        </Button>
      </div>
    </PageContainer>
  );
};
