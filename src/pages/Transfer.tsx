import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { BottomSheet } from '../components/ui/BottomSheet';
import { PinPad } from '../components/ui/PinPad';
import { accounts } from '../data/mock';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Transfer: React.FC = () => {
  const navigate = useNavigate();
  const [fromAccount, setFromAccount] = useState(accounts[0].id);
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [showPinSheet, setShowPinSheet] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const quickAmounts = [1000, 5000, 10000, 20000];

  const selectedFromAccount = accounts.find(acc => acc.id === fromAccount);

  const handleTransfer = () => {
    if (!toAccount || !amount) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }
    setShowPinSheet(true);
  };

  const handlePinComplete = (pin: string) => {
    setShowPinSheet(false);
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="app-container min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
            <Check size={48} className="text-success" />
          </div>
          <h2 className="text-2xl font-bold text-textDark mb-2">โอนเงินสำเร็จ</h2>
          <p className="text-textMuted">จำนวน ฿{parseInt(amount || '0').toLocaleString('th-TH')}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <PageContainer title="โอนเงิน" showBack showBottomNav={false}>
      <div className="p-4 space-y-4">
        {/* From Account */}
        <div>
          <label className="block text-sm font-medium text-textDark mb-2">จากบัญชี</label>
          <select
            value={fromAccount}
            onChange={(e) => setFromAccount(e.target.value)}
            className="w-full px-4 py-3 rounded-app border-2 border-gray-200 focus:border-primary focus:outline-none"
          >
            {accounts.map(acc => (
              <option key={acc.id} value={acc.id}>
                {acc.name} - ฿{acc.balance.toLocaleString('th-TH')}
              </option>
            ))}
          </select>
        </div>

        {/* To Account */}
        <div>
          <label className="block text-sm font-medium text-textDark mb-2">ไปยังบัญชี</label>
          <select
            value={toAccount}
            onChange={(e) => setToAccount(e.target.value)}
            className="w-full px-4 py-3 rounded-app border-2 border-gray-200 focus:border-primary focus:outline-none"
          >
            <option value="">เลือกบัญชี</option>
            {accounts.filter(acc => acc.id !== fromAccount).map(acc => (
              <option key={acc.id} value={acc.id}>
                {acc.name} - {acc.accountNumber}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <Input
          label="จำนวนเงิน"
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* Quick Amounts */}
        <div className="grid grid-cols-4 gap-2">
          {quickAmounts.map(amt => (
            <button
              key={amt}
              onClick={() => setAmount(amt.toString())}
              className="py-2 bg-gray-100 hover:bg-gray-200 rounded-app text-sm font-medium tap-scale"
            >
              {amt.toLocaleString()}
            </button>
          ))}
        </div>

        {/* Note */}
        <Input
          label="หมายเหตุ (ไม่บังคับ)"
          placeholder="ระบุหมายเหตุ"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        {/* Summary */}
        {amount && toAccount && (
          <Card>
            <h3 className="text-title mb-3">สรุปรายการโอน</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-textMuted">จากบัญชี</span>
                <span className="font-medium">{selectedFromAccount?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-textMuted">ไปยังบัญชี</span>
                <span className="font-medium">{accounts.find(a => a.id === toAccount)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-textMuted">จำนวนเงิน</span>
                <span className="font-bold text-lg">฿{parseInt(amount).toLocaleString('th-TH')}</span>
              </div>
            </div>
          </Card>
        )}

        {/* Confirm Button */}
        <div className="pt-4">
          <Button fullWidth size="lg" onClick={handleTransfer}>
            ยืนยันโอนเงิน
          </Button>
        </div>
      </div>

      {/* PIN Sheet */}
      <BottomSheet isOpen={showPinSheet} onClose={() => setShowPinSheet(false)}>
        <PinPad onComplete={handlePinComplete} title="ยืนยันด้วย PIN" />
      </BottomSheet>
    </PageContainer>
  );
};
