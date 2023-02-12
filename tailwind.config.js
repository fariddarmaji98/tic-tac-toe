/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'text-pointer': 'pointer 1s infinite'
      },
      keyframes: {
        pointer: {
          '0%, 50%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        }
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'playfair-display': ['Playfair Display', 'serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'lora': ['Lora', 'serif'],
      'verdana': ['Verdana', 'sans-serif'],
      'source-sans-pro': ['Source Sans Pro']
    },
    fontSize: {
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
    },
  },
  plugins: [],
}