import { ChartData, ScriptableContext } from 'chart.js';

import { GetApiSalesRevenue200Item } from '~/shared/api';

export const getChartData = (
  sales: GetApiSalesRevenue200Item[],
): ChartData<'line'> => {
  const newCustomers = sales.map((item) => item.newCustomers);
  const upCrossSelling = sales.map((item) => item.upCrossSelling);

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
