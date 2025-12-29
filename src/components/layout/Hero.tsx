import { DomcyLogo } from '../ui/DomcyLogo';
import { FloatingImage } from '../ui/FloatingImage';

export const Hero = () => {
    // Scroll effects removed as per request
    // const { scrollY } = useScroll();
    // const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    // const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    // const scrollRotate = useTransform(scrollY, [0, 500], [0, 45]);

    return (
        <div className="relative pt-0 pb-0 min-h-[90vh] overflow-hidden bg-domcy-green flex flex-col justify-center items-center">

            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

            {/* MAIN TYPOGRAPHY - Coded SVG Logo */}
            <div className="container mx-auto px-4 relative z-10 h-full flex flex-col items-center justify-center">
                {/* Static 3D Wall Effect Container */}
                <div className="relative w-full flex flex-col items-center justify-center text-center -mt-5 sm:-mt-32">
                    <div className="relative z-10 w-[95vw] max-w-[900px] mx-auto">
                        <DomcyLogo className="w-full h-auto" />
                    </div>
                </div>
                {/* Typography with deep shadow "stamped" effect */}
                <div
                    className="font-sans text-domcy-cream text-[3vw] sm:text-[1.5vw] md:text-xl font-bold tracking-[0.2em] uppercase mt-6 md:mt-8 relative z-30 opacity-100 drop-shadow-md"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                >
                    Satu-Satunya Cafe Terbaik di Donomulyo
                </div>
            </div>

            {/* FLOATING 3D IMAGES - STATIC POSITIONS */}

            {/* Top Left - Nasi Tempong */}
            <div
                className="absolute top-[15%] -left-[5%] sm:top-[5%] sm:left-[2%] md:top-[8%] md:left-[5%] w-[48vw] sm:w-[38vw] md:w-[32vw] max-w-[450px] z-20"
            >
                <FloatingImage
                    src="/hero-nasi-transparent.png"
                    alt="Nasi Tempong"
                    removeBackground={false}
                    className="rotate-[-8deg] scale-105" // Added scale for impact
                />
            </div>

            {/* Bottom Right - Coffee */}
            <div
                className="absolute bottom-[20%] -right-[5%] sm:bottom-[15%] sm:right-[1%] md:bottom-[20%] md:right-[5%] w-[42vw] sm:w-[35vw] md:w-[28vw] max-w-[380px] z-20"
            >
                <FloatingImage
                    src="/hero-coffee-transparent.png"
                    alt="Coffee"
                    removeBackground={false}
                    className="rotate-[8deg] scale-110"
                />
            </div>

            {/* Mid Right - Sambal (Detail 1) */}
            <div
                className="absolute top-[18%] right-[8%] w-[18vw] max-w-[180px] z-30 hidden lg:block"
            >
                <FloatingImage
                    src="/hero-sambal-transparent.png"
                    alt="Sambal"
                    removeBackground={false}
                    className="rotate-[15deg] scale-110"
                />
            </div>

            {/* Bottom Left - Chili (Detail 2) */}
            <div
                className="absolute bottom-[20%] left-[12%] w-[12vw] max-w-[120px] z-30 hidden md:block opacity-90"
            >
                <FloatingImage
                    src="/hero-chili-transparent.png"
                    alt="Chili"
                    removeBackground={false}
                    className="rotate-[-10deg] scale-110"
                />
            </div>

            {/* Marquee Scroller at bottom */}
            <div className="absolute bottom-0 w-full bg-domcy-cream text-domcy-green py-3 overflow-hidden z-40 border-t-4 border-domcy-black">
                <div className="animate-marquee whitespace-nowrap flex gap-12 font-display text-2xl sm:text-3xl uppercase items-center tracking-wider">
                    <span>★ HIDDEN GEM MALANG SELATAN</span><span className="text-xl">●</span>
                    <span>LIVE MUSIC SETIAP SABTU</span><span className="text-xl">●</span>
                    <span>NASI TEMPONG JUARA</span><span className="text-xl">●</span>
                    <span>WIFI KENCANG & PARKIR LUAS</span><span className="text-xl">●</span>
                    <span>★ HIDDEN GEM MALANG SELATAN</span>
                </div>
            </div>
        </div>
    );
};
