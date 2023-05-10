/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors: {
        'bgblue': '#ECF2FF',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "",
    themes: [
    {
      mytheme: {
        "primary": "#ffffff",
        "neutral": "#ffffff",
        "secondary": "#f5f5f0",
        "accent": "#58287F",
        'error': '#e3342f'
      },
    },
    ],
  }
}


