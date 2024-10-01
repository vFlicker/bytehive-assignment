import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { Layout } from '~/shared/ui';

export function ErrorPage(): JSX.Element {
  return (
    <Layout>
      <Helmet>
        <title>Sorry. Something went wrong.</title>
      </Helmet>

      <Typography variant="h5" component="h1" align="center">
        Sorry. Something went wrong.
      </Typography>
    </Layout>
  );
}
