import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Imports for local assets
// Using relative paths to ensure resolution
import work1 from '../../../assets/works/AUTOMOBILE PHOTOGRAPHY 04.jpg';
import work2 from '../../../assets/works/BTS PIC 03.PNG';
import work3 from '../../../assets/works/BTS PIC 04.jpg';
import work4 from '../../../assets/works/BTS PIC 05.jpg';
import work5 from '../../../assets/works/BTS PIC.jpg';
import work6 from '../../../assets/works/BTS PICS 02.jpg';
import work7 from '../../../assets/works/GULF AD FRAMES.JPG';

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
        id: 7,
        title: "Gulf Campaign",
        category: "Advertising",
        image: work7,
        description: "Global advertising campaign visuals and direction.",
        year: "2024"
    },
    {
        id: 2,
        title: "Behind The Scenes",
        category: "Production",
        image: work2,
        description: "The chaos and craft behind the perfect shot.",
        year: "2023"
    },
    {
        id: 5,
        title: "Director's Vision",
        category: "Direction",
        image: work5,
        description: "Orchestrating visual narratives from concept to screen.",
        year: "2023"
    },
    {
        id: 3,
        title: "Set Dynamics",
        category: "BTS",
        image: work3,
        description: "Capturing the energy of collaborative filmmaking.",
        year: "2023"
    },
    {
        id: 6,
        title: "Studio Life",
        category: "Photography",
        image: work6,
        description: "Professional studio sessions and lighting setups.",
        year: "2022"
    },
    {
        id: 4,
        title: "Cinematic Frames",
        category: "Film",
        image: work4,
        description: "Raw cinematic moments frozen in time.",
        year: "2022"
    }
];

export function WorkGrid() {
    return (
        <section className="relative py-24 bg-black overflow-hidden flex flex-col justify-center min-h-[100vh]">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
            </div>

            <div className="relative z-20 mb-12 px-6 md:px-12 max-w-[1920px] mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8 border-b border-white/10 pb-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-2 block"
                        >
                            Selected Works
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
                        >
                            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">PROJECTS</span>
                        </motion.h2>
                    </div>
                </div>
            </div>

            {/* 3D Carousel Container */}
            <div className="relative w-full h-[60vh] md:h-[70vh]">
                <Carousel3D items={workItems} />
            </div>

            <div className="mt-8 text-center relative z-20">
                <a href="#contact" className="inline-flex items-center gap-2 group cursor-pointer">
                    <span className="text-white/80 group-hover:text-white transition-colors uppercase tracking-widest text-sm">View Full Archive</span>
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

    // Auto-scroll logic
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationFrameId: number;

        const scroll = () => {
            if (container.scrollLeft >= (container.scrollWidth / 2)) {
                container.scrollLeft = 1; // Reset to start seamlessly
            } else {
                container.scrollLeft += 0.8; // Speed of scroll
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex items-center gap-4 md:gap-12 overflow-x-auto overflow-y-hidden no-scrollbar px-[50vw] snap-none h-full"
            style={{
                perspective: '1200px',
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

    // Calculate transforms based on position
    // Center of view is approx scrollXProgress 0.5

    // Rotate Y: Left items rotate positive, Right items rotate negative
    const rotateY = useTransform(scrollXProgress, [0.3, 0.5, 0.7], [45, 0, -45]);
    const z = useTransform(scrollXProgress, [0.3, 0.5, 0.7], [-300, 0, -300]);
    const scale = useTransform(scrollXProgress, [0.3, 0.5, 0.7], [0.8, 1.1, 0.8]);
    const opacity = useTransform(scrollXProgress, [0.2, 0.5, 0.8], [0.5, 1, 0.5]);

    return (
        <div style={{ perspective: '1200px' }} className="h-full flex items-center justify-center py-10">
            <motion.div
                ref={ref}
                style={{
                    rotateY,
                    z,
                    scale,
                    opacity,
                    transformStyle: 'preserve-3d',
                }}
                className="relative flex-none w-[85vw] md:w-[600px] aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group border border-white/10 bg-black shadow-2xl"
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
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <motion.span
                        className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-2"
                        animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 5 }}
                    >
                        {item.category}
                    </motion.span>
                    <h3 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm md:text-base max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

