'use client';

import React from 'react';
import { Heart, MapPin } from 'lucide-react';
import { useCountryDetection } from '@/hooks/useCountryDetection';
import { useLanguage } from '@/components/LanguageProvider';
import Image from 'next/image';

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
                      <div className={`absolute top-1 w-8 h-8 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center overflow-hidden ${
                        language === 'es' ? 'left-1' : 'left-11'
                      }`}>
                        {language === 'es' ? (
                          <div className="w-6 h-4 relative">
                            <Image
                              src="/Uruguay.png"
                              alt="Bandera de Uruguay"
                              width={24}
                              height={16}
                              className="object-cover rounded-sm"
                              style={{ width: '24px', height: '16px' }}
                            />
                          </div>
                        ) : (
                          <div className="w-6 h-4 relative">
                            <Image
                              src="/Brazil.png"
                              alt="Bandeira do Brasil"
                              width={24}
                              height={16}
                              className="object-cover rounded-sm"
                              style={{ width: '24px', height: '16px' }}
                            />
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