// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components"; // Import ThemeProvider
import { theme } from "./theme/theme"; // Import the theme
import App from "./App";
import { GlobalStyles } from './theme/globalStyles';  // Import GlobalStyles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles /> {/* Apply global styles here */}
    <App />
  </ThemeProvider>
);
