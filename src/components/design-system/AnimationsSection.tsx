import React, { useState } from 'react';
import ConfigurableComponentShowcase, { ConfigOption } from './ConfigurableComponentShowcase';

const configOptions: ConfigOption[] = [
  {
    value: 'scroll-reveal',
    label: 'Scroll Reveal Animations',
    description: 'Animations that trigger as elements enter the viewport during scrolling.',
    render: () => (
      <div className="space-y-8">
        <div className="p-6 bg-lavender/10 rounded-lg">
          <h3 className="text-xl font-medium mb-2">BD-Anim-Reveal-Up</h3>
          <p className="mb-4">Elements fade in and move up as they enter the viewport.</p>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-lavender rounded-lg flex items-center justify-center text-white font-bold">
              Up
            </div>
            <div className="ml-4">
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                {/* ScrollReveal animation="fade-up" placeholder */}
              </code>
            </div>
          </div>
        </div>

        <div className="p-6 bg-lavender/10 rounded-lg">
          <h3 className="text-xl font-medium mb-2">BD-Anim-Reveal-Left</h3>
          <p className="mb-4">Elements fade in and move from left to right as they enter the viewport.</p>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-lavender rounded-lg flex items-center justify-center text-white font-bold">
              Left
            </div>
            <div className="ml-4">
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                {/* ScrollReveal animation="fade-left" placeholder */}
              </code>
            </div>
          </div>
        </div>

        <div className="p-6 bg-lavender/10 rounded-lg">
          <h3 className="text-xl font-medium mb-2">BD-Anim-Reveal-Right</h3>
          <p className="mb-4">Elements fade in and move from right to left as they enter the viewport.</p>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-lavender rounded-lg flex items-center justify-center text-white font-bold">
              Right
            </div>
            <div className="ml-4">
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                {/* ScrollReveal animation="fade-right" placeholder */}
              </code>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    value: 'hover-animations',
    label: 'Hover Animations',
    description: 'Animations that trigger when elements are hovered.',
    render: () => (
      <div className="space-y-8">
        <div className="p-6 bg-lavender/10 rounded-lg">
          <h3 className="text-xl font-medium mb-2">BD-Anim-Hover-Scale</h3>
          <p className="mb-4">Elements scale up slightly when hovered.</p>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-lavender rounded-lg flex items-center justify-center text-white font-bold transform hover:scale-110 transition-transform duration-300">
              Hover
            </div>
            <div className="ml-4">
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                className="transform hover:scale-110 transition-transform duration-300"
              </code>
            </div>
          </div>
        </div>

        <div className="p-6 bg-lavender/10 rounded-lg">
          <h3 className="text-xl font-medium mb-2">BD-Anim-Hover-Shadow</h3>
          <p className="mb-4">Elements gain a larger shadow when hovered.</p>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-lavender rounded-lg flex items-center justify-center text-white font-bold shadow-md hover:shadow-xl transition-shadow duration-300">
              Hover
            </div>
            <div className="ml-4">
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                className="shadow-md hover:shadow-xl transition-shadow duration-300"
              </code>
            </div>
          </div>
        </div>

        <div className="p-6 bg-lavender/10 rounded-lg">
          <h3 className="text-xl font-medium mb-2">BD-Anim-Hover-Color</h3>
          <p className="mb-4">Elements change color when hovered.</p>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-lavender hover:bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold transition-colors duration-300">
              Hover
            </div>
            <div className="ml-4">
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                className="bg-lavender hover:bg-pink-500 transition-colors duration-300"
              </code>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    value: 'page-transitions',
    label: 'Page Transitions',
    description: 'Transitions between pages for a smoother user experience.',
    render: () => (
      <div className="p-6 bg-lavender/10 rounded-lg">
        <h3 className="text-xl font-medium mb-2">BD-Anim-Page-Fade (Beta)</h3>
        <p className="mb-4">Smooth fade transition between pages.</p>
        <div className="flex items-center">
          <div className="w-16 h-16 bg-lavender rounded-lg flex items-center justify-center text-white font-bold">
            Page
          </div>
          <div className="ml-4">
            <code className="text-sm bg-gray-100 px-2 py-1 rounded">
              {/* PageTransition placeholder */}
            </code>
            <p className="text-sm text-pink-500 mt-2">
              <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">Beta</span> Currently in development
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    value: 'micro-interactions',
    label: 'Micro-Interactions',
    description: 'Small animations that provide feedback for user interactions.',
    render: () => (
      <div className="p-6 bg-lavender/10 rounded-lg">
        <h3 className="text-xl font-medium mb-2">BD-Anim-Button-Click (Beta)</h3>
        <p className="mb-4">Subtle animation when buttons are clicked.</p>
        <div className="flex items-center">
          <button className="px-4 py-2 bg-lavender text-white rounded-lg active:scale-95 transition-transform">
            Click Me
          </button>
          <div className="ml-4">
            <code className="text-sm bg-gray-100 px-2 py-1 rounded">
              className="active:scale-95 transition-transform"
            </code>
            <p className="text-sm text-pink-500 mt-2">
              <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">Beta</span> Currently in development
            </p>
          </div>
        </div>
      </div>
    )
  }
];

const AnimationsSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="animations" className="mb-20">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-4xl font-heading font-bold">06. Animations & Transitions</h2>
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
            title="Animations & Transitions"
            id="BD-Animations"
            description="Various configurations of animation components."
            configOptions={configOptions}
          />
        )}
      </div>
    </section>
  );
};

export default AnimationsSection;