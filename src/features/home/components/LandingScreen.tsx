import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import brandLogo from '@/assets/images/brand-logo.png';

interface LandingScreenProps {
    onComplete: () => void;
}

export function LandingScreen({ onComplete }: LandingScreenProps) {
    const [count, setCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Counter animation - Ultra Fast
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsComplete(true), 100); // 100ms pause at 100%
                    return 100;
                }
                // Fast non-linear increment
                const increment = Math.floor(Math.random() * 20) + 5;
                return Math.min(prev + increment, 100);
            });
        }, 30); // 30ms tick

        return () => clearInterval(interval);
    }, []);

    // Trigger onComplete callback after exit animation
    useEffect(() => {
        if (isComplete) {
            const timer = setTimeout(() => {
                onComplete();
            }, 600); // Wait 0.6s for fast shutter
            return () => clearTimeout(timer);
        }
    }, [isComplete, onComplete]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col justify-between p-12 bg-black text-white overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    {/* Top Section */}
                    <div className="flex justify-between items-start">
                        <img src={brandLogo} alt="Logo" className="w-8 h-8 object-contain opacity-50 grayscale" />
                        <div className="flex gap-2">
                            <motion.div
                                className="w-2 h-2 bg-primary rounded-full"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                            <span className="font-mono text-sm tracking-widest opacity-50">INITIALIZING</span>
                        </div>
                    </div>

                    {/* Center Counter - HUGE */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="relative">
                            <h1 className="text-[15vw] md:text-[20vw] font-bold leading-none tracking-tighter font-mono tabular-nums">
                                {count}
                            </h1>
                            <span className="absolute top-0 -right-12 md:-right-24 text-4xl md:text-6xl font-light text-primary">
                                %
                            </span>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex justify-between items-end">
                        <div className="hidden md:block w-64">
                            <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    style={{ width: `${count}%` }}
                                />
                            </div>
                        </div>
                        <span className="font-mono text-sm tracking-widest opacity-50">
                            ANSELO PORTFOLIO
                        </span>
                    </div>

                    {/* Shutter Effect on Exit */}
                    <motion.div
                        className="absolute inset-0 bg-black z-[-1]"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        style={{ originY: 0 }} // Opens from bottom
                    />
                    <motion.div
                        className="absolute inset-0 bg-black z-[-1]"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        style={{ originY: 1 }} // Opens from top
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
