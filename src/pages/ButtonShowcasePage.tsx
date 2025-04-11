import React from 'react';

const ButtonShowcasePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cloud p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-8 text-cosmic">Button Style Options</h1>
        <p className="text-lg mb-12 text-cosmic/80">
          Please select your preferred button style from the options below. All buttons maintain consistent sizing and proportions across variants.
        </p>

        {/* Button Style 1: Minimal Clean */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-cosmic">Style 1: Minimal Clean</h2>
          <p className="mb-6 text-cosmic/70">Clean, minimal buttons with subtle hover effects. Focused on simplicity and elegance.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-cloud p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cosmic">Light Background</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-minimal-primary">Primary</button>
                <button className="btn-minimal-secondary">Secondary</button>
              </div>
            </div>
            
            <div className="bg-cosmic p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cloud">Dark Background</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-minimal-primary-dark">Primary</button>
                <button className="btn-minimal-secondary-dark">Secondary</button>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4 text-cosmic">Size Variations</h3>
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-minimal-primary btn-xs">Extra Small</button>
              <button className="btn-minimal-primary btn-sm">Small</button>
              <button className="btn-minimal-primary btn-md">Medium</button>
              <button className="btn-minimal-primary btn-lg">Large</button>
              <button className="btn-minimal-primary btn-xl">Extra Large</button>
            </div>
          </div>
        </section>

        {/* Button Style 2: Soft Elegant */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-cosmic">Style 2: Soft Elegant</h2>
          <p className="mb-6 text-cosmic/70">Elegant buttons with soft shadows and subtle color transitions. Refined and sophisticated.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-cloud p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cosmic">Light Background</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-elegant-primary">Primary</button>
                <button className="btn-elegant-secondary">Secondary</button>
              </div>
            </div>
            
            <div className="bg-cosmic p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cloud">Dark Background</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-elegant-primary-dark">Primary</button>
                <button className="btn-elegant-secondary-dark">Secondary</button>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4 text-cosmic">Size Variations</h3>
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-elegant-primary btn-xs">Extra Small</button>
              <button className="btn-elegant-primary btn-sm">Small</button>
              <button className="btn-elegant-primary btn-md">Medium</button>
              <button className="btn-elegant-primary btn-lg">Large</button>
              <button className="btn-elegant-primary btn-xl">Extra Large</button>
            </div>
          </div>
        </section>

        {/* Button Style 3: Modern Accent */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-cosmic">Style 3: Modern Accent</h2>
          <p className="mb-6 text-cosmic/70">Modern buttons with accent borders and clean transitions. Contemporary and distinctive.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-cloud p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cosmic">Light Background</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-modern-primary">Primary</button>
                <button className="btn-modern-secondary">Secondary</button>
              </div>
            </div>
            
            <div className="bg-cosmic p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cloud">Dark Background</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-modern-primary-dark">Primary</button>
                <button className="btn-modern-secondary-dark">Secondary</button>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4 text-cosmic">Size Variations</h3>
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-modern-primary btn-xs">Extra Small</button>
              <button className="btn-modern-primary btn-sm">Small</button>
              <button className="btn-modern-primary btn-md">Medium</button>
              <button className="btn-modern-primary btn-lg">Large</button>
              <button className="btn-modern-primary btn-xl">Extra Large</button>
            </div>
          </div>
        </section>

        {/* Button Style 4: Subtle Gradient */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-cosmic">Style 4: Subtle Gradient</h2>
          <p className="mb-6 text-cosmic/70">Buttons with subtle, refined gradients. Sophisticated with a touch of dimension.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-cloud p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cosmic">Light Background</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-gradient-primary">Primary</button>
                <button className="btn-gradient-secondary">Secondary</button>
              </div>
            </div>
            
            <div className="bg-cosmic p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cloud">Dark Background</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-gradient-primary-dark">Primary</button>
                <button className="btn-gradient-secondary-dark">Secondary</button>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4 text-cosmic">Size Variations</h3>
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-gradient-primary btn-xs">Extra Small</button>
              <button className="btn-gradient-primary btn-sm">Small</button>
              <button className="btn-gradient-primary btn-md">Medium</button>
              <button className="btn-gradient-primary btn-lg">Large</button>
              <button className="btn-gradient-primary btn-xl">Extra Large</button>
            </div>
          </div>
        </section>

        {/* Button Style 5: Bordered Refined */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-cosmic">Style 5: Bordered Refined</h2>
          <p className="mb-6 text-cosmic/70">Elegant bordered buttons with refined hover effects. Classic with a modern twist.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-cloud p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cosmic">Light Background</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-bordered-primary">Primary</button>
                <button className="btn-bordered-secondary">Secondary</button>
              </div>
            </div>
            
            <div className="bg-cosmic p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cloud">Dark Background</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-bordered-primary-dark">Primary</button>
                <button className="btn-bordered-secondary-dark">Secondary</button>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4 text-cosmic">Size Variations</h3>
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-bordered-primary btn-xs">Extra Small</button>
              <button className="btn-bordered-primary btn-sm">Small</button>
              <button className="btn-bordered-primary btn-md">Medium</button>
              <button className="btn-bordered-primary btn-lg">Large</button>
              <button className="btn-bordered-primary btn-xl">Extra Large</button>
            </div>
          </div>
        </section>

        {/* Enhanced Hover Animations for Bordered Refined */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-cosmic">Enhanced Hover Animations</h2>
          <p className="mb-6 text-cosmic/70">
            Enhanced hover animations for the Bordered Refined style with more dynamic text and background transitions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-cloud p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cosmic">Text Slide Animation</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-bordered-text-slide">Text Slide</button>
                <button className="btn-bordered-text-slide-reverse">Reverse Slide</button>
              </div>
            </div>
            
            <div className="bg-cloud p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cosmic">Fill Animations</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-bordered-fill-left">Fill Left</button>
                <button className="btn-bordered-fill-center">Fill Center</button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-cloud p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cosmic">Glow Effects</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-bordered-glow">Glow Effect</button>
                <button className="btn-bordered-pulse">Pulse Effect</button>
              </div>
            </div>
            
            <div className="bg-cloud p-6 rounded-md">
              <h3 className="text-lg font-medium mb-4 text-cosmic">Creative Transitions</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-bordered-scale">Scale Effect</button>
                <button className="btn-bordered-rotate">Rotate Effect</button>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 p-6 bg-lavender/30 rounded-lg">
          <h2 className="text-2xl font-heading font-semibold mb-4 text-cosmic">Selection Guide</h2>
          <p className="mb-4 text-cosmic/80">
            When selecting a button style, consider:
          </p>
          <ul className="list-disc pl-6 mb-6 text-cosmic/80 space-y-2">
            <li>Brand personality and overall aesthetic</li>
            <li>Consistency with other UI elements</li>
            <li>Readability and contrast against backgrounds</li>
            <li>Accessibility for all users</li>
            <li>How the style will work across different contexts</li>
          </ul>
          <p className="text-cosmic/80">
            Once you've selected a style, we'll implement it consistently across the entire site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcasePage;