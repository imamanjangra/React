import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    Theme : "light",
    toggleTheme : () => {}
})

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ThemeContext.Provider

