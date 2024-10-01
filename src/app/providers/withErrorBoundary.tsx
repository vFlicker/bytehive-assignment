import { ComponentType } from 'react';

import { ErrorPage } from '~/pages/errors';
import { ErrorBoundary } from '~/shared/ui';

export const withErrorBoundary = (Component: ComponentType): React.FC => {
  return () => {
    return (
      <ErrorBoundary errorComponent={<ErrorPage />}>
        <Component />
      </ErrorBoundary>
    );
  };
};
