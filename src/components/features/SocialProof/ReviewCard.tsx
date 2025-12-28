import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';
import type { Review } from '../../../data/mock-reviews';

interface ReviewCardProps {
    review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
    return (
        <motion.div
            className="bg-domcy-cream text-domcy-green p-6 border-2 border-domcy-green shadow-[6px_6px_0px_0px_rgba(0,61,46,1)] h-full flex flex-col"
            whileHover={{ y: -5, boxShadow: "10px 10px 0px 0px rgba(0,61,46,1)" }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-domcy-green">
                    <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
                <div>
                    <h4 className="font-display text-xl uppercase leading-none flex items-center gap-2">
                        {review.name}
                        {review.verified && (
                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        )}
                    </h4>
                    <span className="text-xs font-sans font-bold opacity-60 uppercase tracking-wider">
                        {review.date}
                    </span>
                </div>
            </div>

            <div className="flex gap-1 mb-3 text-domcy-amber">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-domcy-green/20'}`}
                    />
                ))}
            </div>

            <p className="font-sans text-domcy-green/80 flex-1 leading-relaxed">
                "{review.comment}"
            </p>
        </motion.div>
    );
};
