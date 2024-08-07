import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: '#ccc',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: "#fff",
        },
      },
    },
  },
});



export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#000',
      secondary: '#333',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#000',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: "#000",
        },
      },
    },
  },
});