import { createTheme, createThemeContract } from '@vanilla-extract/css';

// Theme Contract
export const vars = createThemeContract({
  color: {
    primary: null,
    primaryDark: null,
    primaryLight: null,
    white: null,
    gray: {
      50: null,
      100: null,
      200: null,
      400: null,
      600: null,
      700: null,
      800: null,
    },
    orange: {
      50: null,
      100: null,
      200: null,
      400: null,
      500: null,
      600: null,
      700: null,
    },
  },
  space: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
  },
  fontSize: {
    sm: null,
    base: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
    '4xl': null,
    '5xl': null,
  },
  borderRadius: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    full: null,
  },
});

// Theme Implementation
export const lightTheme = createTheme(vars, {
  color: {
    primary: '#ff6b35',
    primaryDark: '#e55a2b',
    primaryLight: '#ff8c65',
    white: '#ffffff',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      400: '#9ca3af',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
    },
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
    },
  },
  space: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  fontSize: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  borderRadius: {
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
});
