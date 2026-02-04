import { TimecardData } from '../types';

const CACHE_KEY = 'timecard_data_cache';

export interface CacheEntry {
  id: string;
  data: TimecardData;
  uploadDate: string;
}

export function getCachedData(): CacheEntry[] {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : [];
  } catch (error) {
    console.error('Erro ao carregar cache:', error);
    return [];
  }
}

export function saveToCacheData(data: TimecardData): string {
  const cached = getCachedData();
  const id = generateId(data);
  
  // Verificar se já existe dados para este período
  const existingIndex = cached.findIndex(entry => 
    entry.data.startDate === data.startDate && 
    entry.data.endDate === data.endDate &&
    entry.data.employee === data.employee
  );
  
  const newEntry: CacheEntry = {
    id,
    data,
    uploadDate: new Date().toISOString()
  };
  
  if (existingIndex >= 0) {
    // Atualizar entrada existente
    cached[existingIndex] = newEntry;
  } else {
    // Adicionar nova entrada
    cached.push(newEntry);
  }
  
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cached));
    return id;
  } catch (error) {
    console.error('Erro ao salvar no cache:', error);
    throw new Error('Erro ao salvar dados no cache');
  }
}

export function getCachedDataById(id: string): TimecardData | null {
  const cached = getCachedData();
  const entry = cached.find(entry => entry.id === id);
  return entry ? entry.data : null;
}

export function checkPeriodExists(startDate: string, endDate: string, employee: string): boolean {
  const cached = getCachedData();
  return cached.some(entry => 
    entry.data.startDate === startDate && 
    entry.data.endDate === endDate &&
    entry.data.employee === employee
  );
}

export function deleteCachedData(id: string): void {
  const cached = getCachedData();
  const filtered = cached.filter(entry => entry.id !== id);
  
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Erro ao deletar do cache:', error);
  }
}

export function clearAllCache(): void {
  try {
    localStorage.removeItem(CACHE_KEY);
  } catch (error) {
    console.error('Erro ao limpar cache:', error);
  }
}

function generateId(data: TimecardData): string {
  return `${data.employee}_${data.startDate}_${data.endDate}`.replace(/[^a-zA-Z0-9_]/g, '_');
}