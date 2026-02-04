import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const projects = [
    { title: "Urban Rhapsody", category: "Commercial" },
    { title: "Neon Nights", category: "Music Video" },
    { title: "Silent Echo", category: "Short Film" },
    { title: "Velocity", category: "Automotive" },
];

export function PortfolioSection() {
    return (
        <section className="container py-24 md:py-32">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                <div>
                    <h2 className="text-3xl font-light uppercase tracking-[0.2em] text-muted-foreground">Portfolio</h2>
                    <p className="mt-4 text-xl text-foreground max-w-lg">
                        A curation of visual experiments and commissioned masterpieces.
                    </p>
                </div>
                <Button variant="outline">View All Works</Button>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-neutral-900"
                    >
                        {/* Placeholder for Project Image */}
                        <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105" />

                        {/* Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                            <p className="text-primary">{project.category}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
