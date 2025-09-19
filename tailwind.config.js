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
        // Earth Tones - Primary Colors
        'earth-brown': '#5D4E37',
        'sage-green': '#8FBC8F',
        'forest-green': '#2D5016',
        'wheat-gold': '#D2B48C',
        
        // Natural Backgrounds
        'cream-natural': '#F5F5DC',
        'soil-light': '#F4F1EB',
        'bark-dark': '#3C2415',
        'leaf-shadow': '#1A2E1A',
        
        // Accent Colors
        'sunset-orange': '#CD853F',
        'sky-blue': '#87CEEB',
        'rose-quartz': '#C19A6B',
        'stone-gray': '#696969',
        
        // Text Colors
        'charcoal': '#36454F',
        'moss-green': '#556B2F',
        'white-natural': '#FFFEF7',
        
        // Legacy colors for backward compatibility
        'cascara-marron': '#5D4E37',
        'pulpa-crema': '#F5F5DC',
        'verde-selva': '#2D5016',
        'amarillo-amazonico': '#D2B48C',
        'rosa-tropical': '#C19A6B',
        'negro-suave': '#3C2415',
        'gris-ceniza': '#696969',
        'blanco': '#FFFEF7',
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
        'nature-gradient': 'linear-gradient(135deg, #F5F5DC 0%, #F4F1EB 100%)',
        'earth-gradient': 'linear-gradient(135deg, #5D4E37 0%, #2D5016 50%, #8FBC8F 100%)',
        'sky-gradient': 'linear-gradient(135deg, #87CEEB 0%, #F5F5DC 50%, #D2B48C 100%)',
        'forest-gradient': 'linear-gradient(135deg, #2D5016 0%, #1A2E1A 100%)',
      },
      borderRadius: {
        'organic': '16px 8px 16px 8px',
        'nature': '20px 10px 20px 10px',
      },
    },
  },
  plugins: [],
}
