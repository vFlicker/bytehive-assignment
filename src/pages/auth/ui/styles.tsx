import { Card, styled } from '@mui/material';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  max-width: 444px;
  min-height: 300px;
  margin: auto;
  border-radius: 16px;
  box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.08);
`;
