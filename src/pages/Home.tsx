import React from 'react';
import TexturedSection from '../components/TexturedSection';
import ButtonComponent from '../components/ButtonComponent';
import CardComponent from '../components/CardComponent';
import { Star, Sparkles, Heart } from 'lucide-react';
import { HeroBanner } from '../components/HeroImage';
import ImageCarousel from '../components/ImageCarousel';
import EnhancedHeroSlideshow from '../components/EnhancedHeroSlideshow';
import PinkWaveDivider from '../components/PinkWaveDivider';
import PinkBlobContainer from '../components/PinkBlobContainer';
import PinkDiagonalDivider from '../components/PinkDiagonalDivider';
import PinkConfettiDivider from '../components/PinkConfettiDivider';
import PinkDottedPath from '../components/PinkDottedPath';
import ScrollReveal from '../components/ScrollReveal';
import { ProductGallery } from '../components/ProductImage';
import EnhancedImage from '../components/EnhancedImage';


const Home: React.FC = () => {
  
  return (
    <div className="relative -mt-24"> {/* Negative margin to counteract the padding-top from main */}
      <EnhancedHeroSlideshow />

      {/* Pink Wave Divider - First transition */}
      <PinkWaveDivider variant="hero" />

      {/* Featured Collection */}
      <TexturedSection
        variant="primary"
        textureType="noise"
        className="section-spacing"
      >
        <div className="content-container">
          <ScrollReveal animation="fade-up">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">
                <span className="gradient-text">Latest Arrivals</span>
              </h2>
              <p className="text-cosmic/70 font-body">
                Discover our newest collection of carefully curated pieces that blend European elegance with Minnesota charm. Each item is selected with attention to quality, style, and versatility, ensuring you'll find pieces that seamlessly integrate into your wardrobe while making a distinctive statement. Our spring collection celebrates vibrant colors and lightweight fabrics perfect for the changing seasons.
              </p>
            </div>
          </ScrollReveal>
          <div className="section-grid">
            {[
              {
                image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3",
                title: "Summer Collection",
                subtitle: "Shop Now →"
              },
              {
                image: "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-4.0.3",
                title: "Beach Essentials",
                subtitle: "Shop Now →"
              },
              {
                image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3",
                title: "Evening Wear",
                subtitle: "Shop Now →"
              }
            ].map((item, index) => (
              <ScrollReveal
                key={index}
                animation="fade-up"
                delay={index * 200}
              >
                <CardComponent
                  variant="product"
                  imageUrl={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </TexturedSection>

      {/* Pink Blob Container - Second transition */}
      <PinkBlobContainer />

      {/* European Elegance Section */}
      <TexturedSection
        variant="secondary"
        textureType="grid"
        className="section-spacing"
      >
        <div className="content-container">
          <div className="asymmetric-layout">
            <ScrollReveal animation="fade-right" className="asymmetric-layout-content">
              <h2 className="text-4xl font-heading font-bold mb-4">
                <span className="gradient-text">European Elegance Meets Minnesota Charm</span>
              </h2>
              <p className="text-cosmic/70 mb-6 font-body">
                Experience our carefully curated collection of unique pieces that blend sophisticated European style with comfortable
                lakeside living. Each item is selected to make you feel confident and beautiful, no matter the occasion.
              </p>
              <p className="text-cosmic/70 mb-8 font-body">
                Our buyers travel throughout Europe to discover emerging designers and timeless classics that bring continental sophistication to the Midwest. We believe fashion should be both beautiful and functional, allowing you to express your personal style while complementing your active lifestyle.
              </p>
              <ButtonComponent variant="primary" size="lg">
                View Collections
              </ButtonComponent>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" className="asymmetric-layout-media relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-saturated to-accent-saturated rounded-2xl opacity-50 blur-xl group-hover:opacity-75 transition duration-500"></div>
              <ImageCarousel
                images={[
                  {
                    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3",
                    alt: "Boutique interior with elegant displays"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3",
                    alt: "European-inspired fashion collection"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3",
                    alt: "Sophisticated boutique styling"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3",
                    alt: "Elegant clothing display"
                  }
                ]}
                autoplaySpeed={6000}
                className="group-hover:shadow-2xl transition-all duration-500"
              />
            </ScrollReveal>
          </div>
        </div>
      </TexturedSection>

      {/* Pink Diagonal Divider - Third transition */}
      <PinkDiagonalDivider />

      {/* Small Town Style Section */}
      <TexturedSection
        variant="accent"
        textureType="dots"
        className="section-spacing"
      >
        <div className="content-container">
          <div className="asymmetric-layout">
            <ScrollReveal animation="fade-right" className="asymmetric-layout-media relative group order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-saturated to-highlight-saturated rounded-2xl opacity-50 blur-xl group-hover:opacity-75 transition duration-500"></div>
              <ImageCarousel
                images={[
                  {
                    src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3",
                    alt: "Boutique collection display"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3",
                    alt: "Small town boutique style"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3",
                    alt: "Contemporary fashion collection"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3",
                    alt: "Lakeside fashion display"
                  }
                ]}
                autoplaySpeed={5000}
                className="group-hover:shadow-2xl transition-all duration-500"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-left" className="asymmetric-layout-content order-1 md:order-2">
              <h2 className="text-4xl font-heading font-bold mb-4">
                <span className="gradient-text">Small Town Boutique, Big City Style</span>
              </h2>
              <p className="text-cosmic/70 mb-6 font-body">
                Discover our handpicked selection of contemporary fashion that brings the latest trends to Pequot Lakes.
                From casual lakeside wear to elegant evening attire, we offer styles that perfectly blend sophistication with comfort.
              </p>
              <p className="text-cosmic/70 mb-8 font-body">
                Our boutique celebrates the unique character of small-town Minnesota while offering a shopping experience and selection you'd expect in a metropolitan setting. We pride ourselves on personal attention, styling advice, and creating a welcoming atmosphere where fashion becomes an accessible joy rather than an intimidating experience.
              </p>
              <ButtonComponent variant="secondary" size="lg">
                Explore Store
              </ButtonComponent>
            </ScrollReveal>
          </div>
        </div>
      </TexturedSection>

      {/* Pink Confetti Divider - Fourth transition */}
      <PinkConfettiDivider />

      {/* Enhanced Image Gallery Section */}
      <TexturedSection
        variant="accent"
        textureType="noise"
        className="section-spacing"
      >
        <div className="content-container">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-5xl font-heading font-bold mb-6 tracking-tight">
                <span className="gradient-text">
                  Fashion Lookbook
                </span>
              </h2>
              <p className="text-xl text-cosmic/70 font-body leading-relaxed mb-4">
                Explore our latest collections with enhanced visual styling and dramatic photography. Each season tells a unique story through color, texture, and silhouette.
              </p>
              <p className="text-lg text-cosmic/70 font-body leading-relaxed">
                Our lookbook serves as inspiration for creating your own distinctive style. Mix and match pieces to express your personality while embracing the quality and craftsmanship that defines our collection.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Hero Banner with enhanced image effects */}
          <ScrollReveal animation="zoom-in" delay={200}>
            <div className="mb-16">
              <HeroBanner
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3"
                alt="Fashion collection hero"
                overlayText="Summer Collection 2025"
                overlaySubtext="Bold colors and patterns for the season ahead"
                ctaText="View Collection"
                ctaLink="/collections/summer"
                patternOverlay={true}
              />
            </div>
          </ScrollReveal>
          
          {/* Product Gallery with enhanced images */}
          <div className="mb-16">
            <h3 className="text-3xl font-heading font-semibold mb-8 text-center">Featured Products</h3>
            <ProductGallery
              images={[
                {
                  src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3",
                  alt: "Summer Collection Dress",
                  category: "Summer"
                },
                {
                  src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3",
                  alt: "Spring Fashion",
                  category: "Spring"
                },
                {
                  src: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3",
                  alt: "Casual Collection",
                  category: "Casual"
                }
              ]}
              className="mb-8"
            />
          </div>
          
          {/* Image Effects Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="text-center">
                <h4 className="text-xl font-heading font-semibold mb-4">Duotone Effect</h4>
                <EnhancedImage
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3"
                  alt="Fashion with duotone effect"
                  effect="duotone"
                  aspectRatio="portrait"
                  className="rounded-lg overflow-hidden"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="text-center">
                <h4 className="text-xl font-heading font-semibold mb-4">Vibrant Effect</h4>
                <EnhancedImage
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3"
                  alt="Fashion with vibrant effect"
                  effect="vibrant"
                  aspectRatio="portrait"
                  className="rounded-lg overflow-hidden"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="text-center">
                <h4 className="text-xl font-heading font-semibold mb-4">Pattern Overlay</h4>
                <EnhancedImage
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3"
                  alt="Fashion with pattern overlay"
                  effect="pattern"
                  aspectRatio="portrait"
                  className="rounded-lg overflow-hidden"
                />
              </div>
            </ScrollReveal>
          </div>
          
          <div className="text-center mt-12">
            <ButtonComponent variant="primary" size="lg">
              View Full Lookbook
            </ButtonComponent>
          </div>
        </div>
      </TexturedSection>
      
      {/* Pink Dotted Path - Fifth transition */}
      <PinkDottedPath />

      {/* Boutique Experience Section */}
      <TexturedSection
        variant="primary"
        textureType="grid"
        className="section-spacing"
      >
        <div className="content-container">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-5xl font-heading font-bold mb-6 tracking-tight">
                <span className="gradient-text">
                  Our Boutique Experience
                </span>
              </h2>
              <p className="text-xl text-cosmic/70 font-body leading-relaxed mb-4">
                Step into a world where fashion meets personal attention. Our boutique offers a curated shopping experience
                with personalized styling advice and unique pieces you won't find anywhere else.
              </p>
              <p className="text-lg text-cosmic/70 font-body leading-relaxed">
                We believe shopping should be a joyful experience that celebrates your individuality. Our team is passionate about helping you discover pieces that make you feel confident and beautiful, creating a wardrobe that tells your unique story.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                icon: Heart,
                title: "Personal Styling",
                description: "One-on-one attention to help you find the perfect pieces for your style and occasion. Our expert stylists are here to guide you through every fashion decision, ensuring you look and feel confident. We take the time to understand your preferences, lifestyle, and aspirations, creating a personalized shopping experience that celebrates your individuality."
              },
              {
                icon: Star,
                title: "Unique Selection",
                description: "Carefully curated collection featuring both European and local designers. Each piece is handpicked to bring something special to your wardrobe, blending international trends with Minnesota charm. We focus on quality craftsmanship, sustainable practices, and timeless designs that transcend seasonal trends while keeping you stylishly current."
              },
              {
                icon: Sparkles,
                title: "Lakeside Fashion",
                description: "Styles that transition seamlessly from beach to evening events. Perfect for the Minnesota lifestyle where every day brings new adventures, from morning lakeside walks to elegant dinner parties. Our versatile pieces adapt to your busy schedule, offering comfort without compromising on sophistication, allowing you to navigate your day with confidence and grace."
              }
            ].map((item, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 200}>
                <div className="transform hover:scale-[1.02] transition-all duration-500">
                  <CardComponent
                    variant="feature"
                    icon={item.icon}
                    title={item.title}
                    className="h-full bg-gradient-to-br from-cloud/50 to-lavender/30 shadow-xl hover:shadow-2xl"
                  >
                    {item.description}
                  </CardComponent>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </TexturedSection>

      {/* Pink Wave Divider at bottom */}
      <PinkWaveDivider variant="bottom" />
    </div>
  );
};

export default Home;
