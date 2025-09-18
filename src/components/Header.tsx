'use client';

import React from 'react';
import { Heart, MapPin } from 'lucide-react';
import { useCountryDetection } from '@/hooks/useCountryDetection';
import { useLanguage } from '@/components/LanguageProvider';

export default function Header() {
  const { isBrazil, isUruguay } = useCountryDetection();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 mb-8">
      <div className="header-improved">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <a className="flex items-center space-x-4 animate-slideInLeft" href='/'>
              <div className="relative">
                <div className="absolute inset-0 bg-highlight/30 rounded-full blur-lg animate-pulse"></div>
                <Heart className="relative h-10 w-10 text-error animate-heartbeat drop-shadow-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-high-contrast">
                  {language === 'es' ? 'Ayuda para Cesar' : 'Ajuda para Cesar'}
                </h1>
                <p className="text-sm text-medium-contrast font-medium animate-fadeInUp">
                  {language === 'es' ? 'Campaña de Esperanza' : 'Campanha de Esperança'}
                </p>
              </div>
            </a>
            
            <div className="flex items-center space-x-6 animate-slideInRight">
              <div className="hidden sm:flex items-center space-x-2 text-sm badge-improved px-4 py-2 rounded-full hover-lift">
                <MapPin className="h-5 w-5 text-accent animate-pulse" />
                <span className="font-semibold">
                  {isBrazil ? 'Brasil' : isUruguay ? 'Uruguay' : 'Internacional'}
                </span>
              </div>
              
              <div className="relative card-high-contrast p-2 rounded-full shadow-md hover-lift">
                <div className="flex items-center space-x-2">
                  <div className="relative flex items-center">
                    <button
                      onClick={toggleLanguage}
                      className={`relative w-20 h-10 rounded-full transition-all duration-300 ${
                        language === 'es' 
                          ? 'bg-gradient-to-r from-accent to-highlight' 
                          : 'bg-gradient-to-r from-secondary-accent to-accent'
                      }`}
                      title={language === 'es' ? 'Cambiar a Português' : 'Mudar para Español'}
                    >
                      <div className={`absolute top-1 w-8 h-8 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                        language === 'es' ? 'left-1' : 'left-11'
                      }`}>
                        {language === 'es' ? (
                          <div className="w-6 h-4 relative overflow-hidden rounded-sm">
                            <div className="absolute inset-0 flex flex-col">
                              <div className="flex-1 bg-blue-500"></div>
                              <div className="flex-1 bg-white"></div>
                              <div className="flex-1 bg-blue-500"></div>
                              <div className="flex-1 bg-white"></div>
                              <div className="flex-1 bg-blue-500"></div>
                              <div className="flex-1 bg-white"></div>
                              <div className="flex-1 bg-blue-500"></div>
                              <div className="flex-1 bg-white"></div>
                              <div className="flex-1 bg-blue-500"></div>
                            </div>
                            <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-yellow-400 text-xs">☀</div>
                          </div>
                        ) : (
                          <div className="w-6 h-4 bg-green-500 rounded-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-yellow-400 to-blue-500"></div>
                            <div className="absolute inset-x-0 top-1/2 h-px bg-yellow-400 transform -translate-y-1/2"></div>
                            <div className="absolute left-1.5 top-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full transform -translate-y-1/2 flex items-center justify-center">
                              <div className="w-0.5 h-0.5 bg-yellow-300 rounded-full"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                  
                  <div className="flex flex-col text-xs font-semibold">
                    <span className={`transition-colors ${language === 'es' ? 'text-accent' : 'text-muted'}`}>
                      ES
                    </span>
                    <span className={`transition-colors ${language === 'pt' ? 'text-secondary-accent' : 'text-muted'}`}>
                      PT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}