import {
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';

import lightLogoIcon from '~/shared/assets/images/logo-light.svg';
import { IconName } from '~/shared/tokens';
import { Icon } from '~/shared/ui';

const dashboardMenuItems = [
  { text: 'Overview', icon: <Icon name={IconName.HomeSmile} /> },
  { text: 'Analytics', icon: <Icon name={IconName.BarChart} /> },
  { text: 'Ecommerce', icon: <Icon name={IconName.LineChartUp} /> },
  { text: 'Crypto', icon: <Icon name={IconName.CurrencyBitcoin} /> },
];

const analyticsMenuItems = [
  { text: 'Products', icon: <Icon name={IconName.ShoppingBag} /> },
  { text: 'Orders', icon: <Icon name={IconName.ShoppingCart} /> },
  { text: 'Invoices', icon: <Icon name={IconName.ReceiptCheck} /> },
  { text: 'Logistics', icon: <Icon name={IconName.Truck} /> },
];

export function Sidebar(): JSX.Element {
  return (
    <StyledDrawer variant="permanent">
      <StyledLogo src={lightLogoIcon} alt="Devias premium tier logo" />

      <StyledListsWrapper>
        <List component="nav" aria-label="Main list">
          {dashboardMenuItems.map((item, index) => (
            <StyledListItemButton selected={index === 0} key={item.text}>
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <StyledListItemText primary={item.text} />
            </StyledListItemButton>
          ))}
        </List>

        <Typography
          variant="overline"
          sx={{ px: 2, mt: 2, mb: 1, opacity: 0.7 }}
        >
          ANALYTICS
        </Typography>

        <List component="nav" aria-label="Analytics list">
          {analyticsMenuItems.map((item) => (
            <StyledListItemButton key={item.text}>
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <StyledListItemText primary={item.text} />
              <Icon name={IconName.ChevronRight} />
            </StyledListItemButton>
          ))}
        </List>
      </StyledListsWrapper>

      <Button
        variant="outlined"
        startIcon={<Icon name={IconName.File} />}
        fullWidth
        sx={{
          color: 'white',
          borderColor: 'rgba(255, 255, 255, 0.5)',
          '&:hover': {
            borderColor: 'white',
          },
        }}
      >
        Documentation
      </Button>
    </StyledDrawer>
  );
}

const StyledDrawer = styled(Drawer)`
  padding: 0 14px;

  .MuiDrawer-paper {
    width: 280px;
    padding: 24px 14px;
    color: #ffffff;
    background-color: #1c2536;
    border-right: none;
  }
`;

const StyledLogo = styled('img')`
  margin-bottom: 20px;
`;

const StyledListsWrapper = styled(Box)`
  margin-bottom: 20px;
`;

const StyledListItemButton = styled(ListItemButton)`
  padding: 6px 12px;
  border-radius: 12px;
  color: #b5bcc4;

  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }

  &.Mui-selected {
    color: #ffffff;

    .MuiSvgIcon-root {
      color: #6366f1;
    }

    background-color: rgba(255, 255, 255, 0.04);

    &:hover {
      background-color: rgba(255, 255, 255, 0.04);
    }
  }
`;

const StyledListItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    font-size: 14px;
    font-weight: 600;
  }
`;
