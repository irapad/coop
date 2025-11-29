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
          DEFAULT: '#97bd00ff', // Dime Lime
          light: '#d9ff33',
          foreground: '#000000', // Text on primary
          foregroundHover: '#202020ff',
          foregroundWhite: '#ffffffff',
        },
        accent: '#be3764ff', // Pink for "cute" highlights
        success: '#2abe5cff',
        danger: '#ff0033ff',
        background: '#ffffffff', // Deep dark background
        card: '#ffffffff', // Slightly lighter for cards
        textDark: '#000000ff',
        textMuted: '#303030ff',
        border: '#0fe4a0ff',
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
        'glow': '0 0 20px rgba(75, 75, 75, 0.23)',
      },
      backgroundImage: {
        'cute-gradient':
          'linear-gradient(135deg, #ccff00 0%, #d9ff33 35%, #ff4081 100%)',

        'lime-mint':
          'linear-gradient(120deg, #ccff00 0%, #0fe4a0ff 100%)',

        'soft-card':
          'linear-gradient(180deg, #eeffd8ff 0%, #f8ffeaff 100%)',

        'dark-to-lime':
          'linear-gradient(160deg, #000000ff 0%, #303030ff 40%, #ccff00 100%)',
      },
    },
  },
  plugins: [],
}
