import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroLoop from '@/assets/videos/hero-loop.mp4';

export function HeroMobileExperience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map the container's scroll progress to vertical translation
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                {/* Phone Frame */}
                <div className="relative z-10 h-[700px] w-[350px] rounded-[3rem] border-[8px] border-neutral-900 bg-black shadow-2xl md:h-[800px] md:w-[400px]">
                    {/* Notch / Dynamic Island */}
                    <div className="absolute left-1/2 top-6 h-7 w-28 -translate-x-1/2 rounded-full bg-black z-30 pointer-events-none"></div>

                    {/* Screen Content Wrapper (Overflow Hidden to Mask Content) */}
                    <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-black">

                        {/* The Video Content that "Scrolls" inside the phone */}
                        <motion.div style={{ y }} className="w-full flex flex-col">
                            {/* Section 1: The Main Loop (Full Height of Screen) */}
                            <div className="relative h-full w-full shrink-0 aspect-[9/16]">
                                <video
                                    className="h-full w-full object-cover"
                                    src={heroLoop}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <h2 className="text-3xl font-bold text-white leading-tight">Cinematic<br />Excellence</h2>
                                    <p className="text-sm text-neutral-300 mt-2">Swipe up to explore</p>
                                </div>
                            </div>

                            {/* Section 2: Preview of next content (Still inside phone) */}
                            <div className="w-full bg-neutral-900 p-6 min-h-[400px]">
                                <div className="space-y-4">
                                    <div className="h-48 w-full rounded-xl bg-neutral-800 animate-pulse" />
                                    <div className="h-32 w-full rounded-xl bg-neutral-800/50" />
                                    <p className="text-center text-xs text-neutral-500 uppercase tracking-widest mt-8">Scroll down to exit</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Background Decorative Text/Elements behind the phone */}
                <div className="absolute inset-0 z-0 flex items-center justify-center select-none pointer-events-none">
                    <motion.h1
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.1, 0]) }}
                        className="text-[15vw] font-bold tracking-tighter text-neutral-800/10 whitespace-nowrap"
                    >
                        SHOWREEL
                    </motion.h1>
                </div>
            </div>
        </section>
    );
}
