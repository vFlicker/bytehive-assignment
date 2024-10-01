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

import { Icon, IconName } from '~/shared/ui';

const topSellingProducts = [
  {
    name: 'Devias Sunglasses',
    category: 'Accessories',
    sales: 120,
    rank: 1,
    image: '/path/to/sunglasses.jpg',
  },
  {
    name: 'Devias Sport Shoes',
    category: 'Shoes',
    sales: 120,
    rank: 2,
    image: '/path/to/sport-shoes.jpg',
  },
  {
    name: 'Devias Lenses',
    category: 'Lenses',
    sales: 120,
    rank: 3,
    image: '/path/to/lenses.jpg',
  },
  {
    name: 'Devias Casual Shoes',
    category: 'Shoes',
    sales: 120,
    rank: 4,
    image: '/path/to/casual-shoes.jpg',
  },
  {
    name: 'Devias Casual Shoes',
    category: 'Shoes',
    sales: 120,
    rank: 5,
    image: '/path/to/casual-shoes-2.jpg',
  },
  {
    name: 'Devias Headphones',
    category: 'Audio',
    sales: 120,
    rank: 6,
    image: '/path/to/headphones.jpg',
  },
  {
    name: 'Devias Tan Care',
    category: 'Bodycare',
    sales: 120,
    rank: 7,
    image: '/path/to/tan-care.jpg',
  },
  {
    name: 'Devias Body Care',
    category: 'Bodycare',
    sales: 120,
    rank: 8,
    image: '/path/to/body-care.jpg',
  },
];

export function ProductList(): JSX.Element {
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
          {topSellingProducts.map((product, index) => (
            <StyledListItem
              key={index}
              divider={index !== topSellingProducts.length - 1}
            >
              <StyledCell>
                <StyledPersonDetails>
                  <ListItemAvatar>
                    <Avatar src={product.image} alt={product.name} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">
                        {product.name}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="text.secondary">
                        in {product.category}
                      </Typography>
                    }
                  />
                </StyledPersonDetails>
              </StyledCell>
              <StyledCell>
                <StyledPriceWrapper>
                  <Typography variant="subtitle2" color="success.main">
                    {product.sales}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    in sales
                  </Typography>
                </StyledPriceWrapper>
              </StyledCell>
              <StyledCell>
                <StyledPositionChip label={`#${product.rank}`} />
              </StyledCell>
            </StyledListItem>
          ))}
        </List>
        <StyledFooter>
          <StyledButton
            variant="text"
            color="inherit"
            endIcon={<Icon name={IconName.Arrow} />}
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
  grid-template-columns: 1fr 110px 110px;
  padding: 0;
`;

const StyledCell = styled('div')`
  display: flex;
  padding: 10px 16px;
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
