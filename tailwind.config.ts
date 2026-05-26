import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        honey: {
          DEFAULT: "#F0932B",
          dark: "#E58E26",
          tint: "#FFF3E0",
        },
        sage: {
          DEFAULT: "#6AB04C",
          dark: "#4E8A38",
          tint: "#E8F5E9",
          light: "#BADC58",
        },
        sun: {
          DEFAULT: "#F9CA24",
          dark: "#CC9B1D",
          tint: "#FFF8E1",
        },
        coral: {
          DEFAULT: "#FF7675",
          tint: "#FFF0EE",
        },
        cream: "#FFFAF5",
        ink: {
          DEFAULT: "#2D2B3D",
          sub: "#8B8A99",
        },
      },
      borderRadius: {
        pill: "20px",
        card: "16px",
        screen: "24px",
      },
      fontFamily: {
        display: ["var(--font-nunito)", "system-ui", "sans-serif"],
        body: [
          "Pretendard",
          "Pretendard Variable",
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        play: "0 4px 16px rgba(240,147,43,0.25)",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
        pop: {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "60%": { transform: "scale(1.08)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        shake: "shake 0.3s ease-in-out",
        pop: "pop 0.5s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
