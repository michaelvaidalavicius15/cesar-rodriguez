'use client';

import React from 'react';
import { Heart, Zap, Target, Star, User, Medal, Calendar, Hop } from 'lucide-react';

const icons = [Heart, Medal, Target, Hop, User, Zap, Star, Calendar];

interface StoryCardProps {
  title: string;
  content: string;
  index: number;
}

export const StoryCard: React.FC<StoryCardProps> = ({ title, content, index }) => {
  const Icon = icons[index % icons.length];
  const isEven = index % 2 === 0;

  return (
    <div 
      className={`glass-story rounded-xl p-6 lg:p-8 hover:shadow-lg hover-lift group animate-fadeInUp relative overflow-hidden border-l-4 border-l-blue-400 ${isEven ? 'animate-slideInLeft' : 'animate-slideInRight'}`} 
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Decoración de fondo más sutil */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-bl from-blue-50 via-purple-25 to-transparent rounded-full opacity-30"></div>
      
      <div className="relative z-10">
        {/* Header con mejor contraste */}
        <div className="flex items-start space-x-4 mb-5">
          <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
            <Icon className="h-6 w-6 text-white drop-shadow-sm" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
              {title}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-20 transition-all duration-300"></div>
          </div>
        </div>
        
        {/* Contenido con mejor tipografía */}
        <div className="mt-6">
          <p className="text-secondary leading-relaxed text-base lg:text-lg group-hover:text-primary transition-colors duration-200 font-medium">
            {content}
          </p>
        </div>

        {/* Indicador de tarjeta interactiva */}
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-200"></div>
      </div>

      {/* Efecto shimmer sutil */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      </div>
    </div>
  );
};