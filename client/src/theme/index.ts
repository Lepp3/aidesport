import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '',
      light: '',
      dark: '',
    },
    secondary: {
      main: '',
      light: '',
      dark: '',
    },
    background: {
      default: '',
      paper: '#FFFFFF',
    },
    text: {
      primary: '',
      secondary: '',
    },
    warning: {
      main: '#800000',
    },
  },
  typography: {
    fontFamily:
      '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

    h1: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
    },
    h2: {
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h5: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.43,
    },

    button: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: 1.75,
    },
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.66,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 500,
      letterSpacing: '0.125em',
      textTransform: 'uppercase',
    },
  },
});
