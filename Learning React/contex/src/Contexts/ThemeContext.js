import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    Theme : "light",
    toggleTheme : (value) => {}
})

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ThemeContext.Provider

