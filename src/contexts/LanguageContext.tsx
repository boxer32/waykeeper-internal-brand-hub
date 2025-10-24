'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'th' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('th');
  const [translations, setTranslations] = useState<Record<string, any>>({
    // Default translations while loading
    common: { search: "ค้นหา", copy: "คัดลอก", loading: "กำลังโหลด..." },
    header: { brandHub: "Brand Hub" },
    home: { title: "Waykeeper Brand Hub", subtitle: "ระบบแบรนด์ครบครัน" }
  });

  useEffect(() => {
    // Load saved language preference
    const saved = localStorage.getItem('waykeeper-language') as Language;
    if (saved === 'th' || saved === 'en') {
      setLanguageState(saved);
    }

    // Load translations
    loadTranslations(saved || 'th');
  }, []);

  const loadTranslations = async (lang: Language) => {
    try {
      const response = await fetch(`/locales/${lang}.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('waykeeper-language', lang);
    loadTranslations(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

