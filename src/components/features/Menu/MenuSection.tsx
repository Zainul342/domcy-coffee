import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { menuItems } from '../../../data/mock-menu';
import { MenuItemRow } from './MenuItemRow';

export const MenuSection = () => {
    // Extract unique categories
    const allCategories = Array.from(new Set(menuItems.map(item => item.category)));

    const [activeCategory, setActiveCategory] = useState(allCategories[0]);
    const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

    return (
        <section id="menu" className="py-20 bg-domcy-green text-domcy-cream relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

            <div className="container mx-auto px-6 sm:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="font-display text-[4rem] sm:text-[6rem] leading-none uppercase text-domcy-cream mb-4">
                        Menu Andalan<br />Kami
                    </h2>
                    <p className="font-sans text-xl text-domcy-cream/80 max-w-xl">
                        Dari Nasi Tempong Pedas Nampol sampai Kopi Susu Gula Aren yang Creamy. Semuanya dibikin dengan hati buat kamu.
                    </p>
                </motion.div>

                {/* --- TAB NAVIGATION (Filtered View) --- */}
                <div className="sticky top-20 z-30 bg-domcy-green/95 backdrop-blur-sm py-4 -mx-6 px-6 sm:mx-0 sm:px-0 mb-8 border-b border-domcy-cream/10">
                    <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar">
                        {allCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`
                                    snap-start shrink-0 px-6 py-2 rounded-full font-sans font-bold uppercase tracking-wider text-sm border transition-all
                                    ${activeCategory === category
                                        ? 'bg-domcy-amber text-domcy-black border-domcy-amber shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-y-[-2px]'
                                        : 'bg-transparent text-domcy-cream border-domcy-cream/20 hover:border-domcy-cream hover:bg-white/5'}
                                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- ACTIVE CATEGORY ITEMS --- */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="font-display text-4xl text-domcy-accent mb-8 uppercase border-b border-domcy-cream/20 pb-2 inline-block">
                                {activeCategory}
                            </h3>
                            <div className="grid gap-0">
                                {menuItems
                                    .filter(item => item.category === activeCategory)
                                    .map((item) => (
                                        <MenuItemRow
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            description={item.description}
                                            price={item.price}
                                            category={item.category}
                                            image={item.image}
                                            isSoldOut={(item as { isSoldOut?: boolean }).isSoldOut}
                                            isFeatured={(item as { featured?: boolean }).featured}
                                            tags={(item as { tags?: string[] }).tags}
                                        />
                                    ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* --- VIEW FULL MENU BUTTON --- */}
                <div className="mt-20 text-center">
                    <button
                        onClick={() => setIsFullMenuOpen(true)}
                        className="bg-domcy-cream text-domcy-green font-display text-2xl px-12 py-4 uppercase hover:bg-white transition-all shadow-lg"
                    >
                        View Full Menu
                    </button>
                    <p className="mt-4 font-sans text-sm text-domcy-cream/60">
                        Klik untuk melihat semua menu dalam satu halaman
                    </p>
                </div>
            </div>

            {/* --- FULL MENU MODAL --- */}
            <AnimatePresence>
                {isFullMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-domcy-black/95 backdrop-blur-xl overflow-y-auto"
                    >
                        <div className="container mx-auto px-6 py-20 relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsFullMenuOpen(false)}
                                className="fixed top-6 right-6 z-[110] bg-domcy-amber text-domcy-black p-3 rounded-full hover:bg-white transition-colors shadow-lg"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <h2 className="font-display text-5xl md:text-7xl text-domcy-cream text-center mb-16 uppercase">
                                Full Menu
                            </h2>

                            <div className="max-w-4xl mx-auto flex flex-col gap-16">
                                {allCategories.map((category) => (
                                    <div key={category}>
                                        <h3 className="sticky top-0 bg-domcy-black/90 py-4 font-display text-4xl text-domcy-amber mb-6 uppercase border-b border-domcy-cream/20 z-10">
                                            {category}
                                        </h3>
                                        <div className="grid gap-0">
                                            {menuItems
                                                .filter(item => item.category === category)
                                                .map((item) => (
                                                    <MenuItemRow
                                                        key={`full-${item.id}`}
                                                        {...item}
                                                        price={item.price}
                                                        isSoldOut={item.isSoldOut}
                                                        isFeatured={item.featured}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-20 text-center">
                                <button
                                    onClick={() => setIsFullMenuOpen(false)}
                                    className="text-domcy-cream/60 hover:text-domcy-amber underline font-sans uppercase tracking-widest text-sm"
                                >
                                    Close Full Menu
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
