import { Box, Typography } from '@mui/material';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Реєстрація компонентів Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'New Customers',
      data: [50, 100, 150, 200, 150, 250, 200, 300, 250, 350, 400, 450],
      borderColor: '#3f51b5',
      backgroundColor: 'rgba(63, 81, 181, 0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Up/Cross-Selling',
      data: [70, 90, 110, 130, 140, 180, 160, 190, 170, 210, 230, 240],
      borderColor: '#e57373',
      backgroundColor: 'rgba(229, 115, 115, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'end' as const,
      labels: {
        usePointStyle: true,
        boxWidth: 8,
        boxHeight: 8,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export function SalesRevenueChart(): JSX.Element {
  return (
    <Box sx={{ padding: 3, backgroundColor: 'white', borderRadius: '12px' }}>
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        Sales Revenue
      </Typography>
      <Line data={data} options={options} />
    </Box>
  );
}
