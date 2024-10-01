import { Button, styled, Typography } from '@mui/material';

import { Icon, IconName } from '~/shared/ui';

// import { ProductList } from './ProductList';
import { SalesRevenueChart } from './SalesRevenueChart';

export function Main(): JSX.Element {
  return (
    <StyledContainer>
      <MainHeader>
        <Typography variant="h4">E-commerce</Typography>

        <Button
          variant="contained"
          startIcon={<Icon name={IconName.Refresh} />}
        >
          Sync Data
        </Button>
      </MainHeader>
      <div>
        <SalesRevenueChart />
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled('main')`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1440px;
  padding: 24px 100px 64px 100px;
`;

const MainHeader = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
