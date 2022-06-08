import { createTheme } from "@mui/material/styles";
import IRANSans from '../assets/styles/fonts/IRANSans-Bold-web.woff'


const theme = createTheme({
  typography: {
    fontFamily: 
      "IRANSans"
   
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'IRANSans-web';
        src: url('fonts/IRANSans-Bold-web.eot');
     
        src: url('fonts/IRANSans-Bold-web.eot?#iefix') format('eot'),  /* IE6–8 */
        url('fonts/IRANSans-Bold-web.woff2') format('woff2'),  /* Chrome36+, Opera24+*/
        url('fonts/IRANSans-Bold-web.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
        url('fonts/IRANSans-Bold-web.ttf') format('ttf');  
        font-weight: bold;
    }
    
    @font-face {
        font-family: 'IRANSans-web';
        src: url('fonts/IRANSans-Medium-web.eot');
     
        src: url('fonts/IRANSans-Medium-web.eot?#iefix') format('eot'),  /* IE6–8 */
        url('fonts/IRANSans-Medium-web.woff2') format('woff2'),  /* Chrome36+, Opera24+*/
        url('fonts/IRANSans-Medium-web.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
        url('fonts/IRANSans-Medium-web.ttf') format('ttf');  
        font-weight: 500;
    }
    
    @font-face {
        font-family: 'IRANSans-web';
        src: url('fonts/IRANSans-UltraLight-web.eot');
     
        src: url('fonts/IRANSans-UltraLight-web.eot?#iefix') format('eot'),  /* IE6–8 */
        url('fonts/IRANSans-UltraLight-web.woff2') format('woff2'),  /* Chrome36+, Opera24+*/
        url('fonts/IRANSans-UltraLight-web.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
        url('fonts/IRANSans-UltraLight-web.ttf') format('ttf');  
        font-weight: 200;
    }
    
    @font-face {
        font-family: 'IRANSans-web';
        src: url('fonts/IRANSans-Light-web.eot');
     
        src: url('fonts/IRANSans-Light-web.eot?#iefix') format('eot'),  /* IE6–8 */
        url('fonts/IRANSans-Light-web.woff2') format('woff2'),  /* Chrome36+, Opera24+*/
        url('fonts/IRANSans-Light-web.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
        url('fonts/IRANSans-Light-web.ttf') format('ttf');  
        font-weight: 300;
    }
    
    @font-face {
        font-family: 'IRANSans-web';
        src: url('fonts/IRANSans-web.eot');
     
        src: url('fonts/IRANSans-web.eot?#iefix') format('eot'),  /* IE6–8 */
        url('fonts/IRANSans-web.woff2') format('woff2'),  /* Chrome36+, Opera24+*/
        url('fonts/IRANSans-web.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
        url('fonts/IRANSans-web.ttf') format('ttf');  
        font-weight: normal;
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
