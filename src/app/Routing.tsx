import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage, RegisterPage } from '~/pages/auth';
import {
  DashboardLayout,
  EcommerceScreen,
  SomeScreen,
} from '~/pages/dashboard';
import { NotFoundPage } from '~/pages/errors';
import { AppRoute, DashboardRoute } from '~/shared/router';
import { PrivateRoute } from '~/shared/ui';

export function Routing(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<Navigate to={AppRoute.Dashboard} replace />}
      />
      <Route
        path={AppRoute.Dashboard}
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route
          index
          element={<Navigate to={DashboardRoute.Ecommerce} replace />}
        />
        <Route path={DashboardRoute.Ecommerce} element={<EcommerceScreen />} />
        <Route path={DashboardRoute.Analytics} element={<SomeScreen />} />
        <Route path={DashboardRoute.Overview} element={<SomeScreen />} />
        <Route path={DashboardRoute.Crypto} element={<SomeScreen />} />
        <Route path={DashboardRoute.Products} element={<SomeScreen />} />
        <Route path={DashboardRoute.Orders} element={<SomeScreen />} />
        <Route path={DashboardRoute.Invoices} element={<SomeScreen />} />
        <Route path={DashboardRoute.Logistics} element={<SomeScreen />} />
      </Route>
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Register} element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
