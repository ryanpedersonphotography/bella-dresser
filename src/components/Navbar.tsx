import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-gradient-to-r from-lavender to-cloud relative z-50">
      {/* Colorful top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-highlight"></div>
      
      {/* Background texture */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-cloud rounded-full p-2">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
              <span className="ml-3 text-3xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Bella Dresser
              </span>
            </Link>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-body text-lg text-cosmic hover:text-primary transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full duration-300"></span>
            </Link>
            <Link 
              to="/about" 
              className="font-body text-lg text-cosmic hover:text-primary transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full duration-300"></span>
            </Link>
            <Link 
              to="/shop" 
              className="font-body text-lg bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:shadow-neon transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-cosmic hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-cloud shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-4">
          <Link 
            to="/" 
            className="block font-body text-lg text-cosmic hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block font-body text-lg text-cosmic hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/shop" 
            className="block font-body text-lg bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-center transform hover:scale-105 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
