import { createTheme } from "@material-ui/core/styles";

/**
 * material-ui theme color pallete
 * @see https://material-ui.com/style/color/
 */

export const LightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: `#777777`,
      light: `#FFFFFF`,
      dark: `rgba(0, 0, 0, 0.2)`,
    },
    text: {
      primary: `#000000`,
      secondary: `#0D1738`,
    },
    background: {
      paper: `#FFFFFF`,
      default: "#E5E5E5",
    },
    info: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "rgba(219, 166, 86, 0.7)",
      // contrastText: ,
    },
    success: {
      light: "#fffff",
      main: "#ffffff",
      dark: "rgba(252, 220, 105, 0.7)",
      contrastText: "#1E1E1E",
    },
  },
});

export const DarkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: `rgba(255, 255, 255, 0.3)`,
      light: `#1E1E1E`,
      dark: `rgba(255, 255, 255, 0.7)`,
    },
    text: {
      primary: `#FFFFFF`,
      secondary: `#FFFFFF`,
    },
    background: {
      paper: `rgba(255, 255, 255, 0.1)`,
      default: "#000000",
    },
    info: {
      light: "#1E1E1E",
      main: "#ffffff",
      dark: "rgba(219, 166, 86, 0.7)",
      // contrastText: ,
    },
    success: {
      light: "rgba(255, 255, 255, 0.7)",
      main: "#ffffff",
      dark: "rgba(252, 220, 105, 0.7)",
      contrastText: "#ffffff",
    },
  },
});
