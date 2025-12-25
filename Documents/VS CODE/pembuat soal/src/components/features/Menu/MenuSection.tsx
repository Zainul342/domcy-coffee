import { motion } from 'framer-motion';
import { menuItems } from '../../../data/mock-menu';
import { MenuItemRow } from './MenuItemRow';

export const MenuSection = () => {
    return (
        <section id="menu" className="py-20 bg-domcy-green text-domcy-cream relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

            <div className="container mx-auto px-6 sm:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="font-display text-[4rem] sm:text-[6rem] leading-none uppercase text-domcy-cream mb-4">
                        What's On<br />The Menu
                    </h2>
                    <p className="font-sans text-xl text-domcy-cream/80 max-w-xl">
                        Menu andalan kami yang siap menemani nongkrongmu. Pedasnya nendang, kopinya tenang.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {['Domcy Special', 'Coffee'].map((category) => (
                        <div key={category}>
                            <h3 className="font-display text-4xl text-domcy-accent mb-6 uppercase border-b border-domcy-cream/20 pb-2 inline-block">
                                {category}
                            </h3>
                            <div className="grid gap-0">
                                {menuItems.filter(item => item.category === category).map((item) => (
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
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-domcy-cream text-domcy-green font-display text-2xl px-12 py-4 uppercase hover:bg-white transition-all">
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    );
};
