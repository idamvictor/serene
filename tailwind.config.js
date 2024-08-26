import { Layout } from 'lucide-react';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    // "./index.html",
    "./pages/**/*.{js,jsx}",
    ".Component/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx,svg}",
    // "./src/Component/Shared/**/*.{js,jsx}",
    // "./src/Component/SideBar.jsx"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      colors: {
        serene: "#FFF963",
        "serene-purple": "#E3DAFF",
        "serene-ash": "#EBE5DD",
        "serene-black": "#0B0B0B",
        "serene-blue": "#CBE6FF",
        "serene-gray": "#C7C7C7",
      },
      fontFamily: {
        NeueHass: ["Neue Haas Grotesk Display Pro", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "serene-image": "url('/src/assets/Images/Onboarding.png')",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // require('@tailwindcss/forms')
    // require('savvywombat/tailwindcss-grid-areas')
  ],
};