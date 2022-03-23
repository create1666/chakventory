module.exports = {
  // purge: [],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      purple: {
        400: 'var(--color-purple-400)',
        500: 'var(--color-purple-500)',
        600: 'var(--color-purple-600)',
        700: 'var(--color-purple-700)',
        800: 'var(--color-purple-800)',
        pri: 'var(--color-purple-pri)',
      },

      blue: {
        pri: 'var(--color-blue-pri)',
        100: 'var(--color-blue-100)',
        400: 'var(--color-blue-400)',
        500: 'var(--color-blue-500)',
      },

      green: {
        200: 'var(--color-green-200)',
        300: 'var(--color-green-300)',
        400: 'var(--color-green-400)',
        500: 'var(--color-green-500)',
        600: 'var(--color-green-600)',
        700: 'var(--color-green-700)',
        800: 'var(--color-green-800)',
        900: 'var(--color-green-900)',
        910: 'var(--color-green-910)',
        sec: 'var(--color-green-sec)',
      },

      gray: {
        50: 'var(--color-gray-50)',
        100: 'var( --color-gray-100)',
        300: 'var(  --color-gray-300)',
        400: 'var(  --color-gray-400)',
        500: 'var(  --color-gray-500)',
        600: 'var(  --color-gray-600)',
        700: 'var(  --color-gray-700)',
        800: 'var(  --color-gray-800)',
      },
      red: {
        200: 'var(--color-red-200)',
        300: 'var(--color-red-300)',
        400: 'var(--color-red-400)',
        500: 'var(--color-red-500)',
        sec: 'var(--color-red-sec)',
      },

      yellow: {
        200: 'var(--color-yellow-200)',
        300: 'var(--color-yellow-300)',
        400: 'var(--color-yellow-400)',
        500: 'var(--color-yellow-500)',
      },
      black: {
        100: 'var(--color-black)',
        blc: 'var(--color-black-blc)',
        gray1: 'var(--color-black-gray1)',
        gray2: 'var(--color-black-gray2)',
        backgrd: 'var(--color-black-backgrd)',
        lInes: 'var(--color-black-lines)',
      },

      white: 'var(--color-white)',
      transparent: 'transparent',
    },

    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: [
        'responsive',
        'hover',
        'focus',
        'active',
        'disabled',
        'checked',
      ],
      borderColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      backgroundOpacity: ['hover'],
      visibility: ['last'],
    },
  },
  plugins: [],
};
