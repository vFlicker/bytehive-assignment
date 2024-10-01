import { CircularProgress, styled } from '@mui/material';

export function Loader(): JSX.Element {
  return (
    <StyledWrapper>
      <CircularProgress />
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
