import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { MenuSection } from './components/features/Menu/MenuSection';
import { Locations } from './components/features/Locations/Locations';
import { FloatingOrderButton } from './components/ui/FloatingOrderButton';
import { CartProvider } from './context/CartContext';
import { PreOrderModal } from './components/features/PreOrder/PreOrderModal';
import { LiveMusicSection } from './components/features/Events/LiveMusicSection';


function App() {
  return (
    <CartProvider>
      <div className="bg-domcy-green min-h-screen">
        <Navbar />
        <Hero />
        <MenuSection />
        <LiveMusicSection />
        <Locations />
        <FloatingOrderButton />
        <PreOrderModal />
      </div>
    </CartProvider>
  );
}

export default App;
