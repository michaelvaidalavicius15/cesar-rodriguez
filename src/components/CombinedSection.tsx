import React from 'react';
import { Calendar, Globe, Target, Zap } from 'lucide-react';
import Image from 'next/image';

interface CombinedSectionProps {
  texts: any;
  currentRaised: number;
  goalAmount: number;
  language: string; // Add language prop
}

export default function CombinedSection({ texts, currentRaised, goalAmount, language }: CombinedSectionProps) {
  const percentage = Math.min((currentRaised / goalAmount) * 100, 100);
  const locale = language === 'es' ? 'es-UY' : 'pt-BR'; // Set locale based on language

  return (
    <div className="relative mb-16">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8 animate-slideInLeft">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">
                {language === 'es' ? 'Campaña Activa' : 'Campanha Ativa'}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {texts.title}
              </span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2 glass px-3 py-1 rounded-full">
                <Calendar className="h-4 w-4" />
                <span className="font-medium">{texts.age}</span>
              </div>
              <div className="flex items-center space-x-2 glass px-3 py-1 rounded-full">
                <Globe className="h-4 w-4" />
                <span className="font-medium">Montevideo, Uruguay</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
              {texts.sections?.intro?.content?.substring(0, 200) || 
               'Ayúdame a recuperar mi movilidad y vivir sin dolor a través de una cirugía de neuroestimulación.'}...
            </p>
          </div>

          {/* Progress Section */}
          <div className="glass-strong p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Target className="h-5 w-5 mr-2 text-blue-600" />
                Progreso de Donaciones
              </h3>
              <span className="text-2xl font-bold text-blue-600">{percentage.toFixed(1)}%</span>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: `${percentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer transform skew-x-12 w-1/4"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Recaudado</p>
                <p className="text-2xl font-bold text-green-600">
                  ${currentRaised.toLocaleString(locale)}
                </p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Objetivo</p>
                <p className="text-2xl font-bold text-blue-600">
                  ${goalAmount.toLocaleString(locale)}
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-700">
                Faltan{' '}
                <span className="font-bold text-red-600">
                  ${(goalAmount - currentRaised).toLocaleString(locale)}
                </span>{' '}
                para alcanzar el objetivo
              </p>
              <p className="text-xs text-gray-500 mt-2">
                * El progreso se actualiza cada 10 días aproximadamente
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center animate-slideInRight">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative glass-strong p-4 rounded-3xl">
              <div className="w-80 h-96 relative overflow-hidden rounded-2xl">
                <Image
                  src="/cesar.jpg"
                  alt="Foto de Cesar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}