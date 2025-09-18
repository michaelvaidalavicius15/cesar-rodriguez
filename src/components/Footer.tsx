'use client';

import React from 'react';
import { MapPin, Calendar, Heart, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import textsData from '@/data/texts.json';

export default function Footer() {
  const { language } = useLanguage();
  const texts = textsData[language];

  return (
    <footer className="mt-24 w-full">
      {/* Gradient separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8"></div>
      
      {/* Footer que ocupa 100% del ancho */}
      <div className="w-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-14">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/30 rounded-full blur-xl animate-pulse"></div>
                <Heart className="relative h-12 w-12 text-red-400 animate-heartbeat drop-shadow-lg" />
              </div>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {texts.footer?.gratitude || (language === 'es' ? 'Gracias por tu apoyo' : 'Obrigado pelo seu apoio')}
            </h3>
            <p className="text-slate-200 text-lg leading-relaxed max-w-3xl mx-auto font-light">
              {texts.footer?.gratitude || (language === 'es' 
                ? 'Cada gesto de solidaridad me da fuerzas para seguir adelante. Tu apoyo significa el mundo para mí.' 
                : 'Cada gesto de solidariedade me dá forças para seguir em frente. Seu apoio significa o mundo para mim.')}
            </p>
          </div>

          {/* Info Grid - Más compacto */}
          <div className="border-t border-slate-700/50 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-bold text-white text-lg mb-4 flex items-center justify-center md:justify-start">
                  <Mail className="h-4 w-4 mr-2 text-blue-400" />
                  Contacto
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-slate-300 hover:text-white transition-colors cursor-pointer">
                    <MapPin className="h-4 w-4 text-green-400" />
                    <span>Montevideo, Uruguay</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-slate-300 hover:text-white transition-colors cursor-pointer">
                    <Mail className="h-4 w-4 text-blue-400" />
                    <span className="break-all text-sm">cesarayuda2025@email.com</span>
                  </div>
                </div>
              </div>

              {/* Campaign Info */}
              <div className="space-y-4">
                <h4 className="font-bold text-white text-lg mb-4 flex items-center justify-center md:justify-start">
                  <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                  {language === 'es' ? 'Campaña' : 'Campanha'}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-slate-300">
                    <Calendar className="h-4 w-4 text-yellow-400" />
                    <span>{language === 'es' ? 'Activa desde 2025' : 'Ativa desde 2025'}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-slate-300">
                    <Heart className="h-4 w-4 text-red-400" />
                    <span>{language === 'es' ? 'Con esperanza' : 'Com esperança'}</span>
                  </div>
                </div>
              </div>

              {/* Personal Message */}
              <div className="space-y-4">
                <h4 className="font-bold text-white text-lg mb-4 text-center md:text-left">
                  Cesar
                </h4>
                <div className="bg-slate-700/30 backdrop-blur-sm p-4 rounded-xl border border-slate-600/30">
                  <p className="text-slate-200 italic leading-relaxed">
                    "{language === 'es' 
                      ? 'Con su ayuda, puedo volver a caminar.' 
                      : 'Com sua ajuda, posso voltar a caminhar.'}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-6 border-t border-slate-700/30 text-center">
            <p className="text-slate-400 text-sm mb-1">
              {language === 'es' 
                ? '© 2025 Campaña de Ayuda para Cesar. Hecho con ❤️ para una causa noble.' 
                : '© 2025 Campanha de Ajuda para Cesar. Feito com ❤️ para uma causa nobre.'}
            </p>
            <p className="text-slate-500 text-xs">
              {language === 'es' 
                ? 'Cada donación cuenta • Tu apoyo hace la diferencia'
                : 'Cada doação conta • Seu apoio faz a diferença'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}