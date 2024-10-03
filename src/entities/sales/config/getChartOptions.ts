import { ChartOptions } from 'chart.js';

import { GetApiSalesRevenue200Item } from '~/shared/api';

export const getChartOptions = (
  sales: GetApiSalesRevenue200Item[],
): ChartOptions<'line'> => {
  const labels = sales.map(({ date }) => {
    return new Date(date).toLocaleString('default', { month: 'short' });
  });

  return {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: '#F2F4F7 ',
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
          dash: [5],
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        type: 'category',
        labels,
      },
    },
  };
};
