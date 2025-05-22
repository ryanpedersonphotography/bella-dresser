import React from 'react';
import { Palette } from 'lucide-react';

interface ThemeSwitcherProps {
  currentTheme: 'default' | 'elegant' | 'playful';
  changeTheme: (theme: 'default' | 'elegant' | 'playful') => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, changeTheme }) => {
  return (
    <div className="theme-switcher mb-12 p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-heading font-semibold">Theme Switcher</h2>
        <div className="flex items-center">
          <Palette className="mr-2 h-5 w-5 text-cosmic/70" />
          <span className="text-cosmic/70">
            Current Theme: <span className="font-medium">{currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}</span>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <button 
          onClick={() => changeTheme('default')}
          className={`theme-button ${currentTheme === 'default' ? 'active' : ''}`}
        >
          Default Theme
        </button>
        <button 
          onClick={() => changeTheme('elegant')}
          className={`theme-button ${currentTheme === 'elegant' ? 'active' : ''}`}
        >
          Elegant Theme
        </button>
        <button 
          onClick={() => changeTheme('playful')}
          className={`theme-button ${currentTheme === 'playful' ? 'active' : ''}`}
        >
          Playful Theme
        </button>
      </div>
      <p className="mt-4 text-sm text-cosmic/60">
        Switch between themes to see how components adapt to different design styles.
      </p>
    </div>
  );
};

export default ThemeSwitcher;
