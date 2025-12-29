import { motion } from 'framer-motion';

export const DomcyLogo = ({ className = "" }: { className?: string, variant?: "light" | "dark" }) => {
    return (
        <motion.div
            className={`relative ${className}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                ease: "backOut"
            }}
        >
            <img
                src="/domcy-logo.png"
                alt="Domcy Coffee Logo"
                className="w-full h-full object-contain drop-shadow-xl"
                loading="eager"
            />
        </motion.div>
    );
};
