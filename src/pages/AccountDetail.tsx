import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowRightLeft, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { accounts, chartData, transactions } from '../data/mock';

export const AccountDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const account = accounts.find(acc => acc.id === id);

  if (!account) return <div>Account not found</div>;

  const accountTransactions = transactions.filter(t => t.account === account.name).slice(0, 10);

  return (
    <PageContainer title={account.name} showBack showNotification notificationCount={2}>
      <div className="p-4 space-y-6 ">
        {/* Balance Card */}
        <Card gradient padding="lg" className="rounded-xxl bg-black/1">
          <p className="text-black/80 text-sm mb-2">ยอดเงินคงเหลือ</p>
          <p className="text-4xl font-bold text-black mb-4">
            ฿{account.balance.toLocaleString('th-TH')}
          </p>
          <div className="flex justify-between text-black/90 text-sm">
            <span>เลขบัญชี: {account.accountNumber}</span>
            <span>ดอกเบี้ย {account.rate}%</span> 
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Button variant="outline" icon={<ArrowDownCircle size={20} />} onClick={() => navigate('/deposit')}>
            ฝาก
          </Button>
          <Button variant="outline" icon={<ArrowUpCircle size={20} />} onClick={() => navigate('/withdraw')}>
            ถอน
          </Button>
          <Button variant="outline" icon={<ArrowRightLeft size={20} />} onClick={() => navigate('/transfer')}>
            โอน
          </Button>
        </div>

        {/* Chart */}
        <Card>
          <h3 className="text-title mb-4">ยอดเงิน 6 เดือน</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#8b3f9e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Transaction History */}
        <div>
          <h3 className="text-title mb-3">รายการเคลื่อนไหว</h3>
          <Card padding="sm">
            <div className="divide-y">
              {accountTransactions.map((transaction) => (
                <div key={transaction.id} className="py-3 px-2 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-textDark">{transaction.desc}</p>
                    <p className="text-sm text-textMuted">{transaction.date}</p>
                  </div>
                  <p className={`font-bold ${transaction.amount >= 0 ? 'text-success' : 'text-danger'}`}>
                    {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toLocaleString('th-TH')}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};
