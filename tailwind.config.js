export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "rgb(var(--color-brand) / <alpha-value>)",
          ink: "rgb(var(--color-brand-ink) / <alpha-value>)",
          soft: "rgb(var(--color-brand-soft) / <alpha-value>)",
          line: "rgb(var(--color-brand-line) / <alpha-value>)",
        },
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
          muted: "rgb(var(--color-surface-muted) / <alpha-value>)",
        },
        card: "rgb(var(--color-card) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          muted: "rgb(var(--color-ink-muted) / <alpha-value>)",
          subtle: "rgb(var(--color-ink-subtle) / <alpha-value>)",
        },
        line: {
          DEFAULT: "rgb(var(--color-line) / <alpha-value>)",
          strong: "rgb(var(--color-line-strong) / <alpha-value>)",
        },
        night: {
          DEFAULT: "#1B1B1B",
          2: "#222424",
          3: "#2C2F30",
          line: "#34383A",
          muted: "#A0A0A0",
        },
        success: { soft: "#E7F6EE", ink: "#1C7447" },
        warning: { soft: "#FFF3DF", ink: "#8F5400" },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.05), 0 6px 16px -4px rgba(0,0,0,0.06)",
        float: "0 12px 28px -8px rgba(0,0,0,0.1), 0 3px 10px -2px rgba(0,0,0,0.04)",
        phone: "0 16px 32px -8px rgba(0,0,0,0.18), 0 4px 12px -2px rgba(0,0,0,0.06)",
        subtle: "0 1px 2px 0 rgba(0,0,0,0.04)",
        glow: "0 0 25px -4px rgba(0,197,218,0.28)",
      },
    },
  },
};
