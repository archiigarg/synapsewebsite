/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: '#FFFF00',
      },
      backgroundImage: {
        'dots-pattern': "radial-gradient(circle, black 1px, transparent 1px)",
      },
      backgroundSize: {
        'dots': '30px 30px', // Adjust this for larger spacing between dots
      },
    },
  },
  plugins: [],
}
