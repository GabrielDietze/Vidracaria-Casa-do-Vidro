import React, { useState } from 'react';
import { Upload, FileText, AlertCircle, Clock, Trash2 } from 'lucide-react';
import { getCachedData, checkPeriodExists, saveToCacheData, deleteCachedData, CacheEntry } from '../utils/cacheManager';
import { sampleTimecardData } from '../data/sampleData';

interface TimecardUploadProps {
  onDataLoaded: (dataId: string) => void;
}

export function TimecardUpload({ onDataLoaded }: TimecardUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [cachedEntries, setCachedEntries] = useState<CacheEntry[]>(getCachedData());
  const [error, setError] = useState<string>('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files: FileList) => {
    if (files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf') {
        setError('');
        setUploading(true);
        // Simular processamento do PDF
        setTimeout(() => {
          // Verificar se já existe dados para este período
          if (checkPeriodExists(sampleTimecardData.startDate, sampleTimecardData.endDate, sampleTimecardData.employee)) {
            setError('Já existem dados salvos para este período. Use os dados em cache ou delete-os primeiro.');
            setUploading(false);
            return;
          }
          
          try {
            const dataId = saveToCacheData(sampleTimecardData);
            setCachedEntries(getCachedData());
            onDataLoaded(dataId);
          } catch (err) {
            setError('Erro ao salvar dados. Tente novamente.');
          }
          setUploading(false);
        }, 2000);
      } else {
        setError('Por favor, selecione um arquivo PDF válido.');
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const loadSampleData = () => {
    setError('');
    
    // Verificar se já existe dados para este período
    if (checkPeriodExists(sampleTimecardData.startDate, sampleTimecardData.endDate, sampleTimecardData.employee)) {
      setError('Já existem dados salvos para este período. Use os dados em cache ou delete-os primeiro.');
      return;
    }
    
    setUploading(true);
    setTimeout(() => {
      try {
        const dataId = saveToCacheData(sampleTimecardData);
        setCachedEntries(getCachedData());
        onDataLoaded(dataId);
      } catch (err) {
        setError('Erro ao salvar dados. Tente novamente.');
      }
      setUploading(false);
    }, 1000);
  };

  const handleLoadCached = (id: string) => {
    onDataLoaded(id);
  };

  const handleDeleteCached = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    deleteCachedData(id);
    setCachedEntries(getCachedData());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Analisador de Cartão de Ponto
          </h1>
          <p className="text-gray-600">
            Faça upload do seu cartão de ponto em PDF para análise detalhada das horas trabalhadas
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
              dragActive
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {uploading ? (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600">Processando PDF...</p>
              </div>
            ) : (
              <>
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Arraste seu PDF aqui
                </h3>
                <p className="text-gray-600 mb-4">
                  ou clique para selecionar um arquivo
                </p>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileInput}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Selecionar PDF
                </label>
              </>
            )}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-amber-800">
                  Formato suportado
                </h4>
                <p className="text-sm text-amber-700 mt-1">
                  O sistema processa cartões de ponto em PDF com horários de entrada e saída.
                  Jornada configurada: 9h (seg-qui) e 8h (sexta).
                </p>
              </div>
            </div>
          </div>
        </div>

        {cachedEntries.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Dados Salvos ({cachedEntries.length})
            </h3>
            <div className="space-y-3">
              {cachedEntries.map((entry) => (
                <div
                  key={entry.id}
                  onClick={() => handleLoadCached(entry.id)}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <div>
                    <h4 className="font-medium text-gray-900">{entry.data.employee}</h4>
                    <p className="text-sm text-gray-600">{entry.data.period}</p>
                    <p className="text-xs text-gray-500">
                      Enviado em: {new Date(entry.uploadDate).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      entry.data.totalBalanceStatus === 'positive' 
                        ? 'bg-green-100 text-green-800'
                        : entry.data.totalBalanceStatus === 'negative'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {entry.data.totalBalance >= 0 ? '+' : ''}{Math.floor(Math.abs(entry.data.totalBalance) / 60)}h{(Math.abs(entry.data.totalBalance) % 60).toString().padStart(2, '0')}
                    </span>
                    <button
                      onClick={(e) => handleDeleteCached(entry.id, e)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Deletar dados"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={loadSampleData}
            disabled={uploading}
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            Ver Exemplo com Dados do PDF
          </button>
        </div>
      </div>
    </div>
  );
}