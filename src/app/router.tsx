import { createBrowserRouter } from 'react-router-dom';

import { LoginPage, RegisterPage } from '~/pages/auth';
import { DashboardPage } from '~/pages/dashboard';
import { AppRoute } from '~/shared/router';

export const router = createBrowserRouter([
  {
    path: AppRoute.Dashboard,
    element: <DashboardPage />,
  },
  {
    path: AppRoute.Login,
    element: <LoginPage />,
  },
  {
    path: AppRoute.Register,
    element: <RegisterPage />,
  },
]);
