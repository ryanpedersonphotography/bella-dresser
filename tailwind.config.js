/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors with enhanced saturation
        primary: '#FF00FF', // Electric Fuchsia
        'primary-saturated': '#FF40FF',
        secondary: '#5B3E96', // Cyber Grape
        'secondary-saturated': '#6B4EAE',
        accent: '#00E5E5', // Aqua Splash
        'accent-saturated': '#00FFFF',
        highlight: '#FFDD00', // Lemon Zest
        'highlight-saturated': '#FFE500',
        
        // Secondary colors
        peach: '#FF7E79', // Peachy Pink
        'peach-saturated': '#FF8F8B',
        lavender: '#E2D5F8', // Lavender Mist
        mint: '#DEFFF2', // Mint Cream
        tangerine: '#FF8C42', // Tangerine Dream
        'tangerine-saturated': '#FF9D5C',
        
        // Neutral foundation
        cosmic: '#121212', // Cosmic Black
        cloud: '#F8F5FF', // Cloud Whip
        plum: '#796E89', // Smokey Plum
      },
      fontFamily: {
        heading: ['"Clash Display"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Cabinet Grotesk"', '"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        accent: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        '7xl': '4.5rem',   // h2
        '8xl': '6rem',     // between h1 and h2
        '9xl': '7.5rem',   // h1
        'display-1': '10rem',
        'display-2': '8.5rem',
        'display-3': '7rem',
        'title-1': '5rem',
        'title-2': '4rem',
        'title-3': '3rem',
        'body-xl': '1.5rem',
        'body-lg': '1.25rem',
        'body-md': '1.125rem',
        'body-sm': '0.875rem',
        'body-xs': '0.75rem',
      },
      letterSpacing: {
        'tightest': '-0.02em',
        'tighter': '-0.01em',
      },
      lineHeight: {
        'none': '0.95',
        'tight': '1.1',
        'snug': '1.15',
        'relaxed': '1.6',
      },
      boxShadow: {
        'funky': '4px 4px 0 rgba(0, 0, 0, 0.1)',
        'neon': '0 0 15px rgba(255, 0, 255, 0.5)',
        'layered': '0 5px 15px rgba(0, 0, 0, 0.1), 0 15px 35px rgba(91, 62, 150, 0.1)',
        'multi': '0 5px 15px rgba(0, 0, 0, 0.1), 0 15px 35px rgba(91, 62, 150, 0.25)',
        'inner-glow': 'inset 0 0 20px rgba(255, 0, 255, 0.2)',
        'neon-intense': '0 0 20px rgba(255, 0, 255, 0.7), 0 0 30px rgba(255, 0, 255, 0.4), 0 0 40px rgba(255, 0, 255, 0.2)',
        'neon-accent': '0 0 15px rgba(0, 229, 229, 0.7), 0 0 25px rgba(0, 229, 229, 0.4)',
        'neon-highlight': '0 0 15px rgba(255, 221, 0, 0.7), 0 0 25px rgba(255, 221, 0, 0.4)',
        'floating': '0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)',
        'pressed': 'inset 0 2px 8px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 10px 30px rgba(91, 62, 150, 0.2), 0 5px 15px rgba(0, 0, 0, 0.05)',
        '3d-primary': '5px 5px 0 rgba(255, 0, 255, 0.5)',
        '3d-secondary': '5px 5px 0 rgba(91, 62, 150, 0.5)',
        '3d-accent': '5px 5px 0 rgba(0, 229, 229, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'parallax': 'parallaxScroll 1s ease-out forwards',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'rotate-in': 'rotateIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'ripple': 'ripple 0.8s ease-out forwards',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'flip': 'flip 1s ease-out forwards',
        'swing': 'swing 1s ease-in-out infinite',
        'tada': 'tada 1s ease-in-out',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'jello': 'jello 1s both',
        'rubber-band': 'rubberBand 1s both',
        'glow-pulse': 'glowPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        flip: {
          '0%': { transform: 'perspective(400px) rotateY(0)' },
          '100%': { transform: 'perspective(400px) rotateY(360deg)' },
        },
        swing: {
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
          '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
          '100%': { transform: 'scale(1) rotate(0)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
        jello: {
          '0%, 11.1%, 100%': { transform: 'none' },
          '22.2%': { transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
          '33.3%': { transform: 'skewX(6.25deg) skewY(6.25deg)' },
          '44.4%': { transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
          '55.5%': { transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
          '66.6%': { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
          '77.7%': { transform: 'skewX(0.390625deg) skewY(0.390625deg)' },
          '88.8%': { transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)' },
        },
        rubberBand: {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 0, 255, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 0, 255, 0.8), 0 0 40px rgba(255, 0, 255, 0.4)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        parallaxScroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-5%)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '70%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-10deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-funky': 'linear-gradient(45deg, var(--tw-gradient-stops))',
        'gradient-cosmic': 'linear-gradient(135deg, rgba(91, 62, 150, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%)',
        'gradient-shine': 'linear-gradient(60deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        'dots': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(91, 62, 150, 0.1)' /%3E%3C/svg%3E\")",
        'grid': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='rgba(91, 62, 150, 0.05)' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
      },
      opacity: {
        '5': '0.05',
        '15': '0.15',
        '35': '0.35',
        '45': '0.45',
        '55': '0.55',
        '65': '0.65',
        '85': '0.85',
        '95': '0.95',
      },
    },
  },
  plugins: [],
};
