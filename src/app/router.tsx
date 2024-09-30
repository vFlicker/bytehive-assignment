import { createBrowserRouter } from 'react-router-dom';

import { DashboardPage } from '~/pages/dashboard';
import { LoginPage, RegisterPage } from '~/pages/sign-in';
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
