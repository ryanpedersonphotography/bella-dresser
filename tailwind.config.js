/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: '#FF00FF', // Electric Fuchsia
        secondary: '#5B3E96', // Cyber Grape
        accent: '#00E5E5', // Aqua Splash
        highlight: '#FFDD00', // Lemon Zest
        
        // Secondary colors
        peach: '#FF7E79', // Peachy Pink
        lavender: '#E2D5F8', // Lavender Mist
        mint: '#DEFFF2', // Mint Cream
        tangerine: '#FF8C42', // Tangerine Dream
        
        // Neutral foundation
        cosmic: '#121212', // Cosmic Black
        cloud: '#F8F5FF', // Cloud Whip
        plum: '#796E89', // Smokey Plum
      },
      fontFamily: {
        heading: ['Hatton', 'Clash Display', 'sans-serif'],
        body: ['Cabinet Grotesk', 'sans-serif'],
        accent: ['Voyage', 'serif'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'full': '9999px',
      },
      boxShadow: {
        'funky': '4px 4px 0 rgba(0, 0, 0, 0.1)',
        'neon': '0 0 15px rgba(255, 0, 255, 0.5)',
        'layered': '0 5px 15px rgba(0, 0, 0, 0.1), 0 15px 35px rgba(91, 62, 150, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-funky': 'linear-gradient(45deg, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
