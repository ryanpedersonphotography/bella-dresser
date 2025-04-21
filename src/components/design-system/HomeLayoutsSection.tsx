import React, { useState } from 'react';
import ConfigurableComponentShowcase, { ConfigOption } from './ConfigurableComponentShowcase';

const configOptions: ConfigOption[] = [
  {
    value: 'hero-fullscreen',
    label: 'Hero Fullscreen',
    description: 'Full-screen hero with overlay text and call-to-action.',
    render: () => (
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic/80 to-transparent flex items-center">
          <div className="p-8 w-1/2">
            <div className="h-8 bg-white/90 rounded-md mb-4"></div>
            <div className="h-4 bg-white/80 rounded-md mb-2 w-3/4"></div>
            <div className="h-4 bg-white/80 rounded-md mb-2 w-5/6"></div>
            <div className="h-4 bg-white/80 rounded-md mb-6 w-2/3"></div>
            <div className="h-10 bg-pink-500/90 rounded-md w-1/3"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    value: 'hero-split',
    label: 'Hero Split',
    description: 'Split-screen hero with image on one side, content on the other.',
    render: () => (
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex">
        <div className="w-1/2 bg-lavender/30 p-8 flex items-center">
          <div>
            <div className="h-8 bg-white/90 rounded-md mb-4"></div>
            <div className="h-4 bg-white/80 rounded-md mb-2 w-3/4"></div>
            <div className="h-4 bg-white/80 rounded-md mb-2 w-5/6"></div>
            <div className="h-4 bg-white/80 rounded-md mb-6 w-2/3"></div>
            <div className="h-10 bg-pink-500/90 rounded-md w-1/3"></div>
          </div>
        </div>
        <div className="w-1/2 bg-pink-500/20"></div>
      </div>
    )
  },
  {
    value: 'hero-video',
    label: 'Hero Video (Beta)',
    description: 'Hero section with background video and minimal text.',
    render: () => (
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-cosmic/50 flex items-center justify-center">
          <div className="text-center">
            <div className="h-10 bg-white/90 rounded-md mb-6 w-64 mx-auto"></div>
            <div className="h-10 bg-pink-500/90 rounded-md w-40 mx-auto"></div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10"></div>
        <div className="absolute bottom-4 left-4">
          <p className="text-sm text-pink-500 mt-2">
            <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">Beta</span> Video background implementation in progress
          </p>
        </div>
      </div>
    )
  }
];

const HomeLayoutsSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <section id="layouts-home" className="mb-20">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-4xl font-heading font-bold">08. Home Page Layouts</h2>
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
            title="Home Page Layouts"
            id="BD-Layouts-Home"
            description="Various layout patterns specifically designed for the Home page."
            configOptions={configOptions}
          />
        )}
      </div>
    </section>
  );
};

export default HomeLayoutsSection;