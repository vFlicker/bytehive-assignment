import { Navigate } from 'react-router-dom';

import { tokenStorage } from '~/shared/auth';
import { AppRoute } from '~/shared/router';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const token = tokenStorage.getToken();
  if (!token) return <Navigate to={AppRoute.Login} />;
  return children;
}
