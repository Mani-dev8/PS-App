/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#287BC6',
      },
      fontFamily: {
        Light: 'OpenSans-Light',
        Normal: 'OpenSans-Regular',
        Medium: 'OpenSans-Medium',
        SemiBold: 'OpenSans-SemiBold',
        Bold: 'OpenSans-Bold',
      },
    },
  },
  plugins: [],
};
