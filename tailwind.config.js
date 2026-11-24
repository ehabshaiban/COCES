module.exports = {
  content: [
    './src/views/**/*.twig',
    './src/assets/js/**/*.js',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        choco: {
          DEFAULT: '#3B2314',
          deep: '#241207',
          soft: '#6B4A32',
        },
        cream: {
          DEFAULT: '#F2E4C8',
          bright: '#FBF5E8',
        },
        terra: {
          DEFAULT: '#B4552D',
          deep: '#8F3E1D',
        },
        butter: '#E9B44C',
        leaf: '#5F7A4E',
      },
      fontFamily: {
        sans: ['Almarai', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
