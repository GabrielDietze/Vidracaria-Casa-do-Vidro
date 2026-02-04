import React from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { TimecardData } from '../types';
import { Summary } from './Summary';
import { DayCard } from './DayCard';

interface TimecardAnalysisProps {
  data: TimecardData;
  onBack: () => void;
}

export function TimecardAnalysis({ data, onBack }: TimecardAnalysisProps) {
  const incompleteDays = data.entries.filter(entry => !entry.isComplete);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </button>
          <h1 className="text-3xl font-bold text-gray-900">
            Análise de Cartão de Ponto
          </h1>
        </div>

        <Summary data={data} />

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detalhamento Diário</h2>
          
          {incompleteDays.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-amber-800">
                    Dias incompletos encontrados
                  </h4>
                  <p className="text-sm text-amber-700 mt-1">
                    {incompleteDays.length} dia(s) com registros incompletos não foram contabilizados no saldo total.
                    Apenas dias com todas as entradas e saídas são considerados no cálculo.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid gap-6">
            {data.entries.map((entry, index) => (
              <DayCard key={index} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}