import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        accent: "var(--color-accent)",
        card: {
          bg: "var(--color-card-bg)",
          border: "var(--color-card-border)",
          hover: "var(--color-card-hover)",
          shadow: "var(--color-card-shadow)",
        },
        green: {
          DEFAULT: "var(--color-green)",
          light: "var(--color-green-light)",
        },
        red: {
          DEFAULT: "var(--color-red)",
          light: "var(--color-red-light)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
