const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // Adjust paths as needed
    "./mdx-components.tsx",
    "content/**/*.mdx",
  ],
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
      },
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        shimmer: "shimmer 8s infinite",  // Shimmer animation
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "75%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "30%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "30%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        title: {
          "0%": {
            "line-height": "0",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0",
            opacity: "0",
          },
          "80%": {
            opacity: "1",
          },
          "100%": {
            "line-height": "1",
            opacity: "1",
          },
        },
        shimmer: {  // Shimmer keyframes
          "0%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
          "60%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "100%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),   // Ensure these plugins are installed
    require("tailwindcss-debug-screens"),
  ],
};