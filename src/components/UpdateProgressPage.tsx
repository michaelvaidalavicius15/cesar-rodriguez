// UpdateProgressPage.tsx - Enhanced
'use client';

import React, { useState } from 'react';
import { Lock, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';

export default function UpdateProgressPage() {
  const [password, setPassword] = useState('');
  const [currentRaised, setCurrentRaised] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsSuccess(false);

    if (password !== 'cesar123') {
      setMessage('Contraseña incorrecta');
      setIsLoading(false);
      return;
    }

    if (!currentRaised || isNaN(parseFloat(currentRaised))) {
      setMessage('Por favor, ingrese una cantidad válida');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'cesar',
          password,
          currentRaised: parseFloat(currentRaised),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Progreso actualizado correctamente');
        setIsSuccess(true);
        setCurrentRaised('');
        setPassword('');
      } else {
        setMessage(data.error || 'Error al actualizar el progreso');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Error al actualizar el progreso: ' + (error instanceof Error ? error.message : 'Error desconocido'));
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="glass-strong rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">Actualizar Progreso</h1>
              <p className="text-gray-600 mt-2">Panel de administración</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Contraseña de Administrador
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-gray-800 font-medium"
                    placeholder="Ingrese la contraseña"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="currentRaised" className="block text-sm font-semibold text-gray-700">
                  Cantidad Recaudada (USD)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    id="currentRaised"
                    value={currentRaised}
                    onChange={(e) => setCurrentRaised(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-gray-800 font-medium"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Actualizando...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Actualizar Progreso</span>
                  </>
                )}
              </button>
            </form>

            {message && (
              <div className={`mt-6 p-4 rounded-xl flex items-center space-x-2 ${
                isSuccess 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {isSuccess ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600" />
                )}
                <p className="font-medium">{message}</p>
              </div>
            )}

            <div className="mt-8 p-4 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-blue-800 mb-2">Instrucciones:</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Ingrese la contraseña de administrador</li>
                <li>• Actualice la cantidad total recaudada</li>
                <li>• El progreso se reflejará inmediatamente en la página principal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}