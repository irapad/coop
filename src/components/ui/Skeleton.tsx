import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
    variant?: 'text' | 'circle' | 'rect' | 'card';
    width?: string;
    height?: string;
    className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    variant = 'text',
    width,
    height,
    className = ''
}) => {
    const baseClasses = 'bg-white/10 rounded-app overflow-hidden relative';

    const variantClasses = {
        text: 'h-4 w-full',
        circle: 'rounded-full w-12 h-12',
        rect: 'h-24 w-full',
        card: 'h-32 w-full rounded-2xl'
    };

    const sizeStyle = {
        width: width || undefined,
        height: height || undefined
    };

    return (
        <div
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            style={sizeStyle}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                    x: ['-100%', '100%']
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            />
        </div>
    );
};

// Pre-built skeleton layouts
export const TransactionSkeleton: React.FC = () => (
    <div className="space-y-3">
        {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-app">
                <Skeleton variant="circle" />
                <div className="flex-1 space-y-2">
                    <Skeleton width="60%" />
                    <Skeleton width="40%" height="12px" />
                </div>
                <Skeleton width="80px" />
            </div>
        ))}
    </div>
);

export const AccountCardSkeleton: React.FC = () => (
    <div className="min-w-[280px]">
        <Skeleton variant="card" height="140px" />
    </div>
);
