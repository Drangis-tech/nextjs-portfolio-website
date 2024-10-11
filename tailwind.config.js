// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
    "content/**/*.mdx",
    "./src/**/*.{ts,tsx}", // Added from the new config
  ],
  darkMode: "class", // Ensure darkMode setting is included
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-calsans)"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
        "gradient-transition":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      },
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        spotlight: "spotlight 2s ease .75s 1 forwards", // Added from the new config
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "75%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        "fade-left": {
          "0%": { transform: "translateX(100%)", opacity: "0%" },
          "30%": { transform: "translateX(0%)", opacity: "100%" },
          "100%": { opacity: "0%" },
        },
        "fade-right": {
          "0%": { transform: "translateX(-100%)", opacity: "0%" },
          "30%": { transform: "translateX(0%)", opacity: "100%" },
          "100%": { opacity: "0%" },
        },
        title: {
          "0%": { "line-height": "0%", "letter-spacing": "0.25em", opacity: "0" },
          "25%": { "line-height": "0%", opacity: "0%" },
          "80%": { opacity: "100%" },
          "100%": { "line-height": "100%", opacity: "100%" },
        },
        spotlight: { // Added from the new config
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      screens: {
        sm: '640px',  // Small devices like phones
        md: '768px',  // Medium devices like tablets
        lg: '1024px', // Large devices like laptops
        xl: '1280px', // Extra large devices like desktops
        '2xl': '1536px', // 2xl devices
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
  ],
};