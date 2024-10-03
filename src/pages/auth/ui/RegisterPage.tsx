import { CardHeader, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { tokenStorage } from '~/shared/auth';
import { AppRoute } from '~/shared/router';
import { Layout, Link } from '~/shared/ui';

import { StyledCard } from './styles';

export function RegisterPage(): JSX.Element {
  const navigate = useNavigate();

  const hasToken = tokenStorage.hasToken();

  useEffect(() => {
    if (hasToken) {
      navigate(AppRoute.Root);
    }
  }, [hasToken, navigate]);

  return (
    <Layout>
      <Helmet>
        <title>Register</title>
      </Helmet>

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
    </Layout>
  );
}
