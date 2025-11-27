import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, Fingerprint, Hash } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../hooks/useAuth';
import { Header } from '../components/layout/Header';
import { BottomSheet } from '../components/ui/BottomSheet';
import { PinPad } from '../components/ui/PinPad';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, loginWithPin } = useAuth();
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPinSheet, setShowPinSheet] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!memberId || !password) {
      setError('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    const success = login(memberId, password);
    if (success) {
      navigate('/home');
    } else {
      setError('ข้อมูลไม่ถูกต้อง');
    }
  };

  const handlePinComplete = (pin: string) => {
    const success = loginWithPin(pin);
    setShowPinSheet(false);
    if (success) {
      navigate('/home');
    } else {
      setError('PIN ไม่ถูกต้อง');
    }
  };

  const handleBiometric = () => {
    // Mock biometric
    setShowPinSheet(false);
    navigate('/home');
  };

  return (
    <div className="app-container min-h-screen bg-background">
      <Header title="เข้าสู่ระบบ" showBack />

      <div className="p-6 space-y-6 max-w-md mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full gradient-purple flex items-center justify-center text-4xl mb-3 mx-auto">
            🏛️
          </div>
          <h2 className="text-xl font-bold text-textDark">COSMA Coop</h2>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-danger/10 border border-danger text-danger px-4 py-3 rounded-app text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <div className="space-y-4">
          <Input
            label="เลขสมาชิก"
            placeholder="CM-XXXXXX"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            icon={<User size={20} />}
          />

          <Input
            label="รหัสผ่าน"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock size={20} />}
            endIcon={
              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            }
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-primary"
              />
              <span className="text-sm text-textDark">จดจำฉัน</span>
            </label>
            <button
              onClick={() => navigate('/forgot')}
              className="text-sm text-primary font-medium tap-scale"
            >
              ลืมรหัสผ่าน?
            </button>
          </div>
        </div>

        {/* Login Button */}
        <Button fullWidth size="lg" onClick={handleLogin}>
          เข้าสู่ระบบ
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-textMuted">หรือ</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Alternative Login */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            onClick={() => setShowPinSheet(true)}
            icon={<Hash size={20} />}
          >
            PIN
          </Button>
          <Button
            variant="outline"
            onClick={handleBiometric}
            icon={<Fingerprint size={20} />}
          >
            ลายนิ้วมือ
          </Button>
        </div>

        {/* Register Link */}
        <div className="text-center pt-4">
          <span className="text-sm text-textMuted">ยังไม่มีบัญชี? </span>
          <button
            onClick={() => navigate('/register')}
            className="text-sm text-primary font-semibold tap-scale"
          >
            สมัครสมาชิก
          </button>
        </div>
      </div>

      {/* PIN Sheet */}
      <BottomSheet
        isOpen={showPinSheet}
        onClose={() => setShowPinSheet(false)}
        title="เข้าสู่ระบบด้วย PIN"
      >
        <PinPad
          onComplete={handlePinComplete}
          onBiometric={handleBiometric}
          title="กรุณาใส่ PIN 6 หลัก"
        />
      </BottomSheet>
    </div>
  );
};
