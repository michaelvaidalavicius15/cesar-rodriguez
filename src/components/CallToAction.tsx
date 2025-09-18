'use client';

import React from 'react';

interface CallToActionProps {
  texts: any;
}

export default function CallToAction({ texts }: CallToActionProps) {
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

  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {texts.sections.impact.title} {/* Updated to a more appropriate title */}
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
  );
}