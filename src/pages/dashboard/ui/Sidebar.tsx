import {
  Button,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { lightLogoIcon } from '~/shared/assets';
import { Icon, IconName, ListItemLink } from '~/shared/ui';

import { analyticsMenuItems, mainMenuItems } from '../config';
import { useCurrentRoute } from '../libs';

export function Sidebar(): JSX.Element {
  const currentRoute = useCurrentRoute();

  return (
    <StyledDrawer variant="permanent">
      <StyledLogo src={lightLogoIcon} alt="Devias premium tier logo" />

      <StyledNav>
        <StyledMenuListTitle sx={visuallyHidden}>Main list</StyledMenuListTitle>

        <List>
          {mainMenuItems.map((item) => (
            <ListItemLink
              to={item.to}
              key={item.text}
              selected={item.to === currentRoute}
            >
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              <StyledListItemText primary={item.text} />
            </ListItemLink>
          ))}
        </List>

        <StyledMenuListTitle>Analytics</StyledMenuListTitle>

        <List>
          {analyticsMenuItems.map((item) => (
            <ListItemLink
              to={item.to}
              key={item.text}
              selected={item.to === currentRoute}
            >
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              <StyledListItemText primary={item.text} />
              <Icon name={IconName.ChevronRight} />
            </ListItemLink>
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
