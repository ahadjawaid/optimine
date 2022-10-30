const { createTheme } = require("@mui/material");

module.exports = createTheme({
  palette: {
    primary: {
      main: "#63A2D8",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#A0C3E1",
      contrastText: "#FFFFFF",
    },
    accent: {
      main: "#6C63FF",
      contrastText: "#FFFFFF",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
    },
  },
});