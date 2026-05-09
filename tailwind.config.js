/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        evo: {
          deep: '#07111F',
          petroleum: '#0B1B33',
          action: '#2563EB',
          cyan: '#06B6D4',
          success: '#22C55E',
          offwhite: '#F8FAFC',
          light: '#E5E7EB',
          dark: '#0F172A',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
