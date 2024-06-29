/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        green: 'hsl(75, 94%, 57%)',
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 20%)',
        'dark-grey': 'hsl(0, 0%, 12%)',
        'off-black': 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            fontSize: '14px',
          },
        },
      },
    },
  },
  plugins: [],
};
