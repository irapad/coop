import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { LoanCard } from '../components/LoanCard';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Plus, AlertCircle } from 'lucide-react';
import { loans, getTotalLoan } from '../data/mock';

export const Loans: React.FC = () => {
  const navigate = useNavigate();
  const totalLoan = getTotalLoan();

  return (
    <PageContainer title="เงินกู้" showNotification notificationCount={2}>
      <div className="p-4 space-y-4">
        {/* Summary */}
        <Card gradient padding="lg">
          <p className="text-white/80 text-sm mb-2">ยอดกู้คงเหลือ</p>
          <p className="text-4xl font-bold text-white mb-4">
            ฿{totalLoan.toLocaleString('th-TH')}
          </p>
          <div className="flex gap-2 text-xs text-white/90">
            <AlertCircle size={16} />
            <span>งวดถัดไป: 10 ธ.ค. 2024</span>
          </div>
        </Card>

        {/* Loan List */}
        <div>
          <h3 className="text-title mb-3">รายการเงินกู้</h3>
          <div className="space-y-3">
            {loans.map((loan) => (
              <LoanCard key={loan.id} loan={loan} />
            ))}
          </div>
        </div>

        {/* Apply New Loan */}
        <Button
          fullWidth
          variant="outline"
          icon={<Plus size={20} />}
          onClick={() => navigate('/loans/apply')}
        >
          สมัครกู้ใหม่
        </Button>
      </div>
    </PageContainer>
  );
};
