import React from 'react';
import { Target, Users } from 'lucide-react';

interface ProgressBarSectionProps {
  texts: any;
  currentRaised: number;
  goalAmount: number;
  language: string;
}

export default function ProgressBarSection({ texts, currentRaised, goalAmount, language }: ProgressBarSectionProps) {
  const percentage = Math.min((currentRaised / goalAmount) * 100, 100);
  const locale = language === 'es' ? 'es-UY' : 'pt-BR';

  return (
    <div className="mt-20 animate-fadeInUp animation-delay-400">
      <div className="progress-bg-improved p-10 rounded-3xl max-w-4xl mx-auto hover-lift">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-high-contrast flex items-center justify-center mb-4 animate-slideInLeft">
            <Target className="h-8 w-8 mr-3 text-blue-600 animate-pulse" />
            Progreso de la Campaña
          </h3>
          <p className="text-medium-contrast text-lg animate-fadeInUp animation-delay-200">
            {language === 'es' 
              ? 'Cada donación nos acerca más a la meta'
              : 'Cada doação nos aproxima mais da meta'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-center card-high-contrast p-6 rounded-2xl shadow-md hover-lift animate-fadeInUp animation-delay-300">
            <Target className="h-8 w-8 text-blue-600 mx-auto mb-3 animate-bounce" />
            <p className="text-sm text-medium-contrast mb-2">Objetivo</p>
            <p className="text-3xl font-bold text-blue-600">
              ${goalAmount.toLocaleString(locale)} USD
            </p>
          </div>
          
          <div className="text-center card-high-contrast p-6 rounded-2xl shadow-md hover-lift animate-fadeInUp animation-delay-400">
            <Users className="h-8 w-8 text-emerald-500 mx-auto mb-3 animate-bounce" />
            <p className="text-sm text-medium-contrast mb-2">Progreso</p>
            <p className="text-3xl font-bold text-emerald-500">{percentage.toFixed(1)}%</p>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-high-contrast animate-slideInLeft">Progreso de donaciones</span>
            <span className="text-2xl font-bold text-blue-600">
              {percentage.toFixed(1)}%
            </span>
          </div>
          
          {/* BARRA DE PROGRESO MEJORADA */}
          <div className="relative h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner border-2 border-gray-300 dark:border-gray-600">
            {/* Barra de progreso con colores sólidos y visibles */}
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full transition-all duration-2000 ease-out relative overflow-hidden shadow-lg"
              style={{ width: `${percentage}%` }}
            >
              {/* Efecto de brillo más sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer transform skew-x-12 w-1/4"></div>
            </div>
            
            {/* Indicador de porcentaje dentro de la barra si hay espacio */}
            {percentage > 15 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm drop-shadow-lg">
                  {percentage.toFixed(1)}%
                </span>
              </div>
            )}
          </div>
          
          {/* Información adicional debajo de la barra */}
          <div className="flex justify-between items-center mt-3 text-sm text-medium-contrast">
            <span>${currentRaised.toLocaleString(locale)} USD</span>
            <span>${goalAmount.toLocaleString(locale)} USD</span>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <p className="text-xl text-high-contrast animate-fadeInUp animation-delay-500">
            {language === 'es' ? 'Faltan' : 'Faltam'}{' '}
            <span className="font-bold text-red-600">
              ${(goalAmount - currentRaised).toLocaleString(locale)}
            </span>{' '}
            {language === 'es' ? 'para alcanzar el objetivo' : 'para alcançar o objetivo'}
          </p>
          
          <div className="card-high-contrast p-4 rounded-xl animate-fadeInUp animation-delay-600">
            <p className="text-sm text-medium-contrast">
              <strong>{language === 'es' ? 'Nota:' : 'Nota:'}</strong> {language === 'es' 
                ? 'El progreso se actualiza cada 10 días aproximadamente. Tu donación es segura y va directamente a los gastos médicos.'
                : 'O progresso é atualizado aproximadamente a cada 10 dias. Sua doação é segura e vai diretamente para as despesas médicas.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}