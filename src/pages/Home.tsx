import React from 'react';
import TexturedSection from '../components/TexturedSection';
import CardComponent from '../components/CardComponent';
import { Star, Sparkles, Heart } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import EnhancedHeroSlideshow from '../components/EnhancedHeroSlideshow';
import DirectionalDiagonalDivider from '../components/DirectionalDiagonalDivider';
import PinkBlobContainer from '../components/PinkBlobContainer';
import PinkDiagonalDivider from '../components/PinkDiagonalDivider';
import PinkConfettiDivider from '../components/PinkConfettiDivider';
// import PinkDottedPath from '../components/PinkDottedPath';
import ScrollReveal from '../components/ScrollReveal';


const Home: React.FC = () => {
  
  return (
    <div className="relative -mt-24"> {/* Negative margin to counteract the padding-top from main */}
      <EnhancedHeroSlideshow />

      {/* Directional Diagonal Divider - First transition */}
      <DirectionalDiagonalDivider direction="up" variant="hero" />

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
            </div>
          </ScrollReveal>
          <div className="relative group">
            <div className="absolute -inset-2 bg-pink-500/30 rounded-2xl opacity-30 blur-md group-hover:opacity-40 transition duration-500"></div>
            <ImageCarousel
              imagesPerView={3}
              images={[
                {
                  src: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3",
                  alt: "Summer Collection"
                },
                {
                  src: "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-4.0.3",
                  alt: "Beach Essentials"
                },
                {
                  src: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3",
                  alt: "Evening Wear"
                },
                {
                  src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3",
                  alt: "Spring Fashion"
                },
                {
                  src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3",
                  alt: "Casual Collection"
                },
                {
                  src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3",
                  alt: "Elegant Styles"
                }
              ]}
              autoplaySpeed={5000}
              className="group-hover:shadow-2xl transition-all duration-500"
            />
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
              <p className="text-xl text-cosmic/70 mb-6 font-body leading-relaxed">
                Experience our carefully curated collection of unique pieces that blend sophisticated European style with comfortable
                lakeside living. Each item is selected to make you feel confident and beautiful, no matter the occasion.
              </p>
              <p className="text-xl text-cosmic/70 mb-8 font-body leading-relaxed">
                Our buyers travel throughout Europe to discover emerging designers and timeless classics that bring continental sophistication to the Midwest. We believe fashion should be both beautiful and functional, allowing you to express your personal style while complementing your active lifestyle.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" className="asymmetric-layout-media relative group">
              <div className="absolute -inset-2 bg-pink-500/30 rounded-2xl opacity-30 blur-md group-hover:opacity-40 transition duration-500"></div>
              <ImageCarousel
                imagesPerView={1}
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
              <div className="absolute -inset-2 bg-pink-500/30 rounded-2xl opacity-30 blur-md group-hover:opacity-40 transition duration-500"></div>
              <ImageCarousel
                imagesPerView={1}
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
              <p className="text-xl text-cosmic/70 mb-6 font-body leading-relaxed">
                Discover our handpicked selection of contemporary fashion that brings the latest trends to Pequot Lakes.
                From casual lakeside wear to elegant evening attire, we offer styles that perfectly blend sophistication with comfort.
              </p>
              <p className="text-xl text-cosmic/70 mb-8 font-body leading-relaxed">
                Our boutique celebrates the unique character of small-town Minnesota while offering a shopping experience and selection you'd expect in a metropolitan setting. We pride ourselves on personal attention, styling advice, and creating a welcoming atmosphere where fashion becomes an accessible joy rather than an intimidating experience.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </TexturedSection>

      {/* Pink Confetti Divider - Fourth transition */}
      <PinkConfettiDivider />

      {/* Enhanced Image Gallery Section - LOOKBOOK COMMENTED OUT (might add back later) */}
      
      {/* Pink Dotted Path - Fifth transition - COMMENTED OUT */}
      {/* <PinkDottedPath /> */}

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
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                icon: Heart,
                title: "Personal Styling",
                description: "One-on-one attention to help you find the perfect pieces for your style and occasion. Our expert stylists guide you through every fashion decision, ensuring you look and feel confident."
              },
              {
                icon: Star,
                title: "Unique Selection",
                description: "Carefully curated collection featuring both European and local designers. Each piece is handpicked to bring something special to your wardrobe, blending international trends with Minnesota charm."
              },
              {
                icon: Sparkles,
                title: "Lakeside Fashion",
                description: "Styles that transition seamlessly from beach to evening events. Perfect for the Minnesota lifestyle where every day brings new adventures, from morning lakeside walks to elegant dinner parties."
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

      {/* Directional Diagonal Divider at bottom */}
      <DirectionalDiagonalDivider direction="down" variant="bottom" />
    </div>
  );
};

export default Home;
