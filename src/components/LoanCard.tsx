import React from 'react';
import { Card } from './ui/Card';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Loan {
  id: string;
  type: string;
  name: string;
  principal: number;
  remaining: number;
  monthly: number;
  rate: number;
  paidInstallments: number;
  installments: number;
}

interface LoanCardProps {
  loan: Loan;
}

export const LoanCard: React.FC<LoanCardProps> = ({ loan }) => {
  const navigate = useNavigate();

  const formatAmount = (amount: number) => {
    return amount.toLocaleString('th-TH', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  const progress = (loan.paidInstallments / loan.installments) * 100;

  return (
    <Card onClick={() => navigate(`/loans/${loan.id}`)}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-base font-semibold text-textDark">{loan.name}</h3>
          <p className="text-sm text-textMuted">งวดที่ {loan.paidInstallments}/{loan.installments}</p>
        </div>
        <ChevronRight size={20} className="text-textMuted" />
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs text-textMuted mb-1">คงเหลือ</p>
          <p className="text-xl font-bold text-danger">
            ฿{formatAmount(loan.remaining)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-textMuted mb-1">งวดละ</p>
          <p className="text-base font-semibold text-textDark">
            ฿{formatAmount(loan.monthly)}
          </p>
        </div>
      </div>
    </Card>
  );
};
