/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Sora', 'Arial', 'sans-serif'],
      serif: ['Sora', 'Georgia', 'serif'],
      mono: ['Sora', 'monospace'],
    },
    extend: {
      screens: {
        'md-lg': '976px',
      },
    },
  },
  plugins: [],
};
