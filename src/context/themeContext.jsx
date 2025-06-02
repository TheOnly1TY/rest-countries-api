import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    theme
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(!theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("Theme Context must be used within a Theme Provider");

  return context;
}

export { ThemeProvider, useTheme };
