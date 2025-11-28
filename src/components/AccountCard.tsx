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
    <div onClick={() => navigate(`/accounts/${account.id}`)}>
        <Card glass className="relative overflow-hidden cursor-pointer">
          {/* Color stripe with glow */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 shadow-lg"
            style={{
              backgroundColor: account.color,
              boxShadow: `0 0 20px ${account.color}40`
            }}
          />

          {/* Gradient overlay for depth */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${account.color}40, transparent 70%)`
            }}
          />

          <div className="flex items-center justify-between pl-3 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-base font-semibold text-textDark">
                  {account.name}
                </h3>
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
    </div>
  );
};
