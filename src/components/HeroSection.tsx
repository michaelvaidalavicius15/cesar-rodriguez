import React from 'react';
import { Calendar, Globe, Zap } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  texts: any;
  currentRaised: number;
  goalAmount: number;
  language: string;
}

export default function HeroSection({ texts, currentRaised, goalAmount, language }: HeroSectionProps) {
  return (
    <div className="pt-0 hero-bg-improved">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <div className="space-y-6 sm:space-y-8 animate-slideInLeft order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 sm:space-x-3 badge-improved-accent px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg animate-pulse">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-white animate-bounce" />
              <span className="text-xs sm:text-sm font-semibold text-white">
                {language === 'es' ? 'Campaña Activa' : 'Campanha Ativa'}
              </span>
            </div>
            
            {/* Título y subtítulo */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-high-contrast">
                  {texts.title || 'Ayuda para Cesar'}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-medium-contrast leading-relaxed animate-fadeInUp animation-delay-200">
                {language === 'es' 
                  ? 'Una nueva oportunidad para caminar'
                  : 'Uma nova oportunidade para caminhar'}
              </p>
            </div>
            
            {/* Información básica */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center space-x-2 card-high-contrast px-3 sm:px-4 py-2 rounded-full shadow-md hover-lift">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-accent animate-pulse" />
                <span className="font-semibold text-high-contrast text-sm sm:text-base">{texts.age || '28 años'}</span>
              </div>
              <div className="flex items-center space-x-2 card-high-contrast px-3 sm:px-4 py-2 rounded-full shadow-md hover-lift">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-accent animate-pulse" />
                <span className="font-semibold text-high-contrast text-sm sm:text-base">Montevideo, Uruguay</span>
              </div>
            </div>
            
            {/* Descripción */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-medium-contrast leading-relaxed font-medium animate-fadeInUp animation-delay-300">
                {texts.sections?.intro?.content || 
                 'Necesito tu ayuda para acceder a una cirugía de neuroestimulación que me permita recuperar la movilidad y vivir sin dolor. Tu donación puede cambiar mi vida para siempre.'}
              </p>
              
              {texts.sections?.situation?.content && (
                <p className="text-base sm:text-lg text-medium-contrast leading-relaxed font-medium animate-fadeInUp animation-delay-400">
                  {texts.sections.situation.content}
                </p>
              )}
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center animate-slideInRight order-1 lg:order-2">
            <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-accent via-highlight to-secondary-accent rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-glow"></div>
              
              <div className="relative glass-strong p-3 sm:p-4 lg:p-6 rounded-2xl sm:rounded-3xl hover-lift">
                <div className="w-full aspect-[4/5] relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <Image
                    src="/cesar.jpg"
                    alt="Foto de Cesar"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Quote overlay */}
                  <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
                    <div className="card-high-contrast p-3 sm:p-4 rounded-lg sm:rounded-xl animate-fadeInUp animation-delay-500">
                      <p className="text-high-contrast font-semibold text-xs sm:text-sm">
                        "{language === 'es' ? 'Tu apoyo me da esperanza' : 'Seu apoio me dá esperança'}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}