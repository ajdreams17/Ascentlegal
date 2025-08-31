/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            h1: { scrollMarginTop: '6rem' },
            h2: { scrollMarginTop: '6rem' },
            h3: { scrollMarginTop: '6rem' },
            'ul > li::marker': { color: '#6366f1' },   // indigo bullets
            a: { textDecoration: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
