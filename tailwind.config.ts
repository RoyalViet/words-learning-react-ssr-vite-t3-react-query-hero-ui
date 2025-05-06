import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: { Merriweather: "Merriweather", Noto: "Noto Sans" } },
    screens: {
      xs: { max: "639px" },
      only_sm: { max: "767px" },
      sm: { max: "767px" },
      md: { max: "1023px" },
      lg: { max: "1279px" },
      xl: { max: "1535px" },
      "2xl": { min: "1536px" },
      lg_992: "992px",
      // xs: { max: "639px" },
      // only_sm: { min: "640px", max: "767px" },
      // sm: { max: "767px" },
      // md: { min: "768px", max: "1023px" },
      // lg: { min: "1024px", max: "1279px" },
      // xl: { min: "1280px", max: "1535px" },
      // "2xl": { min: "1536px" },
      // lg_992: "992px",
    },
  },
  darkMode: "class",
  // important: true,
  plugins: [heroui()],
} satisfies Config;
