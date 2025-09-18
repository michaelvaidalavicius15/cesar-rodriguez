// DonationSection.tsx - Enhanced
'use client';

import React from 'react';
import { DonationCard } from '@/components/DonationCard';
import { Share2, Users, Globe } from 'lucide-react';

interface DonationSectionProps {
  texts: any;
  language: string;
}

export default function DonationSection({ texts, language }: DonationSectionProps) {
  const shareStory = () => {
    const shareData = {
      title: texts.title,
      text: `${texts.sections?.intro?.content?.substring(0, 100) || 'Ayuda a Cesar'}...`,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(language === 'es' ? 'Enlace copiado al portapapeles' : 'Link copiado para a área de transferência');
    }
  };

  return (
    <div className="max-w-7xl mx-auto mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          {language === 'es' ? 'Información para Donaciones' : 'Informações para Doações'}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {language === 'es' 
            ? 'Elige la opción que más te convenga para hacer tu donación' 
            : 'Escolha a opção mais conveniente para fazer sua doação'}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <DonationCard bankInfo={texts.bankInfo?.uruguay} />
        <DonationCard bankInfo={texts.bankInfo?.brazil} />
      </div>

      {/* Enhanced Call to Action */}
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-80"></div>
        <div className="relative p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Share2 className="h-16 w-16 mx-auto mb-6 animate-float" />
            <h3 className="text-3xl font-bold mb-4">
              {language === 'es' ? '¡Comparte mi Historia!' : 'Compartilhe minha História!'}
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              {language === 'es'
                ? 'Si no puedes donar en este momento, puedes ayudarme enormemente compartiendo mi historia. Cada persona que conozca mi caso es una oportunidad más de conseguir el apoyo que necesito.'
                : 'Se não puder doar neste momento, pode me ajudar enormemente compartilhando minha história. Cada pessoa que conhecer meu caso é mais uma oportunidade de conseguir o apoio que preciso.'}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <Users className="h-5 w-5" />
                <span>Comparte en redes sociales</span>
              </div>
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <Globe className="h-5 w-5" />
                <span>Cuenta mi historia</span>
              </div>
            </div>
            
            <button
              onClick={shareStory}
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              {texts.buttons?.share || (language === 'es' ? 'Compartir Historia' : 'Compartilhar História')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}