import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Providers } from './providers';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers router={router} />
  </StrictMode>,
);
