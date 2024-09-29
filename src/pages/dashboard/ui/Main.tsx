import { Sync as SyncIcon } from '@mui/icons-material';
import { Button, styled, Typography } from '@mui/material';

export function Main(): JSX.Element {
  return (
    <StyledContainer>
      <Typography variant="h6">E-commerce</Typography>

      <Button variant="contained" startIcon={<SyncIcon />}>
        Sync Data
      </Button>
    </StyledContainer>
  );
}

const StyledContainer = styled('main')`
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 1440px;
  padding: 24px 24px 64px 24px;
`;
