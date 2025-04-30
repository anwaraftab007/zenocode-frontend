import { createContext, useState, useContext } from "react";

//1. Create a context
const DarkModeContext = createContext();


//2. Create a provider component
export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    }
    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

// 3. Create a custom hook for easy access to the context
export const useDarkMode = () => {
    return useContext(DarkModeContext);
}