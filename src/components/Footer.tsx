// Footer.tsx - Enhanced
'use client';

import React from 'react';
import { MapPin, Calendar, Heart, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import textsData from '@/data/texts.json';

export default function Footer() {
  const { language } = useLanguage();
  const texts = textsData[language];

  return (
    <footer className="mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="glass-strong rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <Heart className="h-12 w-12 mx-auto mb-4 text-red-500 animate-heartbeat" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {texts.footer?.gratitude || (language === 'es' ? 'Gracias por tu apoyo' : 'Obrigado pelo seu apoio')}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              {texts.footer?.gratitude || (language === 'es' 
                ? 'Cada gesto de solidaridad me da fuerzas para seguir adelante. Tu apoyo, ya sea donando o compartiendo mi historia, significa el mundo para mí.' 
                : 'Cada gesto de solidariedade me dá forças para seguir em frente. Seu apoio, seja doando ou compartilhando minha história, significa o mundo para mim.')}
            </p>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-lg">Contacto</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Montevideo, Uruguay</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>cesarayuda2025@email.com</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-lg">
                  {language === 'es' ? 'Campaña' : 'Campanha'}
                </h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {language === 'es' ? 'Activa desde 2025' : 'Ativa desde 2025'}
                    </span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>
                      {language === 'es' ? 'Con esperanza' : 'Com esperança'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-lg">
                  {texts.footer?.signature || 'Cesar Maicol Rodriguez Salvia'}
                </h4>
                <p className="text-gray-600 italic">
                  "{language === 'es' 
                    ? 'La esperanza es lo último que se pierde. Con su ayuda, puedo volver a caminar.' 
                    : 'A esperança é a última coisa que se perde. Com sua ajuda, posso voltar a caminhar.'}"
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-sm text-gray-500">
              {language === 'es' 
                ? '© 2025 Campaña de Ayuda para Cesar. Hecho con ❤️ para una causa noble.' 
                : '© 2025 Campanha de Ajuda para Cesar. Feito com ❤️ para uma causa nobre.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}