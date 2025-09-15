/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Futuristic color scheme
        'electric-blue': '#00D4FF',
        'neon-purple': '#8B5CF6',
        'cyber-green': '#00FF88',
        'space-black': '#0A0A0F',
        'dark-surface': '#1A1A2E',
        'neon-pink': '#FF006E',
        'cyber-yellow': '#FFBE0B',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'futura': ['Futura', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'slide-in': 'slide-in 0.5s ease-out',
        'neon-flicker': 'neon-flicker 1.5s infinite alternate',
        'bounce-slow': 'bounce 3s infinite',
      },
      scale: {
        '102': '1.02',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px #00D4FF' },
          '100%': { boxShadow: '0 0 40px #00D4FF, 0 0 60px #00D4FF' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
}

