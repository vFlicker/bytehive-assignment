import {
  AppBar,
  Avatar,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';

import { useGetUserProfile } from '~/shared/api';
import { Icon, IconName, Loader } from '~/shared/ui';

export function TopBar(): JSX.Element {
  const { data: user, isLoading, isError } = useGetUserProfile();

  if (isLoading) return <Loader />;
  if (isError || !user) throw new Error('Failed to load user profile');

  return (
    <>
      <StyledAppBar elevation={0}>
        <StyledToolbar>
          <IconButton>
            <Icon name={IconName.Bell} />
          </IconButton>
          <Avatar src={user.avatar} alt={`Avatar of ${user.name}`} />
          <Typography variant="body2" component="span">
            {user.name}
          </Typography>
          <IconButton color="secondary">
            <Icon name={IconName.ArrowDown} />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>
      <Toolbar /> {/* Fixes the content position */}
    </>
  );
}

const StyledToolbar = styled(Toolbar)`
  display: flex;
  gap: 8px;
  align-self: flex-end;
  color: #111927;
`;

const StyledAppBar = styled(AppBar)`
  position: fixed;
  background-color: #ffffff;
  height: 58px;
  padding: 0 24px 0 308px;
`;
