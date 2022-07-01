/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'main': [ 'Playfair Display', 'serif', ],
        'serif': ['ui-serif', 'Georgia',],
        
      },
      colors: {
        'toygreen':'#24E795',
        'toygray': '#297272E',
        'toyblack': '#0B0B0B',
        'toyblackk': '#373737'
        
      }
    },
  },
  plugins: [],
}
