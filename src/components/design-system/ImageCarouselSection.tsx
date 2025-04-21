import React, { useState } from 'react';
import ConfigurableComponentShowcase, { ConfigOption } from './ConfigurableComponentShowcase';
import ImageCarousel from '../ImageCarousel';

const productImages = [
  { src: "https://picsum.photos/id/1011/800/600", alt: "Product 1" },
  { src: "https://picsum.photos/id/1012/800/600", alt: "Product 2" },
  { src: "https://picsum.photos/id/1013/800/600", alt: "Product 3" },
  { src: "https://picsum.photos/id/1015/800/600", alt: "Product 4" },
];

const featuredCollectionImages = [
  { src: "https://picsum.photos/id/1021/800/600", alt: "Collection 1" },
  { src: "https://picsum.photos/id/1022/800/600", alt: "Collection 2" },
  { src: "https://picsum.photos/id/1023/800/600", alt: "Collection 3" },
  { src: "https://picsum.photos/id/1024/800/600", alt: "Collection 4" },
  { src: "https://picsum.photos/id/1025/800/600", alt: "Collection 5" },
];

const testimonialImages = [
  { src: "https://picsum.photos/id/1005/800/600", alt: "Testimonial 1" },
  { src: "https://picsum.photos/id/1006/800/600", alt: "Testimonial 2" },
  { src: "https://picsum.photos/id/1008/800/600", alt: "Testimonial 3" },
];

const configOptions: ConfigOption[] = [
  {
    value: 'product-gallery',
    label: 'Product Gallery',
    description: 'A multi-image product gallery with thumbnails and main image.',
    render: () => (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ImageCarousel
          imagesPerView={1}
          images={productImages}
          autoplaySpeed={0}
        />
      </div>
    )
  },
  {
    value: 'featured-collection',
    label: 'Featured Collection',
    description: 'A horizontal scrolling carousel showcasing multiple products.',
    render: () => (
      <div className="bg-cloud p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-heading text-center mb-6">Spring Collection</h2>
        <p className="text-center mb-8 max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ImageCarousel
          imagesPerView={3}
          images={featuredCollectionImages}
          autoplaySpeed={5000}
        />
      </div>
    )
  },
  {
    value: 'testimonials',
    label: 'Testimonials',
    description: 'A carousel displaying customer testimonials with images.',
    render: () => (
      <div className="bg-lavender/10 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-heading text-center mb-8">What Our Customers Say</h2>
        <ImageCarousel
          imagesPerView={1}
          images={testimonialImages}
          autoplaySpeed={7000}
        />
      </div>
    )
  }
];

const ImageCarouselSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <section id="image-carousel" className="mb-20">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4"
        >
          <h2 className="text-4xl font-heading font-bold">07. Image Carousel</h2>
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
            title="Image Carousel"
            id="BD-ImageCarousel"
            description="Various configurations of the Image Carousel component with sample images and text."
            configOptions={configOptions}
          />
        )}
      </div>
    </section>
  );
};

export default ImageCarouselSection;