/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('/img/masuk.jpg')",
      },
      colors: {
        primary: '#181A1C',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

