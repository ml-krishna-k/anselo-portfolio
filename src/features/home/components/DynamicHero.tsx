import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


export function DynamicHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center sticky top-0 z-0"
        >

            {/* Background Video Loop */}
            <motion.div
                style={{ y, opacity, scale }}
                className="absolute inset-0 -z-10"
            >
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text contrast */}
                <video
                    src="/videos/hero-loop.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                />
            </motion.div>

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center justify-center -mt-12 sm:-mt-16 md:-mt-20 px-4">

                {/* Rolling Text Ticker */}
                <div className="w-full overflow-hidden mb-6 sm:mb-8 opacity-80">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="flex whitespace-nowrap gap-4 sm:gap-8"
                    >
                        {Array(4).fill("CINEMATOGRAPHER • DIRECTOR • EDITOR • ").map((text, i) => (
                            <span key={i} className="text-xs sm:text-sm md:text-base font-mono tracking-widest text-white/90">
                                {text}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* MASSIVE TITLES */}
                <div className="relative text-center drop-shadow-2xl">
                    <h1 className="text-[15vw] sm:text-[14vw] md:text-[15vw] font-black leading-[0.85] tracking-tighter text-white">
                        ANSELO
                    </h1>
                    <h1 className="text-[15vw] sm:text-[14vw] md:text-[15vw] font-black leading-[0.85] tracking-tighter text-outline-white">
                        PORTFOLIO
                    </h1>
                </div>

                {/* Floating "Scroll" Indicator */}
                <motion.div
                    className="absolute bottom-[-25vh] sm:bottom-[-28vh] md:bottom-[-20vh] flex flex-col items-center gap-3 sm:gap-4"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <p className="text-[10px] sm:text-xs font-mono tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/70">Scroll to Explore</p>
                    <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </div>

            <style>{`
                .text-outline-white {
                    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8);
                    color: transparent;
                }
                @media (max-width: 640px) {
                    .text-outline-white {
                        -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.8);
                    }
                }
            `}</style>
        </section>
    );
}
