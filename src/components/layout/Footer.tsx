import { DomcyLogo } from '../ui/DomcyLogo';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export const Footer = () => {
    const { openCart } = useCart();

    return (
        <footer className="relative bg-domcy-cream text-domcy-green overflow-hidden">

            {/* 1. TOP SECTION: BIG TYPOGRAPHY BANNER */}
            <div className="bg-domcy-green py-20 overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center justify-center leading-none">

                        {/* Line 1: Filled */}
                        <div className="font-display text-[15vw] md:text-[8vw] text-domcy-cream uppercase tracking-tight whitespace-nowrap">
                            Authentic Coffee
                        </div>

                        {/* Line 2: Outlined */}
                        <div className="font-display text-[15vw] md:text-[8vw] text-transparent uppercase tracking-tight whitespace-nowrap"
                            style={{ WebkitTextStroke: '2px #F2F0E9' }}>
                            Spicy Sambal
                        </div>

                        {/* Line 3: Filled */}
                        <div className="font-display text-[15vw] md:text-[8vw] text-domcy-cream uppercase tracking-tight whitespace-nowrap">
                            Nasi Tempong
                        </div>

                    </div>
                </div>
            </div>

            {/* 2. BOTTOM SECTION: INFO & LOGO */}
            <div className="pt-16 pb-32 md:pb-16 flex flex-col items-center text-center relative">
                <div className="mb-8 p-4 bg-domcy-green rounded-full">
                    <DomcyLogo className="w-20 h-20 text-domcy-cream" />
                </div>

                <div className="space-y-2 mb-12">
                    <p className="font-sans font-bold text-domcy-green uppercase tracking-widest text-sm opacity-60">Established 2016</p>
                    <p className="font-sans font-bold text-domcy-green uppercase tracking-widest text-xs opacity-40">Designed by Domcy Creative</p>
                </div>

                {/* 3. BOTTOM ACTION BAR (GRID) */}
                <div className="w-[90%] max-w-4xl grid grid-cols-1 md:grid-cols-3 border border-domcy-green/20 rounded-xl overflow-hidden shadow-lg bg-domcy-cream">

                    {/* Block 1: Opening Times */}
                    <div className="p-6 border-b md:border-b-0 md:border-r border-domcy-green/20 flex flex-col items-center justify-center hover:bg-domcy-green/5 transition-colors group cursor-default">
                        <span className="font-display text-2xl uppercase mb-1 group-hover:scale-105 transition-transform">Opening Times</span>
                        <span className="font-sans text-xs font-bold uppercase tracking-wider opacity-60">Daily 10:00 - 23:00</span>
                    </div>

                    {/* Block 2: Order Now */}
                    <button
                        onClick={openCart}
                        className="p-6 border-b md:border-b-0 md:border-r border-domcy-green/20 flex flex-col items-center justify-center hover:bg-domcy-green hover:text-domcy-cream transition-colors group"
                    >
                        <span className="font-display text-2xl uppercase mb-1 group-hover:scale-110 transition-transform">Order Now</span>
                        <span className="font-sans text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-80">Pickup & Delivery</span>
                    </button>

                    {/* Block 3: Find Us */}
                    <Link
                        to="/locations"
                        className="p-6 flex flex-col items-center justify-center hover:bg-domcy-green hover:text-domcy-cream transition-colors group"
                    >
                        <span className="font-display text-2xl uppercase mb-1 group-hover:scale-105 transition-transform">Find Us</span>
                        <span className="font-sans text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-80">Dawung, Donomulyo</span>
                    </Link>

                </div>
            </div>

        </footer>
    );
};
