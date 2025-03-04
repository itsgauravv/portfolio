import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = (module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|avatar|button|input|link|navbar|toast|divider|ripple|spinner|form).js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
});

export default tailwindConfig;
