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
            // Set canvas size to match image
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw original image
            ctx.drawImage(img, 0, 0);

            // Get pixel data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            // Brand Color Configuration
            // Light (Cream): #F2F0E9 => RGB(242, 240, 233)
            // Dark (Green):  #003D2E => RGB(0, 61, 46)

            const targetR = variant === 'dark' ? 0 : 242;
            const targetG = variant === 'dark' ? 61 : 240;
            const targetB = variant === 'dark' ? 46 : 233;

            // Loop through all pixels
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                const a = data[i + 3];

                // Calculate brightness (Luma)
                const brightness = (0.299 * r + 0.587 * g + 0.114 * b);

                // Smart Alpha Masking:
                // Map brightness to transparency to preserve anti-aliasing edges
                // 0 (Black) -> Transparent
                // 100+ (White-ish) -> Opaque

                let alpha = 0;
                if (brightness < 30) {
                    alpha = 0; // Pure black background is fully transparent
                } else if (brightness > 100) {
                    alpha = 255; // Solid logo parts are fully opaque
                } else {
                    // Smooth transition for edges (30 to 100 brightness maps to 0-255 alpha)
                    alpha = ((brightness - 30) / 70) * 255;
                }

                // Apply new color and calculated alpha
                data[i] = targetR;     // R
                data[i + 1] = targetG; // G
                data[i + 2] = targetB; // B
                data[i + 3] = alpha;   // A
            }

            // Put processed data back
            ctx.putImageData(imageData, 0, 0);
            setImageLoaded(true);
        };
    }, []);

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
