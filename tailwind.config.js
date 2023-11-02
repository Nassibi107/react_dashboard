/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Mybg: '#84cc16',
        myColor : '#fff',
        MybgHover : '#a3e635',
        BgService : '#000',
        BgServiceHover : '#0f172a',
        backgroundConfirmationModel : 'rgba(0, 0, 0, 0.1)',
      },
      backdropBlur : {
        'sm': 'blur(0.5rem)',
      }
    },
  },
  plugins: [],
}