import React from 'react';
import { Card } from './ui/Card';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Account {
  id: string;
  type: string;
  name: string;
  accountNumber: string;
  balance: number;
  color: string;
}

interface AccountCardProps {
  account: Account;
  showDetails?: boolean;
}

export const AccountCard: React.FC<AccountCardProps> = ({ account, showDetails = true }) => {
  const navigate = useNavigate();

  const formatBalance = (amount: number) => {
    return amount.toLocaleString('th-TH', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  const maskAccountNumber = (accountNumber: string) => {
    const parts = accountNumber.split('-');
    if (parts.length >= 3) {
      return `${parts[0]}-X-XXXXX-${parts[parts.length - 1]}`;
    }
    return accountNumber;
  };

  return (
    <Card
      onClick={() => navigate(`/accounts/${account.id}`)}
      className="relative overflow-hidden"
    >
      {/* Color stripe */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: account.color }}
      />

      <div className="flex items-center justify-between pl-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-semibold text-textDark">{account.name}</h3>
          </div>
          {showDetails && (
            <p className="text-sm text-textMuted">{maskAccountNumber(account.accountNumber)}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right">
            <p className="text-xl font-bold text-textDark">
              ฿{formatBalance(account.balance)}
            </p>
          </div>
          <ChevronRight size={20} className="text-textMuted" />
        </div>
      </div>
    </Card>
  );
};
