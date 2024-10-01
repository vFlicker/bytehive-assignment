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

type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

export function TopBar(): JSX.Element {
  const { data, isLoading, isError } = useGetUserProfile();
  const user = data as unknown as User; // TODO: fix the type casting

  if (isLoading) return <Loader />;
  if (isError) throw new Error('Failed to load user profile');

  return (
    <>
      <StyledAppBar position="fixed" color="transparent" elevation={0}>
        <StyledToolbar>
          <IconButton color="inherit">
            <Icon name={IconName.Bell} />
          </IconButton>
          <Avatar src={user.avatar} alt={`Avatar of ${user.name}`} />
          <Typography variant="body2" component="span">
            {user.name}
          </Typography>
          <IconButton color="secondary" aria-label="add an alarm">
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
`;

const StyledAppBar = styled(AppBar)`
  background-color: #ffffff;
  height: 58px;
  padding: 0 24px 0 308px;
`;
