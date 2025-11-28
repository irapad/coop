import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from './ui/Card';

const weeklyData = [
  { day: 'จ', amount: 2500 },
  { day: 'อ', amount: 3200 },
  { day: 'พ', amount: 1800 },
  { day: 'พฤ', amount: 4100 },
  { day: 'ศ', amount: 2900 },
  { day: 'ส', amount: 3600 },
  { day: 'อา', amount: 5200 },
];

const monthlyData = [
  { day: 'ส1', amount: 12000 },
  { day: 'ส2', amount: 15000 },
  { day: 'ส3', amount: 18000 },
  { day: 'ส4', amount: 21000 },
];

const yearlyData = [
  { day: 'ม.ค.', amount: 45000 },
  { day: 'ก.พ.', amount: 52000 },
  { day: 'มี.ค.', amount: 48000 },
  { day: 'เม.ย.', amount: 61000 },
  { day: 'พ.ค.', amount: 55000 },
  { day: 'มิ.ย.', amount: 58000 },
];

interface SpendingChartProps {
  className?: string;
}

export const SpendingChart: React.FC<SpendingChartProps> = ({ className = '' }) => {
  const [period, setPeriod] = useState<'week' | 'month' | 'year'>('week');

  const data = period === 'week' ? weeklyData : period === 'month' ? monthlyData : yearlyData;

  const totalSpending = data.reduce((sum, item) => sum + item.amount, 0);
  const avgSpending = Math.round(totalSpending / data.length);

  const periods = [
    { key: 'week', label: 'สัปดาห์' },
    { key: 'month', label: 'เดือน' },
    { key: 'year', label: 'ปี' },
  ] as const;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card/95 backdrop-blur-md border border-white/20 rounded-2xl p-3 shadow-2xl">
          <p className="text-white font-bold">฿{payload[0].value.toLocaleString('th-TH')}</p>
          <p className="text-white/60 text-xs">{payload[0].payload.day}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card glass className={className}>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">การใช้จ่าย</h3>

          {/* Period Tabs */}
          <div className="flex gap-1 bg-white/5 p-1 rounded-full">
            {periods.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setPeriod(key)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  period === key
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
            <p className="text-white/60 text-xs mb-1">ทั้งหมด</p>
            <p className="text-white font-bold text-lg">
              ฿{totalSpending.toLocaleString('th-TH')}
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
            <p className="text-white/60 text-xs mb-1">เฉลี่ย</p>
            <p className="text-white font-bold text-lg">
              ฿{avgSpending.toLocaleString('th-TH')}
            </p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ccff00" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ccff00" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="day"
              stroke="rgba(255,255,255,0.3)"
              style={{ fontSize: '12px' }}
              tickLine={false}
            />
            <YAxis
              stroke="rgba(255,255,255,0.3)"
              style={{ fontSize: '12px' }}
              tickLine={false}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#ccff00"
              strokeWidth={3}
              fill="url(#colorAmount)"
              animationDuration={800}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
