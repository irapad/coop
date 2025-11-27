import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { BottomSheet } from '../components/ui/BottomSheet';
import { PinPad } from '../components/ui/PinPad';
import { accounts, shares } from '../data/mock';

export const BuyShares: React.FC = () => {
  const navigate = useNavigate();
  const [units, setUnits] = useState('');
  const [account, setAccount] = useState(accounts[0].id);
  const [showPinSheet, setShowPinSheet] = useState(false);

  const totalAmount = (parseInt(units) || 0) * shares.pricePerUnit;

  const handleBuy = () => {
    if (!units) {
      alert('กรุณาระบุจำนวนหุ้น');
      return;
    }
    setShowPinSheet(true);
  };

  const handlePinComplete = () => {
    setShowPinSheet(false);
    alert('ซื้อหุ้นสำเร็จ');
    navigate('/shares');
  };

  return (
    <PageContainer title="ซื้อหุ้น" showBack showBottomNav={false}>
      <div className="p-4 space-y-4">
        <Card>
          <p className="text-sm text-textMuted mb-1">ราคาหุ้นละ</p>
          <p className="text-2xl font-bold text-textDark">
            ฿{shares.pricePerUnit}
          </p>
        </Card>

        <Input
          label="จำนวนหุ้น"
          type="number"
          placeholder="0"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        />

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

        {units && (
          <Card>
            <div className="flex justify-between items-center">
              <span className="text-textMuted">จำนวนเงินทั้งหมด</span>
              <span className="text-2xl font-bold text-primary">
                ฿{totalAmount.toLocaleString('th-TH')}
              </span>
            </div>
          </Card>
        )}

        <Button fullWidth size="lg" onClick={handleBuy}>
          ยืนยันซื้อหุ้น
        </Button>
      </div>

      <BottomSheet isOpen={showPinSheet} onClose={() => setShowPinSheet(false)}>
        <PinPad onComplete={handlePinComplete} title="ยืนยันด้วย PIN" />
      </BottomSheet>
    </PageContainer>
  );
};
