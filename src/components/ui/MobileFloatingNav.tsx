import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const MobileFloatingNav = () => {
    const { totalItems, openCart } = useCart();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past 500px (approx Hero height)
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
                >
                    <div className="bg-domcy-black/90 backdrop-blur-md text-domcy-cream border border-domcy-cream/20 rounded-full px-4 py-2 shadow-lg flex items-center gap-4 pointer-events-auto">
                        {/* Live Status */}
                        <div className="flex items-center gap-2 border-r border-domcy-cream/20 pr-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="font-sans font-bold text-xs uppercase tracking-wider">Dapur Buka</span>
                        </div>

                        {/* Cart Summary */}
                        <button
                            onClick={openCart}
                            className="flex items-center gap-2 hover:text-domcy-amber transition-colors"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            <span className="font-sans font-bold text-sm">
                                {totalItems} Pesanan
                            </span>
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
