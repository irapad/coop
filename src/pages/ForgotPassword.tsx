import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { User, CreditCard } from 'lucide-react';

export const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [memberId, setMemberId] = useState('');
  const [idCard, setIdCard] = useState('');

  const handleSubmit = () => {
    alert('ส่งคำขอรีเซ็ตรหัสผ่านสำเร็จ');
    navigate('/login');
  };

  return (
    <PageContainer title="ลืมรหัสผ่าน" showBack showBottomNav={false}>
      <div className="p-4 space-y-4">
        <p className="text-sm text-textMuted">
          กรุณากรอกข้อมูลเพื่อรีเซ็ตรหัสผ่าน
        </p>

        <Input
          label="เลขสมาชิก"
          icon={<User size={20} />}
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
        />

        <Input
          label="เลขบัตรประชาชน"
          icon={<CreditCard size={20} />}
          value={idCard}
          onChange={(e) => setIdCard(e.target.value)}
        />

        <Button fullWidth size="lg" onClick={handleSubmit}>
          ส่งคำขอ
        </Button>
      </div>
    </PageContainer>
  );
};
