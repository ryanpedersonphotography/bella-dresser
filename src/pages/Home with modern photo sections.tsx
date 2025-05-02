import React from 'react';
import TexturedSection from '../components/TexturedSection';
import CardComponent from '../components/CardComponent';
import { Star, Sparkles, Heart } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import ScrollReveal from '../components/ScrollReveal';
import WatercolorBorderedImage from '../components/WatercolorBorderedImage';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Welcome Section */}
      <TexturedSection
        variant="secondary"
        textureType="grid"
        className="section-spacing"
      >
        <div className="content-container">
          <ScrollReveal animation="fade-up">
            <div className="py-8 mb-10">
              <h1 className="text-6xl font-heading font-bold mb-8 text-center relative z-10">
                <span className="gradient-text relative">
                  Welcome to our little website
                  <div className="absolute -bottom-3 left-0 right-0 h-1 bg-pink-500/50 rounded-full"></div>
                </span>
              </h1>
            </div>
          </ScrollReveal>
          
          {/* Top grid with boutique image and welcome text */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-8">
            <ScrollReveal animation="fade-right" className="relative group md:col-span-3">
              {/* Added rounded-t-lg to create rounded top corners */}
              <div className="overflow-hidden rounded-t-lg">
                <WatercolorBorderedImage
                  src="/images/illustrations/bellas_dresser_no_background2.png"
                  alt="Bella's Dresser Boutique"
                  borderColor="#f9f5eb"
                  borderOpacity={0.8}
                  borderWidth={8}
                  borderBlur={3}
                  className="w-full"
                />
                <p className="text-center mt-3 text-xl text-cosmic/80 italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  We are located in downtown Pequot Lakes
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-left" className="md:col-span-2">
              <div className="flex flex-col justify-center h-full text-block">
                <p className="text-xl text-cosmic/70 mb-6 font-body leading-relaxed">
                  Welcome to Bella's Dresser, a charming boutique nestled in the heart of Pequot Lakes, Minnesota. Our store brings European elegance to the lakeside community, offering a carefully curated selection of unique fashion pieces.
                </p>
                <p className="text-xl text-cosmic/70 mb-0 font-body leading-relaxed">
                Meet Bella, our French-born fashion maven who spent years in the heart of Paris before bringing her sophisticated European flair to our lakeside boutique! Her motto? "La mode doit être fabuleuse, amusante, et accessible à tous!"              </p>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Aneta section with large, bold, centered purple message */}
          <div className="relative mt-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Message from Aneta in large, bold, centered purple script font */}
              <div className="md:col-span-7 md:col-start-1 md:pr-0 relative">
                <div className="text-center mb-10">
                  <p className="text-4xl md:text-5xl leading-relaxed font-bold mb-4" 
                     style={{ 
                       fontFamily: "'Dancing Script', cursive",
                       color: '#4A1D96' // Dark purple color
                     }}>
                    I hope you'll stop by soon to experience our European-inspired fashion in person!
                  </p>
                  <p className="text-2xl md:text-3xl font-bold"
                     style={{
                       fontFamily: "'Dancing Script', cursive",
                       color: '#4A1D96' // Dark purple color
                     }}>
                    ~ Bella
                  </p>
                </div>
              </div>
              
              {/* Empty column to create space */}
              <div className="md:col-span-1"></div>
              
              {/* Right-side image positioned with the CSS values */}
              <div className="md:col-span-4 relative">
                <div 
                  className="md:absolute md:right-0"
                  style={{
                    top: '-180px', // From your browser inspector
                    right: '0px'    // From your browser inspector
                  }}
                >
                  <WatercolorBorderedImage
                    src="/images/illustrations/aneta_transparent.png"
                    alt="Aneta - Owner of Bella's Dresser"
                    borderColor="#f9f5eb"
                    borderOpacity={0.8}
                    borderWidth={8}
                    borderBlur={3}
                    className="w-[380px] max-w-full mx-auto md:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TexturedSection>

      {/* Featured Collection - with no gap to previous section */}
      <TexturedSection
        variant="primary"
        textureType="noise"
        className="section-spacing mt-0" // Removed top margin
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
                  src: "/images/carousel/123_1.jpg",
                  alt: "Fashion Collection Item 1"
                },
                {
                  src: "/images/carousel/123_1-2.jpg",
                  alt: "Fashion Collection Item 2"
                },
                {
                  src: "/images/carousel/123_1-3.jpg",
                  alt: "Fashion Collection Item 3"
                },
                {
                  src: "/images/carousel/123_1-4.jpg",
                  alt: "Fashion Collection Item 4"
                },
                {
                  src: "/images/carousel/123_1-5.jpg",
                  alt: "Fashion Collection Item 5"
                }
              ]}
              autoplaySpeed={5000}
              className="group-hover:shadow-2xl transition-all duration-500"
            />
          </div>
        </div>
      </TexturedSection>

      {/* Rest of code remains unchanged */}
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
                    src: "/images/carousel/123_1-6.jpg",
                    alt: "European elegance fashion display"
                  },
                  {
                    src: "/images/carousel/123_1-7.jpg",
                    alt: "Sophisticated European style"
                  }
                ]}
                autoplaySpeed={6000}
                className="group-hover:shadow-2xl transition-all duration-500"
              />
            </ScrollReveal>
          </div>
        </div>
      </TexturedSection>

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
                    src: "/images/carousel/123_1-8.jpg",
                    alt: "Small town boutique collection"
                  },
                  {
                    src: "/images/carousel/123_1-9.jpg",
                    alt: "Contemporary small town style"
                  },
                  {
                    src: "/images/carousel/u8218395921_httpss.mj.runUvC-YK0XPdY_make_the_background_more_152980cf-94e6-4299-a83b-ce6dc83cb9e8_1.png",
                    alt: "Unique boutique fashion"
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

      {/* Boutique Experience Section */}
      {/* <TexturedSection
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
      </TexturedSection> */}
    </div>
  );
};

export default Home;