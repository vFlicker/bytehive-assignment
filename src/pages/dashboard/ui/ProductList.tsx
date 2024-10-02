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

import { useGetApiProducts } from '~/shared/api';
import { Icon, IconName, Loader } from '~/shared/ui';

export function ProductList(): JSX.Element {
  const { data: products, isLoading, isError } = useGetApiProducts();

  if (isLoading) return <Loader />;
  if (isError) throw new Error('Failed to load products');

  return (
    <StyledCard>
      <CardHeader
        title={
          <Typography variant="h6" component="h2" textTransform="capitalize">
            Top selling products
          </Typography>
        }
      />
      <StyledCardContent>
        <List disablePadding>
          {products?.map((product, index) => (
            <StyledListItem
              key={product.id}
              divider={index !== products.length - 1}
            >
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
        </List>
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
  border-radius: 20px;
  box-shadow:
    0px 0px 0px 0.5px rgba(0, 0, 0, 0.03),
    0px 5px 22px 0px rgba(0, 0, 0, 0.04);
`;

const StyledCardContent = styled(CardContent)`
  padding: 0;

  &:last-child {
    padding-bottom: 0;
  }
`;

const StyledListItem = styled(ListItem)`
  display: grid;
  grid-template-columns: 1fr 100px 100px;
  padding: 0;
  border-bottom: 1px solid #f2f4f7;
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
