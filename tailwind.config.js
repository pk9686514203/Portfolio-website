/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        royal: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bdc8ff',
          300: '#8e9fff',
          400: '#5b6dff',
          500: '#3342ff',
          600: '#1721ff',
          700: '#1319e6',
          800: '#1317b8',
          900: '#161b8f',
        },
        gold: {
          50: '#fefbea',
          100: '#fdf4c7',
          200: '#fbe891',
          300: '#f9d650',
          400: '#f7c221',
          500: '#e5a50a',
          600: '#c47e06',
          700: '#9c5a08',
          800: '#80450d',
          900: '#6b3910',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale': 'scale 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};