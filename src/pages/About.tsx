import React from 'react';
import { Star, Heart, Sparkles } from 'lucide-react';
import '../styles/about.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      {/* Background decorative elements */}
      <div className="bg-gradient-radial"></div>
      <div className="bg-gradient-conic"></div>
      
      <div className="about-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <div>
              <h2 className="hero-subtitle">Our Story</h2>
              <h1 className="hero-title">
                <span className="gradient-text">Meet Aneta</span>
              </h1>
            </div>
            <p className="hero-paragraph">
              Born and raised in Poland, Aneta brought her European sense of style and fashion expertise to the heart of Minnesota.
              Her journey from Warsaw to Pequot Lakes is a story of passion, determination, and the pursuit of making women feel beautiful.
            </p>
            <p className="hero-paragraph">
              With over 15 years of experience in fashion retail, Aneta carefully curates each piece in the store,
              bringing together the best of European elegance and Minnesota charm.
            </p>
            <blockquote className="hero-blockquote">
              <div className="quote-icon">
                <Sparkles size={32} />
              </div>
              <p className="quote-text">
                "Fashion is not just about clothes, it's about feeling confident and beautiful in your own skin."
              </p>
              <footer className="quote-footer">- Aneta, Founder</footer>
            </blockquote>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-glow"></div>
            <div className="hero-image-frame">
              {/* Owner's image with boutique background */}
              <div className="hero-image-background">
                {/* Boutique background */}
                <div className="hero-image-gradient"></div>
                <div className="hero-image-overlay"></div>
                
                {/* Soft vignette overlay */}
                <div className="hero-image-vignette"></div>
                
                {/* Stylized photo of Aneta */}
                <div className="hero-image-portrait">
                  <div className="portrait-frame">
                    <div className="portrait-tint"></div>
                    <img
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3"
                      alt="Aneta, Founder of Bella Dresser"
                      className="portrait-image"
                    />
                    <div className="portrait-overlay"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="portrait-badge">
                  <div className="badge">
                    <p className="badge-text">Founder & Fashion Curator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <div className="values-header">
            <h2 className="values-title">
              <span className="gradient-text">Our Values</span>
            </h2>
            <p className="values-description">
              At Bella Dresser, we believe in creating an experience that goes beyond shopping.
              Our values reflect our commitment to style, quality, and personal connection.
            </p>
          </div>

          <div className="values-grid">
            {[
              {
                icon: Star,
                title: "Quality First",
                description: "We carefully select each piece for its quality, ensuring our collection meets the highest standards."
              },
              {
                icon: Heart,
                title: "Personal Touch",
                description: "Every customer receives personalized attention and styling advice tailored to their unique style."
              },
              {
                icon: Sparkles,
                title: "European Flair",
                description: "We bring the latest European fashion trends to Minnesota, creating a unique shopping experience."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="value-card"
              >
                <div className="card-noise"></div>
                <div className="card-content">
                  <div className={`card-icon ${index === 0 ? 'card-icon-star' : index === 1 ? 'card-icon-heart' : 'card-icon-sparkles'}`}>
                    <value.icon className="icon" />
                  </div>
                  <h3 className="card-title">{value.title}</h3>
                  <p className="card-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
