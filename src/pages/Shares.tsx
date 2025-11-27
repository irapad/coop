import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TrendingUp, Plus } from 'lucide-react';
import { shares, chartData } from '../data/mock';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export const Shares: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer title="หุ้น" showBack showNotification notificationCount={2}>
      <div className="p-4 space-y-4">
        <Card gradient padding="lg">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-white/80 text-sm mb-2">มูลค่าหุ้น</p>
              <p className="text-4xl font-bold text-white">
                ฿{shares.value.toLocaleString('th-TH')}
              </p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <TrendingUp size={24} className="text-white" />
            </div>
          </div>
          <p className="text-white/90 text-sm">
            {shares.units} หุ้น × ฿{shares.pricePerUnit}
          </p>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card>
            <p className="text-sm text-textMuted mb-1">ค่าหุ้นรายเดือน</p>
            <p className="text-xl font-bold text-textDark">
              ฿{shares.monthly.toLocaleString('th-TH')}
            </p>
          </Card>
          <Card>
            <p className="text-sm text-textMuted mb-1">ปันผลปีล่าสุด</p>
            <p className="text-xl font-bold text-success">
              ฿{shares.dividend.toLocaleString('th-TH')}
            </p>
          </Card>
        </div>

        <Card>
          <h3 className="text-title mb-4">มูลค่าหุ้น 6 เดือน</h3>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={chartData}>
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis hide />
              <Line type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="text-title mb-3">รายละเอียด</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-textMuted">อัตราปันผล</span>
              <span className="font-medium text-success">{shares.rate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textMuted">วันที่ปันผลล่าสุด</span>
              <span className="font-medium">{shares.lastDividendDate}</span>
            </div>
          </div>
        </Card>

        <Button
          fullWidth
          icon={<Plus size={20} />}
          onClick={() => navigate('/shares/buy')}
        >
          ซื้อหุ้นเพิ่ม
        </Button>
      </div>
    </PageContainer>
  );
};
