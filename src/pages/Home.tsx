import { Hero } from '../components/layout/Hero';
import { MenuSection } from '../components/features/Menu/MenuSection';
import { Locations } from '../components/features/Locations/Locations';
import { LiveMusicSection } from '../components/features/Events/LiveMusicSection';
import { ReviewsSection } from '../components/features/SocialProof/ReviewsSection';
import { InstagramSection } from '../components/features/SocialProof/InstagramSection';
import { WhyDomcySection } from '../components/features/WhyDomcy/WhyDomcySection';
import { Footer } from '../components/layout/Footer';

export const Home = () => {
    return (
        <>
            <Hero />
            <MenuSection />
            <LiveMusicSection />
            <ReviewsSection />
            <InstagramSection />
            <WhyDomcySection />
            {/* The Locations section is also visible at the bottom of Home as requested */}
            <Locations />

            {/* Pro Tip / Solution Section */}
            <div className="bg-domcy-amber py-8 px-4 text-center">
                <p className="font-display text-xl sm:text-2xl uppercase tracking-wider text-domcy-black">
                    🔥 PRO TIP: Malam Minggu Rame Banget? <span className="underline decoration-2 underline-offset-4">Reservasi Dulu Biar Aman!</span> 🤙
                </p>
            </div>

            <Footer />
        </>
    );
};
