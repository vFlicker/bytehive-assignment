import {
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { lightLogoIcon } from '~/shared/assets';
import { Icon, IconName } from '~/shared/ui';

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

      <StyledNav>
        <StyledMenuListTitle sx={visuallyHidden}>Main list</StyledMenuListTitle>

        <List>
          {dashboardMenuItems.map((item, index) => (
            <StyledListItemButton selected={index === 0} key={item.text}>
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              <StyledListItemText primary={item.text} />
            </StyledListItemButton>
          ))}
        </List>

        <StyledMenuListTitle>Analytics</StyledMenuListTitle>

        <List>
          {analyticsMenuItems.map((item) => (
            <StyledListItemButton key={item.text}>
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              <StyledListItemText primary={item.text} />
              <Icon name={IconName.ChevronRight} />
            </StyledListItemButton>
          ))}
        </List>
      </StyledNav>

      <StyledDocumentationButton
        variant="outlined"
        startIcon={<Icon name={IconName.File} />}
        fullWidth
      >
        Documentation
      </StyledDocumentationButton>
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

const StyledNav = styled('nav')`
  margin-bottom: 20px;
`;

const StyledMenuListTitle = styled(Typography)`
  color: #b5bcc4;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
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

const StyledListItemIcon = styled(ListItemIcon)`
  color: inherit;
  min-width: 40px;
`;

const StyledListItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    font-size: 14px;
    font-weight: 600;
  }
`;

const StyledDocumentationButton = styled(Button)`
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
  text-transform: none;
  border: 1px solid #ffffff;
  border-radius: 20px;

  &:hover {
    border-color: #ffffff;
  }
`;
