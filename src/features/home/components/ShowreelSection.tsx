import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Import all video files
import video1 from '../../../assets/videos/VIDEO 01(Automobile Advertisement).mp4';
import video2 from '../../../assets/videos/VIDEO 02(Trending Editing style).mp4';
import video3 from '../../../assets/videos/VIDEO 03(Personal Branding).mp4';
import video4 from '../../../assets/videos/VIDEO 04(Model Shoots).mp4';
import video5 from '../../../assets/videos/VIDEO 05(Product Advertisement).mp4';
import video6 from '../../../assets/videos/VIDEO 06(Fashion Trend Edits).mp4';
import video7 from '../../../assets/videos/VIDEO 07(GULF AD WHICH CAME IN TOP 7).mp4';

interface VideoSegment {
    id: number;
    src: string;
    title: string;
    category: string;
    description: string;
}

const videoSegments: VideoSegment[] = [
    {
        id: 1,
        src: video1,
        title: "Speed & Precision",
        category: "Automobile Commercial",
        description: "High-octane automotive advertisement showcasing luxury and performance."
    },
    {
        id: 2,
        src: video2,
        title: "Modern Aesthetics",
        category: "Trending Style",
        description: "Cutting-edge editing techniques featuring contemporary visual storytelling."
    },
    {
        id: 3,
        src: video3,
        title: "Personal Identity",
        category: "Brand Film",
        description: "Authentic personal branding narratives that connect and inspire."
    },
    {
        id: 4,
        src: video4,
        title: "Fashion Forward",
        category: "Model Portfolio",
        description: "Stunning model shoots with cinematic lighting and composition."
    },
    {
        id: 5,
        src: video5,
        title: "Product Excellence",
        category: "Product Ad",
        description: "Compelling product advertisements that drive engagement and sales."
    },
    {
        id: 6,
        src: video6,
        title: "Vogue Vision",
        category: "Fashion Editorial",
        description: "Bold fashion trend edits combining style, motion, and artistry."
    },
    {
        id: 7,
        src: video7,
        title: "Gulf Excellence",
        category: "Award-Winning Campaign",
        description: "Top 7 Gulf advertisement campaign featuring world-class cinematography."
    }
];

export function ShowreelSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    const currentVideo = videoSegments[currentVideoIndex];

    // Handle video transitions
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Reset and play when video source changes
        video.load();
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Auto-play prevented:', error);
            });
        }

        const handleEnded = () => {
            // Move to next video when current one ends
            setCurrentVideoIndex((prev) => (prev + 1) % videoSegments.length);
        };

        video.addEventListener('ended', handleEnded);

        return () => {
            video.removeEventListener('ended', handleEnded);
        };
    }, [currentVideoIndex]); // Re-run when video index changes

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center py-24 md:py-32"
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

            {/* Top gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

            <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
                        My Showreel
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                        CREATIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">VISION</span>
                    </h2>
                    <p className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto">
                        A curated collection of my finest work, showcasing the art of visual storytelling
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    style={{ y, opacity, scale }}
                    className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 blur-xl opacity-50 z-0"></div>

                    {/* Video Container */}
                    <div className="relative z-10 w-full h-full bg-black rounded-2xl overflow-hidden">
                        <video
                            key={currentVideo.id}
                            ref={videoRef}
                            src={currentVideo.src}
                            autoPlay
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />

                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

                        {/* Video Info Overlay - Bottom Left */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentVideo.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20"
                            >
                                <div className="max-w-2xl">
                                    <span className="text-primary font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-3 block">
                                        {currentVideo.category}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-black text-white mb-3 drop-shadow-lg">
                                        {currentVideo.title}
                                    </h3>
                                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                                        {currentVideo.description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Video Progress Indicator - Top Right */}
                        <div className="absolute top-8 right-8 z-20">
                            <div className="bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                                <span className="text-white font-mono text-sm">
                                    {currentVideoIndex + 1} / {videoSegments.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Video Navigation Dots */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-8 flex justify-center gap-3"
                >
                    {videoSegments.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentVideoIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentVideoIndex
                                ? 'bg-primary w-8'
                                : 'bg-white/30 hover:bg-white/50'
                                }`}
                            aria-label={`Go to video ${index + 1}`}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
