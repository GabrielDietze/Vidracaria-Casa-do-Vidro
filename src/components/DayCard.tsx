import React from 'react';
import { Clock, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { TimeEntry } from '../types';
import { formatTime, formatTimeSimple } from '../utils/timeCalculator';

interface DayCardProps {
  entry: TimeEntry;
}

export function DayCard({ entry }: DayCardProps) {
  const getStatusColor = () => {
    switch (entry.status) {
      case 'positive':
        return 'border-green-200 bg-green-50';
      case 'negative':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getStatusIcon = () => {
    switch (entry.status) {
      case 'positive':
        return <TrendingUp className="w-5 h-5 text-green-600" />;
      case 'negative':
        return <TrendingDown className="w-5 h-5 text-red-600" />;
      default:
        return <Minus className="w-5 h-5 text-gray-600" />;
    }
  };

  const getBalanceColor = () => {
    switch (entry.status) {
      case 'positive':
        return 'text-green-700 bg-green-100';
      case 'negative':
        return 'text-red-700 bg-red-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  const isIncomplete = entry.entries.length > entry.exits.length;

  return (
    <div className={`rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-md ${getStatusColor()} ${!entry.isComplete ? 'opacity-75' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            {entry.date} - {entry.dayOfWeek}
          </h3>
          {isIncomplete && (
            <span className="inline-block mt-1 px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded-full">
              Dia incompleto (não contabilizado)
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {getStatusIcon()}
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBalanceColor()}`}>
            {formatTime(entry.balance)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-lg p-3 border border-gray-200">
          <div className="flex items-center mb-2">
            <Clock className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Horários</span>
          </div>
          <div className="space-y-1">
            {entry.entries.map((entryTime, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-green-600 font-medium">{entryTime}</span>
                <span className="text-gray-400">→</span>
                <span className="text-red-600 font-medium">
                  {entry.exits[index] || '??:??'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-3 border border-gray-200">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Trabalhado:</span>
              <span className="text-sm font-medium text-gray-900">
                {formatTimeSimple(entry.totalWorked)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Esperado:</span>
              <span className="text-sm font-medium text-gray-900">
                {entry.isWeekend ? 'Horas Extras' : `${entry.expectedHours}h00`}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">
                  {entry.isWeekend ? 'Extras:' : 'Saldo:'}
                </span>
                <span className={`text-sm font-bold ${!entry.isComplete ? 'text-gray-400' : 
                  entry.status === 'positive' ? 'text-green-600' : 
                  entry.status === 'negative' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {entry.isComplete ? (entry.isWeekend ? `+${formatTime(entry.balance)}` : formatTime(entry.balance)) : 'N/A'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}