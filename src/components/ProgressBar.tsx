import React from 'react';

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
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">Progreso de donaciones</h3>
          <span className="text-sm text-gray-600">{percentage.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          >
            <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm">
        <div>
          <p className="text-gray-600">Recaudado</p>
          <p className="text-2xl font-bold text-green-600">{formatAmount(currentAmount)}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">Objetivo</p>
          <p className="text-xl font-semibold text-gray-800">{formatAmount(goalAmount)}</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Faltan <span className="font-semibold text-red-600">{formatAmount(goalAmount - currentAmount)}</span> para alcanzar el objetivo
        </p>
      </div>
    </div>
  );
};