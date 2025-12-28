import { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

interface FloatingImageProps {
    src: string;
    alt: string;
    className?: string; // Container classes (width, positioning)
    depth?: number; // How "deep" the 3D effect feels (1-5)
    removeBackground?: boolean; // If true, applies canvas-based background removal
}

export const FloatingImage = ({
    src,
    alt,
    className = "",
    depth = 2,
    removeBackground = false
}: FloatingImageProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [useFallback, setUseFallback] = useState(!removeBackground);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse tracking for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for the tilt - REMOVED
    // const rotateX = useSpring(useTransform(y, [-100, 100], [10 * depth, -10 * depth]), { stiffness: 150, damping: 20 });
    // const rotateY = useSpring(useTransform(x, [-100, 100], [-10 * depth, 10 * depth]), { stiffness: 150, damping: 20 });

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

                        // Smart Background Detection: Sample the corners
                        // (Usually the background color is in the corners)
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

                        const threshold = 45; // Sensitivity to color difference

                        for (let i = 0; i < data.length; i += 4) {
                            const r = data[i], g = data[i + 1], b = data[i + 2];

                            // Calculate simple color distance
                            const diff = Math.sqrt(
                                Math.pow(r - bgR, 2) +
                                Math.pow(g - bgG, 2) +
                                Math.pow(b - bgB, 2)
                            );

                            if (diff < threshold) {
                                // Smooth alpha transition based on distance
                                if (diff < threshold / 2) {
                                    data[i + 3] = 0; // Solid background
                                } else {
                                    // Edge smoothing
                                    data[i + 3] = ((diff - (threshold / 2)) / (threshold / 2)) * 255;
                                }
                            }
                        }
                        ctx.putImageData(imageData, 0, 0);
                        setUseFallback(false);
                    } catch (e) {
                        console.warn("Background removal failed, using fallback img", e);
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
    }, [src, removeBackground]);

    // Mouse tracking for tilt effect - DISABLED as per user request
    const rotateX = 0;
    const rotateY = 0;

    return (
        <motion.div
            ref={containerRef}
            className={`relative perspective-1000 ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full relative"
            >
                <div
                    className="relative z-20 pointer-events-none"
                >
                    {removeBackground && !useFallback && (
                        <canvas
                            ref={canvasRef}
                            className="w-full h-auto drop-shadow-[0_25px_30px_rgba(0,0,0,0.5)]" // Cleaner, deeper shadow
                        />
                    )}

                    {(useFallback || !removeBackground) && (
                        <img
                            src={src}
                            alt={alt}
                            className="w-full h-auto drop-shadow-[0_25px_30px_rgba(0,0,0,0.5)]" // Cleaner, deeper shadow
                        />
                    )}

                </div>
            </motion.div>
        </motion.div>
    );
};
