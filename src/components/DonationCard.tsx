import React, { useState } from 'react';
import { Copy, Check, CreditCard, Globe, Building } from 'lucide-react';

interface BankInfo {
  title: string;
  bank: string;
  accountNumber?: string;
  accountHolder: string;
  accountType?: string;
  swift?: string;
  agency?: string;
  cpf?: string;
  address?: string;
}

interface DonationCardProps {
  bankInfo: BankInfo;
  isInternational?: boolean;
}

export const DonationCard: React.FC<DonationCardProps> = ({
  bankInfo,
  isInternational = false,
}) => {
  const [copiedField, setCopiedField] = useState<string>('');

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(''), 3000);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  const CopyButton: React.FC<{ text: string; fieldName: string }> = ({ text, fieldName }) => (
    <button
      onClick={() => copyToClipboard(text, fieldName)}
      className="p-2 hover:bg-blue-100 rounded-xl transition-all duration-300 group hover:scale-110"
      title={copiedField === fieldName ? 'Copiado!' : 'Copiar al portapapeles'}
    >
      {copiedField === fieldName ? (
        <Check className="h-5 w-5 text-green-500 animate-pulse" />
      ) : (
        <Copy className="h-5 w-5 text-slate-500 group-hover:text-blue-600" />
      )}
    </button>
  );

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group animate-fadeInUp relative overflow-hidden">
      {/* Background decoration - más sutil */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 via-purple-500/3 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/5 via-purple-500/3 to-transparent rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              {isInternational ? (
                <Globe className="h-7 w-7 text-white" />
              ) : (
                <Building className="h-7 w-7 text-white" />
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">
                {bankInfo.title}
              </h3>
              <p className="text-sm text-slate-600 font-medium">
                {bankInfo.bank}
              </p>
            </div>
          </div>
        </div>

        {/* Bank Details */}
        <div className="space-y-4">
          {[
            { label: 'Banco', value: bankInfo.bank, field: 'bank', icon: Building },
            { label: 'Agencia', value: bankInfo.agency, field: 'agency', icon: Building },
            { label: 'Número de Cuenta', value: bankInfo.accountNumber, field: 'account', icon: CreditCard },
            { label: 'Titular', value: bankInfo.accountHolder, field: 'holder', icon: CreditCard },
            { label: 'Tipo de Cuenta', value: bankInfo.accountType, field: 'type', icon: CreditCard },
            { label: 'SWIFT', value: bankInfo.swift, field: 'swift', icon: Globe },
            { label: 'CPF', value: bankInfo.cpf, field: 'cpf', icon: CreditCard },
            { label: 'Dirección', value: bankInfo.address, field: 'address', icon: Building },
          ].map((item) => 
            item.value ? (
              <div key={item.field} className="flex items-center justify-between bg-slate-50/80 hover:bg-slate-100/80 p-5 rounded-2xl border border-slate-200/40 transition-all duration-300 group-hover:shadow-sm">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <item.icon className="h-4 w-4 text-blue-600 mr-2" />
                    <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide">
                      {item.label}
                    </p>
                  </div>
                  <p className="font-bold text-slate-800 text-lg leading-tight">
                    {item.value}
                  </p>
                </div>
                <CopyButton text={item.value} fieldName={item.field} />
              </div>
            ) : null
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-2xl border border-blue-200/40">
          <p className="text-sm text-blue-800 font-semibold text-center">
            💡 Haga clic en el ícono de copia para copiar la información al portapapeles
          </p>
        </div>
      </div>
    </div>
  );
};