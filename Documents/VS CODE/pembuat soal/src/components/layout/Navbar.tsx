import { useState, useEffect } from 'react';
import { X, Instagram, ExternalLink, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { openCart, totalItems } = useCart(); // Get openCart and totalItems

    useEffect(() => {
        const handleScrollY = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScrollY);
        return () => window.removeEventListener('scroll', handleScrollY);
    }, []);

    const navLinks = [
        { name: 'Tentang Kami', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Lokasi', href: '#locations' },
        { name: 'Live Music', href: '#events' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[60] py-6 px-6 sm:px-8 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-domcy-green/95 backdrop-blur-md py-4 shadow-lg' : ''}`}>

                {/* 1. Left: Logo */}
                <a href="#" className="font-display text-4xl sm:text-5xl text-domcy-cream tracking-tighter hover:scale-105 transition-transform flex items-start">
                    domcy<span className="text-sm font-sans font-bold mt-1 ml-1 opacity-60">®</span>
                </a>

                {/* 2. Center: Navigation Pills (Hidden on Mobile) */}
                <div className="hidden lg:flex items-center gap-4">
                    <a href="#events" className="font-display text-lg uppercase tracking-wider text-domcy-cream border-2 border-domcy-cream rounded-full px-6 py-2 hover:bg-domcy-cream hover:text-domcy-green transition-all">
                        Live Music
                    </a>
                    <a href="#locations" className="font-display text-lg uppercase tracking-wider text-domcy-cream border-2 border-domcy-cream rounded-full px-6 py-2 hover:bg-domcy-cream hover:text-domcy-green transition-all">
                        Find Us
                    </a>
                </div>

                {/* 3. Right: Order Button & Menu */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={openCart}
                        className="relative font-display text-lg uppercase tracking-wider bg-domcy-cream text-domcy-green rounded-full px-6 py-3 hover:bg-white hover:scale-105 transition-all hidden sm:block shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
                    >
                        Order Now
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF6B35] text-white flex items-center justify-center rounded-full font-sans font-bold text-xs">
                                {totalItems}
                            </span>
                        )}
                    </button>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-domcy-cream text-domcy-green rounded-full p-3 hover:scale-110 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
                    >
                        <Menu className="w-6 h-6" strokeWidth={2.5} />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
                        className="fixed inset-0 z-[70] bg-domcy-cream flex flex-col"
                    >
                        <div className="flex justify-between items-center p-6 sm:px-8 py-8 border-b border-domcy-black/10">
                            <span className="font-display text-4xl text-domcy-green tracking-tighter">domcy®</span>
                            <button onClick={() => setIsOpen(false)} className="bg-domcy-green text-domcy-cream rounded-full p-2 hover:rotate-90 transition-transform duration-300">
                                <X className="w-8 h-8" strokeWidth={2.5} />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col justify-center items-center gap-4 overflow-y-auto py-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="font-display text-[3.5rem] sm:text-[5rem] leading-[0.9] text-domcy-green hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-domcy-green hover:to-emerald-600 transition-all uppercase text-center"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="p-8 bg-domcy-green text-domcy-cream flex justify-between items-center">
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
                                <a href="#" className="hover:text-white transition-colors"><ExternalLink className="w-6 h-6" /></a>
                            </div>
                            <span className="font-sans font-bold opacity-60">© 2024 Domcy Coffee</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
