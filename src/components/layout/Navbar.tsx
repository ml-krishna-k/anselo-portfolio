import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import brandLogo from '@/assets/images/brand-logo.png';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Work', path: '/#work' },
    { name: 'Services', path: '/#services' },
];

export function Navbar() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (_e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        // If it's a hash link
        if (path.includes('#')) {
            // If we are not on home page, let the link navigation happen (to /#hash)
            // But if we are on home page, we might want manual scroll or just let browser handle handle anchor
            // React Router's HashLink or standard anchor work. 
            // Standard anchor from /#hash works if on /, it just scrolls.

            // Simple clean approach: let default behavior happen, but close mobile menu
            setIsMobileMenuOpen(false);
        } else {
            // It's a route link
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-white/10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <motion.img
                            src={brandLogo}
                            alt="Brand Logo"
                            className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        />
                        <span className="text-xl font-bold text-white hidden sm:block tracking-wide">
                            ANSELO
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = location.pathname + location.hash === link.path || (link.path === '/' && location.pathname === '/');
                            return (
                                <a
                                    key={link.path}
                                    href={link.path}
                                    className="relative group"
                                >
                                    <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-primary' : 'text-zinc-400 hover:text-white'
                                        }`}>
                                        {link.name}
                                    </span>
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`} />
                                </a>
                            );
                        })}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <motion.a
                            href="https://drive.google.com/file/d/1WBzUUc9T34TNzlKA623DNaguKTOR_3HS/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest border border-white/20 hover:border-primary hover:text-primary transition-all text-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Resume
                        </motion.a>

                        <Link to="/contact">
                            <motion.button
                                className="px-8 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let's Talk
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative w-10 h-10 flex items-center justify-center text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <motion.span
                                className="w-full h-0.5 bg-white origin-center"
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 9 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-white"
                                animate={{
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-white origin-center"
                                animate={{
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                    y: isMobileMenuOpen ? -9 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="md:hidden overflow-hidden bg-black border-t border-white/10"
                initial={false}
                animate={{
                    height: isMobileMenuOpen ? 'auto' : 0,
                    opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-6 pb-8 pt-4 flex flex-col items-center gap-6">
                    <nav className="flex flex-col gap-4 text-center w-full">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a
                                    href={link.path}
                                    className="block p-2 text-xl font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                                    onClick={(e) => handleNavClick(e, link.path)}
                                >
                                    {link.name}
                                </a>
                            </motion.div>
                        ))}
                    </nav>

                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                        <button className="w-full px-6 py-4 bg-primary text-black rounded-full font-bold uppercase tracking-widest text-sm">
                            Let's Talk
                        </button>
                    </Link>
                    <a
                        href="https://drive.google.com/file/d/1WBzUUc9T34TNzlKA623DNaguKTOR_3HS/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 text-sm font-mono uppercase tracking-widest hover:text-white transition-colors"
                    >
                        View Resume
                    </a>
                </div>
            </motion.div>
        </motion.header>
    );
}
