import { Route, Routes } from 'react-router-dom';

import { LoginPage, RegisterPage } from '~/pages/auth';
import { DashboardPage } from '~/pages/dashboard';
import { AppRoute } from '~/shared/router';
import { PrivateRoute } from '~/shared/ui';

export function Routing(): JSX.Element {
  return (
    <Routes>
      <Route
        index
        path={AppRoute.Dashboard}
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Register} element={<RegisterPage />} />
    </Routes>
  );
}
