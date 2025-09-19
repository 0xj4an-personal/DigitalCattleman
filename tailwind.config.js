/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Enhanced Green Tones - Primary Colors
        'earth-brown': '#4A5D23',
        'sage-green': '#7BA05B',
        'forest-green': '#2F5233',
        'wheat-gold': '#B8A082',
        
        // Enhanced Natural Backgrounds
        'cream-natural': '#F0F4E8',
        'soil-light': '#E8F0E0',
        'bark-dark': '#2C3E1A',
        'leaf-shadow': '#1A2E1F',
        
        // Enhanced Accent Colors
        'sunset-orange': '#A67C3A',
        'sky-blue': '#7FB069',
        'rose-quartz': '#8F9B6B',
        'stone-gray': '#5A6B47',
        
        // Enhanced Text Colors
        'charcoal': '#2C3E1A',
        'moss-green': '#4A6741',
        'white-natural': '#F8FBF5',
        
        // Additional Green Variations
        'light-green': '#9BC088',
        'medium-green': '#6B8E5A',
        'dark-green': '#3E5A2F',
        'accent-green': '#5A7C4A',
        
        // Legacy colors for backward compatibility
        'cascara-marron': '#4A5D23',
        'pulpa-crema': '#F0F4E8',
        'verde-selva': '#2F5233',
        'amarillo-amazonico': '#B8A082',
        'rosa-tropical': '#8F9B6B',
        'negro-suave': '#2C3E1A',
        'gris-ceniza': '#5A6B47',
        'blanco': '#F8FBF5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'nature-glow': 'natureGlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        natureGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(143, 188, 143, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(143, 188, 143, 0.5)',
            transform: 'scale(1.02)'
          },
        },
      },
      backgroundImage: {
        'nature-gradient': 'linear-gradient(135deg, #F0F4E8 0%, #E8F0E0 100%)',
        'earth-gradient': 'linear-gradient(135deg, #4A5D23 0%, #2F5233 50%, #7BA05B 100%)',
        'sky-gradient': 'linear-gradient(135deg, #7FB069 0%, #F0F4E8 50%, #B8A082 100%)',
        'forest-gradient': 'linear-gradient(135deg, #2F5233 0%, #1A2E1F 100%)',
        'green-gradient': 'linear-gradient(135deg, #9BC088 0%, #6B8E5A 50%, #3E5A2F 100%)',
        'sage-gradient': 'linear-gradient(135deg, #7BA05B 0%, #4A6741 100%)',
        'moss-gradient': 'linear-gradient(135deg, #8F9B6B 0%, #5A6B47 100%)',
      },
      borderRadius: {
        'organic': '16px 8px 16px 8px',
        'nature': '20px 10px 20px 10px',
      },
    },
  },
  plugins: [],
}
