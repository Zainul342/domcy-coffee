import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const rotate1 = useTransform(scrollY, [0, 500], [0, 30]);

    return (
        <div className="relative pt-32 pb-10 min-h-[90vh] overflow-hidden bg-domcy-green flex flex-col justify-center items-center">

            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

            {/* Main Content - CENTERED */}
            <div className="container mx-auto px-6 relative z-30 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-display text-[8rem] sm:text-[12rem] lg:text-[15rem] leading-[0.8] text-domcy-cream uppercase tracking-tight">
                            domcy<span className="text-2xl sm:text-4xl align-top">®</span>
                        </h1>
                        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-domcy-cream uppercase tracking-widest mt-2">
                            Coffee & Warung
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* FLOATING IMAGES (Absolute Positioned) */}

            {/* Top Left - Coffee */}
            <motion.div style={{ y: y1 }} className="absolute top-24 left-[-10%] sm:left-[5%] lg:left-[10%] w-48 sm:w-64 z-20">
                <img
                    src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop"
                    alt="Coffee"
                    className="rounded-full border-4 border-domcy-cream shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)] rotate-[-12deg] hover:scale-105 transition-transform duration-500"
                />
            </motion.div>

            {/* Bottom Right - Food */}
            <motion.div style={{ y: y2 }} className="absolute bottom-32 right-[-10%] sm:right-[5%] lg:right-[10%] w-56 sm:w-72 z-20">
                <img
                    src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop"
                    alt="Nasi Tempong"
                    className="rounded-full border-4 border-domcy-cream shadow-[-10px_10px_0px_0px_rgba(0,0,0,0.3)] rotate-[15deg] hover:scale-105 transition-transform duration-500"
                />
            </motion.div>

            {/* Top Right - Sauce/Side (Hidden on tiny screens) */}
            <motion.div style={{ rotate: rotate1 }} className="absolute top-40 right-[-5%] lg:right-[15%] w-32 sm:w-40 z-10 hidden sm:block">
                <img
                    src="https://images.unsplash.com/photo-1616486029423-aaa478965c9b?q=80&w=2070&auto=format&fit=crop"
                    alt="Side"
                    className="rounded-full border-4 border-domcy-cream shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"
                />
            </motion.div>

            {/* Bottom Left - Drink/Paste (Hidden on tiny screens) */}
            <motion.div style={{ y: y1 }} className="absolute bottom-20 left-[-5%] lg:left-[15%] w-36 sm:w-48 z-10 hidden sm:block">
                <img
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                    alt="Side"
                    className="rounded-full border-4 border-domcy-cream shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] rotate-[-20deg]"
                />
            </motion.div>


            {/* Marquee Scroller at bottom */}
            <div className="absolute bottom-0 w-full bg-domcy-cream text-domcy-green py-3 overflow-hidden z-40 border-t-4 border-domcy-black">
                <div className="animate-marquee whitespace-nowrap flex gap-12 font-display text-2xl sm:text-3xl uppercase items-center tracking-wider">
                    <span>★ THE REAL VIBE</span><span className="text-xl">●</span>
                    <span>LIVE MUSIC SATURDAY</span><span className="text-xl">●</span>
                    <span>NASI TEMPONG SPESIAL</span><span className="text-xl">●</span>
                    <span>NONGRKRONG ASYIK</span><span className="text-xl">●</span>
                    <span>★ THE REAL VIBE</span><span className="text-xl">●</span>
                    <span>LIVE MUSIC SATURDAY</span><span className="text-xl">●</span>
                    <span>NASI TEMPONG SPESIAL</span>
                </div>
            </div>
        </div>
    );
};
