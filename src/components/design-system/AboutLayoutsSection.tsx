import React, { useState } from 'react';
import ConfigurableComponentShowcase, { ConfigOption } from './ConfigurableComponentShowcase';

const configOptions: ConfigOption[] = [
  {
    value: 'about-hero',
    label: 'About Hero',
    description: 'About page hero with brand story highlight.',
    render: () => (
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic/80 to-transparent flex items-center">
          <div className="p-8 w-1/2">
            <div className="h-8 bg-white/90 rounded-md mb-4"></div>
            <div className="h-4 bg-white/80 rounded-md mb-2 w-3/4"></div>
            <div className="h-4 bg-white/80 rounded-md mb-2 w-5/6"></div>
            <div className="h-4 bg-white/80 rounded-md mb-2 w-5/6"></div>
            <div className="h-4 bg-white/80 rounded-md mb-6 w-2/3"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    value: 'about-mission',
    label: 'About Mission',
    description: 'Mission statement section with decorative elements.',
    render: () => (
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden p-8">
        <div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <div className="h-8 bg-cosmic/80 rounded-md w-64 mb-6"></div>
          <div className="h-4 bg-cosmic/60 rounded-md w-full mb-2"></div>
          <div className="h-4 bg-cosmic/60 rounded-md w-5/6 mb-2"></div>
          <div className="h-4 bg-cosmic/60 rounded-md w-full mb-2"></div>
          <div className="h-4 bg-cosmic/60 rounded-md w-4/5 mb-2"></div>
          <div className="h-4 bg-cosmic/60 rounded-md w-5/6 mb-2"></div>
          <div className="h-4 bg-cosmic/60 rounded-md w-3/4 mb-8"></div>
          <div className="h-10 bg-pink-500/90 rounded-md w-40"></div>
        </div>
      </div>
    )
  },
  {
    value: 'about-values',
    label: 'About Values',
    description: 'Company values in grid format.',
    render: () => (
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden p-8">
        <div className="h-16 flex items-center justify-center mb-8">
          <div className="h-8 bg-cosmic/80 rounded-md w-64"></div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="bg-white/80 rounded-lg p-4 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-lavender mb-3"></div>
              <div className="h-5 bg-cosmic/80 rounded-md w-24 mb-2"></div>
              <div className="h-3 bg-cosmic/60 rounded-md w-full mb-1"></div>
              <div className="h-3 bg-cosmic/60 rounded-md w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }
];

const AboutLayoutsSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <section id="layouts-about" className="mb-20">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-4xl font-heading font-bold">09. About Page Layouts</h2>
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
          <ConfigurableComponentShowcase
            title="About Page Layouts"
            id="BD-Layouts-About"
            description="Various layout patterns specifically designed for the About page."
            configOptions={configOptions}
          />
        )}
      </div>
    </section>
  );
};

export default AboutLayoutsSection;