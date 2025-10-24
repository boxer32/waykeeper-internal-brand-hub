'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe size={16} className="text-deep-earth/60" />
      <div className="flex bg-morning-light rounded-lg p-1">
        <button
          onClick={() => setLanguage('th')}
          className={`px-3 py-1 text-xs font-medium rounded transition-all ${
            language === 'th'
              ? 'bg-skypath-blue text-white shadow-sm'
              : 'text-deep-earth/70 hover:text-deep-earth'
          }`}
        >
          ไทย
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-xs font-medium rounded transition-all ${
            language === 'en'
              ? 'bg-skypath-blue text-white shadow-sm'
              : 'text-deep-earth/70 hover:text-deep-earth'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}

