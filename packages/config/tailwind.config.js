/** @type {import('tailwindcss').Config} */
// const spacing = require("./design-tokens/atoms/spacing");

module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/libs/src/utils/**/*.{js,ts,jsx,tsx}',
    '../../packages/1bee-ui/src/components/**/*.{js,ts,jsx,tsx}',
    '../../packages/1bee-icons/src/icons/**/*.{js,ts,jsx,tsx}',
    '../../packages/config/tailwind.config',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      green: {
        'light-1': '#5cca52',
        brand: '#00cd3c',
        dark1: '#5aa470',
        dark2: '#54765E',
      },
      blue: {
        1: '#55b0f0',
        2: '#30dce8',
        3: '#d9ebff',
        4: '#0174be',
      },
      red: {
        1: '#fc2e6c',
      },
      gray: {
        1: '#454f5d',
        2: '#838a9a',
        3: '#d9d9d9',
        4: '#eaedef',
        5: '#f5f6f7',
      },
      purple: {
        1: '#9167fd',
      },
      yellow: {
        1: '#ffed01',
        2: '#fbb03b',
      },
      opaque: {
        green4: 'rgba(0, 205, 60, 0.04)',
        green20: 'rgba(0, 205, 60, 0.2)',
        yellow20: 'rgba(255, 237, 1, 0.2)',
        purple20: 'rgba(145, 103, 253, 0.2)',
        blue20: 'rgba(85, 176, 240, 0.2)',
        red20: 'rgba(252, 46, 108, 0.2)',
        black20: 'rgba(0, 0, 0, 0.2)',
        gray50: 'rgba(245, 246, 247, 0.5)',
        overlay: 'rgba(0, 0, 0, 0.6)',
      },
    },
    fontFamily: {
      pretendard: ['Pretendard'],
    },
    extend: {
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridColumnStart: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
      },
      screens: {
        desktop: '1280px',
      },
      width: {
        logo: '289px',
        desktop: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        center: '620px',
        xs: '320px',
        drawer: '180px',
      },
      height: {
        logo: '59px',
      },
      maxWidth: {
        center: '620px',
      },
      minWidth: {
        xs: '320px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
