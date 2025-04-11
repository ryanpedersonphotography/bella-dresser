import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-cloud">
      {/* Background decorative elements */}
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-highlight"></div>
      
      {/* Decorative orbs */}
      <div className="fixed -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow"></div>
      <div className="fixed -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow animation-delay-2000"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-[calc(100vh-5rem)]">
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
