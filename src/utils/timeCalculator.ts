export function parseTime(timeStr: string): number {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

export function formatTime(minutes: number): string {
  const hours = Math.floor(Math.abs(minutes) / 60);
  const mins = Math.abs(minutes) % 60;
  const sign = minutes < 0 ? '-' : '';
  return `${sign}${hours}h${mins.toString().padStart(2, '0')}`;
}

export function formatTimeSimple(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h${mins.toString().padStart(2, '0')}`;
}

export function calculateDayBalance(
  entries: string[],
  exits: string[],
  expectedHours: number,
  isWeekend: boolean = false
): { totalWorked: number; balance: number; status: 'positive' | 'negative' | 'neutral'; isComplete: boolean } {
  const isComplete = entries.length > 0 && entries.length === exits.length;
  let totalMinutes = 0;
  
  if (isComplete) {
    for (let i = 0; i < entries.length; i++) {
      const entryMinutes = parseTime(entries[i]);
      const exitMinutes = parseTime(exits[i]);
      totalMinutes += exitMinutes - entryMinutes;
    }
  }
  
  const expectedMinutes = expectedHours * 60;
  let balance = 0;
  
  if (isComplete) {
    // Para fins de semana, todo tempo trabalhado é considerado extra (positivo)
    balance = isWeekend ? totalMinutes : totalMinutes - expectedMinutes;
  }
  
  let status: 'positive' | 'negative' | 'neutral' = 'neutral';
  if (isComplete) {
    if (balance > 5) status = 'positive';
    else if (balance < -5) status = 'negative';
  }
  
  return { totalWorked: totalMinutes, balance, status, isComplete };
}

export function getTotalBalanceStatus(totalBalance: number): 'positive' | 'negative' | 'neutral' {
  if (totalBalance > 5) return 'positive';
  if (totalBalance < -5) return 'negative';
  return 'neutral';
}

export function getDayOfWeek(dateStr: string): string {
  const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
  // Converter dd/mm/yyyy para yyyy-mm-dd
  const [day, month, year] = dateStr.split('/');
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return days[date.getDay()];
}

export function getExpectedHours(dayOfWeek: string): number {
  // Sexta-feira: 8h, Segunda a Quinta: 9h, Sábado e Domingo: 0h (horas extras)
  if (dayOfWeek === 'SEX') return 8;
  if (dayOfWeek === 'SAB' || dayOfWeek === 'DOM') return 0;
  return 9;
}

export function isWeekendDay(dayOfWeek: string): boolean {
  return dayOfWeek === 'SAB' || dayOfWeek === 'DOM';
}