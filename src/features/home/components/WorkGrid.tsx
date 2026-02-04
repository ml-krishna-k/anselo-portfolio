import { useState } from 'react';
import { motion } from 'framer-motion';

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
        <section className="relative py-24 bg-black overflow-hidden flex flex-col justify-center min-h-[80vh]">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
            </div>

            <div className="relative z-20 mb-16 px-6 md:px-12 max-w-[1920px] mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 border-b border-white/10 pb-8">
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
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4 text-white/60 font-light"
                    >
                        <span className="hidden md:inline">Swipe to explore</span>
                        <div className="h-px w-12 bg-white/20"></div>
                    </motion.div>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* 
                    We implement a custom CSS marquee for smoother performance than JS sometimes, 
                    but framer-motion is requested/used in project.
                    Let's use a simpler infinite scroll valid for all sizes.
                 */}
                <Marquee speed={10}>
                    {workItems.map((item) => (
                        <WorkCard key={`${item.id}-a`} item={item} />
                    ))}
                </Marquee>
            </div>

            <div className="mt-16 text-center relative z-20">
                <a href="#contact" className="inline-flex items-center gap-2 group cursor-pointer">
                    <span className="text-white/80 group-hover:text-white transition-colors uppercase tracking-widest text-sm">View Full Archive</span>
                    <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </section>
    );
}

const Marquee = ({ children, speed = 50 }: { children: React.ReactNode, speed?: number }) => {
    return (
        <div className="flex overflow-hidden group select-none relative">
            {/* Gradient Masks for Edge Fading */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <motion.div
                className="flex flex-nowrap gap-8 min-w-full"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                    repeatType: "loop"
                }}
            >
                {/* 
                  We repeat children twice effectively to create the seamless loop. 
                  The container translates -50% (half its total width after duplication).
                */}
                <div className="flex gap-8 items-center">{children}</div>
                <div className="flex gap-8 items-center">{children}</div>
            </motion.div>
        </div>
    );
};

function WorkCard({ item }: { item: WorkItem }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative flex-none w-[300px] md:w-[450px] aspect-[16/9] md:aspect-video rounded-xl overflow-hidden cursor-pointer group/card border border-white/5 bg-white/5"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
        >
            {/* Image */}
            <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity duration-500" />

            {/* Content info appearing on hover/always visible depending on design.
                Customer specifically asked for "proper professional".
                Minimalist: Text at bottom.
            */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden">
                    <motion.span
                        className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block"
                        initial={{ y: 20, opacity: 0 }}
                        animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {item.category}
                    </motion.span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{item.title}</h3>

                <div className="grid grid-rows-[0fr] group-hover/card:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                        <p className="text-white/70 text-sm mt-2">{item.description}</p>
                    </div>
                </div>
            </div>

            {/* Year Badge */}
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-white/80">
                {item.year}
            </div>
        </motion.div>
    );
}
