/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        birdCustom: "#9CDCE5",
        grayCustom: "#CCE7F2",
        lightBlueCustom: "#83CEF0",
        blueCustom: "#02A2ED",
        navyCustom: "#035476",
        blackCustom: "#035476",
        footerCustom: "#F3F3F3",
        grayCustom2: "#F7F7F7",
        cyanCustom: "#12AEC3",
      }
    },
  },
  plugins: [],
}

