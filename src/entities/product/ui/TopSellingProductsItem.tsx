import {
  Avatar,
  Chip,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';

import { GetApiProducts200Item } from '~/shared/api';

type TopSellingProductsItemProps = {
  product: GetApiProducts200Item;
};

export function TopSellingProductsItem({
  product,
}: TopSellingProductsItemProps): JSX.Element {
  return (
    <StyledWrapper>
      <StyledCell>
        <StyledPersonDetails>
          <ListItemAvatar>
            <Avatar src={product.imageUrl} alt={product.title} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="subtitle2">{product.title}</Typography>
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
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 100px 100px;
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
