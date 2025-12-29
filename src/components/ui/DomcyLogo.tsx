import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const DomcyLogo = ({ className = "", variant = "light" }: { className?: string, variant?: "light" | "dark" }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        const img = new Image();
        img.src = '/domcy-hq.jpg';
        img.crossOrigin = "Anonymous";

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            const targetR = variant === 'dark' ? 0 : 242;
            const targetG = variant === 'dark' ? 61 : 240;
            const targetB = variant === 'dark' ? 46 : 233;

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                const brightness = (0.299 * r + 0.587 * g + 0.114 * b);

                let alpha = 0;
                if (brightness < 30) {
                    alpha = 0;
                } else if (brightness > 100) {
                    alpha = 255;
                } else {
                    alpha = ((brightness - 30) / 70) * 255;
                }

                data[i] = targetR;
                data[i + 1] = targetG;
                data[i + 2] = targetB;
                data[i + 3] = alpha;
            }

            ctx.putImageData(imageData, 0, 0);
            setImageLoaded(true);
        };
    }, [variant]); // Added variant as dependency

    return (
        <motion.div
            className={`relative ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full object-contain drop-shadow-xl"
            />
        </motion.div>
    );
};
