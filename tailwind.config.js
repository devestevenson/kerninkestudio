/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kerninkYellow: "#FAE000",
        kerninkWhite: "#FFFFFF",
        kerninkGrayLight: "#707070",
        kerninkGrayDark: "#2D2D2D",
        kerninkBlack: "#161616",
        kerninkWhatsApp: "#128C7E"
      },
      fontFamily: {
        poppinsItalic: ['poppinsItalic'],
        poppinsRegular: ['poppinsRegular'],
        poppinsBold: ['poppinsBold'],
      },
    },
  },
  plugins: [],
}

