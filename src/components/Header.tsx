'use client';

import React from 'react';
import { Heart, MapPin } from 'lucide-react';
import { useCountryDetection } from '@/hooks/useCountryDetection';
import { useLanguage } from '@/components/LanguageProvider';

export default function Header() {
  const { isBrazil, isUruguay } = useCountryDetection();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-red-500" />
            <h1 className="text-xl font-bold text-gray-800">
              {language === 'es' ? 'Ayuda para Cesar' : 'Ajuda para Cesar'}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{isBrazil ? 'Brasil' : isUruguay ? 'Uruguay' : 'Internacional'}</span>
            </div>
            <button
              onClick={toggleLanguage}
              className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              {language === 'es' ? 'Português' : 'Español'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}