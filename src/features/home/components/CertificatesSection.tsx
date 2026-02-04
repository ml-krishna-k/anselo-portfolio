import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type { MouseEvent } from "react";

// Dynamically import all PDF certificates
const certificateFiles = import.meta.glob('@/assets/certificates/*.pdf', {
    eager: true,
    query: '?url',
    import: 'default'
});

// Helper to format filenames into readable titles
const formatTitle = (path: string) => {
    const filename = path.split('/').pop()?.replace('.pdf', '') || '';
    return filename
        .replace('CertificateOfCompletion_', '')
        .replace(/_/g, ' ')
        .replace(/\(1\)/g, '')
        .replace(/([A-Z])/g, ' $1')
        .trim();
};

const certificates = Object.entries(certificateFiles).map(([path, url]) => ({
    id: path,
    title: formatTitle(path),
    url: url as string,
    issuer: path.includes('Adobe') ? 'Adobe' : path.includes('LinkedIn') ? 'LinkedIn Learning' : 'Professional Certification'
}));

function CertificateCard({ cert, index }: { cert: typeof certificates[0], index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl border border-white/10 bg-black px-8 py-10 overflow-hidden transition-all hover:border-primary/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 215, 0, 0.1),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div>
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-2xl group-hover:scale-110 transition-transform duration-500">
                            📜
                        </div>
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest group-hover:text-primary transition-colors">
                            Verified
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400 font-light">
                        {cert.issuer}
                    </p>
                </div>

                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-zinc-500 group-hover:text-white transition-colors">
                    <span>View Credential</span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
            </div>
        </motion.a>
    );
}

export function CertificatesSection() {
    return (
        <section className="relative py-32 bg-neutral-950 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 px-6">
                <div className="mb-24 text-center">
                    <h2 className="text-sm font-mono tracking-[0.3em] text-primary mb-6 uppercase">
                        Qualifications
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                        PROFESSIONAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary">
                            CERTIFICATIONS
                        </span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <CertificateCard key={cert.id} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
