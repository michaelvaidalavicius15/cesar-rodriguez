'use client';

import React, { useState } from 'react';
import { Lock, DollarSign, CheckCircle, AlertCircle, Shield, Eye, EyeOff } from 'lucide-react';

export default function UpdateProgressPage() {
  const [password, setPassword] = useState('');
  const [currentRaised, setCurrentRaised] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const translations = {
    title: 'Panel de Administración',
    subtitle: 'Actualizar progreso de donaciones',
    passwordLabel: 'Contraseña de Administrador',
    passwordPlaceholder: 'Ingrese la contraseña',
    amountLabel: 'Cantidad Recaudada (USD)',
    amountPlaceholder: '0.00',
    submitButton: 'Actualizar Progreso',
    submitting: 'Actualizando...',
    instructionsTitle: 'Instrucciones de Uso',
    instructions: [
      'Ingrese la contraseña de administrador proporcionada',
      'Actualice con la cantidad total recaudada hasta la fecha',
      'El progreso se reflejará inmediatamente en la página principal',
      'Use números decimales para centavos (ej: 150.50)',
    ],
    securityNotice: '🔒 Panel seguro - Solo para administradores autorizados',
    incorrectPassword: 'Contraseña incorrecta',
    invalidAmount: 'Por favor, ingrese una cantidad válida',
    successMessage: 'Progreso actualizado correctamente',
    errorMessage: 'Error al actualizar el progreso',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsSuccess(false);

    if (password !== 'cesar123') {
      setMessage(translations.incorrectPassword);
      setIsLoading(false);
      return;
    }

    if (!currentRaised || isNaN(parseFloat(currentRaised))) {
      setMessage(translations.invalidAmount);
      setIsLoading(false);
      return;
    }

    try {
      // Simulación de API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setMessage(translations.successMessage);
      setIsSuccess(true);
      setCurrentRaised('');
      setPassword('');
    } catch (error) {
      setMessage(`${translations.errorMessage}: ${error instanceof Error ? error.message : 'Error desconocido'}`);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Orbes de fondo mejorados */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-purple-200/25 via-blue-200/15 to-transparent rounded-full blur-2xl animate-float animation-delay-300"></div>
      
      <div className="relative z-10 container mx-auto max-w-md">
        {/* Panel de administración */}
        <div className="glass-admin rounded-2xl p-8 shadow-xl animate-fadeInUp">
          {/* Header mejorado */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg animate-glow">
              <Shield className="h-8 w-8 text-white drop-shadow-sm" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">{translations.title}</h1>
            <p className="text-secondary text-lg">{translations.subtitle}</p>
          </div>

          {/* Formulario mejorado */}
          <div className="space-y-7">
            {/* Campo de contraseña */}
            <div className="space-y-3">
              <label htmlFor="password" className="block text-base font-semibold text-primary flex items-center">
                <Lock className="h-5 w-5 mr-2 text-blue-500" />
                {translations.passwordLabel}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 text-base rounded-xl shadow-sm"
                  placeholder={translations.passwordPlaceholder}
                  required
                />
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Campo de cantidad */}
            <div className="space-y-3">
              <label htmlFor="currentRaised" className="block text-base font-semibold text-primary flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                {translations.amountLabel}
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="currentRaised"
                  value={currentRaised}
                  onChange={(e) => setCurrentRaised(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-base rounded-xl shadow-sm"
                  placeholder={translations.amountPlaceholder}
                  min="0"
                  step="0.01"
                  required
                />
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Botón de envío mejorado */}
            <button
              type="submit"
              disabled={isLoading}
              onClick={handleSubmit}
              className="w-full btn-gradient px-6 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-3 shadow-lg"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>{translations.submitting}</span>
                </>
              ) : (
                <>
                  <CheckCircle className="h-5 w-5" />
                  <span>{translations.submitButton}</span>
                </>
              )}
            </button>
          </div>

          {/* Mensaje de respuesta mejorado */}
          {message && (
            <div className={`mt-8 p-4 rounded-xl flex items-center space-x-3 transition-all duration-300 animate-fadeInUp shadow-sm ${
              isSuccess 
                ? 'notification-success' 
                : 'notification-error'
            }`}>
              {isSuccess ? (
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
              )}
              <p className="font-medium text-base">{message}</p>
            </div>
          )}

          {/* Card de instrucciones mejorada */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 shadow-sm">
            <h3 className="font-bold text-blue-800 mb-4 text-lg flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              {translations.instructionsTitle}
            </h3>
            <ul className="text-blue-700 space-y-3 text-sm">
              {translations.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="font-medium">{instruction}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Aviso de seguridad mejorado */}
          <div className="mt-6 text-center">
            <p className="text-muted text-sm font-medium">{translations.securityNotice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}