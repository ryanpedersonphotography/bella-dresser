import React from 'react';
import TexturedSection from '../components/TexturedSection';
import TransitionsDemo from '../components/TransitionsDemo';

const TransitionsPage: React.FC = () => {
  return (
    <div>
      <TexturedSection
        variant="secondary"
        textureType="grid"
        className="section-spacing"
      >
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-heading font-bold mb-4">
                <span className="gradient-text">Page & Section Transitions</span>
              </h1>
              <p className="text-xl text-cosmic/70 font-body">
                Explore the smooth page transitions and scroll-triggered section animations implemented in the Bella Dresser website.
              </p>
            </div>
            
            <TransitionsDemo />
          </div>
        </div>
      </TexturedSection>
    </div>
  );
};

export default TransitionsPage;