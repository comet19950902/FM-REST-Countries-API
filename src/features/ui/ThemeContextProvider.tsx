import { createContext, ReactNode, useState } from "react";

export const ThemeContext = createContext<{
  themeStyle: boolean;
  setThemeStyle: (data: boolean) => void;
}>({
  themeStyle: false,
  setThemeStyle: () => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeStyle, setThemeStyle] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ themeStyle, setThemeStyle }}>
      {children}
    </ThemeContext.Provider>
  );
};
