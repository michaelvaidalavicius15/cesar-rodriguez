'use client';

import React, { useState } from 'react';

export default function UpdateProgressPage() {
  const [password, setPassword] = useState('');
  const [currentRaised, setCurrentRaised] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== 'cesar123') {
      setMessage('Contraseña incorrecta');
      return;
    }

    try {
      // In a real app, this would update progress.json via an API or file write
      // For demo, we'll just log the value
      console.log('Updating currentRaised to:', currentRaised);
      setMessage('Progreso actualizado correctamente');
      setCurrentRaised('');
    } catch (error) {
      setMessage('Error al actualizar el progreso');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Actualizar Progreso</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="currentRaised" className="block text-sm font-medium text-gray-700">
              Cantidad Recaudada (USD)
            </label>
            <input
              type="number"
              id="currentRaised"
              value={currentRaised}
              onChange={(e) => setCurrentRaised(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Actualizar
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
}