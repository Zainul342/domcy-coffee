import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';
import { InstagramCard } from './InstagramCard';
import { instagramPosts } from '../../../data/mock-instagram';

export const InstagramSection = () => {
    return (
        <section className="py-20 bg-domcy-green text-domcy-cream relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-domcy-amber/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-domcy-cream/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 sm:px-12 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-5xl md:text-7xl uppercase leading-none"
                        >
                            Momen <br /> <span className="text-domcy-amber">Seru</span>
                        </motion.h2>
                        <p className="font-sans text-xl opacity-70 mt-4 max-w-md">
                            Potret kebersamaan, kopi nikmat, dan suasana hangat di Domcy Coffee. Tag kami untuk tampil di sini!
                        </p>
                    </div>

                    <motion.a
                        href="https://www.instagram.com/domcycoffee/"
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group flex items-center gap-3 bg-domcy-amber text-domcy-black px-8 py-4 font-display text-xl uppercase tracking-wider hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)]"
                    >
                        <Instagram className="w-6 h-6" />
                        Ikuti @domcycoffee
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {instagramPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, rotate: index % 2 === 0 ? -2 : 2, y: 50 }}
                            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <InstagramCard post={post} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
