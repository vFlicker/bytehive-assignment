import 'chartjs-adapter-date-fns';

import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { GetApiSalesRevenue200Item } from '~/shared/api';

import { createChartData } from '../config';
import { createChartOptions } from '../config';
import { createCustomLegendMargin } from '../libs';

type SalesRevenueChartProps = {
  className?: string;
  sales: GetApiSalesRevenue200Item[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Filler,
);

export function SalesRevenueChart({
  className,
  sales,
}: SalesRevenueChartProps): JSX.Element {
  const newCustomers = sales.map((item) => item.newCustomers);
  const upCrossSelling = sales.map((item) => item.upCrossSelling);
  const labels = sales.map(({ date }) => {
    return new Date(date).toLocaleString('default', { month: 'short' });
  });

  return (
    <Card className={className}>
      <CardHeader
        title={
          <Typography variant="h6" component="h2" textTransform="capitalize">
            Sales Revenue
          </Typography>
        }
      ></CardHeader>
      <CardContent>
        <Line
          data={createChartData(newCustomers, upCrossSelling)}
          options={createChartOptions(labels)}
          plugins={[createCustomLegendMargin(20)]}
        />
      </CardContent>
    </Card>
  );
}
