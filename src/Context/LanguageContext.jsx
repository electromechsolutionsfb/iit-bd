import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // শুধুমাত্র English রাখার জন্য 'en' ফিক্সড করে দেওয়া হলো
  const [lang] = useState("en"); 

  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);