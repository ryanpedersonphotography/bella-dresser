import React from 'react';
import MicroInteractionsDemo from '../components/MicroInteractionsDemo';
import TexturedSection from '../components/TexturedSection';

const MicroInteractionsPage: React.FC = () => {
  return (
    <div>
      <TexturedSection
        variant="primary"
        textureType="noise"
        className="section-spacing"
      >
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-heading font-bold mb-4">
                <span className="gradient-text">Micro-Interactions</span>
              </h1>
              <p className="text-xl text-cosmic/70 font-body">
                Explore the various micro-interactions and animations implemented in the Bella Dresser website.
              </p>
            </div>
            
            <MicroInteractionsDemo />
          </div>
        </div>
      </TexturedSection>
    </div>
  );
};

export default MicroInteractionsPage;