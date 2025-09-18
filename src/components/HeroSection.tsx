import React from 'react';
import { Calendar, Globe } from 'lucide-react';

interface HeroSectionProps {
  texts: any;
}

export default function HeroSection({ texts }: HeroSectionProps) {
  return (
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
  );
}