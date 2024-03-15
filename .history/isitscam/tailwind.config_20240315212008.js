/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}","./node_m odules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite')],
}
