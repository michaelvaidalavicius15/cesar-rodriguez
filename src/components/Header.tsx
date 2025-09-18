// Header.tsx - Enhanced with flag language switcher
'use client';

import React from 'react';
import { Heart, MapPin } from 'lucide-react';
import { useCountryDetection } from '@/hooks/useCountryDetection';
import { useLanguage } from '@/components/LanguageProvider';

export default function Header() {
  const { isBrazil, isUruguay } = useCountryDetection();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="glass-strong sticky top-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-slideInLeft">
            <div className="relative">
              <Heart className="h-8 w-8 text-red-500 animate-heartbeat" />
              <div className="absolute inset-0 h-8 w-8 text-red-500 animate-ping opacity-20">
                <Heart className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'es' ? 'Ayuda para Cesar' : 'Ajuda para Cesar'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-6 animate-slideInRight">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 glass px-3 py-1 rounded-full">
              <MapPin className="h-4 w-4" />
              <span>{isBrazil ? 'Brasil' : isUruguay ? 'Uruguay' : 'Internacional'}</span>
            </div>
            
            {/* Flag Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 glass-strong px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 group"
              title={language === 'es' ? 'Cambiar a Português' : 'Mudar para Español'}
            >
              {language === 'es' ? (
                <>
                  <div className="w-6 h-4 bg-green-500 rounded-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-yellow-400 to-blue-500"></div>
                    <div className="absolute inset-x-0 top-1/2 h-0.5 bg-yellow-400 transform -translate-y-1/2"></div>
                    <div className="absolute left-1 top-1/2 w-2 h-2 bg-blue-600 rounded-full transform -translate-y-1/2 flex items-center justify-center">
                      <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs font-medium group-hover:text-blue-600 transition-colors">BR</span>
                </>
              ) : (
                <>
                  <div className="w-6 h-4 relative overflow-hidden rounded-sm">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-white to-blue-500"></div>
                    <div className="absolute inset-x-0 top-1/3 h-1 bg-white"></div>
                    <div className="absolute inset-x-0 bottom-1/3 h-1 bg-white"></div>
                    <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-yellow-400 text-xs">☀</div>
                  </div>
                  <span className="text-xs font-medium group-hover:text-blue-600 transition-colors">UY</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}