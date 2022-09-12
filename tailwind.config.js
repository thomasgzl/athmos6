module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      },
      spacing: {
        '6': '6rem',
      },
    },
  },
  plugins: [],
}