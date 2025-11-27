import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Download } from 'lucide-react';
import { accounts } from '../data/mock';

export const Statements: React.FC = () => {
  const [account, setAccount] = useState(accounts[0].id);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDownload = () => {
    alert('กำลังดาวน์โหลด Statement...');
  };

  return (
    <PageContainer title="Statement" showBack showNotification notificationCount={2}>
      <div className="p-4 space-y-4">
        <Card>
          <h3 className="text-title mb-3">เลือกบัญชี</h3>
          <select
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            className="w-full px-4 py-3 rounded-app border-2 border-gray-200 focus:border-primary focus:outline-none"
          >
            {accounts.map(acc => (
              <option key={acc.id} value={acc.id}>{acc.name}</option>
            ))}
          </select>
        </Card>

        <Card>
          <h3 className="text-title mb-3">ช่วงวันที่</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-textMuted mb-1">จาก</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-3 rounded-app border-2 border-gray-200 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-textMuted mb-1">ถึง</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-3 rounded-app border-2 border-gray-200 focus:border-primary focus:outline-none"
              />
            </div>
          </div>
        </Card>

        <Button
          fullWidth
          icon={<Download size={20} />}
          onClick={handleDownload}
        >
          ดาวน์โหลด PDF
        </Button>
      </div>
    </PageContainer>
  );
};
