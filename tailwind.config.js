/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Sora', 'Arial', 'sans-serif'],
      serif: ['Sora', 'Georgia', 'serif'],
      mono: ['Sora', 'monospace'],
      Syne: ['Syne'],
    },
    extend: {
      screens: {
        'md-lg': '976px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // Skeleton
        '@keyframes skeleton': {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.5,
          },
        },

        '.skeleton': {
          backgroundColor: 'rgb(209 213 219)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },

        // Skeleton another color
        '@keyframes skeleton-old': {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.5,
          },
        },

        '.skeleton-old': {
          backgroundColor: 'rgb(156 163 175)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
      };
      addUtilities(newUtilities, {
        variants: ['skeleton'], // Aplica a classe apenas na variante "skeleton"
      });
    },
  ],
};
