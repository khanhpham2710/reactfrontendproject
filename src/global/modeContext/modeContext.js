import React, { createContext, useState, useEffect } from 'react';

export const ModeContext = createContext();

export function ModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
}
