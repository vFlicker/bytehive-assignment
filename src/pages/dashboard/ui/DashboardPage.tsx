import { styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { useGetUserProfile } from '~/shared/api';

import { Main } from './Main';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export function DashboardPage(): JSX.Element {
  const { data: user } = useGetUserProfile();

  return (
    <StyledDashboardLayout>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <Sidebar />
      <StyledFoo>
        <p>User email is: {user?.email}</p>
        <TopBar />
        <Main />
      </StyledFoo>
    </StyledDashboardLayout>
  );
}

const StyledDashboardLayout = styled('div')`
  display: grid;
  grid-template-columns: 280px 1fr;
`;

const StyledFoo = styled('div')`
  display: flex;
  flex-direction: column;
`;
