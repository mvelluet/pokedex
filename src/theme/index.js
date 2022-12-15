import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        }
      }
    },
  },
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#3f51b5',
    },
  },
});