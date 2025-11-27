import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    title: 'ยินดีต้อนรับ',
    description: 'สหกรณ์ออมทรัพย์พนักงานคอสม่าและเพื่อน จำกัด',
    image: '💰'
  },
  {
    title: 'ออม ลงทุน เพิ่มพูน',
    description: 'บริหารเงินออมและหุ้นได้ง่ายๆ ผ่านมือถือ',
    image: '📱'
  },
  {
    title: 'กู้ยืมสะดวก',
    description: 'สมัครและชำระเงินกู้ได้ทุกที่ทุกเวลา',
    image: '🏦'
  }
];

export const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="app-container flex flex-col items-center justify-center min-h-screen p-6">
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 rounded-full gradient-purple flex items-center justify-center text-5xl mb-4 mx-auto">
          🏛️
        </div>
        <h1 className="text-2xl font-bold text-primary mb-2">COSMA Coop</h1>
        <p className="text-sm text-textMuted">สหกรณ์ออมทรัพย์</p>
        <p className="text-sm text-textMuted">พนักงานคอสม่าและเพื่อน จำกัด</p>
      </div>

      {/* Slides */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <div className="text-8xl mb-6">{slides[currentSlide].image}</div>
            <h2 className="text-2xl font-bold text-textDark mb-3">
              {slides[currentSlide].title}
            </h2>
            <p className="text-base text-textMuted px-4">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="flex gap-2 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 mb-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="p-3 bg-gray-100 rounded-full tap-scale"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="p-3 bg-gray-100 rounded-full tap-scale"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-md space-y-3">
        <Button
          fullWidth
          size="lg"
          onClick={() => navigate('/login')}
        >
          เข้าสู่ระบบ
        </Button>
        <div className="text-center">
          <span className="text-sm text-textMuted">ยังไม่มีบัญชี? </span>
          <button
            onClick={() => navigate('/register')}
            className="text-sm text-primary font-semibold tap-scale"
          >
            สมัครสมาชิก
          </button>
        </div>
      </div>
    </div>
  );
};
