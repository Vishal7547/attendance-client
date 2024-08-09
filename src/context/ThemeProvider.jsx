import React, { useState } from "react";
import { themeContext } from "./context";
import { lightTheme } from "../theme/lightTheme";
import { darkTheme } from "../theme/dakTheme";
import { ThemeProvider as MultiThemeProvider } from "@emotion/react";
import { useContext } from "react";
export const useMultiTheme = () => {
  return useContext(themeContext);
};
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  const currentTheme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <themeContext.Provider value={{ mode, toggleTheme }}>
      <MultiThemeProvider theme={currentTheme}>{children}</MultiThemeProvider>
    </themeContext.Provider>
  );
};

export default ThemeProvider;
