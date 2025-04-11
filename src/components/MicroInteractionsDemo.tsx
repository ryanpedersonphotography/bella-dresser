import React, { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import CardComponent from './CardComponent';
import LoadingAnimation from './LoadingAnimation';
import ScrollReveal from './ScrollReveal';
import { Heart } from 'lucide-react';
import useFocusEffect from '../utils/useFocusEffect';

const MicroInteractionsDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { ref: focusRef } = useFocusEffect<HTMLInputElement>({
    pulseEffect: true,
    scaleEffect: true,
    outlineColor: 'rgba(255, 0, 255, 0.5)'
  });

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="p-8 bg-cloud rounded-2xl shadow-layered">
      <h2 className="text-3xl font-heading font-bold mb-8 text-center">
        <span className="gradient-text">Micro-Interactions Demo</span>
      </h2>

      <div className="space-y-12">
        {/* Button Animations Section */}
        <section>
          <h3 className="text-2xl font-heading font-semibold mb-6">Button Feedback Animations</h3>
          <div className="flex flex-wrap gap-4">
            <ButtonComponent>Default Button</ButtonComponent>
            <ButtonComponent variant="secondary">Secondary Button</ButtonComponent>
            <ButtonComponent loading={isLoading} onClick={handleLoadingDemo}>
              {isLoading ? 'Loading...' : 'Click for Loading State'}
            </ButtonComponent>
          </div>
        </section>

        {/* Loading Animations Section */}
        <section>
          <h3 className="text-2xl font-heading font-semibold mb-6">Loading State Animations</h3>
          <div className="flex flex-wrap gap-8 items-center">
            <LoadingAnimation size="sm" color="primary" />
            <LoadingAnimation size="md" color="secondary" />
            <LoadingAnimation size="lg" color="accent" text="Loading content..." />
          </div>
        </section>

        {/* Scroll Animations Section */}
        <section>
          <h3 className="text-2xl font-heading font-semibold mb-6">Scroll-Triggered Animations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal animation="fade-up" delay={0}>
              <CardComponent
                variant="feature"
                title="Fade Up Animation"
                icon={Heart}
              >
                This card fades in from below when it enters the viewport.
              </CardComponent>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-left" delay={200}>
              <CardComponent
                variant="feature"
                title="Fade Left Animation"
                icon={Heart}
              >
                This card slides in from the right when it enters the viewport.
              </CardComponent>
            </ScrollReveal>
            
            <ScrollReveal animation="zoom-in" delay={400}>
              <CardComponent
                variant="feature"
                title="Zoom In Animation"
                icon={Heart}
              >
                This card zooms in when it enters the viewport.
              </CardComponent>
            </ScrollReveal>
          </div>
        </section>

        {/* Focus State Enhancements Section */}
        <section>
          <h3 className="text-2xl font-heading font-semibold mb-6">Focus State Enhancements</h3>
          <div className="space-y-4">
            <p className="mb-2">Click or tab to the input below to see enhanced focus states:</p>
            
            <input
              ref={focusRef}
              type="text"
              placeholder="Click me or tab to me"
              className="w-full px-6 py-4 rounded-xl bg-white border border-lavender/30 focus:outline-none transition-all duration-300"
            />
            
            <p className="text-sm text-cosmic/60 mt-2">
              The input above uses the useFocusEffect hook for custom focus styling with pulse animation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MicroInteractionsDemo;