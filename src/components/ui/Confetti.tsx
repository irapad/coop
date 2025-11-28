import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConfettiProps {
    active: boolean;
    onComplete?: () => void;
}

interface ConfettiPiece {
    id: number;
    x: number;
    y: number;
    rotation: number;
    color: string;
    delay: number;
}

const colors = ['#D4FF00', '#00FF94', '#FF6B6B', '#4ECDC4', '#FFE66D', '#FF6B9D'];

export const Confetti: React.FC<ConfettiProps> = ({ active, onComplete }) => {
    const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

    useEffect(() => {
        if (active) {
            const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
                id: i,
                x: Math.random() * window.innerWidth,
                y: -20,
                rotation: Math.random() * 360,
                color: colors[Math.floor(Math.random() * colors.length)],
                delay: Math.random() * 0.5
            }));
            setPieces(newPieces);

            const timer = setTimeout(() => {
                setPieces([]);
                onComplete?.();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [active, onComplete]);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            <AnimatePresence>
                {pieces.map((piece) => (
                    <motion.div
                        key={piece.id}
                        initial={{
                            x: piece.x,
                            y: piece.y,
                            rotate: piece.rotation,
                            opacity: 1
                        }}
                        animate={{
                            y: window.innerHeight + 100,
                            rotate: piece.rotation + 720,
                            opacity: 0
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 2.5 + Math.random(),
                            delay: piece.delay,
                            ease: 'easeIn'
                        }}
                        style={{
                            position: 'absolute',
                            width: '10px',
                            height: '10px',
                            backgroundColor: piece.color,
                            borderRadius: '2px'
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};
