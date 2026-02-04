import { TimecardData } from '../types';
import { calculateDayBalance, getDayOfWeek, getExpectedHours, getTotalBalanceStatus } from '../utils/timeCalculator';

// Dados extraídos do PDF fornecido
const rawData = [
  { date: '16/09/2025', entries: ['07:48', '13:25'], exits: ['12:05', '18:02'] },
  { date: '17/09/2025', entries: ['08:00', '13:35'], exits: ['12:13', '18:10'] },
  { date: '18/09/2025', entries: ['07:43', '13:36'], exits: ['12:20', '18:04'] },
  { date: '19/09/2025', entries: ['07:51', '13:31'], exits: ['12:14', '18:18'] },
  { date: '22/09/2025', entries: ['07:43', '13:37'], exits: ['12:18', '18:33'] },
  { date: '23/09/2025', entries: ['07:43', '13:55'], exits: ['12:38', '18:03'] },
  { date: '24/09/2025', entries: ['07:45', '13:32'], exits: ['12:08', '17:52'] },
  { date: '25/09/2025', entries: ['07:46', '13:37'], exits: ['12:20'] }, // Dia incompleto
];

export const sampleTimecardData: TimecardData = {
  employee: 'GABRIEL AUGUSTO DIETZE NOVY',
  period: '16/09/2025 a 15/10/2025',
  startDate: '16/09/2025',
  endDate: '15/10/2025',
  entries: rawData.map(day => {
    const dayOfWeek = getDayOfWeek(day.date);
    const expectedHours = getExpectedHours(dayOfWeek);
    const isWeekend = dayOfWeek === 'SAB' || dayOfWeek === 'DOM';
    const { totalWorked, balance, status, isComplete } = calculateDayBalance(
      day.entries,
      day.exits,
      expectedHours,
      isWeekend
    );
    
    return {
      date: day.date,
      dayOfWeek,
      entries: day.entries,
      exits: day.exits,
      totalWorked,
      expectedHours,
      balance,
      status,
      isComplete,
      isWeekend
    };
  }),
  totalBalance: 0,
  totalBalanceStatus: 'neutral'
};

// Calcular saldo total
sampleTimecardData.totalBalance = sampleTimecardData.entries
  .filter(entry => entry.isComplete)
  .reduce((acc, entry) => acc + entry.balance, 0);

sampleTimecardData.totalBalanceStatus = getTotalBalanceStatus(
  sampleTimecardData.totalBalance
);