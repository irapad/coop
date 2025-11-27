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
          DEFAULT: '#8b3f9e',
          light: '#a855f7',
        },
        accent: '#f59e0b',
        success: '#10b981',
        danger: '#ef4444',
        background: '#f8f9fa',
        card: '#ffffff',
        textDark: '#1e293b',
        textMuted: '#64748b',
      },
      fontFamily: {
        sans: ['Noto Sans Thai', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'app': '430px',
      },
      borderRadius: {
        'app': '16px',
        'tab': '24px',
      },
    },
  },
  plugins: [],
}
