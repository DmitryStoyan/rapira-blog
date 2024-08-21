/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-second': '#F9F9F9',
        'bg-button': '#EEF6FF',
        'filter-text': '#A1A5B7'
      },
      maxWidth: {
        'blog-w': '1210px'
      }
    }
  },
  plugins: []
}
