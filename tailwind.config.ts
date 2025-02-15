import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "rgb(var(--primary-text-color))",
        secondary: "rgb(var(--secondary-text-color))",
        colorful: "#cc147f",
      },
      backgroundColor: {
        primary: "rgb(var(--primary-background))",
        secondary: "rgb(var(--secondary-background))",
        colorful: "#cc147f",
      },
      backgroundImage: {
        intro: "url('/images/hero-bg.webp')",
        numbers: "url('/images/stats-bg.jpg.webp')",
        "gradient-radial": "radial-gradient(var(--primary-background))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--primary-background))",
      },
      animation: {
        fadeinup: "fade-in-up 1s ease-in-out 0.25s 1",
        fadeindown: "fade-in-down 1s ease-in-out 0.25s 1",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translate3d(0,100%,0)" },
          "100%": { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translate3d(0,0,0)" },
          "100%": { opacity: "1", transform: "translate3d(0,100%,0)" },
        },
      },
      fontFamily: {
        sans: ["icomoon", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
