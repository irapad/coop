import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { TrendingUp, Target, Gift, Home, GraduationCap } from 'lucide-react';

interface Goal {
  id: string;
  name: string;
  current: number;
  target: number;
  icon: 'trending' | 'target' | 'gift' | 'home' | 'education';
  color: string;
}

const goals: Goal[] = [
  {
    id: '1',
    name: 'กองทุนฉุกเฉิน',
    current: 45000,
    target: 100000,
    icon: 'trending',
    color: '#00e676'
  },
  {
    id: '2',
    name: 'ซื้อบ้าน',
    current: 350000,
    target: 1000000,
    icon: 'home',
    color: '#ff4081'
  },
  {
    id: '3',
    name: 'ทุนการศึกษา',
    current: 28000,
    target: 50000,
    icon: 'education',
    color: '#7c4dff'
  }
];

export const SavingsGoal: React.FC = () => {
  const getIcon = (type: string) => {
    const iconProps = { size: 20 };
    switch (type) {
      case 'trending':
        return <TrendingUp {...iconProps} />;
      case 'target':
        return <Target {...iconProps} />;
      case 'gift':
        return <Gift {...iconProps} />;
      case 'home':
        return <Home {...iconProps} />;
      case 'education':
        return <GraduationCap {...iconProps} />;
      default:
        return <Target {...iconProps} />;
    }
  };

  return (
    <Card glass>
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white">เป้าหมายการออม</h3>
        <p className="text-sm text-white/60">ติดตามความก้าวหน้าของคุณ</p>
      </div>

      <div className="space-y-4">
        {goals.map((goal, index) => {
          const percentage = (goal.current / goal.target) * 100;
          const formattedCurrent = goal.current.toLocaleString('th-TH');
          const formattedTarget = goal.target.toLocaleString('th-TH');

          return (
            <div
              key={goal.id}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center backdrop-blur-md border shadow-lg"
                  style={{
                    backgroundColor: `${goal.color}20`,
                    borderColor: `${goal.color}40`,
                    color: goal.color
                  }}
                >
                  {getIcon(goal.icon)}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white truncate">
                    {goal.name}
                  </h4>
                  <p className="text-xs text-white/60">
                    ฿{formattedCurrent} / ฿{formattedTarget}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold" style={{ color: goal.color }}>
                    {percentage.toFixed(0)}%
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="absolute h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${goal.color}, ${goal.color}dd)`,
                    boxShadow: `0 0 10px ${goal.color}60`,
                    width: `${percentage}%`
                  }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['200% 0', '-200% 0']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.5
                  }}
                />
              </div>

              {/* Motivational message */}
              {percentage >= 100 && (
                <p
                  className="text-xs mt-1"
                  style={{ color: goal.color }}
                >
                  🎉 บรรลุเป้าหมายแล้ว!
                </p>
              )}
              {percentage >= 75 && percentage < 100 && (
                <p className="text-xs text-white/60 mt-1">
                  เกือบถึงแล้ว! 💪
                </p>
              )}
              {percentage >= 50 && percentage < 75 && (
                <p className="text-xs text-white/60 mt-1">
                  ครึ่งทางแล้ว! 🚀
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Add Goal Button */}
      <button
        className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 rounded-2xl text-white font-medium text-sm transition-all"
      >
        + เพิ่มเป้าหมายใหม่
      </button>
    </Card>
  );
};
