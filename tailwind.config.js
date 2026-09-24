export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00C5DA",
          ink: "#007886",
          soft: "#E6F9FB",
          line: "#BDEFF5",
        },
        canvas: "#F5F7F8",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#0E1718",
          muted: "#56625F",
          subtle: "#838E90",
        },
        line: "#E3E8E9",
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
        card: "0 1px 2px rgba(14,23,24,0.03), 0 4px 12px -3px rgba(14,23,24,0.05)",
        float: "0 10px 24px -8px rgba(14,23,24,0.06), 0 2px 8px -2px rgba(14,23,24,0.02)",
        phone: "0 12px 24px -8px rgba(14,23,24,0.09), 0 2px 8px -2px rgba(14,23,24,0.03)",
        subtle: "0 1px 2px 0 rgba(14,23,24,0.03)",
        glow: "0 0 20px -4px rgba(0,197,218,0.20)",
      },
    },
  },
};
