export interface TimeEntry {
  date: string;
  dayOfWeek: string;
  entries: string[];
  exits: string[];
  totalWorked: number; // em minutos
  expectedHours: number; // em horas
  balance: number; // em minutos (positivo ou negativo)
  status: 'positive' | 'negative' | 'neutral';
  isComplete: boolean; // se tem todas as entradas e saídas
  isWeekend: boolean; // se é sábado ou domingo (horas extras)
}

export interface TimecardData {
  employee: string;
  period: string;
  startDate: string;
  endDate: string;
  entries: TimeEntry[];
  totalBalance: number; // em minutos
  totalBalanceStatus: 'positive' | 'negative' | 'neutral';
}