import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { Layout } from '~/shared/ui';

export function NotFoundPage(): JSX.Element {
  return (
    <Layout>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>

      <Typography variant="h5" component="h1" align="center">
        404 Not Found.
      </Typography>
    </Layout>
  );
}
