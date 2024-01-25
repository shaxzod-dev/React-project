import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LanguageContextContainer } from "./Context/useLang.jsx";
import { ThemeContextContainer } from "./Context/useTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageContextContainer>
    <ThemeContextContainer>
      <App />
    </ThemeContextContainer>
  </LanguageContextContainer>
);
