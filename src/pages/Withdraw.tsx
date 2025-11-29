import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { BottomSheet } from '../components/ui/BottomSheet';
import { PinPad } from '../components/ui/PinPad';
import { accounts } from '../data/mock';

export const Withdraw: React.FC = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(accounts[0].id);
  const [amount, setAmount] = useState('');
  const [showPinSheet, setShowPinSheet] = useState(false);

  const selectedAccount = accounts.find(a => a.id === account);

  const handleWithdraw = () => {
    if (!amount || parseInt(amount) > (selectedAccount?.balance || 0)) {
      alert('จำนวนเงินไม่ถูกต้อง');
      return;
    }
    setShowPinSheet(true);
  };

  const handlePinComplete = () => {
    setShowPinSheet(false);
    alert('ถอนเงินสำเร็จ');
    navigate('/home');
  };

  return (
    <PageContainer title="ถอนเงิน" showBack showBottomNav={false}>
      <div className="p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-black mb-2">เลือกบัญชี</label>
          <select
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            className="w-full px-4 py-3 rounded-app border-2 border-black/10 bg-white/5 text-black focus:border-primary focus:outline-none focus:bg-white/10 transition-all"
          >
            {accounts.map(acc => (
              <option key={acc.id} value={acc.id}>
                {acc.name} - ฿{acc.balance.toLocaleString('th-TH')}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="จำนวนเงิน"
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <p className="text-sm text-textMuted">
          ยอดคงเหลือ: ฿{selectedAccount?.balance.toLocaleString('th-TH')}
        </p>

        <Button fullWidth size="lg" onClick={handleWithdraw}>
          ยืนยันถอนเงิน
        </Button>
      </div>

      <BottomSheet isOpen={showPinSheet} onClose={() => setShowPinSheet(false)}>
        <PinPad onComplete={handlePinComplete} title="ยืนยันด้วย PIN" />
      </BottomSheet>
    </PageContainer>
  );
};
