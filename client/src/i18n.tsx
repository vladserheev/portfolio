import { createContext, useContext, useEffect, useState } from "react";
import en from "./locales/en";
import pl from "./locales/pl";
import ua from "./locales/ua";

const messages: any = { en, pl, ua };

type TContext = {
  lang: string;
  setLang: (l: string) => void;
  t: (key: string) => string;
};

const defaultContext: TContext = {
  lang: "en",
  setLang: () => {},
  t: (k: string) => k,
};

const LanguageContext = createContext<TContext>(defaultContext);

export const LanguageProvider = ({ children }: any) => {
  const [lang, setLang] = useState<string>(() =>
    typeof window !== "undefined" ? localStorage.getItem("lang") || "en" : "en"
  );

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const t = (key: string) => {
    const parts = key.split(".");
    let cur: any = messages[lang];

    for (const p of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
        cur = cur[p];
      } else {
        cur = null;
        break;
      }
    }

    if (cur == null) {
      // fallback to English
      let fallback: any = messages["en"];
      for (const p of parts) {
        if (fallback && Object.prototype.hasOwnProperty.call(fallback, p)) {
          fallback = fallback[p];
        } else {
          fallback = null;
          break;
        }
      }
      return (fallback as string) || key;
    }

    return cur as string;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);

export default LanguageContext;
