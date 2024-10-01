import { Card, CardHeader, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Helmet } from 'react-helmet-async';

import { AppRoute } from '~/shared/router';
import { Link } from '~/shared/ui';

import { Layout } from './Layout';

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

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 444px;
  min-height: 300px;
  margin: auto;
  border-radius: 16px;
`;
