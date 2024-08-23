/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-second': '#F9F9F9',
        'bg-button': '#EEF6FF',
        'filter-text': '#A1A5B7',
        'main-bg': '#F1F1F2',
        'tag-text': '#2884EF'
      },
      maxWidth: {
        'blog-w': '1210px',
        'cards-w': '1300px'
      },
      borderRadius: {
        tag: '20px'
      },
      spacing: {
        '6px': '6px',
        '10px': '10px',
        '14px': '14px'
      },
      fontSize: {
        '22px': '22px'
      }
    }
  },
  plugins: []
}
