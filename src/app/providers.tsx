import type { Router } from '@remix-run/router/dist/router';
import { RouterProvider } from 'react-router-dom';

type ProvidersProps = {
  router: Router;
};

export function Providers({ router }: ProvidersProps) {
  return <RouterProvider router={router} />;
}
