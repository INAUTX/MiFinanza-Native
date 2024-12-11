import React, { createContext, useContext, ReactNode } from 'react';

type ThemeType = {
  backgroundColor: string;
  textColor: string;
};

const ThemeContext = createContext<ThemeType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme: ThemeType = {
    backgroundColor: '#1A1E03', // Color fondo global
    textColor: '#E9EBD5', // Color texto global
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
