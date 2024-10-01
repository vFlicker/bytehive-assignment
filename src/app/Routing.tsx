import { Route, Routes } from 'react-router-dom';

import { LoginPage, RegisterPage } from '~/pages/auth';
import { DashboardPage } from '~/pages/dashboard';
import { AppRoute } from '~/shared/router';

export function Routing(): JSX.Element {
  return (
    <Routes>
      <Route index path={AppRoute.Dashboard} element={<DashboardPage />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Register} element={<RegisterPage />} />
    </Routes>
  );
}
