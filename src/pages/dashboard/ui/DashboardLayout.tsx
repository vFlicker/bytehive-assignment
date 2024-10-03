import { styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export function DashboardLayout(): JSX.Element {
  return (
    <StyledDashboardLayout>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <Sidebar />
      <StyledDashboardContainer>
        <TopBar />
        <StyledScreenContainer>
          <Outlet />
        </StyledScreenContainer>
      </StyledDashboardContainer>
    </StyledDashboardLayout>
  );
}

const StyledDashboardLayout = styled('div')`
  display: grid;
  grid-template-columns: 280px 1fr;
`;

const StyledDashboardContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

const StyledScreenContainer = styled('main')`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 100px 64px 100px;
`;
