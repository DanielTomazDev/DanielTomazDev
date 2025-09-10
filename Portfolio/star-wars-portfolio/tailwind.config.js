/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sw-gold': '#FFD700',
        'sw-blue': '#00BFFF',
        'sw-red': '#FF0000',
        'sw-dark': '#0A0A0A',
        'sw-gray': '#1A1A1A',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'star-wars': ['Star Jedi', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'twinkle': 'twinkle 4s linear infinite',
        'lightsaber': 'lightsaber 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        lightsaber: {
          '0%': { boxShadow: '0 0 5px #00BFFF, 0 0 10px #00BFFF, 0 0 15px #00BFFF' },
          '100%': { boxShadow: '0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #00BFFF' },
        }
      },
    },
  },
  plugins: [],
}
