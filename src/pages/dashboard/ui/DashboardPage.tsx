import { Link } from 'react-router-dom';

import { AppRoute } from '~/shared/constants';

export function DashboardPage(): JSX.Element {
  return (
    <div>
      <header>
        <Link to={AppRoute.Dashboard}>Logo</Link>
      </header>
      <main>
        <h1>Dashboard</h1>
      </main>
    </div>
  );
}
