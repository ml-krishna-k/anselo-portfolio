import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Imports for video assets
import video1 from '../../../assets/videos/VIDEO 01(Automobile Advertisement).mp4';
import video2 from '../../../assets/videos/VIDEO 02(Trending Editing style).mp4';
import video3 from '../../../assets/videos/VIDEO 03(Personal Branding).mp4';
import video4 from '../../../assets/videos/VIDEO 04(Model Shoots).mp4';
import video5 from '../../../assets/videos/VIDEO 05(Product Advertisement).mp4';
import video6 from '../../../assets/videos/VIDEO 06(Fashion Trend Edits).mp4';
import video7 from '../../../assets/videos/VIDEO 07(GULF AD WHICH CAME IN TOP 7).mp4';

interface VideoItem {
    id: number;
    title: string;
    category: string;
    video: string;
    description: string;
    year: string;
}

const videoItems: VideoItem[] = [
    {
        id: 1,
        title: "Speed & Precision",
        category: "Automobile Commercial",
        video: video1,
        description: "High-octane automotive advertisement showcasing luxury and performance.",
        year: "2024"
    },
    {
        id: 2,
        title: "Modern Aesthetics",
        category: "Trending Style",
        video: video2,
        description: "Cutting-edge editing techniques featuring contemporary visual storytelling.",
        year: "2024"
    },
    {
        id: 3,
        title: "Personal Identity",
        category: "Brand Film",
        video: video3,
        description: "Authentic personal branding narratives that connect and inspire.",
        year: "2024"
    },
    {
        id: 4,
        title: "Fashion Forward",
        category: "Model Portfolio",
        video: video4,
        description: "Stunning model shoots with cinematic lighting and composition.",
        year: "2023"
    },
    {
        id: 5,
        title: "Product Excellence",
        category: "Product Ad",
        video: video5,
        description: "Compelling product advertisements that drive engagement and sales.",
        year: "2023"
    },
    {
        id: 6,
        title: "Vogue Vision",
        category: "Fashion Editorial",
        video: video6,
        description: "Bold fashion trend edits combining style, motion, and artistry.",
        year: "2023"
    },
    {
        id: 7,
        title: "Gulf Excellence",
        category: "Award-Winning Campaign",
        video: video7,
        description: "Top 7 Gulf advertisement campaign featuring world-class cinematography.",
        year: "2024"
    }
];

export function VideoGrid() {
    return (
        <section className="relative py-16 md:py-24 bg-black overflow-hidden flex flex-col justify-center min-h-[80vh] md:min-h-[100vh]">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
            </div>

            <div className="relative z-20 mb-8 md:mb-12 px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6 mb-6 md:mb-8 border-b border-white/10 pb-6 md:pb-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-mono text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 block"
                        >
                            Video Showcase
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter"
                        >
                            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">VIDEOS</span>
                        </motion.h2>
                    </div>
                </div>
            </div>

            {/* 3D Carousel Container */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
                <Carousel3D items={videoItems} />
            </div>

            <div className="mt-6 md:mt-8 text-center relative z-20">
                <a
                    href="https://drive.google.com/drive/folders/1wGyXvfnSRr4DUJCw28Ttqo2Ttwl0rxcB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group cursor-pointer"
                >
                    <span className="text-white/80 group-hover:text-white transition-colors uppercase tracking-widest text-xs sm:text-sm">View Full Archive</span>
                    <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </section>
    );
}

const Carousel3D = ({ items }: { items: VideoItem[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    // Duplicate items to simulate infinite scroll feel
    const extendedItems = [...items, ...items, ...items, ...items];

    // Auto-scroll logic - slowed down to 11s per item (2s transition + 9s pause)
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationFrameId: number;

        const scroll = () => {
            if (container.scrollLeft >= (container.scrollWidth / 2)) {
                container.scrollLeft = 1; // Reset to start seamlessly
            } else {
                container.scrollLeft += 0.15; // Much slower speed - ~11s per item
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex items-center gap-2 md:gap-12 overflow-x-auto overflow-y-hidden no-scrollbar px-[45vw] md:px-[50vw] snap-none h-full touch-pan-x"
            style={{
                perspective: '800px',
                perspectiveOrigin: '50% 50%',
            }}
        >
            {extendedItems.map((item, index) => (
                <CarouselItem key={`${item.id}-${index}`} item={item} containerRef={containerRef} />
            ))}
        </div>
    );
};

// Separate component to handle individual useScroll hooks
const CarouselItem = ({ item, containerRef }: { item: VideoItem, containerRef: any }) => {
    const ref = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isInView, setIsInView] = useState(false);

    // Track this item's position relative to the container center
    const { scrollXProgress } = useScroll({
        target: ref,
        container: containerRef,
        axis: "x",
        offset: ["start end", "end start"]
    });

    // Calculate transforms based on position - reduced for mobile
    // Center of view is approx scrollXProgress 0.5

    // Rotate Y: Left items rotate positive, Right items rotate negative (less rotation on mobile)
    const rotateY = useTransform(scrollXProgress, [0.3, 0.5, 0.7], [30, 0, -30]);
    const z = useTransform(scrollXProgress, [0.3, 0.5, 0.7], [-200, 0, -200]);
    const scale = useTransform(scrollXProgress, [0.3, 0.5, 0.7], [0.85, 1.05, 0.85]);
    const opacity = useTransform(scrollXProgress, [0.2, 0.5, 0.8], [0.6, 1, 0.6]);

    // Monitor if video is in viewport for lazy loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    // Autoplay video when in view with proper playback rate
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isInView) {
            // Set normal playback speed
            video.playbackRate = 1.0;

            // Play the video
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => {
                    console.log('Video autoplay prevented:', err);
                });
            }
        } else {
            // Pause when out of view to save performance
            video.pause();
        }
    }, [isInView]);

    return (
        <div style={{ perspective: '800px' }} className="h-full flex items-center justify-center py-6 md:py-10">
            <motion.div
                ref={ref}
                style={{
                    rotateY,
                    z,
                    scale,
                    opacity,
                    transformStyle: 'preserve-3d',
                }}
                className="relative flex-none w-[80vw] sm:w-[70vw] md:w-[600px] aspect-video md:aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group border border-white/10 bg-black shadow-2xl"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                {/* Video - Optimized playback */}
                <video
                    ref={videoRef}
                    src={item.video}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Reflection/Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none z-20 transition-opacity duration-500" />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity duration-300 z-10" />

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end z-30 transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <motion.span
                        className="text-primary font-mono text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-1 sm:mb-2 block"
                        animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 5 }}
                    >
                        {item.category}
                    </motion.span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-lg mb-1 sm:mb-2 leading-tight">{item.title}</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-[95%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                        {item.description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
