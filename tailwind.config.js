/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        animation: {
            bounce: 'bounce 0.5s ease-in-out',
        },
        keyframes: {
            bounce: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
            },
        },
    },
  },
  plugins: [],
}