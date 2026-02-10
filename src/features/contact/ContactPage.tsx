import { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:business.anselo@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-black text-white flex items-center justify-center p-6">
            <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div>
                        <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-2 block">
                            Get in Touch
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
                            LET'S <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">CREATE</span>
                        </h1>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                            Have a project in mind? Let's collaborate to build something extraordinary.
                            Available for freelance and contract work.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-zinc-300">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Email Me</p>
                                <a href="mailto:business.anselo@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">business.anselo@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm"
                >
                    <form onSubmit={handleSend} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                            <input
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-black/50 rounded-xl border border-white/10 px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-black/50 rounded-xl border border-white/10 px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                            <textarea
                                id="message"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full min-h-[150px] bg-black/50 rounded-xl border border-white/10 px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-xl hover:scale-105 transition-transform hover:bg-primary"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
