import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-yellow": "#f3d02a",
        "brand-purple": "#9739b0",
        "brand-canvas": "#f3eff7",
        "brand-surface": "#faf7fc",
      },
      fontFamily: {
        heading: ["var(--font-termina)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
