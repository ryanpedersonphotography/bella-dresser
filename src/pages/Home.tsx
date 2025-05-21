import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TexturedSection from '../components/TexturedSection';
import CardComponent from '../components/CardComponent';
import { Star, Sparkles, Heart, Play, Volume2, VolumeX, MessageCircle } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import ScrollReveal from '../components/ScrollReveal';
import WatercolorBorderedImage from '../components/WatercolorBorderedImage';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [videoEnded, setVideoEnded] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>("/videos/intro.mp4");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true); // Show play button initially
  const [videoPlaying, setVideoPlaying] = useState(false); // Track if video is playing
  const [showIntroScreen, setShowIntroScreen] = useState(true); // Show intro screen with choice buttons
  const [isMuted, setIsMuted] = useState(true); // Track if audio is muted, default to muted
  const [showTalkButton, setShowTalkButton] = useState(true); // Show talk to Bella button
  const [isWaggling, setIsWaggling] = useState(false); // Track if button is currently waggling
  const [showFloatingCarousel, setShowFloatingCarousel] = useState(false); // Control floating carousel visibility
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Effect to handle periodic waggling
  useEffect(() => {
    if (!showIntroScreen && showTalkButton) {
      // Set up interval for waggling every 3 seconds
      const waggleInterval = setInterval(() => {
        setIsWaggling(true);
        // Turn off waggling after 1 second
        setTimeout(() => {
          setIsWaggling(false);
        }, 1000);
      }, 3000);
      
      // Initial waggle after a short delay
      const initialTimeout = setTimeout(() => {
        setIsWaggling(true);
        setTimeout(() => {
          setIsWaggling(false);
        }, 1000);
      }, 500);
      
      // Clean up
      return () => {
        clearInterval(waggleInterval);
        clearTimeout(initialTimeout);
      };
    }
  }, [showIntroScreen, showTalkButton]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setVideoPlaying(false);
  };
  
  const startVideo = () => {
    setShowPlayButton(false);
    // Don't auto-play video, wait for Talk to Bella button click
    setVideoPlaying(false);
  };
  
  const talkToBella = () => {
    // Unmute and play video
    setIsMuted(false);
    
    if (videoRef.current) {
      if (videoPlaying) {
        // If video is already playing, just unmute
        videoRef.current.muted = false;
      } else {
        // If video not playing, start it and unmute
        setShowPlayButton(false);
        setVideoPlaying(true);
        videoRef.current.muted = false;
        videoRef.current.play()
          .catch(e => console.error("Video play failed:", e));
      }
    }
    
    // Hide the talk button after it's been clicked
    setShowTalkButton(false);
  };

  // Use React's useCallback to create a stable function reference
  const playNextVideo = React.useCallback((videoSrc: string) => {
    try {
      // Preload the next video before showing transition
      const tempVideo = document.createElement('video');
      tempVideo.preload = 'auto';
      tempVideo.src = videoSrc;
      
      // Update states for video transition
      setIsTransitioning(true);
      setCurrentVideo(videoSrc);
      setVideoEnded(false);
      setVideoPlaying(true);
      setShowPlayButton(false);
      
      // Maintain same audio settings for seamless experience
      const wasMuted = isMuted;
      
      // Ensure video plays after a short delay (reduced for smoother transition)
      setTimeout(() => {
        if (videoRef.current) {
          // Preserve mute state from previous video
          videoRef.current.muted = wasMuted;
          const playPromise = videoRef.current.play();
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // Small delay before showing video for smoother experience
                setTimeout(() => setIsTransitioning(false), 50);
              })
              .catch(e => {
                console.error("Video play failed:", e);
                setIsTransitioning(false);
                // If autoplay fails, show the play button again
                setShowPlayButton(true);
              });
          } else {
            // For browsers where play() doesn't return a promise
            setTimeout(() => setIsTransitioning(false), 50);
          }
        }
      }, 50); // Reduced delay for faster transition
    } catch (err) {
      console.error("Error in playNextVideo:", err);
      setIsTransitioning(false);
      setShowPlayButton(true);
    }
  }, [isMuted]);
  return (
    <div className="relative">
      {/* Intro or Video Section */}
      {showIntroScreen ? (
        /* Intro Screen with choice buttons */
        <div className="w-full relative overflow-hidden bg-gradient-to-b from-pink-100 to-purple-100" style={{ minHeight: '90vh' }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <div className="mb-8">
              <img 
                src="/images/illustrations/bella_dresser_larger.png" 
                alt="Bella's Dresser Boutique" 
                className="w-full max-w-lg mx-auto"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center" style={{ 
              fontFamily: "'Dancing Script', cursive",
              color: '#4A1D96'
            }}>
              Welcome to Bella's Dresser
            </h1>
            
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl">
              <button
                onClick={() => {
                  setShowIntroScreen(false);
                  // Don't auto-start the video
                  setTimeout(() => setShowPlayButton(false), 300);
                }}
                className="flex-1 group flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Play size={24} className="text-white animate-pulse" />
                <span className="text-xl font-medium">Meet Bella (Interactive Experience)</span>
              </button>
              
              <button
                onClick={() => navigate('/no-header')}
                className="flex-1 px-8 py-6 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium text-xl"
              >
                Simple Site Experience
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Video Section */
        <div className="w-full relative overflow-hidden" style={{ maxHeight: '90vh' }}>
          {/* Main video player */}
          <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <video 
              ref={videoRef}
              key={currentVideo} // Key changes trigger React to recreate the element
              playsInline
              preload="auto"
              className="w-full h-auto"
              style={{ maxHeight: '90vh', objectFit: 'contain' }}
              onEnded={handleVideoEnd}
              muted={isMuted}
              autoPlay={!showPlayButton} // Only autoplay if play button has been clicked
            >
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Meet Bella button overlay */}
            {showPlayButton && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button
                  onClick={startVideo}
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Play size={24} className="text-white animate-pulse" />
                  <span className="text-xl font-medium">Meet Bella</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Talk to Bella button - positioned to the right of Bella with better responsiveness */}
          {!showIntroScreen && showTalkButton && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={talkToBella}
                className={`relative px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 
                           text-white rounded-full shadow-xl hover:shadow-2xl 
                           transition-all duration-300 transform hover:scale-105 
                           ${isWaggling ? 'animate-wiggle' : ''} flex items-center gap-2
                           md:translate-x-16 lg:translate-x-24 xl:translate-x-32
                           sm:translate-y-0 translate-y-48`}
                aria-label="Talk to Bella"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))'
                }}
              >
                <MessageCircle size={20} className="text-white" />
                <span className="text-white text-lg font-medium">Talk to Bella</span>
              </button>
            </div>
          )}
          
          {/* Sound toggle button - visible at all times during video playback */}
          {!showIntroScreen && !showPlayButton && (
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-4 right-4 z-50 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 flex items-center gap-2"
              aria-label={isMuted ? "Turn Sound On" : "Turn Sound Off"}
            >
              {isMuted ? (
                <>
                  <VolumeX size={18} className="text-white" />
                  <span className="text-white text-sm font-medium">Turn Sound On</span>
                </>
              ) : (
                <>
                  <Volume2 size={18} className="text-white" />
                  <span className="text-white text-sm font-medium">Sound On</span>
                </>
              )}
            </button>
          )}

          {/* Buttons that appear after video ends - with the same responsive positioning */}
          {videoEnded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="relative flex flex-col gap-3 md:translate-x-16 lg:translate-x-24 xl:translate-x-32 sm:translate-y-0 translate-y-48 z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    playNextVideo("/videos/intro2.mp4");
                    return false;
                  }}
                  className="px-6 py-4 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium text-lg whitespace-nowrap inline-block text-center"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))' }}
                >
                  Learn Bella's Story
                </a>
                
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    playNextVideo("/videos/intro3.mp4");
                    
                    setTimeout(() => {
                      setShowFloatingCarousel(true);
                    }, 1000);
                    
                    return false;
                  }}
                  className="px-6 py-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium text-lg whitespace-nowrap inline-block text-center"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))' }}
                >
                  Bella's Favorite Dresses
                </a>
              </div>
            </div>
          )}

          {/* Floating Latest Arrivals carousel that appears below the video */}
          {showFloatingCarousel && (
            <div className="absolute bottom-0 left-0 right-0 z-40 p-6 bg-white/90 backdrop-blur-md animate-fade-in-up shadow-2xl rounded-t-3xl">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-heading font-bold mb-4 text-center">
                  <span className="gradient-text">Bella's Favorite Dresses</span>
                </h2>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-pink-500/30 rounded-2xl opacity-30 blur-md group-hover:opacity-40 transition duration-500"></div>
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
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => setShowFloatingCarousel(false)}
                      className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Only show spacer when not in intro screen */}
      {!showIntroScreen && (
        <div className="h-16 bg-white"></div>
      )}

      {/* Welcome Section */}
      <TexturedSection
        variant="secondary"
        textureType="grid"
        className="section-spacing"
      >
        <div className="content-container">
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
                Meet Aneta, our Polish-born fashion maven who spent years soaking up Parisian chic before bringing her European flair to our lakeside boutique! Her motto? "Fashion should be fabulous, fun, and affordable for everyone!"              </p>
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
                    ~ Aneta, The Shopkeeper
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
    </div>
  );
};

export default Home;