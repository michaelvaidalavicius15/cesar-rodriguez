// ProgressBar.tsx - Enhanced version
import React from 'react';
import { TrendingUp, Target } from 'lucide-react';

interface ProgressBarProps {
  currentAmount: number;
  goalAmount: number;
  currency?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentAmount,
  goalAmount,
  currency = 'USD',
}) => {
  const percentage = Math.min((currentAmount / goalAmount) * 100, 100);

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="glass-strong rounded-2xl p-6 hover:shadow-2xl transition-all duration-500">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          <Target className="h-6 w-6 mr-2 text-blue-600" />
          Progreso de Donaciones
        </h3>
        <div className="flex items-center space-x-2 glass px-3 py-1 rounded-full">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-2xl font-bold text-blue-600">{percentage.toFixed(1)}%</span>
        </div>
      </div>

      <div className="relative mb-6">
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-shimmer transform skew-x-12 w-1/4"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
          <p className="text-sm text-green-700 font-medium mb-1">Recaudado</p>
          <p className="text-3xl font-bold text-green-600">{formatAmount(currentAmount)}</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
          <p className="text-sm text-blue-700 font-medium mb-1">Objetivo</p>
          <p className="text-3xl font-bold text-blue-600">{formatAmount(goalAmount)}</p>
        </div>
      </div>

      <div className="text-center space-y-2">
        <p className="text-gray-700 text-lg">
          Faltan <span className="font-bold text-red-600">{formatAmount(goalAmount - currentAmount)}</span> para alcanzar el objetivo
        </p>
        <div className="w-full bg-gray-100 rounded-full p-2">
          <p className="text-xs text-gray-500">
            💡 El progreso se actualiza cada 10 días aproximadamente
          </p>
        </div>
      </div>
    </div>
  );
};