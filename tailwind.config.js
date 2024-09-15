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
          primary: "#3752A3",
          secondary: "#265f50",
        },
        
        
        
        
      },
    },
  plugins: [],
};
// font-family: "Roboto", sans-serif;
// font-family: "Montserrat", sans-serif;