import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';

import { GetApiProducts200Item } from '~/shared/api';
import { Icon, IconName } from '~/shared/ui';

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
              <StyledCell>
                <StyledPersonDetails>
                  <ListItemAvatar>
                    <Avatar src={product.imageUrl} alt={product.title} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">
                        {product.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="text.secondary">
                        in <StyledCategory>{product.category}</StyledCategory>
                      </Typography>
                    }
                  />
                </StyledPersonDetails>
              </StyledCell>
              <StyledCell>
                <StyledPriceWrapper>
                  <Typography variant="subtitle2" color="success.main">
                    {product.purchasesQuantity}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    in sales
                  </Typography>
                </StyledPriceWrapper>
              </StyledCell>
              <StyledCell>
                <StyledPositionChip label={`#${product.leaderboardPosition}`} />
              </StyledCell>
            </StyledListItem>
          ))}
        </StyledList>
        <StyledFooter>
          <StyledButton
            variant="text"
            color="inherit"
            endIcon={<Icon name={IconName.ArrowRight} />}
          >
            See All Products
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
  display: grid;
  grid-template-columns: 1fr 100px 100px;
  padding: 0;
`;

const StyledCell = styled('div')`
  display: flex;
  padding: 4px 16px;
`;

const StyledPersonDetails = styled('div')`
  display: flex;
  align-items: center;
`;

const StyledPriceWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledCategory = styled('span')`
  text-transform: capitalize;
`;

const StyledPositionChip = styled(Chip)`
  margin-left: auto;
  padding: 6px 10px;
  border-radius: 12px;

  & .MuiChip-label {
    padding: 0;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.16px;
  }
`;

const StyledFooter = styled('div')`
  padding: 8px 16px;
`;

const StyledButton = styled(Button)`
  box-shadow: none;
`;
