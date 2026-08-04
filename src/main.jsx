import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./ScrollToTop/ScrollToTop.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { LanguageProvider } from "./Context/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop></ScrollToTop>
          <App></App>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
