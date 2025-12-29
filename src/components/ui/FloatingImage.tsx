import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingImageProps {
    src: string;
    alt: string;
    className?: string;
    removeBackground?: boolean;
}

export const FloatingImage = ({
    src,
    alt,
    className = "",
    removeBackground = false
}: FloatingImageProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [useFallback, setUseFallback] = useState(!removeBackground);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!removeBackground) {
            setImageLoaded(true);
            setUseFallback(true);
            return;
        }

        const img = new Image();
        img.src = src;
        img.crossOrigin = "anonymous";
        let isCancelled = false;

        img.onload = () => {
            if (isCancelled) return;

            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d', { willReadFrequently: true });
                if (ctx) {
                    try {
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0);

                        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                        const data = imageData.data;

                        const cornerPixels = [
                            [0, 0], [canvas.width - 1, 0], [0, canvas.height - 1], [canvas.width - 1, canvas.height - 1]
                        ];

                        let bgR = 0, bgG = 0, bgB = 0;
                        cornerPixels.forEach(([px, py]) => {
                            const offset = (py * canvas.width + px) * 4;
                            bgR += data[offset];
                            bgG += data[offset + 1];
                            bgB += data[offset + 2];
                        });
                        bgR /= 4; bgG /= 4; bgB /= 4;

                        const threshold = 45;

                        for (let i = 0; i < data.length; i += 4) {
                            const r = data[i], g = data[i + 1], b = data[i + 2];
                            const diff = Math.sqrt(
                                Math.pow(r - bgR, 2) +
                                Math.pow(g - bgG, 2) +
                                Math.pow(b - bgB, 2)
                            );

                            if (diff < threshold) {
                                if (diff < threshold / 2) {
                                    data[i + 3] = 0;
                                } else {
                                    data[i + 3] = ((diff - (threshold / 2)) / (threshold / 2)) * 255;
                                }
                            }
                        }
                        ctx.putImageData(imageData, 0, 0);
                        setUseFallback(false);
                    } catch (e) {
                        console.warn("Background removal failed", e);
                        setUseFallback(true);
                    }
                } else {
                    setUseFallback(true);
                }
            }
            setImageLoaded(true);
        };

        img.onerror = () => {
            setUseFallback(true);
            setImageLoaded(true);
        };

        const timeout = setTimeout(() => {
            if (!imageLoaded) {
                setUseFallback(true);
                setImageLoaded(true);
            }
        }, 3000);

        return () => {
            isCancelled = true;
            clearTimeout(timeout);
        };
    }, [src, removeBackground, imageLoaded]);

    return (
        <motion.div
            className={`relative ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full h-full relative">
                <div className="relative z-20 pointer-events-none">
                    {removeBackground && !useFallback && (
                        <canvas
                            ref={canvasRef}
                            className="w-full h-auto drop-shadow-[0_25px_30px_rgba(0,0,0,0.5)]"
                        />
                    )}

                    {(useFallback || !removeBackground) && (
                        <img
                            src={src}
                            alt={alt}
                            className="w-full h-auto drop-shadow-[0_25px_30px_rgba(0,0,0,0.5)]"
                        />
                    )}
                </div>
            </div>
        </motion.div>
    );
};
