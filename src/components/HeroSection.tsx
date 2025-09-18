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
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slideInLeft">
            <div className="inline-flex items-center space-x-3 badge-improved-accent px-6 py-3 rounded-full shadow-lg animate-pulse">
              <Zap className="h-5 w-5 text-white animate-bounce" />
              <span className="text-sm font-semibold text-white">
                {language === 'es' ? 'Campaña Activa' : 'Campanha Ativa'}
              </span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-high-contrast">
                  {texts.title || 'Ayuda para Cesar'}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl font-medium text-medium-contrast leading-relaxed animate-fadeInUp animation-delay-200">
                {language === 'es' 
                  ? 'Una nueva oportunidad para caminar'
                  : 'Uma nova oportunidade para caminhar'}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2 card-high-contrast px-4 py-2 rounded-full shadow-md hover-lift">
                <Calendar className="h-5 w-5 text-accent animate-pulse" />
                <span className="font-semibold text-high-contrast">{texts.age || '28 años'}</span>
              </div>
              <div className="flex items-center space-x-2 card-high-contrast px-4 py-2 rounded-full shadow-md hover-lift">
                <Globe className="h-5 w-5 text-secondary-accent animate-pulse" />
                <span className="font-semibold text-high-contrast">Montevideo, Uruguay</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-medium-contrast leading-relaxed font-medium animate-fadeInUp animation-delay-300">
                {texts.sections?.intro?.content || 
                 'Necesito tu ayuda para acceder a una cirugía de neuroestimulación que me permita recuperar la movilidad y vivir sin dolor. Tu donación puede cambiar mi vida para siempre.'}
              </p>
              
              {texts.sections?.situation?.content && (
                <p className="text-lg text-medium-contrast leading-relaxed font-medium animate-fadeInUp animation-delay-400">
                  {texts.sections.situation.content}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center animate-slideInRight">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent via-highlight to-secondary-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-glow"></div>
              
              <div className="relative glass-strong p-6 rounded-3xl hover-lift">
                <div className="w-96 h-[480px] relative overflow-hidden rounded-2xl">
                  <Image
                    src="/cesar.jpg"
                    alt="Foto de Cesar"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="card-high-contrast p-4 rounded-xl animate-fadeInUp animation-delay-500">
                      <p className="text-high-contrast font-semibold text-sm">
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