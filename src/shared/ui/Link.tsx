import MUILink, { LinkProps as MUILinkProps } from '@mui/material/Link';
import { Link as RouterLink, To } from 'react-router-dom';

type LinkProps = Omit<MUILinkProps, 'component' | 'href'> & {
  to: To;
};

export function Link({ to, children, ...props }: LinkProps): JSX.Element {
  return (
    <MUILink {...props} component={RouterLink} to={to}>
      {children}
    </MUILink>
  );
}
