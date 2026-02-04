import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import brandLogo from '@/assets/images/brand-logo.png';

const navLinks = [
    { name: 'Home', path: '#' },
    { name: 'About', path: '#about' },
    { name: 'Work', path: '#work' },
    { name: 'Services', path: '#services' },
];

export function Navbar() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    // Change navbar style on scroll
    const navBackground = useTransform(
        scrollY,
        [0, 100],
        ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']
    );

    const navBorder = useTransform(
        scrollY,
        [0, 100],
        ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.1)']
    );

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
            style={{
                backgroundColor: navBackground,
                borderBottom: `1px solid`,
                borderBottomColor: navBorder,
            }}
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
                        <span className="text-xl font-bold text-foreground hidden sm:block">
                            Anselo
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = location.hash === link.path;
                            return (
                                <a
                                    key={link.path}
                                    href={link.path}
                                    className="relative px-4 py-2 rounded-full"
                                >
                                    <span className={`relative z-10 text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-zinc-400 hover:text-white'
                                        }`}>
                                        {link.name}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 bg-primary/10 rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
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
                            className="px-6 py-2.5 rounded-full font-semibold text-sm border border-border hover:border-primary hover:bg-primary/5 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Resume
                        </motion.a>

                        <Link to="/contact">
                            <motion.button
                                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover-lift relative overflow-hidden group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">Let's Talk</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                                    initial={false}
                                />
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative w-10 h-10 flex items-center justify-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <motion.span
                                className="w-full h-0.5 bg-foreground origin-center"
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 9 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-foreground"
                                animate={{
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-foreground origin-center"
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
                className="md:hidden overflow-hidden"
                initial={false}
                animate={{
                    height: isMobileMenuOpen ? 'auto' : 0,
                    opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-6 pb-6 glass-strong border-t border-border">
                    <nav className="flex flex-col gap-2 pt-4">
                        {navLinks.map((link, index) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <a
                                        href={link.path}
                                        className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all ${isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </motion.div>
                            );
                        })}
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6"
                    >
                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm">
                                Let's Talk
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </motion.header>
    );
}
