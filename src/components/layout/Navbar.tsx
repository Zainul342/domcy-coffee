import { useState, useEffect } from 'react';
import { X, Instagram, ExternalLink, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { DomcyLogo } from '../ui/DomcyLogo';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { openCart, totalItems } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScrollY = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScrollY);
        return () => window.removeEventListener('scroll', handleScrollY);
    }, []);

    const handleNavigation = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname !== '/') {
            navigate(`/?scrollTo=${sectionId}`);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Check for scroll params on mount/update
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollTo = params.get('scrollTo');
        if (scrollTo && location.pathname === '/') {
            setTimeout(() => {
                const element = document.getElementById(scrollTo);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    // Optional: clear param
                    window.history.replaceState({}, '', '/');
                }
            }, 100);
        }
    }, [location]);

    const navLinks = [
        { name: 'Home', href: '/', isPage: true },
        { name: 'Menu', href: 'menu', isPage: false },
        { name: 'Lokasi', href: '/locations', isPage: true }, // Changed to page
        { name: 'Live Music', href: 'events', isPage: false },
    ];

    return (
        <>
            {/* Navbar Container - Floating Pill */}
            <div className="fixed top-4 left-0 right-0 z-[60] flex justify-center px-4">
                <nav className="w-full max-w-[1400px] bg-domcy-cream text-domcy-green rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center transition-all duration-300">

                    {/* 1. Left: Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <DomcyLogo variant="dark" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:rotate-12 transition-transform duration-500" />
                        <span className="font-display text-2xl sm:text-3xl text-domcy-green tracking-tighter">
                            domcy<span className="text-sm font-sans font-bold mt-1 ml-0.5 opacity-60">®</span>
                        </span>
                    </Link>

                    {/* 2. Center: Navigation Pills (Hidden on Mobile) */}
                    <div className="hidden lg:flex items-center gap-2">
                        <button onClick={(e) => handleNavigation(e, 'events')} className="font-display text-base uppercase tracking-wider text-domcy-green border border-transparent hover:border-domcy-green rounded-xl px-5 py-2 transition-all">
                            Live Music
                        </button>
                        <Link to="/locations" className="font-display text-base uppercase tracking-wider text-domcy-green border border-transparent hover:border-domcy-green rounded-xl px-5 py-2 transition-all">
                            Find Us
                        </Link>
                    </div>

                    {/* 3. Right: Order Button & Menu */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button
                            onClick={openCart}
                            className="relative font-display text-xs sm:text-base uppercase tracking-wider bg-domcy-green text-domcy-cream rounded-xl px-4 py-2 sm:px-6 sm:py-2.5 hover:bg-domcy-black hover:scale-105 transition-all shadow-lg"
                        >
                            Order Now
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#FF6B35] text-white flex items-center justify-center rounded-lg font-sans font-bold text-[10px] sm:text-xs">
                                    {totalItems}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-transparent text-domcy-green p-2 hover:scale-110 transition-transform flex flex-col justify-center items-center gap-[6px]"
                        >
                            {/* Custom 2-line Menu Icon */}
                            <div className="w-6 sm:w-8 h-0.5 bg-domcy-green rounded-full"></div>
                            <div className="w-6 sm:w-8 h-0.5 bg-domcy-green rounded-full"></div>
                        </button>
                    </div>
                </nav>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-domcy-green/40 backdrop-blur-sm z-[70]"
                        />

                        {/* Floating Card Menu - Matches Navbar Position */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="fixed top-4 left-4 right-4 sm:left-auto sm:right-auto sm:w-[500px] z-[80] mx-auto sm:mx-0 flex flex-col max-h-[85vh]"
                            style={{
                                left: typeof window !== 'undefined' && window.innerWidth >= 640 ? 'auto' : '16px',
                                right: typeof window !== 'undefined' && window.innerWidth >= 640 ? '16px' : '16px'
                            }}
                        >
                            {/* Menu Content Container */}
                            <div className="w-full bg-domcy-cream text-domcy-green rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full border border-domcy-green/10">
                                <div className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 border-b border-domcy-green/10 bg-domcy-cream">
                                    <div className="flex items-center gap-2">
                                        <DomcyLogo variant="dark" className="w-8 h-8 sm:w-10 sm:h-10" />
                                        <span className="font-display text-2xl sm:text-3xl text-domcy-green tracking-tighter">
                                            domcy<span className="text-sm font-sans font-bold mt-1 ml-0.5 opacity-60">®</span>
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <button
                                            onClick={openCart}
                                            className="relative font-display text-xs sm:text-base uppercase tracking-wider bg-domcy-green text-domcy-cream rounded-xl px-4 py-2 sm:px-6 sm:py-2.5 hover:bg-domcy-black hover:scale-105 transition-all shadow-lg"
                                        >
                                            Order Now
                                            {totalItems > 0 && (
                                                <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#FF6B35] text-white flex items-center justify-center rounded-lg font-sans font-bold text-[10px] sm:text-xs">
                                                    {totalItems}
                                                </span>
                                            )}
                                        </button>
                                        <button onClick={() => setIsOpen(false)} className="bg-transparent text-domcy-green p-2 hover:rotate-90 transition-transform duration-300 flex items-center justify-center">
                                            <X className="w-6 sm:w-8 h-6 sm:h-8" strokeWidth={2.5} />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto py-8 px-6 bg-domcy-cream">
                                    <div className="flex flex-col gap-6">
                                        {navLinks.map((link, index) => {
                                            const Content = (
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.05 }}
                                                    className="text-left group flex items-center justify-between"
                                                >
                                                    <span className="font-display text-4xl sm:text-5xl uppercase text-domcy-green group-hover:translate-x-4 transition-transform duration-300 block">
                                                        {link.name}
                                                    </span>
                                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-domcy-green">
                                                        →
                                                    </span>
                                                </motion.div>
                                            );

                                            if (link.isPage) {
                                                return (
                                                    <Link
                                                        key={link.name}
                                                        to={link.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block border-b border-domcy-green/10 pb-4 last:border-0"
                                                    >
                                                        {Content}
                                                    </Link>
                                                )
                                            } else {
                                                return (
                                                    <button
                                                        key={link.name}
                                                        onClick={(e) => handleNavigation(e, link.href)}
                                                        className="w-full border-b border-domcy-green/10 pb-4 last:border-0"
                                                    >
                                                        {Content}
                                                    </button>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>

                                <div className="p-6 bg-domcy-green/5 flex justify-between items-center text-domcy-green">
                                    <div className="flex gap-4">
                                        <span className="font-sans font-bold uppercase tracking-wider text-xs opacity-60">Follow Us</span>
                                        <a href="#" className="hover:scale-110 transition-transform"><Instagram className="w-5 h-5" /></a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
