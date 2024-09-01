import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gypsy-jewels": "#643A5B",
        "frosting-cream": "#fffbee",
        "jurassic-park": "#3a6443",
      },
      fontFamily: {
        sans: ["var(--font-modern-era)", ...defaultTheme.fontFamily.sans],
        serif: [
          "var(--font-domaine-display)",
          ...defaultTheme.fontFamily.serif,
        ],
      },
      borderRadius: {
        xxl: "2rem",
      },
      spacing: {
        "5.5": "1.375rem",
      },
    },
  },
  corePlugins: { fontSize: false },
  plugins: [require("tailwindcss-fluid-type")],
};
export default config;
