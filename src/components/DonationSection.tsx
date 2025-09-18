'use client';

import React from 'react';
import { DonationCard } from '@/components/DonationCard';
import { Share2, Users, Globe, Heart, Megaphone } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fadeInUp">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 px-6 py-3 rounded-full shadow-sm mb-6">
          <Heart className="h-5 w-5 text-red-500 animate-heartbeat" />
          <span className="text-sm font-semibold text-blue-800">
            {language === 'es' ? 'Cómo Ayudar' : 'Como Ajudar'}
          </span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          {language === 'es' ? 'Información para Donaciones' : 'Informações para Doações'}
        </h2>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
          {language === 'es' 
            ? 'Cada donación, sin importar el monto, me acerca más a recuperar mi movilidad. Elige la opción que más te convenga para hacer tu aporte.' 
            : 'Cada doação, independentemente do valor, me aproxima mais de recuperar minha mobilidade. Escolha a opção mais conveniente para fazer sua contribuição.'}
        </p>
      </div>

      {/* Donation Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-24">
        <div className="animate-slideInLeft">
          <DonationCard bankInfo={texts.bankInfo?.uruguay} />
        </div>
        <div className="animate-slideInRight animation-delay-200">
          <DonationCard bankInfo={texts.bankInfo?.brazil} isInternational />
        </div>
      </div>

      {/* Share Story Section - Con márgenes mejorados */}
      <div className="mx-6 lg:mx-12">
        <div className="relative overflow-hidden rounded-3xl animate-fadeInUp animation-delay-400 shadow-2xl">
          {/* Background gradients mejorados */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/90 via-purple-500/80 to-transparent"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}