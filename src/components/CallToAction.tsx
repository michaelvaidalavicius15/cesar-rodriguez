// CallToAction.tsx - Enhanced
'use client';

import React from 'react';
import { Gift, Share2, Heart, Zap } from 'lucide-react';

interface CallToActionProps {
  texts: any;
}

export default function CallToAction({ texts }: CallToActionProps) {
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
      alert('Enlace copiado al portapapeles');
    }
  };

  const scrollToDonations = () => {
    const donationSection = document.querySelector('.donation-section');
    if (donationSection) {
      donationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto mb-16">
      <div className="relative overflow-hidden rounded-3xl">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-float animation-delay-4000"></div>
        </div>
        
        <div className="relative p-12 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Heart className="h-16 w-16 mx-auto animate-heartbeat text-red-300" />
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Tu Apoyo Puede Cambiar mi Vida
              </h2>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                Cada donación me acerca más a recuperar mi movilidad y vivir sin dolor. 
                Tu generosidad puede ser la diferencia entre una vida limitada y una vida plena.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="glass p-6 rounded-2xl space-y-3">
                <Gift className="h-8 w-8 mx-auto text-yellow-300" />
                <h4 className="font-bold">Dona</h4>
                <p className="text-sm opacity-80">Contribuye directamente a mi tratamiento</p>
              </div>
              <div className="glass p-6 rounded-2xl space-y-3">
                <Share2 className="h-8 w-8 mx-auto text-blue-300" />
                <h4 className="font-bold">Comparte</h4>
                <p className="text-sm opacity-80">Ayuda a que más personas conozcan mi historia</p>
              </div>
              <div className="glass p-6 rounded-2xl space-y-3">
                <Zap className="h-8 w-8 mx-auto text-green-300" />
                <h4 className="font-bold">Impacta</h4>
                <p className="text-sm opacity-80">Tu acción puede cambiar una vida para siempre</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={scrollToDonations}
                className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center space-x-2"
              >
                <Gift className="h-5 w-5" />
                <span>{texts.buttons?.donate || 'Donar Ahora'}</span>
              </button>
              <button
                onClick={shareStory}
                className="glass-strong px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Share2 className="h-5 w-5" />
                <span>{texts.buttons?.share || 'Compartir Historia'}</span>
              </button>
            </div>

            <div className="mt-8 p-6 glass-strong rounded-2xl">
              <p className="text-sm opacity-80 italic">
                "Gracias por tomarte el tiempo de conocer mi historia. Cada gesto de apoyo, 
                por pequeño que sea, significa el mundo para mí y me da esperanza para seguir luchando."
              </p>
              <p className="font-semibold mt-2">- Cesar Maicol Rodriguez Salvia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}