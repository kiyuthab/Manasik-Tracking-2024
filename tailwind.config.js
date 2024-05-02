/* eslint-disable no-undef */
import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1C363E",
        white: "#ffffff",
        red: "#FF4545",
        green: "#54FF45",
        yellow: "#FFD245",
        gr: "#BECCB8",
        yell: "#FCD51E",
      },
    },
  },
  plugins: [],
});
