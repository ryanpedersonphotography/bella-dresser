import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import ComponentShowcase from './ComponentShowcase';

const ColorsSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="colors" className="mb-20">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-4xl font-heading font-bold">02. Colors & Gradients</h2>
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <>
            <ComponentShowcase 
              title="Primary Colors" 
              id="BD-Color-Primary" 
              description="Primary color palette used throughout the site."
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="h-24 bg-cosmic rounded-lg shadow-md"></div>
                  <p className="mt-2 font-medium">Cosmic</p>
                  <p className="text-sm text-cosmic/60">bg-cosmic</p>
                </div>
                <div>
                  <div className="h-24 bg-cloud rounded-lg shadow-md"></div>
                  <p className="mt-2 font-medium">Cloud</p>
                  <p className="text-sm text-cosmic/60">bg-cloud</p>
                </div>
                <div>
                  <div className="h-24 bg-lavender rounded-lg shadow-md"></div>
                  <p className="mt-2 font-medium">Lavender</p>
                  <p className="text-sm text-cosmic/60">bg-lavender</p>
                </div>
                <div>
                  <div className="h-24 bg-pink-500 rounded-lg shadow-md"></div>
                  <p className="mt-2 font-medium">Pink</p>
                  <p className="text-sm text-cosmic/60">bg-pink-500</p>
                </div>
              </div>
            </ComponentShowcase>

            <ComponentShowcase 
              title="Accent Colors" 
              id="BD-Color-Accent" 
              description="Accent colors used for highlights and special elements."
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="h-24 bg-mint rounded-lg shadow-md"></div>
                  <p className="mt-2 font-medium">Mint</p>
                  <p className="text-sm text-cosmic/60">bg-mint</p>
                </div>
                <div>
                  <div className="h-24 bg-peach rounded-lg shadow-md"></div>
                  <p className="mt-2 font-medium">Peach</p>
                  <p className="text-sm text-cosmic/60">bg-peach</p>
                </div>
                <div>
                  <div className="h-24 bg-tangerine rounded-lg shadow-md"></div>
                  <p className="mt-2 font-medium">Tangerine</p>
                  <p className="text-sm text-cosmic/60">bg-tangerine</p>
                </div>
                <div>
                  <div className="h-24 bg-highlight rounded-lg shadow-md"></div>
                  <p className="mt-2 font-medium">Highlight</p>
                  <p className="text-sm text-cosmic/60">bg-highlight</p>
                </div>
              </div>
            </ComponentShowcase>

            <ComponentShowcase 
              title="Gradients" 
              id="BD-Gradient" 
              description="Gradient combinations used for backgrounds and special elements."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="h-24 bg-gradient-to-r from-lavender to-pink-500 rounded-lg shadow-md"></div>
                  <p className="mt-2 font-medium">BD-Gradient-1: Lavender to Pink</p>
                  <p className="text-sm text-cosmic/60">bg-gradient-to-r from-lavender to-pink-500</p>
                </div>
                <div>
                  <div className="h-24 bg-gradient-to-r from-mint to-lavender rounded-lg shadow-md"></div>
                  <p className="mt-2 font-medium">BD-Gradient-2: Mint to Lavender</p>
                  <p className="text-sm text-cosmic/60">bg-gradient-to-r from-mint to-lavender</p>
                </div>
                <div>
                  <div className="h-24 bg-gradient-to-r from-peach to-tangerine rounded-lg shadow-md"></div>
                  <p className="mt-2 font-medium">BD-Gradient-3: Peach to Tangerine</p>
                  <p className="text-sm text-cosmic/60">bg-gradient-to-r from-peach to-tangerine</p>
                </div>
                <div>
                  <div className="h-24 bg-gradient-cosmic rounded-lg shadow-md"></div>
                  <p className="mt-2 font-medium">BD-Gradient-4: Cosmic Gradient</p>
                  <p className="text-sm text-cosmic/60">bg-gradient-cosmic</p>
                </div>
              </div>
            </ComponentShowcase>
          </>
        )}
      </div>
    </section>
  );
};

export default ColorsSection;