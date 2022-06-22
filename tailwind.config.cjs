/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: ["0.875rem", { lineheight: "24px", letterSpacing: "-0.03em" }],
      base: ["1rem", { lineheight: "28px", letterSpacing: "-0.03em" }],
      lg: ["1.15rem", { lineheight: "28px", letterSpacing: "-0.03em" }],
      xl: ["1.25rem", { lineheight: "28px", letterSpacing: "-0.03em" }],
      "2xl": ["1.5rem", { lineheight: "36px", letterSpacing: "-0.032em" }],
      "3xl": ["1.9rem", { lineheight: "48px", letterSpacing: "-0.032em" }],
      "4xl": ["2.4rem", { lineheight: "56px", letterSpacing: "-0.032em" }],
      "5xl": ["3rem", { lineheight: "56px", letterSpacing: "-0.034em" }],
      "6xl": ["3.8rem", { lineheight: "72px", letterSpacing: "-0.034em" }],
      "7xl": ["4.7rem", { lineheight: "88px", letterSpacing: "-0.036em" }],
    },
    extend: {
      typography: {
        p: {
          sm: {
            fontSize: "4rem",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
