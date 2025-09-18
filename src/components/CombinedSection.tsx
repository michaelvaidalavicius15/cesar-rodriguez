import React from 'react';
import { Calendar, Globe, Target, Zap, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';

interface CombinedSectionProps {
  texts: any;
  currentRaised: number;
  goalAmount: number;
  language: string;
}

export default function CombinedSection({ texts, currentRaised, goalAmount, language }: CombinedSectionProps) {
  const percentage = Math.min((currentRaised / goalAmount) * 100, 100);
  const locale = language === 'es' ? 'es-UY' : 'pt-BR';

  return (
    <div className="pt-0">
      {/* Hero Section with better spacing */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slideInLeft">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-100 to-blue-100 border border-green-200/50 px-6 py-3 rounded-full shadow-sm">
              <Zap className="h-5 w-5 text-green-600 animate-pulse" />
              <span className="text-sm font-semibold text-green-800">
                {language === 'es' ? 'Campaña Activa' : 'Campanha Ativa'}
              </span>
            </div>
            
            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-enhanced">
                <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {texts.title || 'Ayuda para Cesar'}
                </span>
              </h1>
              
              {/* Subtitle with context */}
              <p className="text-xl lg:text-2xl font-light text-slate-600 leading-relaxed">
                {language === 'es' 
                  ? 'Una nueva oportunidad para caminar'
                  : 'Uma nova oportunidade para caminhar'}
              </p>
            </div>
            
            {/* Info Tags */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2 bg-white/80 border border-slate-200 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="font-semibold text-slate-700">{texts.age || '28 años'}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 border border-slate-200 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm">
                <Globe className="h-4 w-4 text-green-600" />
                <span className="font-semibold text-slate-700">Montevideo, Uruguay</span>
              </div>
            </div>
            
            {/* Complete Description - Fixed to show full text */}
            <div className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                {texts.sections?.intro?.content || 
                 'Necesito tu ayuda para acceder a una cirugía de neuroestimulación que me permita recuperar la movilidad y vivir sin dolor. Tu donación puede cambiar mi vida para siempre.'}
              </p>
              
              {/* Additional context if available */}
              {texts.sections?.situation?.content && (
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  {texts.sections.situation.content}
                </p>
              )}
            </div>
          </div>

          {/* Right Column - Enhanced Image */}
          <div className="flex justify-center animate-slideInRight">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-glow"></div>
              
              {/* Image container */}
              <div className="relative glass-strong p-6 rounded-3xl">
                <div className="w-96 h-[480px] relative overflow-hidden rounded-2xl">
                  <Image
                    src="/cesar.jpg"
                    alt="Foto de Cesar"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Overlay message */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-white/50">
                      <p className="text-slate-800 font-semibold text-sm">
                        "{language === 'es' ? 'Tu apoyo me da esperanza' : 'Seu apoio me dá esperança'}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section - Separated and highlighted */}
        <div className="mt-20 animate-fadeInUp animation-delay-400">
          <div className="glass-progress p-10 rounded-3xl max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-800 flex items-center justify-center mb-4">
                <Target className="h-8 w-8 mr-3 text-blue-600" />
                Progreso de la Campaña
              </h3>
              <p className="text-slate-600 text-lg">
                {language === 'es' 
                  ? 'Cada donación nos acerca más a la meta'
                  : 'Cada doação nos aproxima mais da meta'}
              </p>
            </div>
            
            {/* Progress Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center bg-white/80 p-6 rounded-2xl border border-blue-200/50 shadow-sm">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-slate-600 mb-2">Objetivo</p>
                <p className="text-3xl font-bold text-blue-600">
                  ${goalAmount.toLocaleString(locale)}
                </p>
              </div>
              
              <div className="text-center bg-white/80 p-6 rounded-2xl border border-purple-200/50 shadow-sm">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <p className="text-sm text-slate-600 mb-2">Progreso</p>
                <p className="text-3xl font-bold text-purple-600">{percentage.toFixed(1)}%</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-slate-700">Progreso de donaciones</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {percentage.toFixed(1)}%
                </span>
              </div>
              
              <div className="relative h-6 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
                  style={{ width: `${percentage}%` }}
                >
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer transform skew-x-12 w-1/3"></div>
                </div>
              </div>
            </div>
            
            {/* Summary Info */}
            <div className="text-center space-y-4">
              <p className="text-xl text-slate-700">
                {language === 'es' ? 'Faltan' : 'Faltam'}{' '}
                <span className="font-bold text-red-600">
                  ${(goalAmount - currentRaised).toLocaleString(locale)}
                </span>{' '}
                {language === 'es' ? 'para alcanzar el objetivo' : 'para alcançar o objetivo'}
              </p>
              
              <div className="bg-slate-100/80 p-4 rounded-xl border border-slate-200/50">
                <p className="text-sm text-slate-600">
                  <strong>{language === 'es' ? 'Nota:' : 'Nota:'}</strong> {language === 'es' 
                    ? 'El progreso se actualiza cada 10 días aproximadamente. Tu donación es segura y va directamente a los gastos médicos.'
                    : 'O progresso é atualizado aproximadamente a cada 10 dias. Sua doação é segura e vai diretamente para as despesas médicas.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}