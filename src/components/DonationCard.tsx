import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface BankInfo {
  title: string;
  bank: string;
  accountNumber?: string;
  accountHolder: string;
  accountType?: string;
  swift?: string;
  agency?: string;
  ci?: string;
  cpf?: string;
  address?: string;
}

interface DonationCardProps {
  bankInfo: BankInfo;
  isInternational?: boolean;
}

export const DonationCard: React.FC<DonationCardProps> = ({ 
  bankInfo, 
  isInternational = false 
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
      className="ml-2 p-1 hover:bg-gray-100 rounded-md transition-colors"
      title="Copiar"
    >
      {copiedField === fieldName ? (
        <Check className="h-4 w-4 text-green-600" />
      ) : (
        <Copy className="h-4 w-4 text-gray-600" />
      )}
    </button>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        {bankInfo.title}
        {isInternational && (
          <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
            Internacional
          </span>
        )}
      </h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Banco</p>
            <p className="font-semibold text-gray-800">{bankInfo.bank}</p>
          </div>
          <CopyButton text={bankInfo.bank} fieldName="bank" />
        </div>

        {bankInfo.agency && (
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">Agencia</p>
              <p className="font-semibold text-gray-800">{bankInfo.agency}</p>
            </div>
            <CopyButton text={bankInfo.agency} fieldName="agency" />
          </div>
        )}

        {bankInfo.accountNumber && (
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">Número de Cuenta</p>
              <p className="font-semibold text-gray-800">{bankInfo.accountNumber}</p>
            </div>
            <CopyButton text={bankInfo.accountNumber} fieldName="account" />
          </div>
        )}

        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Titular</p>
            <p className="font-semibold text-gray-800">{bankInfo.accountHolder}</p>
          </div>
          <CopyButton text={bankInfo.accountHolder} fieldName="holder" />
        </div>

        {bankInfo.accountType && (
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">Tipo de Cuenta</p>
              <p className="font-semibold text-gray-800">{bankInfo.accountType}</p>
            </div>
            <CopyButton text={bankInfo.accountType} fieldName="type" />
          </div>
        )}

        {bankInfo.swift && (
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">SWIFT</p>
              <p className="font-semibold text-gray-800">{bankInfo.swift}</p>
            </div>
            <CopyButton text={bankInfo.swift} fieldName="swift" />
          </div>
        )}

        {bankInfo.ci && (
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">C.I.</p>
              <p className="font-semibold text-gray-800">{bankInfo.ci}</p>
            </div>
            <CopyButton text={bankInfo.ci} fieldName="ci" />
          </div>
        )}

        {bankInfo.cpf && (
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">CPF</p>
              <p className="font-semibold text-gray-800">{bankInfo.cpf}</p>
            </div>
            <CopyButton text={bankInfo.cpf} fieldName="cpf" />
          </div>
        )}

        {bankInfo.address && (
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">Dirección</p>
              <p className="font-semibold text-gray-800">{bankInfo.address}</p>
            </div>
            <CopyButton text={bankInfo.address} fieldName="address" />
          </div>
        )}
      </div>
    </div>
  );
};