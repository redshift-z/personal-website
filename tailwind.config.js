/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: { 
    'sm': '430px', 
    'md': '768px', 
    'lg': '1280px', 
    'xl': '1920px', 
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

