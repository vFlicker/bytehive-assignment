import 'chartjs-adapter-date-fns'; // Для роботи з датами

import {
  Card,
  CardContent,
  CardHeader,
  styled,
  Typography,
} from '@mui/material';
import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  Plugin,
  PointElement,
  ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { useGetApiSalesRevenue } from '~/shared/api';
import { GetApiSalesRevenue200Item } from '~/shared/api';
import { Loader } from '~/shared/ui';

const plugin: Plugin<'line'> = {
  id: 'custom_legend_padding',
  beforeInit(chart) {
    if (!chart.legend) return;
    const originalFit = chart.legend.fit;
    chart.legend.fit = function fit() {
      originalFit.bind(chart.legend)();
      this.height += 20;
    };
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Filler,
);

const dataFromServer = [
  {
    id: 1,
    date: '2023-01-01T00:00:00.000Z',
    newCustomers: 50,
    upCrossSelling: 30,
  },
  {
    id: 2,
    date: '2023-02-01T00:00:00.000Z',
    newCustomers: 40,
    upCrossSelling: 25,
  },
  {
    id: 3,
    date: '2023-03-01T00:00:00.000Z',
    newCustomers: 60,
    upCrossSelling: 35,
  },
  {
    id: 4,
    date: '2023-04-01T00:00:00.000Z',
    newCustomers: 55,
    upCrossSelling: 28,
  },
  {
    id: 5,
    date: '2023-05-01T00:00:00.000Z',
    newCustomers: 45,
    upCrossSelling: 32,
  },
  {
    id: 6,
    date: '2023-06-01T00:00:00.000Z',
    newCustomers: 70,
    upCrossSelling: 40,
  },
  {
    id: 7,
    date: '2023-07-01T00:00:00.000Z',
    newCustomers: 65,
    upCrossSelling: 38,
  },
] as const;

const transformDataForChart = (
  data: GetApiSalesRevenue200Item[],
): ChartData<'line'> => {
  return {
    labels: data.map((item) =>
      new Date(item.date).toLocaleString('default', { month: 'short' }),
    ),
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
        data: data.map((item) => item.newCustomers),
      },
      {
        label: 'Up/Cross-Selling',
        borderColor: '#4338CA',
        borderWidth: 2,
        pointRadius: 0,
        pointBackgroundColor: '#4338CA',
        tension: 0.4,
        data: data.map((item) => item.upCrossSelling),
      },
    ],
  };
};

const options: ChartOptions<'line'> = {
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
      labels: dataFromServer.map((item) =>
        new Date(item.date).toLocaleString('default', { month: 'short' }),
      ),
    },
  },
};

type SalesRevenueChartProps = {
  className?: string;
};

export function SalesRevenueChart({
  className,
}: SalesRevenueChartProps): JSX.Element {
  const { data, isLoading, isError } = useGetApiSalesRevenue();

  if (isLoading) return <Loader />;
  if (isError) throw new Error('Failed to load sales revenue data');

  const chartData = transformDataForChart(data as GetApiSalesRevenue200Item[]);

  return (
    <StyledCard className={className}>
      <CardHeader
        title={
          <Typography variant="h6" component="h2" textTransform="capitalize">
            Sales Revenue
          </Typography>
        }
      ></CardHeader>
      <CardContent>
        <Line data={chartData} options={options} plugins={[plugin]} />
      </CardContent>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  border-radius: 20px;
  box-shadow:
    0px 0px 0px 0.5px rgba(0, 0, 0, 0.03),
    0px 5px 22px 0px rgba(0, 0, 0, 0.04);
`;
