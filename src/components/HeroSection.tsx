import React from 'react';
import { Calendar, Globe } from 'lucide-react';
import Image from 'next/image';

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
        <div className="relative bg-gray-200 rounded-xl overflow-hidden border-2 border-dashed border-gray-300">
          <Image
            src="/cesar.jpg"
            alt="Foto de Cesar"
            width={200}
            height={300}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}