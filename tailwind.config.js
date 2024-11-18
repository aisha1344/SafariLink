/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          roboto: ["Roboto", 'sans-serif']
        },
      
        colors: {
          primary: "#0164C8",
          secondary: "#01C3CC",
        },
        
        
        
        
      },
    },
  plugins: [],
};
// font-family: "Roboto", sans-serif;
// font-family: "Montserrat", sans-serif;