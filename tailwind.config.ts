import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#1a1612",
          darker: "#0f0d0a",
          gradient: "linear-gradient(180deg, #0f0d0a 0%, #1a1612 50%, #0f0d0a 100%)",
        },
        accent: {
          beige: "#d4c5b0",
          champagne: "#e8dcc6",
          gold: "#c9a961",
        },
        text: {
          offwhite: "#f5f3f0",
          muted: "#d4c5b0",
        },
      },
      fontFamily: {
        heading: ["Helvetica", "Arial", "sans-serif"],
        subheading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;

