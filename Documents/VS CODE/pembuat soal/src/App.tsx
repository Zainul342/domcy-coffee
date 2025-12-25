import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { MenuSection } from './components/features/Menu/MenuSection';
import { Locations } from './components/features/Locations/Locations';
import { FloatingOrderButton } from './components/ui/FloatingOrderButton';
import { CartProvider } from './context/CartContext';
import { PreOrderModal } from './components/features/PreOrder/PreOrderModal';
import { LiveMusicSection } from './components/features/Events/LiveMusicSection';


import { ReviewsSection } from './components/features/SocialProof/ReviewsSection';
import { InstagramSection } from './components/features/SocialProof/InstagramSection';
import { WhyDomcySection } from './components/features/WhyDomcy/WhyDomcySection';

function App() {
  return (
    <CartProvider>
      <div className="bg-domcy-green min-h-screen">
        <Navbar />
        <Hero />
        <MenuSection />
        <LiveMusicSection />
        <ReviewsSection />
        <InstagramSection />
        <WhyDomcySection />
        <Locations />
        <FloatingOrderButton />
        <PreOrderModal />
      </div>
    </CartProvider>
  );
}

export default App;
