import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

export const FloatingOrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openCart, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 sm:hidden"
        >
          <button
            onClick={openCart}
            className="relative flex items-center gap-2 bg-[#FF6B35] text-white px-6 py-4 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] font-display uppercase tracking-wider text-xl active:scale-95 transition-transform"
          >
            <ShoppingBag className="w-6 h-6" />
            <span>Pesan</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-7 h-7 bg-domcy-cream text-domcy-green flex items-center justify-center rounded-none font-sans font-bold text-sm border-2 border-domcy-green">
                {totalItems}
              </span>
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
