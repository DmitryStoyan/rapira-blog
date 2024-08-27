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
        'tag-text': '#2884EF',
        'hover-checked': '#3E97FF',
        'hover-unchecked': '#3E97FF33'
      },
      maxWidth: {
        'blog-w': '1210px',
        'cards-w': '1300px'
      },
      minWidth: {
        '375px': '375px'
      },
      maxHeight: {
        '99vh': '99vh'
      },
      borderRadius: {
        tag: '20px'
      },
      spacing: {
        '6px': '6px',
        '10px': '10px',
        '14px': '14px',
        '400px': '25rem',
        '200%': '200%'
      },
      fontSize: {
        '22px': '22px',
        '32px': '32px'
      },
      screens: {
        'max-w-1200': { max: '1200px' },
        'max-w-1100': { max: '1100px' },
        'max-w-900': { max: '900px' },
        'max-w-800': { max: '800px' },
        'max-w-750': { max: '750px' },
        'max-w-600': { max: '600px' },
        'max-w-564': { max: '564px' },
        'max-w-375': { max: '375px' }
      }
    }
  },
  plugins: []
}
