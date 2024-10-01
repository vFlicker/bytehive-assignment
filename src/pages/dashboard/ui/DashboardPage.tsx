import { styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { Main } from './Main';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export function DashboardPage(): JSX.Element {
  return (
    <StyledDashboardLayout>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <Sidebar />
      <DashboardContainer>
        <TopBar />
        <Main />
      </DashboardContainer>
    </StyledDashboardLayout>
  );
}

const StyledDashboardLayout = styled('div')`
  display: grid;
  grid-template-columns: 280px 1fr;
`;

const DashboardContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;
