import { AppBar, Avatar, IconButton, styled, Toolbar } from '@mui/material';

import { useGetUserProfile } from '~/shared/api';
import { Icon, IconName } from '~/shared/ui';

export function TopBar(): JSX.Element {
  const { data: user } = useGetUserProfile();

  return (
    <>
      <StyledAppBar position="fixed" color="transparent" elevation={0}>
        <StyledToolbar>
          <IconButton color="inherit">
            <Icon name={IconName.Bell} />
          </IconButton>
          <p>User email is: {user?.email}</p>
          <Avatar>JD</Avatar>
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
