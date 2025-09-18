// DonationCard.tsx - Enhanced version
import React, { useState } from 'react';
import { Copy, Check, CreditCard } from 'lucide-react';

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
      setTimeout(() => setCopiedField(''), 2000);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  const CopyButton: React.FC<{ text: string; fieldName: string }> = ({ text, fieldName }) => (
    <button
      onClick={() => copyToClipboard(text, fieldName)}
      className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300 group"
      title="Copiar"
    >
      {copiedField === fieldName ? (
        <Check className="h-4 w-4 text-green-400" />
      ) : (
        <Copy className="h-4 w-4 text-gray-500 group-hover:text-blue-400" />
      )}
    </button>
  );

  return (
    <div className="glass-strong rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-fadeInUp">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          <CreditCard className="h-6 w-6 mr-2 text-blue-600" />
          {bankInfo.title}
        </h3>
        {isInternational && (
          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
            Internacional
          </span>
        )}
      </div>

      <div className="space-y-3">
        {[
          { label: 'Banco', value: bankInfo.bank, field: 'bank' },
          { label: 'Agencia', value: bankInfo.agency, field: 'agency' },
          { label: 'Número de Cuenta', value: bankInfo.accountNumber, field: 'account' },
          { label: 'Titular', value: bankInfo.accountHolder, field: 'holder' },
          { label: 'Tipo de Cuenta', value: bankInfo.accountType, field: 'type' },
          { label: 'SWIFT', value: bankInfo.swift, field: 'swift' },
          { label: 'CPF', value: bankInfo.cpf, field: 'cpf' },
          { label: 'Dirección', value: bankInfo.address, field: 'address' },
        ].map((item, index) => 
          item.value ? (
            <div key={item.field} className="flex items-center justify-between bg-white/30 p-4 rounded-xl backdrop-blur-sm group-hover:bg-white/40 transition-all duration-300">
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">{item.label}</p>
                <p className="font-semibold text-gray-800 mt-1">{item.value}</p>
              </div>
              <CopyButton text={item.value} fieldName={item.field} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
