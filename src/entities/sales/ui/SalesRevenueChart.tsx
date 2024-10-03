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

import { getChartData, getChartOptions } from '../config';
import { initLegendMarginPlugin } from '../libs';

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
          data={getChartData(sales)}
          options={getChartOptions(sales)}
          plugins={[initLegendMarginPlugin(20)]}
        />
      </CardContent>
    </Card>
  );
}
