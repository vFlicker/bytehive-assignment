import { styled } from '@mui/material';
import ListItemButton, {
  ListItemButtonProps,
} from '@mui/material/ListItemButton';
import { Link as RouterLink, To } from 'react-router-dom';

type ListItemLinkProps = Omit<ListItemButtonProps, 'component' | 'href'> & {
  to: To;
};

export function ListItemLink({
  to,
  children,
  ...props
}: ListItemLinkProps): JSX.Element {
  return (
    <StyledListItemButton {...props} component={RouterLink} to={to}>
      {children}
    </StyledListItemButton>
  );
}

const StyledListItemButton = styled(ListItemButton)<{
  component: typeof RouterLink;
  to: To;
}>`
  padding: 6px 12px;
  border-radius: 12px;
  color: #b5bcc4;

  svg {
    stroke: #b5bcc4;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }

  svg {
    stroke: #b5bcc4;
  }

  &.Mui-selected {
    color: #ffffff;

    svg {
      stroke: #6366f1;
    }

    background-color: rgba(255, 255, 255, 0.04);

    &:hover {
      background-color: rgba(255, 255, 255, 0.04);
    }
  }
`;
