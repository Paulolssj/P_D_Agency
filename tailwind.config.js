/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          container: "hsl(var(--primary))", // Legacy mapping
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        "on-surface": "hsl(var(--foreground))",
        "on-surface-variant": "hsl(var(--muted-foreground))",
        "surface-container": "hsl(var(--muted))",
        "surface-container-low": "#111111",
        "surface-container-lowest": "#0a0a0a",
      },
      fontSize: {
        "fluid-h1": ["clamp(2.5rem, 10vw, 10rem)", { lineHeight: "0.85", letterSpacing: "-0.04em", fontWeight: "900" }],
        "fluid-h2": ["clamp(2rem, 8vw, 6.5rem)", { lineHeight: "0.9", letterSpacing: "-0.03em", fontWeight: "900" }],
        "fluid-h3": ["clamp(1.75rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "fluid-body": ["clamp(0.875rem, 1.5vw, 1.125rem)", { lineHeight: "1.6" }],
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.5rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
}
