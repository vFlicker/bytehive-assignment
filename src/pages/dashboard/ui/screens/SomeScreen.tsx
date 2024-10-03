import { Typography } from '@mui/material';

import { useCurrentRoute } from '../../libs';

export function SomeScreen(): JSX.Element {
  const currentRoute = useCurrentRoute();
  const screenTitle = currentRoute[0].toUpperCase() + currentRoute.slice(1);

  return (
    <Typography variant="h4" component="h1">
      {screenTitle}
    </Typography>
  );
}
