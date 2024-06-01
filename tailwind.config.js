/** @type {import('tailwindcss').Config} */
export default {
  
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  
  theme: {
    extend:{
      colors:{
        primaryColor:"#93d0ea",
        blueColor:"#2A444B",
        headingColor:"#000000",
        textColor:"#000000",
        textColor2:"#3b97bf"

      },
      boxShadow:{
        panelShadow:"rgba (17, 12, 46, 0.15) 0px 48px 100px 0px",

      },
    },
    
  },
  plugins: [],
};


