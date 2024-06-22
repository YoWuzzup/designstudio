import type { Config } from "tailwindcss";

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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadeinup: "fade-in-up 1s ease-in-out 0.25s 1",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translate3d(0,100%,0)" },
          "100%": { opacity: "1", transform: "translate3d(0,0,0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
