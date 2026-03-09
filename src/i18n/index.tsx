import React, { createContext, useContext, useState } from "react";
import { en, type Translations } from "./locales/en";
import { uz } from "./locales/uz";
import { ru } from "./locales/ru";

export type Language = "en" | "uz" | "ru";

const translations: Record<Language, Translations> = { en, uz, ru };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
