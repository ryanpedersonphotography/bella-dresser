import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TexturedSection from '../components/TexturedSection';
import CardComponent from '../components/CardComponent';
import { Star, Sparkles, Heart, Play, Volume2, VolumeX, MessageCircle } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import ScrollReveal from '../components/ScrollReveal';
import WatercolorBorderedImage from '../components/WatercolorBorderedImage';
import { StoryBookButton } from '../components/StoryBookButton';
import { StoryBookButtonGroup } from '../components/StoryBookButtonGroup';
import VideoWithFallbackAlt from '../components/VideoWithFallbackAlt';
import WhimsicalDressCard from '../components/WhimsicalDressCard';
import '../styles/whimsical-cards.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [, setVideoEnded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true); // Show play button initially
  const [videoPlaying, setVideoPlaying] = useState(false); // Track if video is playing
  const [showIntroScreen, setShowIntroScreen] = useState(true); // Show intro screen with choice buttons
  const [isMuted, setIsMuted] = useState(true); // Track if audio is muted, default to muted
  const [showTalkButton, setShowTalkButton] = useState(true); // Show talk to Bella button
  const [isWaggling, setIsWaggling] = useState(false); // Track if button is currently waggling
  const [showButtons, setShowButtons] = useState(false); // Show interaction buttons after talking to Bella
  const [showDressCards, setShowDressCards] = useState(false); // Show dress cards on sides
  const [isExitingCards, setIsExitingCards] = useState(false); // Track exit animation
  const [showStoryVideo, setShowStoryVideo] = useState(false); // Show Bella's story video
  const [storyEnded, setStoryEnded] = useState(false); // Track if story has ended
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
    setShowButtons(true); // Show buttons again when video ends
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
    
    // Show the interaction buttons immediately
    setShowButtons(true);
  };

  return (
    <div className="relative">
      {/* Intro or Video Section */}
      {showIntroScreen ? (
        /* Intro Screen with choice buttons */
        <div className="w-full relative overflow-hidden bg-gradient-to-b from-pink-100 to-purple-100" style={{ minHeight: '90vh' }}>
          {/* Magical sparkle overlay */}
          <div className="absolute inset-0">
            {/* Floating sparkles */}
            <div className="absolute top-[10%] left-[15%] w-4 h-4 bg-white rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-[20%] right-[20%] w-3 h-3 bg-yellow-200 rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-[30%] left-[25%] w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-80" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-[15%] right-[35%] w-3 h-3 bg-pink-200 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-[30%] left-[20%] w-4 h-4 bg-white rounded-full animate-pulse opacity-70" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-[20%] right-[25%] w-2 h-2 bg-yellow-100 rounded-full animate-pulse opacity-80" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-[40%] right-[15%] w-3 h-3 bg-purple-200 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute bottom-[40%] left-[35%] w-2 h-2 bg-pink-300 rounded-full animate-pulse opacity-70" style={{ animationDelay: '1.2s' }}></div>
            
            {/* Magical star bursts */}
            <svg className="absolute top-[25%] left-[10%] w-8 h-8 text-purple-300 opacity-40 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l1.5 5.5L19 6l-5.5 1.5L12 13l-1.5-5.5L5 6l5.5-1.5L12 0z"/>
            </svg>
            <svg className="absolute top-[60%] right-[12%] w-6 h-6 text-pink-300 opacity-50 animate-spin-slow" style={{ animationDelay: '1.5s' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l1.5 5.5L19 6l-5.5 1.5L12 13l-1.5-5.5L5 6l5.5-1.5L12 0z"/>
            </svg>
            <svg className="absolute bottom-[35%] left-[15%] w-5 h-5 text-yellow-200 opacity-40 animate-spin-slow" style={{ animationDelay: '2.5s' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l1.5 5.5L19 6l-5.5 1.5L12 13l-1.5-5.5L5 6l5.5-1.5L12 0z"/>
            </svg>
            
            {/* Fairy dust trails */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-purple-300 to-transparent animate-shimmer"></div>
              <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-pink-300 to-transparent animate-shimmer" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-yellow-200 to-transparent animate-shimmer" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-0 right-[45%] w-px h-full bg-gradient-to-b from-transparent via-purple-200 to-transparent animate-shimmer" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12 text-center relative" style={{ 
              fontFamily: "'Dancing Script', cursive",
              color: '#4A1D96',
              textShadow: '0 0 20px rgba(74, 29, 150, 0.3), 0 0 40px rgba(74, 29, 150, 0.1)'
            }}>
              Welcome to Bella's Dresser
            </h1>
            
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl">
              {/* Fairytale Card Button 1 */}
              <button
                onClick={() => {
                  setShowIntroScreen(false);
                  // Don't auto-start the video
                  setTimeout(() => setShowPlayButton(false), 300);
                }}
                className="flex-1 group"
              >
                <div className="relative bg-gradient-to-b from-[#f9f5eb] to-[#f5e6d3] rounded-2xl p-6 shadow-lg border-3 border-[#d4a574] transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                     style={{
                       background: 'linear-gradient(135deg, #faf8f3 0%, #f9f5eb 50%, #f5e6d3 100%)',
                       boxShadow: '0 6px 20px rgba(139, 69, 19, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)'
                     }}>
                  {/* Corner flourishes */}
                  <div className="absolute top-0 left-0 w-12 h-12 opacity-20"
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 6C6 6 12 12 24 12C12 12 6 18 6 18' stroke='%234A1D96' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                         backgroundRepeat: 'no-repeat'
                       }}></div>
                  <div className="absolute top-0 right-0 w-12 h-12 opacity-20 rotate-90"
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 6C6 6 12 12 24 12C12 12 6 18 6 18' stroke='%234A1D96' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                         backgroundRepeat: 'no-repeat'
                       }}></div>
                  
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-4xl animate-bounce-gentle">✨</div>
                    <span className="text-2xl md:text-3xl font-bold" style={{ 
                      fontFamily: "'Dancing Script', cursive",
                      color: '#4A1D96'
                    }}>Meet Bella</span>
                  </div>
                  <p className="text-base md:text-lg text-[#3c2f2f] mt-2 text-center" style={{ fontFamily: "'Georgia', serif" }}>
                    Interactive Experience
                  </p>
                  
                  {/* Sparkle effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-300"></div>
                </div>
              </button>
              
              {/* Fairytale Card Button 2 */}
              <button
                onClick={() => navigate('/no-header')}
                className="flex-1 group"
              >
                <div className="relative bg-gradient-to-b from-[#f9f5eb] to-[#f5e6d3] rounded-2xl p-6 shadow-lg border-3 border-[#d4a574] transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                     style={{
                       background: 'linear-gradient(135deg, #faf8f3 0%, #f9f5eb 50%, #f5e6d3 100%)',
                       boxShadow: '0 6px 20px rgba(139, 69, 19, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)'
                     }}>
                  {/* Corner flourishes */}
                  <div className="absolute top-0 left-0 w-12 h-12 opacity-20"
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 6C6 6 12 12 24 12C12 12 6 18 6 18' stroke='%234A1D96' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                         backgroundRepeat: 'no-repeat'
                       }}></div>
                  <div className="absolute top-0 right-0 w-12 h-12 opacity-20 rotate-90"
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 6C6 6 12 12 24 12C12 12 6 18 6 18' stroke='%234A1D96' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                         backgroundRepeat: 'no-repeat'
                       }}></div>
                  
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-4xl animate-bounce-gentle">🌸</div>
                    <span className="text-2xl md:text-3xl font-bold" style={{ 
                      fontFamily: "'Dancing Script', cursive",
                      color: '#4A1D96'
                    }}>Browse Boutique</span>
                  </div>
                  <p className="text-base md:text-lg text-[#3c2f2f] mt-2 text-center" style={{ fontFamily: "'Georgia', serif" }}>
                    Simple Site Experience
                  </p>
                  
                  {/* Sparkle effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-300"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Interactive Bella Section */
        <div className="w-full relative overflow-hidden" style={{ minHeight: '85vh' }}>
          {/* Reversed gradient background - pinkish hue at top */}
          <div className="absolute inset-x-0 top-[-8%] h-[42%] md:h-[55%] bg-gradient-to-b from-pink-100 to-blue-300"></div>
          {/* Background Images - Positioned individually */}
          <div className="absolute inset-0">
            {/* Left Tree - Pink/Coral - Hidden on mobile, moved 8% closer to store */}
            <img 
              src="/images/illustrations/tree_1.png"
              alt="Pink watercolor tree"
              className="absolute left-[16%] top-[-13%] h-[60%] w-auto opacity-80 blur-[0.5px] hidden md:block"
              style={{ filter: 'blur(0.5px) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))' }}
            />
            
            {/* Center Store - Moved up by 15% on mobile, moved down 10% from previous desktop position */}
            <img 
              src="/images/illustrations/store.png"
              alt="Bella's Dresser Boutique"
              className="absolute left-1/2 top-[2%] md:top-[5%] h-[40%] md:h-[50%] w-auto transform -translate-x-1/2 opacity-85"
              style={{ filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))' }}
            />
            
            {/* Right Tree - Blue/Teal - Hidden on mobile, moved 3% closer to store */}
            <img 
              src="/images/illustrations/tree_2.png"
              alt="Blue watercolor tree"
              className="absolute right-[19%] top-[-13%] h-[60%] w-auto opacity-80 blur-[0.5px] hidden md:block"
              style={{ filter: 'blur(0.5px) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))' }}
            />
          </div>
          
          {/* Transparent Bella Video - Made 10% bigger and moved down 5% */}
          <div className="absolute inset-0 flex justify-center" style={{ top: '20%' }}>
            <div className="md:flex md:justify-center md:absolute md:inset-0" style={{ top: '13%' }}>
              <VideoWithFallbackAlt
                key={showStoryVideo ? "story" : "bella"}
                ref={videoRef}
                webmSrc={showStoryVideo ? "/videos/story_transparent.webm" : "/videos/bella_clean_output.webm"}
                fallbackSrc={showStoryVideo ? "/videos/story_transparent.mov" : "/videos/bella_clean_output_alpha.mov"}
                playsInline
                preload="auto"
                muted={showStoryVideo ? false : isMuted}
                className="h-[550px] md:h-[515px] lg:h-[660px] w-auto object-contain z-10"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))', opacity: 1 }}
                autoPlay={showStoryVideo ? true : !showPlayButton}
                onEnded={() => {
                  if (showStoryVideo) {
                    setStoryEnded(true);
                    // Don't reset showStoryVideo - keep video visible on last frame
                  } else {
                    handleVideoEnd();
                  }
                }}
              />
            </div>
          </div>
          
          {/* Meet Bella button overlay */}
          {showPlayButton && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <button
                onClick={startVideo}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Play size={24} className="text-white animate-pulse" />
                <span className="text-xl font-medium">Meet Bella</span>
              </button>
            </div>
          )}
          
          {/* Talk to Bella button - positioned on top area for mobile, to the right for desktop */}
          {!showIntroScreen && showTalkButton && (
            <div className="absolute inset-0">
              {/* Mobile positioning - moved up by 15% to prevent button clipping */}
              <div className="absolute inset-0 flex justify-center md:hidden" style={{ top: '0%' }}>
                <div className={`${isWaggling ? 'animate-wiggle' : ''} max-w-xs z-20`}>
                  <StoryBookButton 
                    onClick={talkToBella}
                    className="shadow-xl hover:shadow-2xl transition-all duration-300"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))'
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <MessageCircle size={20} className="text-[#3c2f2f]" />
                      <span>Talk to Bella</span>
                    </div>
                  </StoryBookButton>
                </div>
              </div>
              
              {/* Desktop positioning - to the right of video */}
              <div className="hidden md:flex items-center justify-center absolute inset-0">
                <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto px-4">
                  {/* Invisible video placeholder for positioning reference */}
                  <div className="h-[336px] md:h-[390px] lg:h-[500px] w-auto aspect-video flex-shrink-0 opacity-0 pointer-events-none"></div>
                  
                  {/* Button positioned close to the right of video, moved down 17% */}
                  <div className="absolute left-[calc(50%+160px)] lg:left-[calc(50%+180px)] xl:left-[calc(50%+200px)] top-[calc(50%+17%)] -translate-y-1/2 max-w-xs">
                    <div className={`${isWaggling ? 'animate-wiggle' : ''}`}>
                      <StoryBookButton 
                        onClick={talkToBella}
                        className="shadow-xl hover:shadow-2xl transition-all duration-300"
                        style={{
                          filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))'
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <MessageCircle size={20} className="text-[#3c2f2f]" />
                          <span>Talk to Bella</span>
                        </div>
                      </StoryBookButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Sound toggle button - visible at all times during video playback */}
          {!showIntroScreen && !showPlayButton && (
            <button 
              onClick={() => {
                setIsMuted(!isMuted);
                if (videoRef.current) {
                  videoRef.current.muted = !isMuted;
                }
              }}
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

          {/* Buttons that appear after talking to Bella - positioned at bottom for mobile, to the right for desktop */}
          {showButtons && (
            <div className="absolute inset-0">
              {/* Mobile positioning - moved up by 15% to prevent button clipping */}
              <div className="absolute inset-0 flex justify-center md:hidden" style={{ top: '70%' }}>
                <div 
                  className="z-50 max-w-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  <StoryBookButtonGroup>
                    {!storyEnded ? (
                      <>
                        <StoryBookButton
                          onClick={(e) => {
                            e?.preventDefault();
                            e?.stopPropagation();
                            setShowStoryVideo(true);
                          }}
                          className="shadow-xl hover:shadow-2xl transition-all duration-300"
                          style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))' }}
                        >
                          Learn Bella's Story
                        </StoryBookButton>
                        
                        <StoryBookButton
                          onClick={(e) => {
                            e?.preventDefault();
                            e?.stopPropagation();
                            
                            // Toggle dress cards with exit animation
                            if (showDressCards) {
                              setIsExitingCards(true);
                              setTimeout(() => {
                                setShowDressCards(false);
                                setIsExitingCards(false);
                              }, 600); // Match animation duration
                            } else {
                              setShowDressCards(true);
                            }
                          }}
                          className="shadow-xl hover:shadow-2xl transition-all duration-300"
                          style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))' }}
                        >
                          Bella's Favorite Dresses
                        </StoryBookButton>
                      </>
                    ) : (
                      <>
                        <StoryBookButton
                          onClick={(e) => {
                            e?.preventDefault();
                            e?.stopPropagation();
                            // TODO: Implement Paris video or content
                          }}
                          className="shadow-xl hover:shadow-2xl transition-all duration-300"
                          style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))' }}
                        >
                          Why Paris Inspires Me
                        </StoryBookButton>
                        
                        <StoryBookButton
                          onClick={(e) => {
                            e?.preventDefault();
                            e?.stopPropagation();
                            // TODO: Navigate to dress exploration
                          }}
                          className="shadow-xl hover:shadow-2xl transition-all duration-300"
                          style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))' }}
                        >
                          Start Exploring Dresses
                        </StoryBookButton>
                      </>
                    )}
                  </StoryBookButtonGroup>
                </div>
              </div>
              
              {/* Desktop positioning - to the right of video */}
              <div className="hidden md:flex items-center justify-center absolute inset-0">
                <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto px-4">
                  {/* Invisible video placeholder for positioning reference */}
                  <div className="h-[336px] md:h-[390px] lg:h-[500px] w-auto aspect-video flex-shrink-0 opacity-0 pointer-events-none"></div>
                  
                  {/* Buttons positioned close to the right of video, moved down 17% */}
                  <div 
                    className="absolute left-[calc(50%+160px)] lg:left-[calc(50%+180px)] xl:left-[calc(50%+200px)] top-[calc(50%+17%)] -translate-y-1/2 z-50 max-w-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <StoryBookButtonGroup>
                      {!storyEnded ? (
                        <>
                          <StoryBookButton
                            onClick={(e) => {
                              e?.preventDefault();
                              e?.stopPropagation();
                              setShowStoryVideo(true);
                            }}
                            className="shadow-xl hover:shadow-2xl transition-all duration-300"
                            style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))' }}
                          >
                            Learn Bella's Story
                          </StoryBookButton>
                          
                          <StoryBookButton
                            onClick={(e) => {
                              e?.preventDefault();
                              e?.stopPropagation();
                              
                              // Toggle dress cards with exit animation
                              if (showDressCards) {
                                setIsExitingCards(true);
                                setTimeout(() => {
                                  setShowDressCards(false);
                                  setIsExitingCards(false);
                                }, 600); // Match animation duration
                              } else {
                                setShowDressCards(true);
                              }
                            }}
                            className="shadow-xl hover:shadow-2xl transition-all duration-300"
                            style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))' }}
                          >
                            Bella's Favorite Dresses
                          </StoryBookButton>
                        </>
                      ) : (
                        <>
                          <StoryBookButton
                            onClick={(e) => {
                              e?.preventDefault();
                              e?.stopPropagation();
                              // TODO: Implement Paris video or content
                            }}
                            className="shadow-xl hover:shadow-2xl transition-all duration-300"
                            style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))' }}
                          >
                            Why Paris Inspires Me
                          </StoryBookButton>
                          
                          <StoryBookButton
                            onClick={(e) => {
                              e?.preventDefault();
                              e?.stopPropagation();
                              // TODO: Navigate to dress exploration
                            }}
                            className="shadow-xl hover:shadow-2xl transition-all duration-300"
                            style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))' }}
                          >
                            Start Exploring Dresses
                          </StoryBookButton>
                        </>
                      )}
                    </StoryBookButtonGroup>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Whimsical Dress Cards - Show to the left of Bella, below gradient */}
          {showDressCards && (
            <div className="absolute bottom-[-10%] left-[1%] lg:left-[2%] 
                            flex gap-4 z-20">
              <WhimsicalDressCard
                image="/images/carousel/123_1-4.jpg"
                title="Vintage Rose"
                price="$98"
                description="Timeless elegance"
                delay={isExitingCards ? 300 : 0}
                isExiting={isExitingCards}
              />
              <WhimsicalDressCard
                image="/images/carousel/123_1-2.jpg"
                title="Parisian Evening"
                price="$124"
                description="Elegant dinner wear"
                delay={isExitingCards ? 150 : 150}
                isExiting={isExitingCards}
              />
              <WhimsicalDressCard
                image="/images/carousel/123_1-3.jpg"
                title="Morning Café"
                price="$67"
                description="Comfortable chic"
                delay={isExitingCards ? 0 : 300}
                isExiting={isExitingCards}
              />
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
              <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ 
                fontFamily: "'Dancing Script', cursive",
                color: '#4A1D96'
              }}>
                Latest Arrivals
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ 
                fontFamily: "'Dancing Script', cursive",
                color: '#4A1D96'
              }}>
                European Elegance Meets Minnesota Charm
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ 
                fontFamily: "'Dancing Script', cursive",
                color: '#4A1D96'
              }}>
                Small Town Boutique, Big City Style
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
              <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ 
                fontFamily: "'Dancing Script', cursive",
                color: '#4A1D96'
              }}>
                Our Boutique Experience
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                emoji: "👗",
                title: "Personal Styling Magic",
                description: "Step into our enchanted boutique where our fairy godmother stylists help you discover your perfect look. Every visit is a magical transformation!"
              },
              {
                emoji: "✨",
                title: "Treasures from Afar",
                description: "Our boutique is filled with hidden gems from distant lands - each piece tells a story of European elegance meeting Minnesota magic."
              },
              {
                emoji: "🌸",
                title: "Lakeside Enchantment",
                description: "From sunrise strolls to moonlit soirées, our collection weaves together comfort and charm for every chapter of your day."
              }
            ].map((item, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 200}>
                <div className="relative group">
                  {/* Storybook-style card */}
                  <div className="relative bg-gradient-to-b from-[#f9f5eb] to-[#f5e6d3] rounded-3xl p-8 shadow-lg border-4 border-[#d4a574] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                       style={{
                         background: 'linear-gradient(135deg, #faf8f3 0%, #f9f5eb 50%, #f5e6d3 100%)',
                         boxShadow: '0 8px 30px rgba(139, 69, 19, 0.15), inset 0 1px 0 rgba(255,255,255,0.6)'
                       }}>
                    {/* Decorative corner flourishes */}
                    <div className="absolute top-0 left-0 w-16 h-16 opacity-30"
                         style={{
                           backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 8C8 8 16 16 32 16C16 16 8 24 8 24' stroke='%234A1D96' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                           backgroundRepeat: 'no-repeat'
                         }}></div>
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-30 rotate-90"
                         style={{
                           backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 8C8 8 16 16 32 16C16 16 8 24 8 24' stroke='%234A1D96' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                           backgroundRepeat: 'no-repeat'
                         }}></div>
                    
                    {/* Emoji icon */}
                    <div className="text-6xl mb-6 text-center animate-bounce-gentle">
                      {item.emoji}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center" 
                        style={{ 
                          fontFamily: "'Dancing Script', cursive",
                          color: '#4A1D96'
                        }}>
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg text-[#3c2f2f] text-center leading-relaxed"
                       style={{ fontFamily: "'Georgia', serif" }}>
                      {item.description}
                    </p>
                    
                    {/* Decorative bottom flourishes */}
                    <div className="absolute bottom-0 left-0 w-16 h-16 opacity-30 rotate-180"
                         style={{
                           backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 8C8 8 16 16 32 16C16 16 8 24 8 24' stroke='%234A1D96' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                           backgroundRepeat: 'no-repeat'
                         }}></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 opacity-30 -rotate-90"
                         style={{
                           backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 8C8 8 16 16 32 16C16 16 8 24 8 24' stroke='%234A1D96' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                           backgroundRepeat: 'no-repeat'
                         }}></div>
                  </div>
                  
                  {/* Sparkle effects on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
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