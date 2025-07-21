import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SaintKDG", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
