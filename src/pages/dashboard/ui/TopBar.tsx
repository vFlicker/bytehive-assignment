import { AppBar, Avatar, IconButton, styled, Toolbar } from '@mui/material';

import { IconName } from '~/shared/tokens';
import { Icon } from '~/shared/ui';

export function TopBar(): JSX.Element {
  return (
    <>
      <StyledAppBar position="fixed" color="transparent" elevation={0}>
        <StyledToolbar>
          <IconButton color="inherit">
            <Icon name={IconName.Bell} />
          </IconButton>
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
  height: 58px;
  padding: 0 24px 0 284px;
`;
