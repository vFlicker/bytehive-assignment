import { Global } from '@emotion/react';
import type { Router } from '@remix-run/router/dist/router';
import { RouterProvider } from 'react-router-dom';

import { globalFonts, globalNormalize, globalResets } from '../shared/tokens';

type ProvidersProps = {
  router: Router;
};

export function Providers({ router }: ProvidersProps) {
  return (
    <>
      <Global styles={globalNormalize} />
      <Global styles={globalFonts} />
      <Global styles={globalResets} />

      <RouterProvider router={router} />
    </>
  );
}
