import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { features } from '../../../data/features-data';

export const WhyDomcySection = () => {
    return (
        <section className="py-24 bg-domcy-cream text-domcy-green relative">
            <div className="container mx-auto px-6 sm:px-12">

                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-sans font-bold text-domcy-accent uppercase tracking-[0.2em] text-sm mb-4 block"
                    >
                        The Domcy Difference
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-6xl uppercase leading-none max-w-3xl mx-auto"
                    >
                        More Than Just <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-domcy-green to-domcy-lightGreen">Another Coffee Shop</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <FeatureCard feature={feature} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
