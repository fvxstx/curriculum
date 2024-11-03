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
        hover: {
          primary: "#93A8BB",
          secondary: "#E2B4CF",
          thirth: "#c5d5ff",
          foreground: "#424B6F",
        },
      },
      fontFamily: {
        supreme: [
          "Supreme-Variable", // Primary variable font
          "Supreme-Regular", // Fallback to regular
          "Supreme-Bold", // Additional fallback
          "sans-serif", // Generic fallback
        ],
        "supreme-thin": ["Supreme-Thin", "sans-serif"], // Thin variant
        "supreme-bold": ["Supreme-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
