/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        PlayFair: ['Playfair Display', 'serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Comme: ['Comme', 'sans-serif'],
        Lexend: ['Lexend', 'sans-serif']
      },
      screens: {
        xs: "550px",
        md: "850px",
        xl: "1180px",
        "2xl": "1280px",
      },


    },
  },
  plugins: [],

}

