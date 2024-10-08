import compose from 'compose-function';

import { withErrorBoundary } from './withErrorBoundary';
import { withHelmet } from './withHelmet';
import { withQueryClient } from './withQueryClient';
import { withRouter } from './withRouter';
import { withTheme } from './withTheme';

export const withProviders = compose(
  withQueryClient,
  withHelmet,
  withRouter,
  withTheme,
  withErrorBoundary,
);
