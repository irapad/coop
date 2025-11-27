import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const LoanApply: React.FC = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('general');
  const [amount, setAmount] = useState('');
  const [months, setMonths] = useState('12');

  const calculateMonthly = () => {
    if (!amount) return 0;
    const rate = type === 'emergency' ? 0.06 : 0.075;
    const principal = parseInt(amount);
    const m = parseInt(months);
    const monthlyRate = rate / 12;
    const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, m)) / (Math.pow(1 + monthlyRate, m) - 1);
    return Math.round(monthly);
  };

  const handleSubmit = () => {
    alert('ส่งคำขอสำเร็จ');
    navigate('/loans');
  };

  return (
    <PageContainer title="สมัครกู้" showBack showBottomNav={false}>
      <div className="p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-textDark mb-2">ประเภทเงินกู้</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-3 rounded-app border-2 border-gray-200 focus:border-primary focus:outline-none"
          >
            <option value="emergency">กู้ฉุกเฉิน (6%)</option>
            <option value="general">กู้สามัญ (7.5%)</option>
            <option value="special">กู้พิเศษ (8%)</option>
          </select>
        </div>

        <Input
          label="จำนวนเงิน"
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Input
          label="ระยะเวลา (เดือน)"
          type="number"
          placeholder="12"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />

        {amount && months && (
          <Card>
            <h3 className="text-title mb-3">สรุปการกู้</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-textMuted">เงินต้น</span>
                <span className="font-medium">฿{parseInt(amount).toLocaleString('th-TH')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-textMuted">งวดชำระ</span>
                <span className="font-bold text-lg text-primary">
                  ฿{calculateMonthly().toLocaleString('th-TH')}/เดือน
                </span>
              </div>
            </div>
          </Card>
        )}

        <Button fullWidth size="lg" onClick={handleSubmit}>
          ส่งคำขอ
        </Button>
      </div>
    </PageContainer>
  );
};
