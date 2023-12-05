import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F0EBD8",
    },
    background: {
      default: "#0D1321",
    },
    text: {
      secondary: "#F0EBD8",

      //   "rgba(255, 255, 255, 0.6)"
    },
  },
  typography,
});

export default theme;
