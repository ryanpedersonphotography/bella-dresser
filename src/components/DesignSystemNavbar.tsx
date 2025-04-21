import React from 'react';
import { useDesignSystem } from '../contexts/DesignSystemContext';
import { Palette } from 'lucide-react';

const DesignSystemNavbar: React.FC = () => {
  const { isStyled, setIsStyled, currentTheme, setCurrentTheme } = useDesignSystem();
  
  return (
    <div className="sticky top-[4.5rem] left-0 right-0 w-full bg-white/90 backdrop-blur-sm shadow-lg p-3 flex items-center space-x-4 pointer-events-auto z-50">
      {/* Styled/Unstyled Toggle */}
      <div className="inline-flex rounded-lg border border-lavender/30 p-1">
        <button 
          onClick={() => setIsStyled(true)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            isStyled 
              ? 'bg-lavender text-white' 
              : 'bg-transparent text-cosmic hover:bg-lavender/10'
          }`}
        >
          Styled
        </button>
        <button 
          onClick={() => setIsStyled(false)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            !isStyled 
              ? 'bg-lavender text-white' 
              : 'bg-transparent text-cosmic hover:bg-lavender/10'
          }`}
        >
          Unstyled
        </button>
      </div>
      
      {/* Theme Selector */}
      <div className="flex items-center space-x-2">
        <Palette className="text-cosmic/70" />
        <div className="flex space-x-1">
          <button 
            onClick={() => setCurrentTheme('default')}
            className={`w-6 h-6 rounded-full ${currentTheme === 'default' ? 'ring-2 ring-lavender' : ''}`}
            style={{ backgroundColor: '#ff6b98' }}
            aria-label="Default theme"
          />
          <button 
            onClick={() => setCurrentTheme('elegant')}
            className={`w-6 h-6 rounded-full ${currentTheme === 'elegant' ? 'ring-2 ring-lavender' : ''}`}
            style={{ backgroundColor: '#000000' }}
            aria-label="Elegant theme"
          />
          <button 
            onClick={() => setCurrentTheme('playful')}
            className={`w-6 h-6 rounded-full ${currentTheme === 'playful' ? 'ring-2 ring-lavender' : ''}`}
            style={{ backgroundColor: '#ff4d6d' }}
            aria-label="Playful theme"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignSystemNavbar;
