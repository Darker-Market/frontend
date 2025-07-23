/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SaintKDG", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
  safelist: [
    "text-legendary",
    "text-rare",
    "text-uncommon",
    "text-common",
    "text-epic",
    "text-unique",
    "text-artifact",
    "text-poor",
  ],
};
