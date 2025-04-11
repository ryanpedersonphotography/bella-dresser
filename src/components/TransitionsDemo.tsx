import React from 'react';
import SectionTransition from './SectionTransition';
import ButtonComponent from './ButtonComponent';
import { Link } from 'react-router-dom';

const TransitionsDemo: React.FC = () => {
  return (
    <div className="p-8 bg-cloud rounded-2xl shadow-layered">
      <h2 className="text-3xl font-heading font-bold mb-8 text-center">
        <span className="gradient-text">Page & Section Transitions Demo</span>
      </h2>

      <div className="space-y-16">
        {/* Page Transitions Section */}
        <section>
          <h3 className="text-2xl font-heading font-semibold mb-6">Page Transitions</h3>
          <p className="mb-6 text-cosmic/70">
            Navigate between pages to see smooth fade transitions. The PageTransition component
            wraps the Routes in App.tsx to create a seamless experience when changing pages.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/">
              <ButtonComponent>Home Page</ButtonComponent>
            </Link>
            <Link to="/about">
              <ButtonComponent variant="secondary">About Page</ButtonComponent>
            </Link>
            <Link to="/micro-interactions">
              <ButtonComponent>Micro-Interactions</ButtonComponent>
            </Link>
          </div>
        </section>

        {/* Section Transitions Demo */}
        <section>
          <h3 className="text-2xl font-heading font-semibold mb-6">Section Transitions on Scroll</h3>
          <p className="mb-10 text-cosmic/70">
            Scroll down to see different section transition effects. Each section animates when it enters the viewport.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <SectionTransition type="slide-up" className="p-8 bg-lavender/20 rounded-xl shadow-layered">
              <h4 className="text-xl font-heading font-semibold mb-3">Slide Up Animation</h4>
              <p className="text-cosmic/70">
                This section slides up into view when it enters the viewport. It uses the SectionTransition
                component with the "slide-up" type.
              </p>
            </SectionTransition>

            <SectionTransition type="slide-right" delay={200} className="p-8 bg-mint/20 rounded-xl shadow-layered">
              <h4 className="text-xl font-heading font-semibold mb-3">Slide Right Animation</h4>
              <p className="text-cosmic/70">
                This section slides in from the left when it enters the viewport. It uses the SectionTransition
                component with the "slide-right" type and a 200ms delay.
              </p>
            </SectionTransition>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionTransition type="slide-left" delay={400} className="p-8 bg-peach/20 rounded-xl shadow-layered">
              <h4 className="text-xl font-heading font-semibold mb-3">Slide Left Animation</h4>
              <p className="text-cosmic/70">
                This section slides in from the right when it enters the viewport. It uses the SectionTransition
                component with the "slide-left" type and a 400ms delay.
              </p>
            </SectionTransition>

            <SectionTransition type="zoom" delay={600} className="p-8 bg-tangerine/20 rounded-xl shadow-layered">
              <h4 className="text-xl font-heading font-semibold mb-3">Zoom Animation</h4>
              <p className="text-cosmic/70">
                This section zooms into view when it enters the viewport. It uses the SectionTransition
                component with the "zoom" type and a 600ms delay.
              </p>
            </SectionTransition>
          </div>
        </section>

        {/* Coordinated Element Movements */}
        <SectionTransition type="slide-up" className="p-8 bg-gradient-cosmic rounded-xl shadow-layered">
          <h3 className="text-2xl font-heading font-semibold mb-6 text-cloud">Coordinated Element Movements</h3>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <SectionTransition type="slide-right" delay={200} className="md:w-1/2">
              <div className="aspect-square bg-primary/20 rounded-full flex items-center justify-center shadow-neon">
                <div className="w-3/4 h-3/4 bg-accent/20 rounded-full flex items-center justify-center animate-float">
                  <div className="w-1/2 h-1/2 bg-highlight/20 rounded-full animate-float-slow"></div>
                </div>
              </div>
            </SectionTransition>
            
            <SectionTransition type="slide-left" delay={400} className="md:w-1/2">
              <p className="text-cloud/90 mb-4">
                This section demonstrates coordinated element movements. The circles on the left and this text
                enter the viewport with different animations and delays, creating a choreographed effect.
              </p>
              <p className="text-cloud/90">
                By combining different transition types and delays, you can create complex and engaging
                animations that guide the user's attention through your content.
              </p>
            </SectionTransition>
          </div>
        </SectionTransition>
      </div>
    </div>
  );
};

export default TransitionsDemo;