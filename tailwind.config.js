/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/primereact/**/*.{js,jsx}", 
  ],

  theme: {
    extend: {
      fontFamily: {
        'prompt': ['Prompt', 'sans-serif'],
      },

      boxShadow: {
        'custom': '1px 2px 2px 0 rgba(0, 0, 0, 0.25)',
      },

      colors: {
        'first': "#00A896",
        'second': "#D0AD41",
        'accent1' : "#FFFFFF",
        'accent2' : "#DEDDDD",
        'others' : "#000000",
      },

      fontSize: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '18px',
        '5': '24px',
        '6': '32px',
      },

      // spacing: {
      //   '100': '25rem',
      //   '128': '32rem', 
      //   '150': '37.5rem' 
      // }
    },
  },

  variants: {},
  plugins: [],
};
