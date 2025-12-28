import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { FloatingOrderButton } from './components/ui/FloatingOrderButton';
import { CartProvider } from './context/CartContext';
import { PreOrderModal } from './components/features/PreOrder/PreOrderModal';
import { MobileFloatingNav } from './components/ui/MobileFloatingNav';
import { SEOHead } from './components/seo/SEOHead';
import { Home } from './pages/Home';
import { FindUsPage } from './pages/FindUsPage';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="bg-domcy-green min-h-screen">
          <SEOHead />
          <MobileFloatingNav />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<FindUsPage />} />
          </Routes>

          <FloatingOrderButton />
          <PreOrderModal />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
