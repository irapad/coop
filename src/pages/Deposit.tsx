import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { accounts } from '../data/mock';

export const Deposit: React.FC = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(accounts[0].id);
  const [amount, setAmount] = useState('');
  const quickAmounts = [1000, 5000, 10000, 20000];

  const handleDeposit = () => {
    alert('ฝากเงินสำเร็จ');
    navigate('/home');
  };

  return (
    <PageContainer title="ฝากเงิน" showBack showBottomNav={false}>
      <div className="p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-black mb-2">เลือกบัญชี</label>
          <select
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            className="w-full px-4 py-3 rounded-app border-2 border-black/10 bg-white/5 text-black focus:border-primary focus:outline-none focus:bg-white/10 transition-all"
          >
            {accounts.map(acc => (
              <option key={acc.id} value={acc.id}>{acc.name}</option>
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

        <div className="grid grid-cols-4 gap-2">
          {quickAmounts.map(amt => (
            <button
              key={amt}
              onClick={() => setAmount(amt.toString())}
              className="py-2 bg-white/10 hover:bg-white/20 text-white rounded-app text-sm font-medium tap-scale border border-white/10 transition-all"
            >
              {amt.toLocaleString()}
            </button>
          ))}
        </div>

        <Card>
          <h3 className="text-title mb-3">วิธีการฝาก</h3>
          <div className="space-y-2">
            <button className="w-full p-3 bg-white/5 border border-black/10 text-black rounded-app text-left hover:bg-black/10 tap-scale transition-all">
              QR Code
            </button>
            <button className="w-full p-3 bg-white/5 border border-black/10 text-black rounded-app text-left hover:bg-black/10 tap-scale transition-all">
              โอนผ่านธนาคาร
            </button>
            <button className="w-full p-3 bg-white/5 border border-black/10 text-black rounded-app text-left hover:bg-black/10 tap-scale transition-all">
              ฝากที่สาขา
            </button>
          </div>
        </Card>

        <Button fullWidth size="lg" onClick={handleDeposit}>
          ยืนยัน
        </Button>
      </div>
    </PageContainer>
  );
};
