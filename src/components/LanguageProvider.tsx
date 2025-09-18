'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useCountryDetection } from '@/hooks/useCountryDetection';

type Language = 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { isBrazil } = useCountryDetection();
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      setLanguage(isBrazil ? 'pt' : 'es');
    }
  }, [isBrazil]);

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'pt' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (undefined === context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}