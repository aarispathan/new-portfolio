import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme
            ? JSON.parse(savedTheme)
            : true;
    });

    useEffect(() => {
        localStorage.setItem(
            "theme",
            JSON.stringify(darkMode)
        );

        if (darkMode) {
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                setDarkMode
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);