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
          <label className="block text-sm font-medium text-textDark mb-2">เลือกบัญชี</label>
          <select
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            className="w-full px-4 py-3 rounded-app border-2 border-gray-200 focus:border-primary focus:outline-none"
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
              className="py-2 bg-gray-100 hover:bg-gray-200 rounded-app text-sm font-medium tap-scale"
            >
              {amt.toLocaleString()}
            </button>
          ))}
        </div>

        <Card>
          <h3 className="text-title mb-3">วิธีการฝาก</h3>
          <div className="space-y-2">
            <button className="w-full p-3 bg-gray-50 rounded-app text-left hover:bg-gray-100 tap-scale">
              QR Code
            </button>
            <button className="w-full p-3 bg-gray-50 rounded-app text-left hover:bg-gray-100 tap-scale">
              โอนผ่านธนาคาร
            </button>
            <button className="w-full p-3 bg-gray-50 rounded-app text-left hover:bg-gray-100 tap-scale">
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
