import flowbite from "flowbite/plugin";
import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '40px',
        lg: '80px',
        xl: '100px',
        '2xl': '120px',
      },
    },
    extend: {
      backgroundImage: {
        'bg-pattern': "url('/img/masuk.jpg')",
      },
      colors: {
        primary: '#181A1C',
        secondary: '#3254FF',
        gray: '#C1C2C4',
      },
    },
  },
  plugins: [
    flowbite,
    daisyui,
  ],
};
