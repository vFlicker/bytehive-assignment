import { CardHeader, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { AppRoute } from '~/shared/router';
import { Layout, Link } from '~/shared/ui';

import { StyledCard } from './styles';

export function RegisterPage(): JSX.Element {
  return (
    <Layout>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <Register />
    </Layout>
  );
}

function Register(): JSX.Element {
  return (
    <StyledCard>
      <CardHeader
        title={
          <Typography component="h1" variant="h6">
            Register
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="textSecondary">
            Already have an account?{' '}
            <Link
              variant="subtitle2"
              underline="none"
              color="primary"
              to={AppRoute.Login}
            >
              Login
            </Link>
          </Typography>
        }
      />
    </StyledCard>
  );
}
