import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Imports for local assets
// Using relative paths to ensure resolution
import work1 from '../../../assets/works/AUTOMOBILE PHOTOGRAPHY 04.jpg';
import work2 from '../../../assets/works/BTS PIC 05.jpg';
import work3 from '../../../assets/works/BTS PIC.jpg';
import work4 from '../../../assets/works/GULF AD FRAMES.JPG';

interface WorkItem {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    year: string;
}

const workItems: WorkItem[] = [
    {
        id: 1,
        title: "Automotive Precision",
        category: "Commercial",
        image: work1,
        description: "High-octane automotive photography for leading brands.",
        year: "2024"
    },
    {
        id: 2,
        title: "Gulf Campaign",
        category: "Advertising",
        image: work4,
        description: "Global advertising campaign visuals and direction.",
        year: "2024"
    },
    {
        id: 3,
        title: "Director's Vision",
        category: "Direction",
        image: work3,
        description: "Orchestrating visual narratives from concept to screen.",
        year: "2023"
    },
    {
        id: 4,
        title: "Cinematic Frames",
        category: "Film",
        image: work2,
        description: "Raw cinematic moments frozen in time.",
        year: "2023"
    }
];

export function WorkGrid() {
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
                            Selected Works
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter"
                        >
                            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">PROJECTS</span>
                        </motion.h2>
                    </div>
                </div>
            </div>

            {/* 3D Carousel Container */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
                <Carousel3D items={workItems} />
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

const Carousel3D = ({ items }: { items: WorkItem[] }) => {
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
const CarouselItem = ({ item, containerRef }: { item: WorkItem, containerRef: any }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

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
                {/* Image */}
                <img
                    src={item.image}
                    alt={item.title}
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

