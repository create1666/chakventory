import { extendTheme, theme as base } from '@chakra-ui/react';

// brand customized theme
const customTheme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      100: '#8892A2',
      900: '#171923',
    },
    blue: {
      50: '#477dfb',
      100: '#477dfbe8',
      200: '#477dfbde',
      300: '#386de9ec',
    },
    red: {
      50: '#fecaca',
      100: '#fca5a5',
      200: '#f87171',
      300: '#ef4444',
      sec: '#ff4127',
    },
    yellow: {
      50: '#fde68a',
      100: '#fcd34d',
      200: '#fbbf24',
      300: '#f59e0b',
    },
    purple: {
      50: '#a78bfa',
      100: '#7c3aed',
      200: '#8b5cf6',
      300: '#6d28d9',
      400: '#5b21b6',
      pri: '#553ffb',
    },
    green: {
      50: '#a7f3d0',
      100: '#6ee7b7',
      200: '#34d399',
      300: '#10b981',
      400: '#91e5be',
      500: '#38c985c7',
      600: '#38c985d7',
      700: '#38c98585',
      800: '#38c985',
      900: '#9bfad2',
    },
  },
  fonts: {
    body: `Kumbh Sans , ${base.fonts?.body}`,
    heading: `Kumbh Sans , ${base.fonts?.heading}`,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
});

export default customTheme;
