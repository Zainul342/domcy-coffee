import { motion } from 'framer-motion';
import { Star, Users, Quote } from 'lucide-react';
import { ReviewCard } from './ReviewCard';
import { reviews } from '../../../data/mock-reviews';

export const ReviewsSection = () => {
    return (
        <section className="py-20 bg-domcy-cream text-domcy-green relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#003D2E 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="container mx-auto px-6 sm:px-12 relative z-10">

                {/* Stats Banner */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 border-b-2 border-domcy-green/10 pb-12">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-4 text-domcy-amber">
                            <Star className="w-6 h-6 fill-current" />
                            <Star className="w-6 h-6 fill-current" />
                            <Star className="w-6 h-6 fill-current" />
                            <Star className="w-6 h-6 fill-current" />
                            <Star className="w-6 h-6 fill-current" />
                            <span className="text-domcy-green font-bold ml-2 text-lg">4.8/5.0</span>
                        </div>
                        <h2 className="font-display text-5xl md:text-6xl uppercase leading-none mb-4">
                            Warga Domcy <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-domcy-green to-domcy-lightGreen">Approved</span>
                        </h2>
                        <p className="font-sans text-xl opacity-80 max-w-md">
                            Join hundreds of students and locals who make Domcy their daily go-to spot.
                        </p>
                    </div>

                    <div className="flex items-center gap-8 bg-white p-6 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,61,46,0.1)] border border-domcy-green/10">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <Users className="w-6 h-6 text-domcy-amber" />
                                <span className="font-display text-3xl">500+</span>
                            </div>
                            <p className="text-sm font-sans font-bold uppercase tracking-wider opacity-60">Happy Faces</p>
                        </div>
                        <div className="w-px h-12 bg-domcy-green/10"></div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <Quote className="w-6 h-6 text-domcy-amber" />
                                <span className="font-display text-3xl">120+</span>
                            </div>
                            <p className="text-sm font-sans font-bold uppercase tracking-wider opacity-60">5-Star Reviews</p>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ReviewCard review={review} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://maps.app.goo.gl/WDyBY36Frhec2BGdA"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 font-display text-xl uppercase tracking-wider border-b-2 border-domcy-green hover:text-domcy-amber hover:border-domcy-amber transition-colors pb-1"
                    >
                        Read all reviews on Google Maps
                    </a>
                </div>

            </div>
        </section>
    );
};
