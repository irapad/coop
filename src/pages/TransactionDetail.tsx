import React from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Download, Share2, Check } from 'lucide-react';
import { transactions } from '../data/mock';

export const TransactionDetail: React.FC = () => {
  const { id } = useParams();
  const transaction = transactions.find(t => t.id === id);

  if (!transaction) return <div>Transaction not found</div>;

  return (
    <PageContainer title="รายละเอียดรายการ" showBack showBottomNav={false}>
      <div className="p-4 space-y-4">
        <div className="text-center py-6">
          <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
            <Check size={40} className="text-success" />
          </div>
          <p className={`text-4xl font-bold ${transaction.amount >= 0 ? 'text-success' : 'text-danger'}`}>
            {transaction.amount >= 0 ? '+' : ''}฿{Math.abs(transaction.amount).toLocaleString('th-TH')}
          </p>
        </div>

        <Card>
          <h3 className="text-title mb-3">รายละเอียด</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-textMuted">ประเภท</span>
              <span className="font-medium">{transaction.desc}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">บัญชี</span>
              <span className="font-medium">{transaction.account}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">วันที่</span>
              <span className="font-medium">{transaction.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">เวลา</span>
              <span className="font-medium">{transaction.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">เลขอ้างอิง</span>
              <span className="font-medium text-xs">{transaction.refNumber}</span>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" icon={<Download size={20} />}>
            ดาวน์โหลด
          </Button>
          <Button variant="outline" icon={<Share2 size={20} />}>
            แชร์
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};
