import React, { useEffect, useRef } from 'react';
import PinkBlobContainer from '../components/PinkBlobContainer';
import PinkDiagonalDivider from '../components/PinkDiagonalDivider';
import ParticleBackground from './ParticleBackground';
import '../styles/newsletter-signup.css';

const NewsletterSignup: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Create confetti elements when component mounts
    if (sectionRef.current) {
      const section = sectionRef.current;
      
      // Create 15 confetti elements
      for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'newsletter-confetti';
        
        // Random size between 5px and 15px
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        // Random position
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.bottom = '0';
        
        // Random delay
        confetti.style.animationDelay = `${Math.random() * 4}s`;
        
        section.appendChild(confetti);
      }
    }
    
    // Cleanup function
    return () => {
      if (sectionRef.current) {
        const confettiElements = sectionRef.current.querySelectorAll('.newsletter-confetti');
        confettiElements.forEach(el => el.remove());
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-purple-800 to-purple-950 py-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="absolute inset-0 opacity-30">
        <PinkBlobContainer />
      </div>
      
      {/* Particle background effect - similar to hero */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <ParticleBackground
          count={80}
          color="#FF00FF"
          maxSpeed={0.3}
          minSize={1}
          maxSize={3}
          className="w-full h-full opacity-60"
        />
      </div>
      
      {/* Decorative elements - similar to hero */}
      <div className="newsletter-decorative-circle newsletter-decorative-circle-1"></div>
      <div className="newsletter-decorative-circle newsletter-decorative-circle-2"></div>
      
      {/* Top diagonal divider */}
      <div className="absolute top-0 left-0 w-full">
        <PinkDiagonalDivider />
      </div>
      
      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cloud mb-3">
              Join Our Fashion Family
            </h2>
            <p className="font-body text-lg text-cloud/90 max-w-md">
              Get exclusive deals, style tips & event invites delivered straight to your inbox.
            </p>
          </div>
          
          {/* Form */}
          <div className="md:w-1/2 w-full max-w-md">
            <form className="flex flex-col sm:flex-row gap-3 newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-grow px-6 py-4 rounded-full bg-cloud/95 text-cosmic placeholder:text-smokey/60 font-body focus:outline-none focus:ring-2 focus:ring-highlight newsletter-input"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-700 to-purple-900 text-white font-body font-medium newsletter-button"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-cloud/70 mt-3 text-center sm:text-left">
              By subscribing, you agree to our Privacy Policy. We promise not to spam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;