import React from 'react';
import { ProgressBar } from '@/components/ProgressBar';

interface ProgressSectionProps {
  currentRaised: number;
  goalAmount: number;
}

export default function ProgressSection({ currentRaised, goalAmount }: ProgressSectionProps) {
  return (
    <div className="max-w-2xl mx-auto mb-12">
      <ProgressBar currentAmount={currentRaised} goalAmount={goalAmount} currency="USD" />
      <p className="text-center text-sm text-gray-600 mt-4">
        Nota: El progreso se actualiza aproximadamente cada 10 días.
      </p>
    </div>
  );
}