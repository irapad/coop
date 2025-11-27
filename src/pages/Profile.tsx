import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ChevronRight, User, Lock, Hash, Settings, LogOut, Phone, Mail } from 'lucide-react';
import { user, getTotalBalance, shares, getTotalLoan } from '../data/mock';
import { useAuth } from '../hooks/useAuth';

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const totalBalance = getTotalBalance();
  const totalLoan = getTotalLoan();

  const menuItems = [
    { icon: <User size={20} />, label: 'แก้ไขข้อมูลส่วนตัว', path: '/profile/edit' },
    { icon: <Lock size={20} />, label: 'เปลี่ยนรหัสผ่าน', path: '/profile/password' },
    { icon: <Hash size={20} />, label: 'เปลี่ยน PIN', path: '/profile/pin' },
    { icon: <Settings size={20} />, label: 'ตั้งค่า', path: '/settings' }
  ];

  const handleLogout = () => {
    if (confirm('ต้องการออกจากระบบ?')) {
      logout();
      navigate('/');
    }
  };

  return (
    <PageContainer title="โปรไฟล์" showBack showNotification notificationCount={2}>
      <div className="p-4 space-y-4">
        {/* Profile Header */}
        <Card>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full gradient-purple flex items-center justify-center text-white text-3xl font-bold">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-textDark">{user.name}</h2>
              <p className="text-sm text-textMuted">{user.department}</p>
              <p className="text-sm text-textMuted">รหัส: {user.id}</p>
            </div>
          </div>

          <div className="flex gap-2 text-sm text-textMuted">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>{user.email}</span>
            </div>
          </div>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-3">
          <Card padding="sm">
            <p className="text-xs text-textMuted mb-1">ยอดเงิน</p>
            <p className="text-lg font-bold text-success">฿{(totalBalance/1000).toFixed(0)}K</p>
          </Card>
          <Card padding="sm">
            <p className="text-xs text-textMuted mb-1">หุ้น</p>
            <p className="text-lg font-bold text-accent">฿{(shares.value/1000).toFixed(0)}K</p>
          </Card>
          <Card padding="sm">
            <p className="text-xs text-textMuted mb-1">กู้</p>
            <p className="text-lg font-bold text-danger">฿{(totalLoan/1000).toFixed(0)}K</p>
          </Card>
        </div>

        {/* Menu Items */}
        <Card padding="sm">
          <div className="divide-y">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 tap-scale"
              >
                <div className="flex items-center gap-3">
                  <span className="text-primary">{item.icon}</span>
                  <span className="text-textDark">{item.label}</span>
                </div>
                <ChevronRight size={20} className="text-textMuted" />
              </button>
            ))}
          </div>
        </Card>

        {/* Logout Button */}
        <Button
          fullWidth
          variant="danger"
          icon={<LogOut size={20} />}
          onClick={handleLogout}
        >
          ออกจากระบบ
        </Button>
      </div>
    </PageContainer>
  );
};
