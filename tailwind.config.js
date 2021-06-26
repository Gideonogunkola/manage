module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pry: {
          brightRed: "hsl(12, 88%, 59%)",
          paleRed: "hsl(13, 100%, 96%)",
        },
        sec: {
          grayishBlue: "hsl(227, 12%, 61%)",
          darkBlue: "hsl(228, 39%, 23%)",
          veryDarkBlue: "hsl(233, 12%, 13%)",
        },
        grayColor: {
          DEFAULT: "hsl(0, 0%, 98%)",
        },
      },
      boxShadow: {
        "2xl": "0 25px 50px -12px rgba(242, 95, 58, 0.3)",
        "3xl": "0 35px 60px -15px rgba(242, 95, 58, 0.4)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
