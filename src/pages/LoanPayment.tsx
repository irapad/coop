import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BottomSheet } from '../components/ui/BottomSheet';
import { PinPad } from '../components/ui/PinPad';
import { loans, accounts } from '../data/mock';

export const LoanPayment: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const loan = loans.find(l => l.id === id);
  const [paymentType, setPaymentType] = useState('monthly');
  const [account, setAccount] = useState(accounts[0].id);
  const [showPinSheet, setShowPinSheet] = useState(false);

  if (!loan) return <div>Loan not found</div>;

  const getPaymentAmount = () => {
    switch (paymentType) {
      case 'monthly': return loan.monthly;
      case 'extra': return loan.monthly * 2;
      case 'full': return loan.remaining;
      default: return loan.monthly;
    }
  };

  const handlePay = () => {
    setShowPinSheet(true);
  };

  const handlePinComplete = () => {
    setShowPinSheet(false);
    alert('ชำระเงินกู้สำเร็จ');
    navigate('/loans');
  };

  return (
    <PageContainer title="ชำระเงินกู้" showBack showBottomNav={false}>
      <div className="p-4 space-y-4">
        <Card>
          <h3 className="text-title mb-3">{loan.name}</h3>
          <p className="text-sm text-textMuted">งวดที่ {loan.paidInstallments + 1}/{loan.installments}</p>
        </Card>

        <div>
          <label className="block text-sm font-medium text-textDark mb-2">ประเภทการชำระ</label>
          <div className="space-y-2">
            <button
              onClick={() => setPaymentType('monthly')}
              className={`w-full p-3 rounded-app border-2 text-left tap-scale ${
                paymentType === 'monthly' ? 'border-primary bg-primary/10' : 'border-gray-200'
              }`}
            >
              <p className="font-medium">ตามงวด</p>
              <p className="text-sm text-textMuted">฿{loan.monthly.toLocaleString('th-TH')}</p>
            </button>
            <button
              onClick={() => setPaymentType('extra')}
              className={`w-full p-3 rounded-app border-2 text-left tap-scale ${
                paymentType === 'extra' ? 'border-primary bg-primary/10' : 'border-gray-200'
              }`}
            >
              <p className="font-medium">มากกว่างวด</p>
              <p className="text-sm text-textMuted">฿{(loan.monthly * 2).toLocaleString('th-TH')}</p>
            </button>
            <button
              onClick={() => setPaymentType('full')}
              className={`w-full p-3 rounded-app border-2 text-left tap-scale ${
                paymentType === 'full' ? 'border-primary bg-primary/10' : 'border-gray-200'
              }`}
            >
              <p className="font-medium">ปิดยอด</p>
              <p className="text-sm text-textMuted">฿{loan.remaining.toLocaleString('th-TH')}</p>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-textDark mb-2">บัญชีที่หัก</label>
          <select
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            className="w-full px-4 py-3 rounded-app border-2 border-gray-200 focus:border-primary focus:outline-none"
          >
            {accounts.map(acc => (
              <option key={acc.id} value={acc.id}>
                {acc.name} - ฿{acc.balance.toLocaleString('th-TH')}
              </option>
            ))}
          </select>
        </div>

        <Card>
          <div className="flex justify-between items-center">
            <span className="text-textMuted">จำนวนที่ชำระ</span>
            <span className="text-2xl font-bold text-primary">
              ฿{getPaymentAmount().toLocaleString('th-TH')}
            </span>
          </div>
        </Card>

        <Button fullWidth size="lg" onClick={handlePay}>
          ยืนยันชำระเงิน
        </Button>
      </div>

      <BottomSheet isOpen={showPinSheet} onClose={() => setShowPinSheet(false)}>
        <PinPad onComplete={handlePinComplete} title="ยืนยันด้วย PIN" />
      </BottomSheet>
    </PageContainer>
  );
};
