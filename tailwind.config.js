/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 2s ease-out', // Custom sliding animation
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 }, // Start off-screen to the left
          '100%': { transform: 'translateX(0)', opacity: 1 }, // End at the original position
        },
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'], // Add DM Sans font
      },
    },
  },
  plugins: [],
}

