import { createTheme } from "@mui/material/styles";
import IRANSans from './fonts/IRANSans-web.woff2'


const theme = createTheme({
  typography: {
    fontFamily: 
      "IRANSans"
   
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'IRANSans';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('IRANSans'), local('IRANSans-Regular'), url(${IRANSans}) format('woff2');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }

      `
} 
    },
  palette: {
    primary: {
      main: '#3C8DAD',
      dark: '#F5A962',
      contrastText: '#fff',
    },
    secondary: {
      main: '#125D98',
      contrastText: '#fff',
    },
    error: {
      light: '#f44336',
      main: '#f44336',
      dark: '#f44336',
      contrastText: '#fff',
    },
    warning: {
      light: '#ffeb3b',
      main: '#ffeb3b',
      dark: '#ffeb3b',
      contrastText: '#fff',
    },
    info: {
      light: '#00bcd4',
      main: '#00bcd4',
      dark: '#00bcd4',
      contrastText: '#fff',
    },
    success: {
      light: '#7cb342',
      main: '#8bc34a',
      dark: '#c5e1a5',
      contrastText: '#fff',
    },
  },
});

export default theme
