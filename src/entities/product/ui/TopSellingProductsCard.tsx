import {
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  styled,
  Typography,
} from '@mui/material';

import { GetApiProducts200Item } from '~/shared/api';
import { Icon, IconName } from '~/shared/ui';

import { TopSellingProductsItem } from './TopSellingProductsItem';

type TopSellingProductsCardProps = {
  className?: string;
  products: GetApiProducts200Item[];
};

export function TopSellingProductsCard({
  className,
  products,
}: TopSellingProductsCardProps): JSX.Element {
  return (
    <StyledCard className={className}>
      <CardHeader
        title={
          <Typography variant="h6" component="h2" textTransform="capitalize">
            Top selling products
          </Typography>
        }
      />
      <StyledCardContent>
        <StyledList>
          {products?.map((product) => (
            <StyledListItem key={product.id} divider>
              <TopSellingProductsItem product={product} />
            </StyledListItem>
          ))}
        </StyledList>
        <StyledFooter>
          <StyledButton
            variant="text"
            endIcon={<Icon name={IconName.ArrowRight} />}
          >
            See all products
          </StyledButton>
        </StyledFooter>
      </StyledCardContent>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  max-width: 443px;
`;

const StyledCardContent = styled(CardContent)`
  padding: 0;

  &:last-child {
    padding-bottom: 0;
  }
`;

const StyledList = styled(List)`
  padding: 0;
`;

const StyledListItem = styled(ListItem)`
  display: block;
  padding: 0;
`;

const StyledFooter = styled('div')`
  padding: 8px 16px;
`;

const StyledButton = styled(Button)`
  color: inherit;
  text-transform: capitalize;
  box-shadow: none;
`;
