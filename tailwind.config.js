/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ccff00', // Dime Lime
          light: '#d9ff33',
          foreground: '#000000', // Text on primary
        },
        accent: '#ff4081', // Pink for "cute" highlights
        success: '#00e676',
        danger: '#ff1744',
        background: '#0f0f11', // Deep dark background
        card: '#1c1c1e', // Slightly lighter for cards
        textDark: '#ffffff',
        textMuted: '#8e8e93',
        border: '#2c2c2e',
      },
      fontFamily: {
        sans: ['Noto Sans Thai', 'Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'app': '430px',
      },
      borderRadius: {
        'app': '24px',
        'tab': '32px',
        'full': '9999px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(204, 255, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
