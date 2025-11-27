import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export const Calculator: React.FC = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('7.5');
  const [months, setMonths] = useState('12');

  const calculateMonthly = () => {
    if (!principal) return 0;
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseInt(months);
    const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(monthly);
  };

  const totalPayment = calculateMonthly() * parseInt(months || '0');
  const totalInterest = totalPayment - parseFloat(principal || '0');

  return (
    <PageContainer title="คำนวณเงินกู้" showBack showNotification notificationCount={2}>
      <div className="p-4 space-y-4">
        <Input
          label="เงินต้น (บาท)"
          type="number"
          placeholder="0"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />

        <Input
          label="อัตราดอกเบี้ย (%/ปี)"
          type="number"
          placeholder="7.5"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />

        <Input
          label="ระยะเวลา (เดือน)"
          type="number"
          placeholder="12"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />

        {principal && months && (
          <Card gradient padding="lg">
            <h3 className="text-white/80 text-sm mb-4">ผลการคำนวณ</h3>
            <div className="space-y-3">
              <div>
                <p className="text-white/80 text-sm">งวดชำระ/เดือน</p>
                <p className="text-3xl font-bold text-white">
                  ฿{calculateMonthly().toLocaleString('th-TH')}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/20">
                <div>
                  <p className="text-white/80 text-xs">ยอดรวมทั้งหมด</p>
                  <p className="text-lg font-bold text-white">
                    ฿{totalPayment.toLocaleString('th-TH')}
                  </p>
                </div>
                <div>
                  <p className="text-white/80 text-xs">ดอกเบี้ยรวม</p>
                  <p className="text-lg font-bold text-white">
                    ฿{totalInterest.toLocaleString('th-TH')}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </PageContainer>
  );
};
