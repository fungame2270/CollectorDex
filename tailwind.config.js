/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
    {
      mytheme: {
        "primary": "#ffffff",
        "secondary": "#D926AA",
        "accent": "#1FB2A5",
        "neutral": "#191D24",
        "base-100": "#2A303C",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    },
    ],
  }
}


