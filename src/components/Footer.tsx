'use client';

import React from 'react';
import { MapPin, Calendar, Heart } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import textsData from '@/data/texts.json';

export default function Footer() {
  const { language } = useLanguage();
  const texts = textsData[language];

  return (
    <footer className="max-w-4xl mx-auto text-center">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <p className="text-gray-700 mb-4 leading-relaxed">{texts.footer.gratitude}</p>
        <p className="text-lg font-semibold text-gray-800">{texts.footer.signature}</p>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Montevideo, Uruguay</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{language === 'es' ? 'Campaña activa desde 2025' : 'Campanha ativa desde 2025'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-red-500" />
              <span>{language === 'es' ? 'Con esperanza' : 'Com esperança'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}