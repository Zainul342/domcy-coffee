/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        domcy: {
          green: '#103530', // Deep Slate Green (Updated Ref)
          lightGreen: '#174A43', // Adjusted Lighter shade
          cream: '#F2F0E9', // Off-white (Secondary)
          accent: '#926644', // Toffee Brown (Accent 1)
          amber: '#E6A817', // Amber Honey (Accent 2 - CTA)
          brown: '#1A1110', // Coffee Bean (Depth)
          black: '#0A0A0A',
          status: {
            available: '#10B981',
            limited: '#F59E0B',
            soldOut: '#EF4444',
          },
        },
      },
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
      },
      backgroundImage: {
        'pattern-overlay': "url('https://www.transparenttextures.com/patterns/noise.png')",
      },
      animation: {
        marquee: 'marquee 12s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        'preserve-3d': {
          'transform-style': 'preserve-3d',
        },
      });
    },
  ],
};
