/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blueshade: {
          100: '#8BA3CB',
          500: '#718EBF',
          900: '#343C6A'
        },
        blackshade: {
          100: '#B1B1B1',
          500: '#232323'
        },
        grayshade: {
          500: '#F5F7FA'
        }
      },
    }
  },
  plugins: [],
}

