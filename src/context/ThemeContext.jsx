import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();


const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    const value = {theme, toggleTheme};

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };

