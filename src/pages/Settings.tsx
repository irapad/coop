import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { ChevronRight } from 'lucide-react';

export const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [biometric, setBiometric] = useState(true);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('th');

  return (
    <PageContainer title="ตั้งค่า" showBack showNotification notificationCount={2}>
      <div className="p-4 space-y-4">
        <Card>
          <div className="divide-y">
            <div className="flex items-center justify-between p-3">
              <span className="text-textDark">แจ้งเตือน</span>
              <label className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-full h-full bg-gray-300 peer-checked:bg-primary rounded-full peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3">
              <span className="text-textDark">Biometric</span>
              <label className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  checked={biometric}
                  onChange={(e) => setBiometric(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-full h-full bg-gray-300 peer-checked:bg-primary rounded-full peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3">
              <span className="text-textDark">ธีม</span>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="px-3 py-1 rounded-app border border-gray-200"
              >
                <option value="light">สว่าง</option>
                <option value="dark">มืด</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-3">
              <span className="text-textDark">ภาษา</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-1 rounded-app border border-gray-200"
              >
                <option value="th">ไทย</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </Card>

        <Card>
          <div className="divide-y">
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 tap-scale">
              <span className="text-textDark">เกี่ยวกับ</span>
              <ChevronRight size={20} className="text-textMuted" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 tap-scale">
              <span className="text-textDark">ติดต่อ</span>
              <ChevronRight size={20} className="text-textMuted" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 tap-scale">
              <span className="text-textDark">เงื่อนไขการใช้งาน</span>
              <ChevronRight size={20} className="text-textMuted" />
            </button>
          </div>
        </Card>

        <div className="text-center text-sm text-textMuted pt-4">
          <p>COSMA Coop v1.0.0</p>
          <p>© 2024 COSMA Cooperative</p>
        </div>
      </div>
    </PageContainer>
  );
};
