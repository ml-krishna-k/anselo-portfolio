import { motion } from 'framer-motion';

const services = [
    {
        title: "Cinematography",
        description: "Capturing the perfect shot with high-end camera systems and lighting.",
        number: "01",
        icon: "🎥"
    },
    {
        title: "Video Editing",
        description: "Weaving footage into compelling narratives with rhythmic pacing.",
        number: "02",
        icon: "🎬"
    },
    {
        title: "Digital Marketing",
        description: "Advertising and marketing strategies for brands and influencers.",
        number: "03",
        icon: "📊"
    },
    {
        title: "Creative Direction",
        description: "Guiding the visual language from concept to final delivery.",
        number: "04",
        icon: "💡"
    }
];

export function ServicesSection() {
    return (
        <section className="relative py-32 bg-zinc-950 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

            <div className="container relative z-10 px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-sm font-mono tracking-[0.3em] text-primary mb-4 uppercase">
                        Expertise
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                        EXPERTISE & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary">
                            SERVICES
                        </span>
                    </h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 bg-black/40 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 rounded-xl"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-5xl font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500">
                                        {service.number}
                                    </span>
                                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </span>
                                </div>

                                <h3 className="mb-4 text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-white transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
