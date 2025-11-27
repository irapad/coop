import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { CreditCard, User, Phone, Mail } from 'lucide-react';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    idCard: '',
    employeeId: '',
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert('สมัครสมาชิกสำเร็จ');
      navigate('/login');
    }
  };

  return (
    <PageContainer title="สมัครสมาชิก" showBack showBottomNav={false}>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i <= step ? 'bg-primary text-white' : 'bg-gray-200 text-textMuted'
              }`}
            >
              {i}
            </div>
          ))}
        </div>

        {step === 1 && (
          <>
            <Input
              label="เลขบัตรประชาชน"
              icon={<CreditCard size={20} />}
              value={formData.idCard}
              onChange={(e) => setFormData({...formData, idCard: e.target.value})}
            />
            <Input
              label="เลขพนักงาน"
              icon={<User size={20} />}
              value={formData.employeeId}
              onChange={(e) => setFormData({...formData, employeeId: e.target.value})}
            />
          </>
        )}

        {step === 2 && (
          <>
            <Input
              label="ชื่อ-นามสกุล"
              icon={<User size={20} />}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <Input
              label="เบอร์โทรศัพท์"
              icon={<Phone size={20} />}
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <Input
              label="อีเมล"
              icon={<Mail size={20} />}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </>
        )}

        {step === 3 && (
          <>
            <Input
              label="รหัสผ่าน"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <Input
              label="ยืนยันรหัสผ่าน"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
          </>
        )}

        <Button fullWidth size="lg" onClick={handleSubmit}>
          {step < 3 ? 'ถัดไป' : 'สมัครสมาชิก'}
        </Button>
      </div>
    </PageContainer>
  );
};
