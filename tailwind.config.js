/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.css"
    // "./node_modules/tw-elements/dist/js/**/*.js"
    
  ],
  theme: {
    colors:{
    },
    extend: {},
    screens: {
      sm:{min: "300px", max:"767px"},
      md: {min:"768px", max:"1023px"},
      lg:{min: "1280px", max:"1279px"},
      xl: {min:"1280px", max:"1535px"},
      "2xl": { min:"1536px"}
    },
  },
  // plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

