import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import ComponentShowcase from './ComponentShowcase';

const TypographySection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="typography" className="mb-20">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-4xl font-heading font-bold">01. Typography</h2>
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
              title="Heading Typography" 
              id="BD-Type-Heading" 
              description="Heading styles for different levels of hierarchy."
              unstyledChildren={
                <div className="space-y-6">
                  <h1 style={{fontSize: '3rem', fontWeight: 'bold'}}>Heading 1</h1>
                  <h2 style={{fontSize: '2.5rem', fontWeight: 'bold'}}>Heading 2</h2>
                  <h3 style={{fontSize: '2rem', fontWeight: 'bold'}}>Heading 3</h3>
                  <h4 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Heading 4</h4>
                  <h5 style={{fontSize: '1.25rem', fontWeight: 'bold'}}>Heading 5</h5>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl font-heading font-bold">Heading 1</h1>
                  <p className="text-sm text-cosmic/60 mt-2">text-5xl font-heading font-bold</p>
                </div>
                <div>
                  <h2 className="text-4xl font-heading font-bold">Heading 2</h2>
                  <p className="text-sm text-cosmic/60 mt-2">text-4xl font-heading font-bold</p>
                </div>
                <div>
                  <h3 className="text-3xl font-heading font-semibold">Heading 3</h3>
                  <p className="text-sm text-cosmic/60 mt-2">text-3xl font-heading font-semibold</p>
                </div>
                <div>
                  <h4 className="text-2xl font-heading font-semibold">Heading 4</h4>
                  <p className="text-sm text-cosmic/60 mt-2">text-2xl font-heading font-semibold</p>
                </div>
                <div>
                  <h5 className="text-xl font-heading font-medium">Heading 5</h5>
                  <p className="text-sm text-cosmic/60 mt-2">text-xl font-heading font-medium</p>
                </div>
              </div>
            </ComponentShowcase>

            <ComponentShowcase 
              title="Body Typography" 
              id="BD-Type-Body" 
              description="Body text styles in different sizes."
              unstyledChildren={
                <div className="space-y-6">
                  <p style={{fontSize: '1.25rem'}}>Large Body Text: Experience our carefully curated collection of unique pieces.</p>
                  <p style={{fontSize: '1rem'}}>Medium Body Text: Experience our carefully curated collection of unique pieces.</p>
                  <p style={{fontSize: '0.875rem'}}>Small Body Text: Experience our carefully curated collection of unique pieces.</p>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <p className="text-xl text-cosmic/70 font-body leading-relaxed">
                    Large Body Text: Experience our carefully curated collection of unique pieces that blend sophisticated European style with comfortable lakeside living.
                  </p>
                  <p className="text-sm text-cosmic/60 mt-2">text-xl text-cosmic/70 font-body leading-relaxed</p>
                </div>
                <div>
                  <p className="text-lg text-cosmic/70 font-body leading-relaxed">
                    Medium Body Text: Experience our carefully curated collection of unique pieces that blend sophisticated European style with comfortable lakeside living.
                  </p>
                  <p className="text-sm text-cosmic/60 mt-2">text-lg text-cosmic/70 font-body leading-relaxed</p>
                </div>
                <div>
                  <p className="text-base text-cosmic/70 font-body leading-relaxed">
                    Regular Body Text: Experience our carefully curated collection of unique pieces that blend sophisticated European style with comfortable lakeside living.
                  </p>
                  <p className="text-sm text-cosmic/60 mt-2">text-base text-cosmic/70 font-body leading-relaxed</p>
                </div>
                <div>
                  <p className="text-sm text-cosmic/70 font-body leading-relaxed">
                    Small Body Text: Experience our carefully curated collection of unique pieces that blend sophisticated European style with comfortable lakeside living.
                  </p>
                  <p className="text-sm text-cosmic/60 mt-2">text-sm text-cosmic/70 font-body leading-relaxed</p>
                </div>
              </div>
            </ComponentShowcase>

            <ComponentShowcase 
              title="Special Text Styles" 
              id="BD-Type-Special" 
              description="Special text styling including gradient text and emphasis styles."
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-heading font-bold">
                    <span className="gradient-text">Gradient Text</span>
                  </h2>
                  <p className="text-sm text-cosmic/60 mt-2">gradient-text class</p>
                </div>
                <div>
                  <p className="text-lg italic text-cosmic/70">Italic Text Style</p>
                  <p className="text-sm text-cosmic/60 mt-2">text-lg italic text-cosmic/70</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-cosmic/70">Bold Text Style</p>
                  <p className="text-sm text-cosmic/60 mt-2">text-lg font-bold text-cosmic/70</p>
                </div>
                <div>
                  <p className="text-lg underline text-cosmic/70">Underlined Text Style</p>
                  <p className="text-sm text-cosmic/60 mt-2">text-lg underline text-cosmic/70</p>
                </div>
              </div>
            </ComponentShowcase>
          </>
        )}
      </div>
    </section>
  );
};

export default TypographySection;