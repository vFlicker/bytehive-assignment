import { ComponentType } from 'react';

import { browserHistory } from '~/shared/router';
import { HistoryRouter } from '~/shared/ui';

export const withRouter = (Component: ComponentType) => () => {
  return (
    <HistoryRouter history={browserHistory}>
      <Component />
    </HistoryRouter>
  );
};
