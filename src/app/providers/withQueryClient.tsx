import { QueryClientProvider } from '@tanstack/react-query';
import { ComponentType } from 'react';

import { queryClient } from '~/shared/api';

export const withQueryClient = (Component: ComponentType) => () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );
};
