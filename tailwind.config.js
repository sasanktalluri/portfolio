/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    // One system monospace stack everywhere (same as the sasank.ts code card)
    fontFamily: {
      primary: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "\"Liberation Mono\"", "\"Courier New\"", "monospace"],
      mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "\"Liberation Mono\"", "\"Courier New\"", "monospace"],
    },
    extend: {

      colors: {
        customColor: '#d9b23d',
        customColor2: '#f2e9d8',
        primary: '#010a13', //1c1c22
        surface: '#0a1622',
        accent: {
          DEFAULT: '#0dc4d9', //00ff99
          hover: '#0da6c7', //00e187
        }
      },

      keyframes: {
        "flow-x": {
          "0%": { left: "-15%" },
          "100%": { left: "100%" },
        },
        "flow-y": {
          "0%": { top: "-15%" },
          "100%": { top: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        blink: "blink 1s steps(2) infinite",
        "flow-x": "flow-x 3.5s linear infinite",
        "flow-y": "flow-y 3.5s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}