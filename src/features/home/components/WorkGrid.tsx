import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface WorkItem {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    color: string;
}

// Sample work items - you can replace these with actual projects
const workItems: WorkItem[] = [
    {
        id: 1,
        title: "Neon Nights",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1555685812-4b943f3e9943?q=80&w=2070&auto=format&fit=crop",
        description: "High-energy automotive campaign for Porsche.",
        color: "from-primary/20 to-yellow-500/20"
    },
    {
        id: 2,
        title: "Ethereal",
        category: "Music Video",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
        description: "Visual identity for the #1 charting album.",
        color: "from-primary/20 to-accent/20"
    },
    {
        id: 3,
        title: "Urban Pulse",
        category: "Documentary",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop",
        description: "Award-winning short film about city rhythm.",
        color: "from-white/10 to-primary/20"
    },
    {
        id: 4,
        title: "Future Tech",
        category: "Product Launch",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        description: "Global launch event for next-gen AI hardware.",
        color: "from-primary/20 to-green-500/20"
    },
    {
        id: 5,
        title: "Velvet Lounge",
        category: "Brand Film",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop",
        description: "Luxurious brand storytelling for high-end fashion.",
        color: "from-purple-500/20 to-primary/20"
    },
    {
        id: 6,
        title: "Apex",
        category: "Sports",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
        description: "Intense training montage for Nike.",
        color: "from-red-500/20 to-primary/20"
    }
];

export function WorkGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

    return (
        <section
            id="work"
            ref={containerRef}
            className="relative py-32 px-6 md:px-12 bg-background overflow-hidden"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-radial opacity-40" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div ref={titleRef} className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
                        <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
                            Selected Works
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                    >
                        <span className="text-gradient-primary">Featured</span>{' '}
                        <span className="text-foreground">Projects</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isTitleInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl"
                    >
                        A curated selection of projects showcasing innovation,
                        creativity, and technical excellence.
                    </motion.p>
                </div>

                {/* Work Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {workItems.map((item, index) => (
                        <WorkCard key={item.id} item={item} index={index} />
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <motion.a
                        href="/work"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-card hover:bg-card-hover border border-border hover:border-primary rounded-full font-semibold transition-all hover-lift group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>View All Projects</span>
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

// Individual Work Card Component
function WorkCard({ item, index }: { item: WorkItem; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
        >
            <motion.article
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border hover:border-primary transition-all cursor-pointer hover-lift"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
            >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50 group-hover:opacity-70 transition-opacity`} />

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity"
                    style={{
                        backgroundImage: `
                            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                    }}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8">
                    {/* Top: Category badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    >
                        <span className="inline-block px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-black/30 backdrop-blur-sm rounded-full border border-white/10">
                            {item.category}
                        </span>
                    </motion.div>

                    {/* Bottom: Title and description */}
                    <div className="space-y-4">
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                            className="text-3xl font-bold text-foreground group-hover:text-gradient-primary transition-all"
                        >
                            {item.title}
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                            className="text-muted-foreground leading-relaxed"
                        >
                            {item.description}
                        </motion.p>

                        {/* Arrow indicator */}
                        <motion.div
                            className="flex items-center gap-2 text-primary font-semibold"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                        >
                            <span className="text-sm">View Project</span>
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }}
                            >
                                →
                            </motion.span>
                        </motion.div>
                    </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    initial={false}
                />
            </motion.article>
        </motion.div>
    );
}
