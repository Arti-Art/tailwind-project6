/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class', // override default, so the dark: class looks at your html class instead of system settings
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        // image paths: think of navigating from the final compiled file, which is ./assets/css/style.css
        'dots': "url('../images/bg-dots.svg')",
      }
    },
  },
  plugins: [],
}
