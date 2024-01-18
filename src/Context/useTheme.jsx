import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeContextContainer({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
