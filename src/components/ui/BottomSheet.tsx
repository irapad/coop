import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { X } from 'lucide-react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  height?: 'auto' | 'half' | 'full';
  snapPoints?: number[]; // Array of snap points in percentage (e.g., [30, 60, 90])
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
  height = 'auto',
  snapPoints = [90]
}) => {
  const [currentSnapPoint, setCurrentSnapPoint] = useState(snapPoints[snapPoints.length - 1]);
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 300], [1, 0.5]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentSnapPoint(snapPoints[snapPoints.length - 1]);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, snapPoints]);

  const heightClasses = {
    auto: 'max-h-[90vh]',
    half: 'h-[50vh]',
    full: 'h-[95vh]'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: `${100 - currentSnapPoint}%` }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.1, bottom: 0.5 }}
            dragMomentum={false}
            style={{ y, opacity }}
            onDragEnd={(_e, { offset, velocity }) => {
              const windowHeight = window.innerHeight;
              const dragPercentage = (offset.y / windowHeight) * 100;

              // Check if dragged down enough to close
              if (offset.y > 150 || velocity.y > 800) {
                onClose();
                return;
              }

              // Find nearest snap point
              if (snapPoints.length > 1) {
                const nearestSnapPoint = snapPoints.reduce((prev, curr) => {
                  const currentPoint = currentSnapPoint - dragPercentage;
                  return Math.abs(curr - currentPoint) < Math.abs(prev - currentPoint) ? curr : prev;
                });
                setCurrentSnapPoint(nearestSnapPoint);
              }

              // Reset position
              y.set(0);
            }}
            className={`
              fixed bottom-0 left-0 right-0 z-50
              bg-card/95 backdrop-blur-xl rounded-t-[32px]
              ${heightClasses[height]}
              overflow-hidden
              shadow-2xl border-t border-white/10
            `}
          >
            {/* Drag Handle */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="w-12 h-1.5 bg-white/30 rounded-full cursor-grab active:cursor-grabbing" />
            </div>

            {/* Header */}
            {title && (
              <div className="flex items-center justify-between px-6 py-3 border-b">
                <h3 className="text-title">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full tap-scale"
                >
                  <X size={20} />
                </button>
              </div>
            )}

            {/* Content */}
            <div className="overflow-y-auto" style={{ maxHeight: height === 'auto' ? '80vh' : undefined }}>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
