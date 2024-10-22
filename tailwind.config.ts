import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#424B54",
        primary: "#93A8AC",
        secondary: "#E2B4BD",
        thirth: "#c5d5e4",
      },
      fontFamily: {
        rubick: ["Rubick", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
