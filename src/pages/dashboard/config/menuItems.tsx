import { DashboardRoute } from '~/shared/router';
import { Icon, IconName } from '~/shared/ui';

export const mainMenuItems = [
  {
    text: 'Overview',
    icon: <Icon name={IconName.HomeSmile} />,
    to: DashboardRoute.Overview,
  },
  {
    text: 'Analytics',
    icon: <Icon name={IconName.BarChart} />,
    to: DashboardRoute.Analytics,
  },
  {
    text: 'Ecommerce',
    icon: <Icon name={IconName.LineChartUp} />,
    to: DashboardRoute.Ecommerce,
  },
  {
    text: 'Crypto',
    icon: <Icon name={IconName.CurrencyBitcoin} />,
    to: DashboardRoute.Crypto,
  },
];

export const analyticsMenuItems = [
  {
    text: 'Products',
    icon: <Icon name={IconName.ShoppingBag} />,
    to: DashboardRoute.Products,
  },
  {
    text: 'Orders',
    icon: <Icon name={IconName.ShoppingCart} />,
    to: DashboardRoute.Orders,
  },
  {
    text: 'Invoices',
    icon: <Icon name={IconName.ReceiptCheck} />,
    to: DashboardRoute.Invoices,
  },
  {
    text: 'Logistics',
    icon: <Icon name={IconName.Truck} />,
    to: DashboardRoute.Logistics,
  },
];
