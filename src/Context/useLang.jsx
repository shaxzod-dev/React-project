import React, { createContext, useState } from "react";
export const LangContext = createContext(null);
export function LanguageContextContainer({ children }) {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "uz");
  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export default LanguageContextContainer;
