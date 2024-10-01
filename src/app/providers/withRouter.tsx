import { ComponentType } from 'react';

import { browserHistory } from '~/shared/libs';
import { HistoryRouter } from '~/shared/ui';

export const withRouter = (Component: ComponentType) => () => {
  return (
    <HistoryRouter history={browserHistory}>
      <Component />
    </HistoryRouter>
  );
};
