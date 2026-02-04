import { motion } from 'framer-motion';

export function AboutSection() {
    return (
        <section className="relative py-32 bg-zinc-950 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-yellow-500 to-transparent opacity-50" />

            <div className="container relative z-10 px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Heading & Role */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5"
                    >
                        <h2 className="text-sm font-mono tracking-[0.2em] text-primary mb-6 uppercase">
                            Who I Am
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-4">
                            VISUAL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">
                                STORYTELLER
                            </span>
                        </h3>
                        <p className="text-xl text-zinc-400 font-light max-w-md border-l-2 border-primary/30 pl-6 mt-8">
                            Bridging the gap between raw footage and emotional connection.
                        </p>
                    </motion.div>

                    {/* Right Column: Bio & Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 flex flex-col justify-center space-y-8"
                    >
                        <div className="space-y-6 text-lg md:text-xl text-zinc-300 leading-relaxed font-sans">
                            <p>
                                <strong className="text-white block mb-2">CREATIVE MEDIA PROFESSIONAL</strong>
                                Skilled in Video Editing, Photography, and Cinematography. Founder and Creative Lead of <span className="text-primary font-bold">AT STUDIOS</span>, creating high-impact visual content for brands and influencers.
                            </p>
                            <p className="text-base text-zinc-500">
                                Skilled in crafting compelling visual narratives and managing social media strategies for brands and influencers. Proven experience in end-to-end production, guiding projects seamlessly from concept development to final delivery. Passionate about music and visual storytelling, certified Trinity Grade 1 in Keyboard
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="https://drive.google.com/file/d/1WBzUUc9T34TNzlKA623DNaguKTOR_3HS/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-white text-black font-bold uppercase tracking-wide hover:bg-primary transition-colors duration-300 shadow-lg hover:shadow-primary/50"
                            >
                                Download Resume ↗
                            </a>
                            <a
                                href="https://drive.google.com/file/d/177IxhMjs-fHT8bnzURCX2b_99D9bBXJv/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 border border-zinc-700 text-white font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors duration-300"
                            >
                                View CV ↗
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
