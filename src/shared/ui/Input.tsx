import { styled, TextField } from '@mui/material';

export const StyledInput = styled(TextField)`
  border: 1px solid #f2f4f7;
  border-radius: 8px;

  &:hover::before {
    border: none;
  }

  &:hover,
  &:active {
    background-color: #ffffff;
  }

  .MuiInputBase-root {
    background-color: #ffffff;
    border: none;

    &::before,
    &::after,
    &:hover:not(.Mui-disabled, .Mui-error):before {
      border-bottom: none;
    }

    &:hover,
    &:active {
      background-color: #ffffff;
    }

    &.Mui-focused {
      background-color: #ffffff;
    }
  }

  & .MuiInputLabel-filled.Mui-focused {
    color: #6c737f;
  }
`;
