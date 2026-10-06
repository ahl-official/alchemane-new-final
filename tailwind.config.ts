import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        ink: "#232928",
        accent: {
          DEFAULT: "#59b1a5",
          muted: "#83c5bc",
          soft: "#add9d3",
        },
        mist: "#d7ece9",
        fog: "color-mix(in srgb, #d7ece9 42%, #ffffff)",
        muted: "color-mix(in srgb, #232928 68%, #ffffff)",
        line: "color-mix(in srgb, #232928 16%, #ffffff)",
        "accent-ink": "color-mix(in srgb, #232928 58%, #59b1a5)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", '"Segoe UI"', "sans-serif"],
      },
      fontSize: {
        small: ["0.875rem", { lineHeight: "1.6" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        title: ["clamp(2.25rem, 3.65vw, 3.75rem)", { lineHeight: "1.1" }],
        display: ["clamp(3.5rem, 6.6vw, 6.75rem)", { lineHeight: "1.1" }],
        caption: ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "1.5x": "0.5rem",
        "2x": "1rem",
        "3x": "1.5rem",
        "4x": "2rem",
        "5x": "3rem",
        "6x": "4rem",
      },
      maxWidth: {
        content: "1320px",
      },
      transitionDuration: {
        fast: "180ms",
        normal: "300ms",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(.2, .7, .3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
