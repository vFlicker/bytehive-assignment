import { Button, styled, Typography } from '@mui/material';

import { TopSellingProductsCard } from '~/entities/product';
import { SalesRevenueChart } from '~/entities/sales/';
import { useGetApiProducts, useGetApiSalesRevenue } from '~/shared/api';
import { Icon, IconName, Loader } from '~/shared/ui';

export function EcommerceScreen(): JSX.Element {
  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useGetApiProducts();

  const {
    data: sales,
    isLoading: isSalesLoading,
    isError: isSalesError,
  } = useGetApiSalesRevenue();

  if (isProductsLoading || isSalesLoading) return <Loader />;
  if (isProductsError || !products) throw new Error('Failed to load products');
  if (isSalesError || !sales)
    throw new Error('Failed to load sales revenue data');

  return (
    <>
      <MainHeader>
        <Typography variant="h4">E-commerce</Typography>

        <Button
          variant="contained"
          startIcon={<Icon name={IconName.Refresh} />}
        >
          Sync Data
        </Button>
      </MainHeader>
      <Ecommerce>
        <StyleSalesRevenueChart sales={sales} />
        <TopSellingProductsCard products={products} />
      </Ecommerce>
    </>
  );
}

const MainHeader = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ecommerce = styled('div')`
  display: flex;
  gap: 32px;
`;

const StyleSalesRevenueChart = styled(SalesRevenueChart)`
  flex-grow: 1;
`;
