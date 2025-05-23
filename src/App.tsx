import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HomeNoHeader from './pages/HomeNoHeader';
import { initConfettiEffects } from './utils/confettiEffect';
import About from './pages/About';
import MicroInteractionsPage from './pages/MicroInteractionsPage';
import TransitionsPage from './pages/TransitionsPage';
import ButtonShowcasePage from './pages/ButtonShowcasePage';
import DesignElementsPage from './pages/DesignElementsPage';
import PageTransition from './components/PageTransition';
import Footer from './components/Footer';

const App: React.FC = () => {
  const location = useLocation();
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Initialize confetti effects
  useEffect(() => {
    initConfettiEffects();
  }, []);

  return (
    <div className="relative min-h-screen bg-cloud">
      {/* Background pattern - subtle and doesn't affect layout */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none z-0"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Show Navbar on all pages except home and design elements pages */}
        {location.pathname !== '/design-elements' && location.pathname !== '/' && (
          <Navbar variant="solid" />
        )}
        <main className={location.pathname === '/' || location.pathname === '/no-header' ? '' : 'pt-24'}> {/* Add padding to account for fixed navbar except on home page and no-header page */}
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/no-header" element={<HomeNoHeader />} />
              <Route path="/about" element={<About />} />
              <Route path="/micro-interactions" element={<MicroInteractionsPage />} />
              <Route path="/transitions" element={<TransitionsPage />} />
              <Route path="/button-showcase" element={<ButtonShowcasePage />} />
              <Route path="/design-elements" element={<DesignElementsPage />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
