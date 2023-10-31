/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.css"
    // "./node_modules/tw-elements/dist/js/**/*.js"
    
  ],
  theme: {
    color:{
      black: "#000",
      grey: "grey",
      blue: "#0096FF",
      whitesmoke: "#F5F5F5"

    },
    extend: {},
    screens: {
      sm:{min: "300px", max:"767px"},
      ms: {min:"370px", max:"424px"},
      mm: {min:"425px", max:"767px"},
      md: {min:"768px", max:"1023px"},
      lg:{min: "1024px", max:"1439px"},
      xl: {min:"1440px", max:"1535px"},
      "2xl": { min:"1536px"}
    },
  },
  // plugins: [require("tw-elements-react/dist/plugin.cjs")],
}




// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

