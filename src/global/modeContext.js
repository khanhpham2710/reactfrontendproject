import React, { createContext, useState, useContext } from 'react';

export const ModeContext = createContext();


export function ModeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ModeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}
