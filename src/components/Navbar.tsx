import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  variant?: 'transparent' | 'solid';
}

const Navbar: React.FC<NavbarProps> = ({ variant = 'solid' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location.pathname]);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // For home page, we want to detect when we've scrolled past the hero
      // For other pages, we want to detect any scroll
      const scrollThreshold = isHome ? window.innerHeight * 0.8 : 50;
      
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);
  
  // Determine classes based on variant and scroll state
  const navClasses = variant === 'transparent' && !scrolled
    ? "bg-gradient-to-r from-purple-950/95 via-purple-900/90 to-purple-800/80 backdrop-blur-sm"
    : "bg-gradient-to-r from-purple-950/95 via-purple-900/90 to-purple-800/80 shadow-md";
  
  // Text color classes based on variant and scroll state
  const textClasses = "text-cloud hover:text-secondary";
  
  // Height classes based on scroll state
  const heightClasses = scrolled
    ? "h-16" // Smaller height when scrolled
    : variant === 'transparent' ? "h-24" : "h-20"; // Normal height
  
  return (
    <nav className={`${navClasses} fixed top-0 left-0 right-0 transition-all duration-300 z-50`}>
      {/* Colorful top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
      
      {/* Background texture */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`flex justify-between ${heightClasses} transition-all duration-300`}>
          <div className="flex items-center">
            <Link to="/">
              <Logo 
                size={scrolled ? "sm" : "md"} 
                variant="full" 
                className={variant === 'transparent' && !scrolled ? 'text-cloud' : ''}
              />
            </Link>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-body ${scrolled ? 'text-base' : 'text-lg'} ${textClasses} transition-all duration-300 relative group`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full duration-300"></span>
            </Link>
            <Link
              to="/about"
              className={`font-body ${scrolled ? 'text-base' : 'text-lg'} ${textClasses} transition-all duration-300 relative group`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full duration-300"></span>
            </Link>
            <Link
              to="/micro-interactions"
              className={`font-body ${scrolled ? 'text-base' : 'text-lg'} ${textClasses} transition-all duration-300 relative group`}
            >
              Micro-Interactions
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full duration-300"></span>
            </Link>
            <Link
              to="/transitions"
              className={`font-body ${scrolled ? 'text-base' : 'text-lg'} ${textClasses} transition-all duration-300 relative group`}
            >
              Transitions
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full duration-300"></span>
            </Link>
            <Link
              to="/button-showcase"
              className={`font-body ${scrolled ? 'text-base' : 'text-lg'} ${textClasses} transition-all duration-300 relative group`}
            >
              Button Styles
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full duration-300"></span>
            </Link>
            {/* Shop Now button removed */}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={textClasses}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-gradient-to-r from-purple-950/95 via-purple-900/90 to-purple-800/80 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-6 pt-6 pb-6 space-y-6">
          {/* Mobile logo */}
          <div className="flex justify-center mb-6">
            <Logo size="sm" variant="icon" />
          </div>
          
          <Link
            to="/"
            className="block font-body text-lg text-cloud hover:text-secondary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/transitions"
            className="block font-body text-lg text-cloud hover:text-secondary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Transitions
          </Link>
          <Link
            to="/micro-interactions"
            className="block font-body text-lg text-cloud hover:text-secondary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Micro-Interactions
          </Link>
          <Link
            to="/button-showcase"
            className="block font-body text-lg text-cloud hover:text-secondary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Button Styles
          </Link>
          <Link
            to="/about"
            className="block font-body text-lg text-cloud hover:text-secondary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          {/* Shop Now button removed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
