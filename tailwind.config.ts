import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Professional Cream Color Palette - Clean & Elegant
        pearl: '#FAFAF8',           // Professional cream background
        'pearl-cream': '#F5F3F0',   // Slightly warmer cream
        'pearl-dark': '#E8E5E0',    // Light taupe accent
        gold: '#8B7355',            // Warm brown/gold
        'gold-dark': '#6B5344',     // Deeper brown
        sage: '#D9D5CF',            // Soft taupe accent
        'sage-dark': '#B8AFA5',     // Medium taupe
        'pastel-pink': '#D4B5A5',   // Soft warm accent
        'pastel-lavender': '#C9B8A8', // Soft neutral accent
        'pastel-mint': '#C4D4C8',   // Soft green accent
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
