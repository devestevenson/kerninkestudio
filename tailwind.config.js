/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cYellow: "#FAE000",
        cWhite: "#FFFFFF",
        cGrayLight: "#707070",
        cGrayDark: "#2D2D2D",
        cBlack: "#161616",
        cWhatsApp: "#128C7E"
      },
      fontFamily: {
        poppinsItalic: ['poppinsItalic'],
        poppinsRegular: ['poppinsRegular'],
        poppinsMedium: ['poppinsMedium'],
        poppinsSemibold: ['poppinsSemibold'],
        poppinsBold: ['poppinsBold'],
      },
    },
  },
  plugins: [],
}

