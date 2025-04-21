import React from 'react';
import ConfigurableComponentShowcase, { ConfigOption } from './ConfigurableComponentShowcase';
import CardComponent from '../CardComponent';
import { Heart, Star, Sparkles } from 'lucide-react';

const configOptions: ConfigOption[] = [
  {
    value: 'feature-product-content',
    label: 'Feature, Product & Content Cards',
    description: 'Different card types used for features, products, and content display.',
    render: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardComponent
          variant="feature"
          title="Feature Card"
          icon={Heart}
        >
          This is a feature card used to highlight key features or services.
        </CardComponent>
        
        <CardComponent
          variant="product"
          title="Product Card"
          icon={Star}
        >
          This is a product card used to display products or collections.
        </CardComponent>
        
        <CardComponent
          variant="content"
          title="Content Card"
          icon={Sparkles}
        >
          This is a content card used to display additional information or details.
        </CardComponent>
      </div>
    )
  },
  {
    value: 'textured-sections',
    label: 'Textured Sections',
    description: 'Section backgrounds with different texture patterns.',
    render: () => (
      <div className="space-y-6">
        <div className="p-6 color-block-primary texture-noise rounded-lg">
          <p className="font-medium text-cosmic">Primary Section with Noise Texture</p>
          <p className="text-sm text-cosmic/70 mt-2">color-block-primary texture-noise</p>
        </div>
        
        <div className="p-6 color-block-secondary texture-grid rounded-lg">
          <p className="font-medium text-cosmic">Secondary Section with Grid Texture</p>
          <p className="text-sm text-cosmic/70 mt-2">color-block-secondary texture-grid</p>
        </div>
        
        <div className="p-6 color-block-accent texture-dots rounded-lg">
          <p className="font-medium text-cosmic">Accent Section with Dots Texture</p>
          <p className="text-sm text-cosmic/70 mt-2">color-block-accent texture-dots</p>
        </div>
      </div>
    )
  },
  {
    value: 'special-containers',
    label: 'Special Containers',
    description: 'Specialized containers with visual effects.',
    render: () => (
      <div className="space-y-6">
        <div className="p-6 bg-cloud rounded-2xl shadow-layered">
          <p className="font-medium text-cosmic">BD-Container-Shadow: Layered Shadow Container</p>
          <p className="text-sm text-cosmic/70 mt-2">bg-cloud rounded-2xl shadow-layered</p>
        </div>
        
        <div className="relative p-6 rounded-2xl">
          <div className="absolute -inset-2 bg-pink-500/30 rounded-2xl opacity-30 blur-md"></div>
          <div className="relative">
            <p className="font-medium text-cosmic">BD-Container-Glow: Glowing Background Container</p>
            <p className="text-sm text-cosmic/70 mt-2">Uses absolute positioning with blur-md effect</p>
          </div>
        </div>
      </div>
    )
  }
];

const CardsSection: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <section id="cards" className="mb-20">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-4xl font-heading font-bold">04. Cards & Containers</h2>
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
            title="Cards & Containers"
            id="BD-Cards"
            description="Various configurations of card components and container styles."
            configOptions={configOptions}
          />
        )}
      </div>
    </section>
  );
};

export default CardsSection;
