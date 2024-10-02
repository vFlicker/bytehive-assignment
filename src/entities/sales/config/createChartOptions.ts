import { ChartOptions } from 'chart.js';
import { _DeepPartialArray } from 'node_modules/chart.js/dist/types/utils';

type Labels =
  | _DeepPartialArray<string>
  | _DeepPartialArray<string[]>
  | undefined;

export const createChartOptions = (labels: Labels): ChartOptions<'line'> => ({
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
});
