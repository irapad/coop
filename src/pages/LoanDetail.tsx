import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { loans } from '../data/mock';

export const LoanDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const loan = loans.find(l => l.id === id);

  if (!loan) return <div>Loan not found</div>;

  return (
    <PageContainer title={loan.name} showBack showNotification notificationCount={2}>
      <div className="p-4 space-y-4">
        <Card gradient padding="lg">
          <p className="text-white/80 text-sm mb-2">ยอดคงเหลือ</p>
          <p className="text-4xl font-bold text-white">
            ฿{loan.remaining.toLocaleString('th-TH')}
          </p>
        </Card>

        <Card>
          <h3 className="text-title mb-3">ข้อมูลสัญญา</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-textMuted">เลขสัญญา</span>
              <span className="font-medium">{loan.loanNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">เงินต้น</span>
              <span className="font-medium">฿{loan.principal.toLocaleString('th-TH')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">อัตราดอกเบี้ย</span>
              <span className="font-medium">{loan.rate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">งวดชำระ</span>
              <span className="font-medium">{loan.paidInstallments}/{loan.installments} งวด</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">ชำระงวดละ</span>
              <span className="font-medium">฿{loan.monthly.toLocaleString('th-TH')}</span>
            </div>
          </div>
        </Card>

        <Button fullWidth onClick={() => navigate(`/loans/${loan.id}/pay`)}>
          ชำระเงินกู้
        </Button>
      </div>
    </PageContainer>
  );
};
