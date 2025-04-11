import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  console.log("App rendering with tailwind classes:", {
    fontHeading: document.fonts.check("16px Hatton"),
    fontClash: document.fonts.check("16px 'Clash Display'"),
    fontCabinet: document.fonts.check("16px 'Cabinet Grotesk'"),
    fontVoyage: document.fonts.check("16px Voyage"),
    fontDMSans: document.fonts.check("16px 'DM Sans'"),
    tailwindLoaded: typeof window !== 'undefined' &&
      window.getComputedStyle(document.documentElement).getPropertyValue('--tw-ring-color') !== '',
  });
  
  return (
    <div className="relative min-h-screen bg-cloud">
      {/* Background pattern - subtle and doesn't affect layout */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none z-0"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
