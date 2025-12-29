import React from 'react';
import { motion } from 'framer-motion';

// Simple interface that accepts standard button props + variant/size
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-none font-sans font-bold tracking-wider transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase';

  const variants = {
    primary: 'bg-domcy-cream text-domcy-green hover:bg-white border-2 border-transparent',
    outline:
      'border-2 border-domcy-cream text-domcy-cream hover:bg-domcy-cream hover:text-domcy-green',
    ghost: 'text-domcy-cream hover:text-white hover:bg-white/10',
  };

  const sizes = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-8 text-base',
    lg: 'h-16 px-10 text-xl',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
