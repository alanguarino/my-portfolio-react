import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/utils/theme";
import { CssBaseline } from "@mui/material";
// import { BrowseRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Router> */}
      <CssBaseline />
      <App />
      {/* </Router> */}
    </ThemeProvider>
  </React.StrictMode>
);
