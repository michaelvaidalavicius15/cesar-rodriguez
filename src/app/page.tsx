'use client';

import React from 'react';
import { Heart, Share2, Globe, MapPin, Calendar } from 'lucide-react';
import { useCountryDetection } from '@/hooks/useCountryDetection';
import { DonationCard } from '@/components/DonationCard';
import { ProgressBar } from '@/components/ProgressBar';
import textsData from '@/data/texts.json';

type Language = keyof typeof textsData;
type Texts = (typeof textsData)[Language];

export default function HomePage() {
  const { language, isBrazil, isUruguay } = useCountryDetection();
  const texts: Texts = textsData[language as Language];

  // Mock data - puedes cambiar estos valores
  const currentRaised = 5420; // Cantidad actual recaudada
  const goalAmount = 30000; // Objetivo

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
      alert('Enlace copiado al portapapeles');
    }
  };

  const getBankInfo = () => {
    if (isBrazil) {
      return texts.bankInfo.brazil;
    } else if (isUruguay) {
      return texts.bankInfo.uruguay;
    } else {
      return texts.bankInfo.other;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <h1 className="text-xl font-bold text-gray-800">Ayuda para Cesar</h1>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{isBrazil ? 'Brasil' : isUruguay ? 'Uruguay' : 'Internacional'}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            {texts.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-lg text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{texts.age}</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Montevideo, Uruguay</span>
            </div>
          </div>
          
          {/* Placeholder para foto */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-sm">Foto de Cesar</p>
                <p className="text-xs">(Insertar imagen aquí)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <ProgressBar 
            currentAmount={currentRaised} 
            goalAmount={goalAmount} 
            currency="USD" 
          />
        </div>

        {/* Story Sections */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid gap-8">
            {Object.entries(texts.sections).map(([key, section]) => (
              <div key={key} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Donation Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Información para donaciones
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Local Bank Info */}
            <DonationCard 
              bankInfo={getBankInfo()}
              isInternational={false}
            />
            
            {/* International Bank Info */}
            {!isUruguay && (
              <DonationCard 
                bankInfo={texts.bankInfo.other}
                isInternational={true}
              />
            )}
            
            {/* Share Card */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg p-6 text-white md:col-span-2">
              <div className="text-center">
                <Share2 className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">¡Comparte mi historia!</h3>
                <p className="mb-6 opacity-90">
                  Si no puedes donar, ayúdame compartiendo mi historia para que llegue a más personas
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

        {/* Medical Images Placeholder */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Documentación médica
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Resonancia Magnética',
              'Tomografía Computarizada',
              'Informe Médico'
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center border-2 border-dashed border-gray-300 mb-4">
                  <div className="text-center text-gray-500">
                    <div className="text-2xl mb-2">🏥</div>
                    <p className="text-xs">{title}</p>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 text-center">{title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Tu ayuda puede cambiar mi vida
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Cada donación me acerca más a recuperar mi movilidad y vivir sin dolor. 
              Tu generosidad puede ser la diferencia entre una vida limitada y una vida plena.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('.donation-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
              >
                {texts.buttons.donate}
              </button>
              <button
                onClick={shareStory}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                {texts.buttons.share}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <p className="text-gray-700 mb-4 leading-relaxed">
              {texts.footer.gratitude}
            </p>
            <p className="text-lg font-semibold text-gray-800">
              {texts.footer.signature}
            </p>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Montevideo, Uruguay</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Campaña activa desde 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>Con esperanza</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}