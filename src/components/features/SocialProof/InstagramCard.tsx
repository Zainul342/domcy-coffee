import { motion } from 'framer-motion';
import { Heart, Instagram } from 'lucide-react';
import type { InstagramPost } from '../../../data/mock-instagram';

interface InstagramCardProps {
  post: InstagramPost;
}

export const InstagramCard = ({ post }: InstagramCardProps) => {
  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noreferrer"
      className="block relative group bg-white p-3 pb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-300 transform rotate-1 hover:rotate-0"
      whileHover={{ scale: 1.02, zIndex: 10 }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
        <img
          src={post.image}
          alt="Instagram Post"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-domcy-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
          <Instagram className="w-8 h-8 mb-2" />
          <div className="flex items-center gap-2 font-display text-2xl mb-2">
            <Heart className="w-5 h-5 fill-white" />
            <span>{post.likes}</span>
          </div>
          <p className="font-sans text-xs line-clamp-3 opacity-90">{post.caption}</p>
        </div>
      </div>

      {/* Caption/Footer imitating polaroid writing (optional, or just clean white) */}
      <div className="font-handwriting text-domcy-black/60 text-center text-sm font-bold rotate-[-1deg]">
        @domcycoffee
      </div>
    </motion.a>
  );
};
