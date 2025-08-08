// src/theme.ts
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // light blue
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // default blue
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
  },
});
