import { ChartData, Point, ScriptableContext } from 'chart.js';

type Data = (number | Point | null)[];

export const createChartData = (
  newCustomers: Data,
  upCrossSelling: Data,
): ChartData<'line'> => {
  return {
    datasets: [
      {
        label: 'New Customers',
        borderColor: '#6366F1',
        borderWidth: 2,
        pointRadius: 0,
        pointBackgroundColor: '#6366F1',
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#E0E0FC');
          gradient.addColorStop(1, '#F7F7FE');
          return gradient;
        },
        fill: 1,
        tension: 0.4,
        data: newCustomers,
      },
      {
        label: 'Up/Cross-Selling',
        borderColor: '#4338CA',
        borderWidth: 2,
        pointRadius: 0,
        pointBackgroundColor: '#4338CA',
        tension: 0.4,
        data: upCrossSelling,
      },
    ],
  };
};
