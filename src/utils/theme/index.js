import { createTheme, responsiveFontSizes } from "@mui/material";
import typography from "./typography";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F0EBD8",
    },
    secondary: {
      main: "#f54703",
    },
    background: {
      default: "#171718",
    },
    text: {
      secondary: "#F0EBD8",

      //   "rgba(255, 255, 255, 0.6)"
    },
  },
  typography,
});

// export default theme;
export default responsiveFontSizes(theme);
