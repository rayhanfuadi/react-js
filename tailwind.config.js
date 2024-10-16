import { Section } from "lucide-react";

const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('/img/masuk.jpg')",
      },
      colors: {
        primary: '#181A1C',
        secondary: '#3254FF',
        gray: '#C1C2C4',

      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

