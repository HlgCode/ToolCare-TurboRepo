/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
/** @type {import('tailwindcss').Config} */

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
    colors: {
      "light-silver": "#D9D9D9",
      "pastel-orange": "#FFA750",
      "maastricht-lue": "#141736",
      "shadow-blue": "#7C8EA6",
    },
  },
  plugins: [],
});
