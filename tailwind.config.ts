import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#002e80",
      },
      aspectRatio: {
        "6/4": "6 / 4",
        "5/2": "5 / 2",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "125ch",
          },
        },
      },
      keyframes: {
        wiggle: {
          "35%": { transform: "rotate(17deg)" },
          "55%": { transform: "rotate(-17deg)" },
          "65%": { transform: "rotate(17deg)" },
          "75%": { transform: "rotate(-17deg)" },
          "100%": { transform: "rotate(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite 1s",
      },
      transitionProperty: {
        fadeIn: "visible opacity transform",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
