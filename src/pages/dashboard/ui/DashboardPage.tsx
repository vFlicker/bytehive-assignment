import { styled } from '@mui/material';

import { Main } from './Main';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export function DashboardPage(): JSX.Element {
  return (
    <StyledDashboardLayout>
      <Sidebar />
      <StyledFoo>
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
