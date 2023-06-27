/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const path = require("path");

const defaultTheme = require("tailwindcss/defaultTheme"); // Importa defaultTheme

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "../../packages/ui/src/**/*.{vue,js,ts,jsx,tsx}",

    "../../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

    
    // path.join(
    //   path.dirname(require.resolve("@material-tailwind/react")),
    //   "components/**/*.{js,ts,jsx,tsx}"
    // ),
    // path.join(
    //   path.dirname(require.resolve("@material-tailwind/react")),
    //   "theme/components/**/*.{js,ts,jsx,tsx}"
    // ),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      "light-silver": "#D9D9D9",
      "pastel-orange": "#FFA750",
      "maastricht-lue": "#141736",
      "shadow-blue": "#7C8EA6",
    },
  },
  plugins: [],
});
