'use client';

import React from 'react';
import { DonationCard } from '@/components/DonationCard';
import { Share2 } from 'lucide-react';

interface DonationSectionProps {
  texts: any;
  language: string;
}

export default function DonationSection({ texts, language }: DonationSectionProps) {
  const shareStory = () => {
    const shareData = {
      title: texts.title,
      text: `${texts.sections.intro.content.substring(0, 100)}...`,
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
    <div className="max-w-6xl mx-auto mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {language === 'es' ? 'Información para donaciones' : 'Informações para doações'}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <DonationCard bankInfo={(texts.bankInfo as any).uruguay} isInternational={false} />
        <DonationCard bankInfo={(texts.bankInfo as any).brazil} isInternational={false} />
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg p-6 text-white md:col-span-2">
          <div className="text-center">
            <Share2 className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{language === 'es' ? '¡Comparte mi historia!' : 'Compartilhe minha história!'}</h3>
            <p className="mb-6 opacity-90">
              {language === 'es'
                ? 'Si no puedes donar, ayúdame compartiendo mi historia para que llegue a más personas'
                : 'Se não puder doar, me ajude compartilhando minha história para alcançar mais pessoas'}
            </p>
            <button
              onClick={shareStory}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              {texts.buttons.share}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}