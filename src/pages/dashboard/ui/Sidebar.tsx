import {
  BarChart as AnalyticsIcon,
  ChevronRight as ChevronRightIcon,
  CurrencyBitcoin as CryptoIcon,
  Description as DocumentationIcon,
  Home as HomeIcon,
  Inventory as ProductsIcon,
  LocalShipping as LogisticsIcon,
  Receipt as InvoicesIcon,
  ShoppingBasket as OrdersIcon,
  ShoppingCart as EcommerceIcon,
} from '@mui/icons-material';
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

const dashboardMenuItems = [
  { text: 'Overview', icon: <HomeIcon /> },
  { text: 'Analytics', icon: <AnalyticsIcon /> },
  { text: 'Ecommerce', icon: <EcommerceIcon /> },
  { text: 'Crypto', icon: <CryptoIcon /> },
];

const analyticsMenuItems = [
  { text: 'Products', icon: <ProductsIcon /> },
  { text: 'Orders', icon: <OrdersIcon /> },
  { text: 'Invoices', icon: <InvoicesIcon /> },
  { text: 'Logistics', icon: <LogisticsIcon /> },
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
              <ChevronRightIcon />
            </StyledListItemButton>
          ))}
        </List>
      </StyledListsWrapper>

      <Button
        variant="outlined"
        startIcon={<DocumentationIcon />}
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
