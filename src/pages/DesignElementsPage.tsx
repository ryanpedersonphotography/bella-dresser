import React from 'react';
import TexturedSection from '../components/TexturedSection';
import '../styles/design-system.css';

// Import design system components
import TableOfContents from '../components/design-system/TableOfContents';
import { DesignSystemProvider } from '../contexts/DesignSystemContext';
import TypographySection from '../components/design-system/TypographySection';
import ColorsSection from '../components/design-system/ColorsSection';
import ButtonsSection from '../components/design-system/ButtonsSection';
import CardsSection from '../components/design-system/CardsSection';
import DividersSection from '../components/design-system/DividersSection';
import AnimationsSection from '../components/design-system/AnimationsSection';
import HomeLayoutsSection from '../components/design-system/HomeLayoutsSection';
import AboutLayoutsSection from '../components/design-system/AboutLayoutsSection';
import ImageCarouselSection from '../components/design-system/ImageCarouselSection';
import DesignSystemNavbar from '../components/design-system/DesignSystemNavbar';

const DesignElementsPage: React.FC = () => {
  return (
    <DesignSystemProvider>
      {/* Add back the sticky toggle bar */}
      <DesignSystemNavbar />
      <div className="design-system-page">
        <TexturedSection
          variant="primary"
          textureType="noise"
          className="section-spacing"
        >
          <div className="content-container">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="mb-12 text-center">
                <h1 className="text-5xl font-heading font-bold mb-4">
                  <span className="gradient-text">Bella Dresser Design System</span>
                </h1>
                <p className="text-xl text-cosmic/70 font-body">
                  A comprehensive showcase of all design elements, patterns, and components used throughout the Bella Dresser website.
                </p>
              </div>
              
              {/* Table of Contents */}
              <TableOfContents />

              {/* Typography Section */}
              <TypographySection />

              {/* Colors & Gradients Section */}
              <ColorsSection />

              {/* Buttons Section */}
              <ButtonsSection />

              {/* Cards & Containers Section */}
              <CardsSection />

              {/* Section Dividers */}
              <DividersSection />

              {/* Animations & Transitions Section */}
              <AnimationsSection />

              {/* Image Carousel Section */}
              <ImageCarouselSection />

              {/* Home Page Layouts */}
              <HomeLayoutsSection />

              {/* About Page Layouts */}
              <AboutLayoutsSection />
            </div>
          </div>
        </TexturedSection>
      </div>
    </DesignSystemProvider>
  );
};

export default DesignElementsPage;
