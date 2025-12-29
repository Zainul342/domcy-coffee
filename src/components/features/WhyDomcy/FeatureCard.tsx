import { motion } from 'framer-motion';
import type { Feature } from '../../../data/features-data';

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <motion.div
      className="bg-domcy-cream text-domcy-green p-8 rounded-2xl relative overflow-hidden group"
      style={{
        boxShadow: '12px 12px 24px #d1cfc9, -12px -12px 24px #ffffff', // Soft Neumorphism on Cream #F2F0E9
      }}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="w-14 h-14 bg-domcy-green text-domcy-amber rounded-2xl flex items-center justify-center mb-6 shadow-inner">
          <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>

        <h3 className="font-display text-2xl uppercase mb-3 tracking-wide group-hover:text-domcy-accent transition-colors">
          {feature.title}
        </h3>

        <p className="font-sans text-domcy-green/70 leading-relaxed text-sm lg:text-base">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};
