import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ButtonComponent from './ButtonComponent';

interface NavbarProps {
  variant?: 'transparent' | 'solid';
}

const Navbar: React.FC<NavbarProps> = ({ variant = 'solid' }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Determine classes based on variant
  const navClasses = variant === 'transparent'
    ? "bg-transparent transition-all duration-300"
    : "bg-gradient-to-r from-lavender to-cloud transition-all duration-300";
  
  // Text color classes based on variant
  const textClasses = variant === 'transparent'
    ? "text-cloud hover:text-primary"
    : "text-cosmic hover:text-primary";
  
  return (
    <nav className={`${navClasses} relative z-50`}>
      {/* Colorful top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-highlight"></div>
      
      {/* Background texture */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`flex justify-between ${variant === 'transparent' ? 'h-24' : 'h-20'} transition-all duration-300`}>
          <div className="flex items-center">
            <Link to="/">
              <Logo size="md" variant="full" className={variant === 'transparent' ? 'text-cloud' : ''} />
            </Link>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-body text-lg ${textClasses} transition-colors relative group`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full duration-300"></span>
            </Link>
            <Link
              to="/about"
              className={`font-body text-lg ${textClasses} transition-colors relative group`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full duration-300"></span>
            </Link>
            <Link
              to="/micro-interactions"
              className={`font-body text-lg ${textClasses} transition-colors relative group`}
            >
              Micro-Interactions
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full duration-300"></span>
            </Link>
            <Link
              to="/transitions"
              className={`font-body text-lg ${textClasses} transition-colors relative group`}
            >
              Transitions
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full duration-300"></span>
            </Link>
            <Link
              to="/button-showcase"
              className={`font-body text-lg ${textClasses} transition-colors relative group`}
            >
              Button Styles
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full duration-300"></span>
            </Link>
            <Link to="/shop">
              <ButtonComponent variant={variant === 'transparent' ? 'secondary' : 'primary'} size="lg">
                Shop Now
              </ButtonComponent>
            </Link>
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
        className={`md:hidden absolute w-full bg-cloud shadow-lg transform transition-transform duration-300 ease-in-out ${
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
            className="block font-body text-lg text-cosmic hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/transitions"
            className="block font-body text-lg text-cosmic hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Transitions
          </Link>
          <Link
            to="/micro-interactions"
            className="block font-body text-lg text-cosmic hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Micro-Interactions
          </Link>
          <Link
            to="/button-showcase"
            className="block font-body text-lg text-cosmic hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Button Styles
          </Link>
          <Link
            to="/about"
            className="block font-body text-lg text-cosmic hover:text-primary transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>
            <ButtonComponent variant="primary" size="lg">
              Shop Now
            </ButtonComponent>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
