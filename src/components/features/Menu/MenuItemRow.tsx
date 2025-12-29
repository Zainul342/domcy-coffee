import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { FloatingImage } from '../../ui/FloatingImage';

interface MenuItemProps {
    id?: number;
    name: string;
    description: string;
    price: number | string;
    category: string;
    image?: string;
    isSoldOut?: boolean;
    status?: 'available' | 'limited' | 'sold-out';
    tags?: string[];
    isFeatured?: boolean;
}

// Generate a pseudo-random ID for items that don't have one, or pass ID from parent
// For now, assume name is unique or hashing
const generateId = (name: string) => name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

export const MenuItemRow = ({ id, name, description, price, image, isSoldOut, status = 'available', isFeatured, tags = [] }: MenuItemProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const { addToCart } = useCart();

    // Determine effective status
    const effectiveStatus = isSoldOut ? 'sold-out' : status;
    const isItemSoldOut = effectiveStatus === 'sold-out';

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isItemSoldOut) return;
        addToCart({
            id: id || generateId(name),
            name,
            price: price.toString()
        });
    };

    return (
        <motion.div
            className="group relative border-b border-domcy-cream/20 py-6 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={handleAddToCart}
        >
            <div className="flex justify-between items-baseline relative z-10">
                <div className="flex items-center gap-4 flex-1 pr-4">
                    <h3 className="font-display text-3xl sm:text-5xl uppercase text-domcy-cream group-hover:text-white transition-colors flex items-center gap-3 flex-wrap">
                        {name}
                        {isFeatured && (
                            <span className="bg-domcy-amber text-black text-[10px] sm:text-xs font-sans font-bold px-2 py-0.5 rounded-none uppercase tracking-wider shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                Best Seller
                            </span>
                        )}
                        {tags.includes('spicy') && (
                            <span className="bg-red-500 text-white text-[10px] sm:text-xs font-sans font-bold px-2 py-0.5 rounded-none uppercase tracking-wider shrink-0">
                                Spicy 🌶️
                            </span>
                        )}
                        {tags.includes('vegan') && (
                            <span className="bg-green-500 text-white text-[10px] sm:text-xs font-sans font-bold px-2 py-0.5 rounded-none uppercase tracking-wider shrink-0">
                                Vegan 🌱
                            </span>
                        )}
                        {effectiveStatus === 'limited' && (
                            <span className="bg-yellow-500 text-black text-[10px] sm:text-xs font-sans font-bold px-2 py-0.5 rounded-none uppercase tracking-wider shrink-0 shadow-sm">
                                Limited
                            </span>
                        )}
                    </h3>
                    {isItemSoldOut && (
                        <span className="bg-red-600 text-white text-[10px] sm:text-xs font-sans font-bold px-2 py-0.5 rounded-none uppercase tracking-wider shrink-0">
                            Sold Out
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden sm:block w-24 h-px bg-domcy-cream/10 md:group-hover:bg-domcy-cream/50 transition-colors"></div>
                    <span className="font-display text-2xl sm:text-3xl text-domcy-cream group-hover:text-white">
                        {typeof price === 'number' ? price.toLocaleString('id-ID') : price}
                    </span>

                    {/* Add Button */}
                    <button
                        data-testid={`add-to-cart-${id}`}
                        className={`w-10 h-10 rounded-none flex items-center justify-center border-2 border-domcy-cream/20 hover:border-domcy-accent hover:bg-domcy-accent hover:text-domcy-green transition-all ${isSoldOut ? 'opacity-20 cursor-not-allowed' : ''}`}
                        disabled={isSoldOut}
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-start mt-2">
                <p className="font-sans text-domcy-cream/60 text-sm sm:text-base max-w-lg group-hover:text-domcy-cream/90 transition-colors">
                    {description}
                </p>
                {/* Mobile Image */}
                {image && (
                    <div className="lg:hidden mt-2 w-20 h-20 rounded-none overflow-hidden border border-domcy-cream/20 shrink-0 ml-4">
                        <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                )}
            </div>

            {/* Desktop Floating Image preview */}
            {image && (
                <motion.div
                    className="hidden lg:block absolute z-20 pointer-events-none w-64 h-64"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5, x: 20, y: -50 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0.8,
                        rotate: isHovered ? 5 : -5,
                        left: 'auto',
                        right: '0%',
                        top: '50%'
                    }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                    style={{ translateX: '-50%', translateY: '-50%' }}
                >
                    <FloatingImage
                        src={image}
                        alt={name}
                        depth={3}
                        removeBackground={true}
                    />
                </motion.div>
            )}
        </motion.div>
    );
};
