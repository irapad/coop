import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Header } from '../components/layout/Header';
import { PinPad } from '../components/ui/PinPad';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { loginWithPin } = useAuth();
  const [error, setError] = useState('');

  const handlePinComplete = (pin: string) => {
    const success = loginWithPin(pin);
    if (success) {
      navigate('/home');
    } else {
      setError('PIN ไม่ถูกต้อง');
    }
  };

  const handleBiometric = () => {
    // Mock biometric
    navigate('/home');
  };

  return (
    <div className="app-container min-h-screen bg-background flex flex-col">
      <Header title="เข้าสู่ระบบ" showBack />

      <div className="flex-1 flex flex-col justify-center p-6 space-y-6 max-w-md mx-auto w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-5xl mb-4 mx-auto shadow-glow text-primary-foreground">
            🏛️
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">COSMA Coop</h2>
          <p className="text-textMuted text-sm mt-1">เข้าสู่ระบบเพื่อใช้งาน</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-danger/10 border border-danger text-danger px-4 py-3 rounded-app text-sm text-center">
            {error}
          </div>
        )}

        {/* PIN Pad */}
        <PinPad
          onComplete={handlePinComplete}
          onBiometric={handleBiometric}
          title="กรุณาใส่ PIN 6 หลัก"
        />

        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/forgot')}
            className="text-sm text-textMuted hover:text-primary transition-colors"
          >
            ลืมรหัส PIN?
          </button>
        </div>
      </div>
    </div>
  );
};
