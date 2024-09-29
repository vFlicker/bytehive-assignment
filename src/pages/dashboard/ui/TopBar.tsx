import { Notifications as NotificationsIcon } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';

export function TopBar(): JSX.Element {
  return (
    <>
      <StyledAppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Devias
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ ml: 2 }}>JD</Avatar>
        </Toolbar>
      </StyledAppBar>
      <Toolbar /> {/* Fixes the content position */}
    </>
  );
}

const StyledAppBar = styled(AppBar)`
  height: 58px;
`;
