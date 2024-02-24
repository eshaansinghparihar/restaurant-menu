/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '640px'},
        // Add more screen sizes if needed
      },
      shapes: {
        circle: {
          _: {
            'borderRadius': '50%',
          }
        }
      },
      maxWidth: {
        icons: '9rem'
      }
    }
  },
  plugins: [],
}