import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import brandLogo from '@/assets/images/brand-logo.png';

const socialLinks = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/creativemedia.at?igsh=eDU5cHh5cXRuM2Zu',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
        )
    },
    {
        name: 'Gmail',
        url: 'mailto:business.anselo@gmail.com',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
        )
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/anselomario?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
        )
    }
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/5 bg-black">
            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link to="/" className="flex items-center gap-3 group">
                            <motion.img
                                src={brandLogo}
                                alt="Brand Logo"
                                className="w-10 h-10 object-contain"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            />
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Anselo
                            </span>
                        </Link>
                        <p className="text-zinc-400 leading-relaxed max-w-xs text-sm">
                            Crafting exceptional digital experiences through
                            innovative design and cutting-edge technology.
                        </p>

                        {/* Social Links - Embossed Buttons */}
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-primary transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] border border-white/5 hover:border-primary/50"
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">
                            Explore
                        </h3>
                        <nav className="flex flex-col gap-3">
                            {[
                                { name: 'Home', path: '#' },
                                { name: 'About', path: '#about' },
                                { name: 'Work', path: '#work' },
                                { name: 'Contact', path: '#contact' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-2 group w-fit"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Resources */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">
                            Resources
                        </h3>
                        <nav className="flex flex-col gap-3">
                            <a href="https://drive.google.com/file/d/1WBzUUc9T34TNzlKA623DNaguKTOR_3HS/view?usp=drive_link" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-primary transition-colors hover:translate-x-1 duration-300 inline-block">
                                Download Resume ↗
                            </a>
                            <a href="https://drive.google.com/file/d/177IxhMjs-fHT8bnzURCX2b_99D9bBXJv/view?usp=drive_link" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-primary transition-colors hover:translate-x-1 duration-300 inline-block">
                                View CV ↗
                            </a>
                        </nav>
                    </div>

                    {/* Contact CTA */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">
                            Get in Touch
                        </h3>
                        <div className="space-y-4">
                            <Link to="/contact">
                                <motion.button
                                    className="px-8 py-3 bg-primary text-black rounded-lg font-bold text-sm w-full group relative overflow-hidden shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-shadow"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Let's Talk
                                </motion.button>
                            </Link>
                            <div className="pt-2 text-sm text-zinc-500">
                                <a href="mailto:business.anselo@gmail.com" className="hover:text-white transition-colors">
                                    business.anselo@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
                    <p>© {currentYear} Anselo. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
