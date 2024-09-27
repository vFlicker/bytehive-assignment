import { createBrowserRouter } from 'react-router-dom';

import { DashboardPage } from '~/pages/dashboard';
import { LoginPage } from '~/pages/login';
import { AppRoute } from '~/shared/constants';

export const router = createBrowserRouter([
  {
    path: AppRoute.Dashboard,
    element: <DashboardPage />,
  },
  {
    path: AppRoute.Login,
    element: <LoginPage />,
  },
]);
