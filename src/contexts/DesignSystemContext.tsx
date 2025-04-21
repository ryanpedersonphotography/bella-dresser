import React, { createContext, useState, useContext } from 'react';

interface DesignSystemContextType {
  isStyled: boolean;
  setIsStyled: (value: boolean) => void;
  currentTheme: 'default' | 'elegant' | 'playful';
  setCurrentTheme: (theme: 'default' | 'elegant' | 'playful') => void;
}

const DesignSystemContext = createContext<DesignSystemContextType | undefined>(undefined);

export const DesignSystemProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isStyled, setIsStyled] = useState(true);
  const [currentTheme, setCurrentTheme] = useState<'default' | 'elegant' | 'playful'>('default');
  
  return (
    <DesignSystemContext.Provider value={{ isStyled, setIsStyled, currentTheme, setCurrentTheme }}>
      {children}
    </DesignSystemContext.Provider>
  );
};

export const useDesignSystem = () => {
  const context = useContext(DesignSystemContext);
  if (context === undefined) {
    throw new Error('useDesignSystem must be used within a DesignSystemProvider');
  }
  return context;
};
